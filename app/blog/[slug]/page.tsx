'use client';

import { use, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchPostBySlug,
  fetchAllPosts,
  fetchCategories,
  selectCurrentPost,
  selectAllPosts,
} from '../../../lib/redux/blog';
import type { RootState } from '../../../lib/redux/store';

import Link from 'next/link';
import Image from 'next/image';

import Header from '@/components/header';
import Footer from '@/components/footer';
import BlogBreadcrumb from '@/components/Blog/blog-breadcrumb';
import ShareButtons from '@/components/Blog/share-buttons';
import RelatedPosts from '@/components/Blog/related-posts';
import BackToBlog from '@/components/Blog/back-to-blog';
import BlogCategoriesSidebar from '@/components/Blog/blog-categories-sidebar';
import BlogPopularPosts from '@/components/Blog/blog-popular-posts';
import BlogComments from '@/components/Blog/blog-comments';
import BlogAudioPlayer from '@/components/Blog/blog-audio-player';

export default function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const dispatch = useDispatch();
  const currentPost = useSelector(selectCurrentPost);
  const allPosts = useSelector(selectAllPosts);
  const categories = useSelector((state: RootState) => state.blog.categories);
  const loading = useSelector((state: RootState) => state.blog.loading);
  const error = useSelector((state: RootState) => state.blog.error);

  const { slug } = use(params);

  useEffect(() => {
    dispatch(fetchPostBySlug(slug) as any);

    if (allPosts.length === 0) {
      dispatch(fetchAllPosts() as any);
    }

    if (categories.length === 0) {
      dispatch(fetchCategories() as any);
    }
  }, [slug, dispatch, allPosts.length, categories.length]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="py-20 text-center text-gray-500">Loading blog...</div>
        <Footer />
      </>
    );
  }

  if (error && !currentPost) {
    return (
      <>
        <Header />
        <div className="py-20 text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <Link href="/blog" className="text-blue-600 font-semibold">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  if (!currentPost) return null;

  const relatedPosts = allPosts
    .filter(
      post =>
        post.id !== currentPost.id &&
        post.category === currentPost.category
    )
    .slice(0, 3);

  const publishedDate = new Date(currentPost.date).toLocaleDateString(
    'en-US',
    { month: 'short', day: '2-digit', year: 'numeric' }
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <BlogBreadcrumb post={currentPost} />

      <section className="py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-8">
            <h1 className="text-3xl font-bold mb-4">
              {currentPost.title}
            </h1>

            <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full">
                {currentPost.category}
              </span>
              <span>{publishedDate}</span>
              <ShareButtons
                url={`/blog/${currentPost.slug}`}
                title={currentPost.title}
              />
            </div>

            {/* Featured Image */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6">
              <Image
                src={currentPost.image}
                alt={currentPost.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* 🔊 BLOG AUDIO PLAYER (REUSABLE) */}
            <BlogAudioPlayer htmlContent={currentPost.content} />

            {/* BLOG CONTENT */}
            <article className="prose max-w-none dark:prose-invert">
              <div
                dangerouslySetInnerHTML={{
                  __html: currentPost.content || '',
                }}
              />
            </article>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-4 space-y-6">
            <BlogCategoriesSidebar categories={categories} />
            <BlogPopularPosts posts={allPosts} />
          </div>
        </div>
      </section>

      <RelatedPosts posts={relatedPosts} />

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <BlogComments
            postId={currentPost.id.toString()}
            postSlug={currentPost.slug}
          />
        </div>
      </section>

      <BackToBlog />
      <Footer />
    </div>
  );
}
