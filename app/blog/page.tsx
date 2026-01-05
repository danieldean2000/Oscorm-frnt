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

function BlogPageContent() {
    const dispatch = useDispatch();
    const searchParams = useSearchParams();
    const posts = useSelector(selectAllPosts);
    const categories = useSelector(selectAllCategories);
    const loading = useSelector((state: RootState) => state.blog.loading);
    const categoriesLoading = useSelector((state: RootState) => state.blog.categoriesLoading);
    const error = useSelector((state: RootState) => state.blog.error);

    // Get category and page from URL params
    const categoryFromUrl = searchParams.get('category');
    const pageFromUrl = searchParams.get('page');
    const [activeTab, setActiveTab] = useState(categoryFromUrl || 'All');
    const [currentPage, setCurrentPage] = useState(pageFromUrl ? parseInt(pageFromUrl) : 1);
    const postsPerPage = 9;

    // Fetch posts and categories from API on component mount
    useEffect(() => {
        dispatch(fetchAllPosts() as any);
        dispatch(fetchCategories() as any);
    }, [dispatch]);

    // Update active tab and page when URL param changes
    useEffect(() => {
        if (categoryFromUrl) {
            setActiveTab(categoryFromUrl);
        } else {
            setActiveTab('All');
        }
        
        if (pageFromUrl) {
            setCurrentPage(parseInt(pageFromUrl));
        } else {
            setCurrentPage(1);
        }
    }, [categoryFromUrl, pageFromUrl]);

    // Build categories array with "All" option + dynamic categories
    const categoryNames = ['All', ...categories.map(cat => cat.name)];

    // Filter posts based on active tab
    const filteredPosts = activeTab === 'All'
        ? posts
        : posts.filter(post => post.category === activeTab);

    // Get featured posts (last 3 published posts, most recent first)
    const featuredPosts = posts.length > 0 ? [...posts].slice(-3).reverse() : [];

    // Calculate pagination
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const visiblePosts = filteredPosts.slice(startIndex, endIndex);

    // Reset to page 1 when tab changes
    const handleTabChange = (category: string) => {
        setActiveTab(category);
        setCurrentPage(1);
        // Update URL without page reload
        const url = category === 'All' ? '/blog' : `/blog?category=${encodeURIComponent(category)}`;
        window.history.pushState({}, '', url);
    };

    // Handle page change
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Update URL with page number
        const categoryParam = activeTab === 'All' ? '' : `category=${encodeURIComponent(activeTab)}&`;
        const url = `/blog?${categoryParam}page=${page}`;
        window.history.pushState({}, '', url);
        // Scroll to top of blog grid
        window.scrollTo({ top: 0, behavior: 'smooth' });
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

                    {/* Pagination */}
                    {!loading && filteredPosts.length > postsPerPage && (
                        <div className="flex justify-center items-center gap-2 mt-8 sm:mt-12">
                            {/* Previous Button */}
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors"
                                aria-label="Previous page"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>

                            {/* Page Numbers */}
                            <div className="flex items-center gap-1 sm:gap-2">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                                    // Show first page, last page, current page, and pages around current
                                    const showPage = 
                                        page === 1 || 
                                        page === totalPages || 
                                        (page >= currentPage - 1 && page <= currentPage + 1);
                                    
                                    if (!showPage) {
                                        // Show ellipsis
                                        if (page === currentPage - 2 || page === currentPage + 2) {
                                            return (
                                                <span key={page} className="px-2 text-gray-500 dark:text-gray-400">
                                                    ...
                                                </span>
                                            );
                                        }
                                        return null;
                                    }

                                    return (
                                        <button
                                            key={page}
                                            onClick={() => handlePageChange(page)}
                                            className={`min-w-[40px] px-3 py-2 rounded-lg font-medium cursor-pointer transition-colors ${
                                                currentPage === page
                                                    ? 'bg-[#2563eb] text-white hover:bg-[#1d4ed8]'
                                                    : 'border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                            }`}
                                            aria-label={`Go to page ${page}`}
                                            aria-current={currentPage === page ? 'page' : undefined}
                                        >
                                            {page}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors"
                                aria-label="Next page"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
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
