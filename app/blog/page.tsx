'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts, fetchAllPosts, selectAllCategories, fetchCategories } from '../../lib/redux/blog';
import type { RootState } from '../../lib/redux/store';
import Header from '@/components/header';
import Footer from '@/components/footer';
import BlogHero from '@/components/Blog/blog-hero';
import FeaturedBlogCard from '@/components/Blog/featured-blog-card';
import BlogCard from '@/components/Blog/blog-card';
import CategoryTabs from '@/components/Blog/category-tabs';
import CtaSection from '@/components/Home/cta';
import { Button } from '@/components/ui/button';

function BlogPageContent() {
    const dispatch = useDispatch();
    const searchParams = useSearchParams();
    const posts = useSelector(selectAllPosts);
    const categories = useSelector(selectAllCategories);
    const loading = useSelector((state: RootState) => state.blog.loading);
    const categoriesLoading = useSelector((state: RootState) => state.blog.categoriesLoading);
    const error = useSelector((state: RootState) => state.blog.error);
    
    // Get category from URL params
    const categoryFromUrl = searchParams.get('category');
    const [activeTab, setActiveTab] = useState(categoryFromUrl || 'All');
    const [visibleCount, setVisibleCount] = useState(9);

    // Fetch posts and categories from API on component mount
    useEffect(() => {
        dispatch(fetchAllPosts() as any);
        dispatch(fetchCategories() as any);
    }, [dispatch]);

    // Update active tab when URL param changes
    useEffect(() => {
        if (categoryFromUrl) {
            setActiveTab(categoryFromUrl);
            setVisibleCount(9); // Reset visible count when category changes
        } else {
            setActiveTab('All');
        }
    }, [categoryFromUrl]);

    // Build categories array with "All" option + dynamic categories
    const categoryNames = ['All', ...categories.map(cat => cat.name)];

    // Filter posts based on active tab
    const filteredPosts = activeTab === 'All'
        ? posts
        : posts.filter(post => post.category === activeTab);

    // Get featured posts (last 3 published posts, most recent first)
    const featuredPosts = posts.length > 0 ? [...posts].slice(-3).reverse() : [];

    // Get visible posts based on count
    const visiblePosts = filteredPosts.slice(0, visibleCount);
    const hasMore = visibleCount < filteredPosts.length;

    // Reset visible count when tab changes
    const handleTabChange = (category: string) => {
        setActiveTab(category);
        setVisibleCount(9);
        // Update URL without page reload
        const url = category === 'All' ? '/blog' : `/blog?category=${encodeURIComponent(category)}`;
        window.history.pushState({}, '', url);
    };

    // Load more posts
    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 9);
    };

    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Header />
            
            {/* Hero Section */}
            <div className="w-full px-4 sm:px-6 md:px-8 overflow-x-hidden">
                <BlogHero />
            </div>

            {/* Main Content */}
            <section className="py-12 sm:py-16 md:py-20 w-full overflow-x-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
                    {/* Loading State */}
                    {loading && (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">Loading blog posts...</p>
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="text-center py-12">
                            <p className="text-destructive">Error: {error}</p>
                        </div>
                    )}

                    {/* Featured Blogs */}
                    {!loading && featuredPosts.length > 0 && (
                        <div className="mb-12 sm:mb-16">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 sm:mb-10">
                                Featured Blogs
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                {featuredPosts.map((post) => (
                                    <FeaturedBlogCard key={post.id} post={post} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tab Bar */}
                    {!categoriesLoading && categoryNames.length > 1 && (
                        <CategoryTabs
                            categories={categoryNames}
                            activeTab={activeTab}
                            onTabChange={handleTabChange}
                        />
                    )}

                    {/* Blog Grid */}
                    {!loading && visiblePosts.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                            {visiblePosts.map((post) => (
                                <BlogCard key={post.id} post={post} />
                            ))}
                        </div>
                    )}

                    {/* Empty State */}
                    {!loading && !error && posts.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">No blog posts available yet.</p>
                        </div>
                    )}

                    {/* View More Button */}
                    {hasMore && (
                        <div className="flex justify-center mt-8 sm:mt-12">
                            <Button
                                onClick={handleLoadMore}
                                className="px-8 py-6 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-base rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                            >
                                View More
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
           
                <CtaSection />
        
            <Footer />
        </div>
    );
}

export default function BlogPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-background">
                <Header />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center max-w-2xl mx-auto">
                        <p className="text-muted-foreground">Loading...</p>
                    </div>
                </div>
                <Footer />
            </div>
        }>
            <BlogPageContent />
        </Suspense>
    );
}
