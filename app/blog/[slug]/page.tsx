'use client';

import { use, useEffect, useState } from 'react';
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
import Newsletter from '@/components/news-latter';

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
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

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

  // Share functionality
  const shareUrl = typeof window !== 'undefined' ? window.location.href : `/blog/${currentPost?.slug || ''}`;
  
  const handleShare = (platform: string) => {
    if (!currentPost) return;
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(currentPost.title);

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        setShowShareMenu(false);
        break;
      case 'native':
        if (navigator.share) {
          navigator.share({
            title: currentPost.title,
            text: currentPost.title,
            url: shareUrl,
          }).catch(() => {});
        }
        break;
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm sm:text-base text-muted-foreground">Loading blog post...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Error state
  if (error && !currentPost) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Error Loading Post</h1>
            <p className="text-sm sm:text-base text-destructive mb-6 sm:mb-8 break-words">{error}</p>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sm sm:text-base text-[#2563eb] hover:text-[#1d4ed8] font-semibold transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Not found state
  if (!currentPost) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">Blog Post Not Found</h1>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">The blog post you're looking for doesn't exist.</p>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sm sm:text-base text-[#2563eb] hover:text-[#1d4ed8] font-semibold transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = allPosts
    .filter(
      post =>
        post.id !== currentPost.id &&
        post.category === currentPost.category
    )
    .slice(0, 3);

  // Format dates - matching image format: "Oct 06, 2025"
  const publishedDate = new Date(currentPost.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  // For now, use the same date for updated (backend may not have updated_at field)
  const updatedDate = new Date(currentPost.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb Section - At the top */}
      <BlogBreadcrumb post={currentPost} />

      {/* Article Content */}
      <section className="py-4 sm:py-6 md:py-8 lg:py-12">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
            {/* Left Side - Content (8 columns) */}
            <div className="lg:col-span-8">
              {/* Title and Metadata Section */}
              <div className="mb-4 sm:mb-6">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                  {currentPost.title}
                </h1>
                
                {/* Category Tag, Dates, and Share Buttons */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                  {/* Blue Category Tag */}
                  <span className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-[#2563eb] text-white rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                    {currentPost.category}
                  </span>
                  
                  {/* Calendar Icon with Dates */}
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm text-muted-foreground flex-wrap">
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" className="text-muted-foreground flex-shrink-0 sm:w-[14px] sm:h-[14px]">
                      <path d="M17 3H3C1.89543 3 1 3.89543 1 5V15C1 16.1046 1.89543 17 3 17H17C18.1046 17 19 16.1046 19 15V5C19 3.89543 18.1046 3 17 3Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M1 7H19M5 1V5M15 1V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="break-words sm:whitespace-nowrap">Published: {publishedDate}, Updated on: {updatedDate}</span>
                  </div>
                  
                  {/* Share Buttons */}
                  <div className="w-full sm:w-auto sm:ml-auto flex-shrink-0">
                    <ShareButtons url={`/blog/${currentPost.slug}`} title={currentPost.title} />
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative w-full rounded-lg sm:rounded-xl overflow-hidden mb-6 sm:mb-8 bg-gray-200">
                <div className="relative w-full aspect-video min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px]">
                  <Image
                    src={currentPost.image}
                    alt={currentPost.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 66vw, 800px"
                    priority
                  />
                </div>
              </div>

              {/* 🔊 BLOG AUDIO PLAYER (REUSABLE) */}
              <BlogAudioPlayer htmlContent={currentPost.content} />

              {/* Article Content */}
              <article className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-sm border border-border">
                <div
                  className="
                    prose 
                    prose-sm
                    sm:prose-base
                    md:prose-lg 
                    max-w-none
                    prose-h1:text-2xl
                    sm:prose-h1:text-3xl
                    md:prose-h1:text-4xl
                    prose-h2:text-xl
                    sm:prose-h2:text-2xl
                    md:prose-h2:text-3xl
                    prose-h3:text-lg
                    sm:prose-h3:text-xl
                    md:prose-h3:text-2xl
                    prose-p:leading-relaxed
                    prose-a:text-blue-600
                    prose-img:rounded-lg
                    prose-img:w-full
                    dark:prose-invert
                  "
                  dangerouslySetInnerHTML={{ __html: currentPost.content || '' }}
                />
              </article>
            </div>

            {/* Right Side - Sidebar (4 columns) */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-6 space-y-4 sm:space-y-5 md:space-y-6">
                {/* Categories Sidebar */}
                <BlogCategoriesSidebar categories={categories} />

                {/* Popular Posts Sidebar */}
                <BlogPopularPosts posts={allPosts} />

                {/* Author Card */}
                <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-border">
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">Author</h3>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#2563eb] to-[#00D4AA] flex items-center justify-center text-white text-lg sm:text-xl font-bold flex-shrink-0">
                      {currentPost.author?.name?.charAt(0).toUpperCase() || 'A'}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-foreground text-sm sm:text-base truncate">
                        {currentPost.author?.name || 'Anonymous'}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                        {currentPost.author?.bio || 'Blog author'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tags Card */}
                {currentPost.tags && currentPost.tags.length > 0 && (
                  <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-border">
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {currentPost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <RelatedPosts posts={relatedPosts} />

      {/* Comment Section - Below Related Articles */}
      <section className="py-4 sm:py-6 md:py-8 lg:py-12">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <BlogComments postId={currentPost.id.toString()} postSlug={currentPost.slug} />
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <BackToBlog />
      
      {/* Fixed Share Button - Left Side Center */}
      {currentPost && (
        <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
          <div className="relative flex flex-col items-center gap-3">
            {/* Share Button */}
            <button
              onClick={() => {
                if (typeof navigator !== 'undefined' && 'share' in navigator) {
                  handleShare('native');
                } else {
                  setShowShareMenu(!showShareMenu);
                }
              }}
              onMouseEnter={() => setShowShareMenu(true)}
              onMouseLeave={() => setShowShareMenu(false)}
              className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#2563eb] to-[#00D4AA] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Share this post"
              title="Share this post"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${showShareMenu ? 'rotate-12' : ''}`}
              >
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  Copied!
                </span>
              )}
            </button>
            
            {/* Share Options Dropdown */}
            <div 
              className={`absolute left-full ml-3 flex flex-col gap-2 transition-all duration-300 ${
                showShareMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              onMouseEnter={() => setShowShareMenu(true)}
              onMouseLeave={() => setShowShareMenu(false)}
            >
              <button
                onClick={() => {
                  handleShare('facebook');
                  setShowShareMenu(false);
                }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Share on Facebook"
                title="Share on Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button
                onClick={() => {
                  handleShare('twitter');
                  setShowShareMenu(false);
                }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-gray-800 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Share on X"
                title="Share on X"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
              <button
                onClick={() => {
                  handleShare('linkedin');
                  setShowShareMenu(false);
                }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0077B5] hover:bg-[#006399] text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Share on LinkedIn"
                title="Share on LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
              <button
                onClick={() => handleShare('copy')}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 hover:bg-gray-700 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Copy link"
                title="Copy link"
              >
                {copied ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
      <Newsletter />
      <Footer />
    </div>
  );
}
