'use client';

import { use, useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostBySlug, fetchAllPosts, fetchCategories, selectCurrentPost, selectAllPosts } from '../../../lib/redux/blog';
import type { RootState } from '../../../lib/redux/store';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import BlogBreadcrumb from '@/components/Blog/blog-breadcrumb';
import ShareButtons from '@/components/Blog/share-buttons';
import RelatedPosts from '@/components/Blog/related-posts';
import BackToBlog from '@/components/Blog/back-to-blog';
import BlogCategoriesSidebar from '@/components/Blog/blog-categories-sidebar';
import BlogPopularPosts from '@/components/Blog/blog-popular-posts';
import BlogComments from '@/components/Blog/blog-comments';
import Image from 'next/image';

export default function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const dispatch = useDispatch();
    const currentPost = useSelector(selectCurrentPost);
    const allPosts = useSelector(selectAllPosts);
    const categories = useSelector((state: RootState) => state.blog.categories);
    const loading = useSelector((state: RootState) => state.blog.loading);
    const error = useSelector((state: RootState) => state.blog.error);
    const [showShareMenu, setShowShareMenu] = useState(false);
    const [copied, setCopied] = useState(false);
    
    // Audio/TTS states
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isLoadingAudio, setIsLoadingAudio] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [totalDuration, setTotalDuration] = useState(0);
    const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);
    const isSpeakingRef = useRef(false);
    const startTimeRef = useRef<number>(0);
    const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const textContentRef = useRef<string>('');
    const currentTextPositionRef = useRef<number>(0);

    // Unwrap the params Promise
    const { slug } = use(params);

    useEffect(() => {
        // Fetch post by slug from API
        dispatch(fetchPostBySlug(slug) as any);
        // Also fetch all posts for related posts and popular posts
        if (allPosts.length === 0) {
            dispatch(fetchAllPosts() as any);
        }
        // Fetch categories for sidebar
        if (categories.length === 0) {
            dispatch(fetchCategories() as any);
        }
    }, [slug, dispatch, allPosts.length, categories.length]);

    // Cleanup speech when component unmounts or slug changes
    useEffect(() => {
        return () => {
            if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                window.speechSynthesis.cancel();
            }
            setIsPlaying(false);
            setIsPaused(false);
            isSpeakingRef.current = false;
            if (progressIntervalRef.current) {
                clearInterval(progressIntervalRef.current);
                progressIntervalRef.current = null;
            }
        };
    }, [slug]);

    // Stop audio when currentPost changes
    useEffect(() => {
        if (currentPost && typeof window !== 'undefined' && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            setIsPlaying(false);
            setIsPaused(false);
            isSpeakingRef.current = false;
            speechSynthesisRef.current = null;
            setCurrentTime(0);
            textContentRef.current = '';
            currentTextPositionRef.current = 0;
            if (progressIntervalRef.current) {
                clearInterval(progressIntervalRef.current);
                progressIntervalRef.current = null;
            }
        }
    }, [currentPost?.id]);

    // Extract plain text from HTML content
    const extractTextFromHTML = (html: string): string => {
        if (typeof window === 'undefined') return '';
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || '';
    };

    // Calculate estimated duration based on text length (average reading speed: 150 words/min)
    const calculateDuration = (text: string): number => {
        const words = text.split(/\s+/).length;
        const wordsPerMinute = 150;
        const minutes = words / wordsPerMinute;
        return Math.ceil(minutes * 60); // Return in seconds
    };

    // Format time as MM:SS
    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    // Initialize and play audio
    const handlePlayAudio = (startFromTime: number = 0) => {
        if (!currentPost || typeof window === 'undefined' || !('speechSynthesis' in window)) {
            console.log('Speech synthesis not available');
            return;
        }

        let textContent = textContentRef.current;
        if (!textContent) {
            textContent = extractTextFromHTML(currentPost.content || '');
            textContentRef.current = textContent;
        }
        
        if (!textContent.trim()) {
            console.log('No text content to play');
            return;
        }

        // Reset speech synthesis queue to avoid errors
        try {
            window.speechSynthesis.cancel();
            // Small delay to ensure cancellation is processed
            setTimeout(() => {
                // Clear any existing intervals
                if (progressIntervalRef.current) {
                    clearInterval(progressIntervalRef.current);
                    progressIntervalRef.current = null;
                }

                setIsLoadingAudio(true);
                
                // Calculate text position based on time (approximate)
                // Average reading speed: 150 words/min = 2.5 words/sec
                const wordsPerSecond = 2.5;
                const wordsToSkip = Math.floor(startFromTime * wordsPerSecond);
                const words = textContent.split(/\s+/);
                const textToSpeak = words.slice(wordsToSkip).join(' ');
                
                if (!textToSpeak.trim()) {
                    setIsLoadingAudio(false);
                    setIsPlaying(false);
                    setCurrentTime(totalDuration);
                    return;
                }
                
                currentTextPositionRef.current = wordsToSkip;

                // Create new speech utterance
                const utterance = new SpeechSynthesisUtterance(textToSpeak);
                utterance.lang = 'en-US';
                utterance.rate = 1.0;
                utterance.pitch = 1.0;
                utterance.volume = isMuted ? 0 : 1;

                // Calculate and set total duration
                const duration = calculateDuration(textContent);
                setTotalDuration(duration);
                setCurrentTime(startFromTime);
                startTimeRef.current = Date.now() - (startFromTime * 1000);

                // Store utterance reference
                speechSynthesisRef.current = utterance;

                // Event handlers
                utterance.onstart = () => {
                    setIsPlaying(true);
                    setIsPaused(false);
                    isSpeakingRef.current = true;
                    setIsLoadingAudio(false);
                    startTimeRef.current = Date.now() - (startFromTime * 1000);
                    
                    // Clear any existing interval
                    if (progressIntervalRef.current) {
                        clearInterval(progressIntervalRef.current);
                    }
                    
                    // Start progress tracking
                    progressIntervalRef.current = setInterval(() => {
                        setCurrentTime((prevTime) => {
                            const elapsed = (Date.now() - startTimeRef.current) / 1000;
                            const newTime = Math.min(elapsed + startFromTime, duration);
                            return newTime;
                        });
                    }, 100);
                };

                utterance.onend = () => {
                    setIsPlaying(false);
                    setIsPaused(false);
                    isSpeakingRef.current = false;
                    speechSynthesisRef.current = null;
                    setCurrentTime(totalDuration); // Set to end time
                    if (progressIntervalRef.current) {
                        clearInterval(progressIntervalRef.current);
                        progressIntervalRef.current = null;
                    }
                };

                utterance.onerror = (event: SpeechSynthesisErrorEvent) => {
                    // Handle different error types
                    const errorType = event.error || 'unknown';
                    
                    // Don't log if it's just an interruption
                    if (errorType !== 'interrupted' && errorType !== 'canceled') {
                        console.warn('Speech synthesis error:', errorType);
                    }
                    
                    setIsPlaying(false);
                    setIsPaused(false);
                    isSpeakingRef.current = false;
                    setIsLoadingAudio(false);
                    speechSynthesisRef.current = null;
                    
                    if (progressIntervalRef.current) {
                        clearInterval(progressIntervalRef.current);
                        progressIntervalRef.current = null;
                    }
                    
                    // Reset speech synthesis if there's a serious error
                    if (errorType === 'synthesis-failed' || errorType === 'synthesis-unavailable') {
                        window.speechSynthesis.cancel();
                    }
                };

                // Speak the utterance with error handling
                try {
                    window.speechSynthesis.speak(utterance);
                } catch (error) {
                    console.error('Error speaking:', error);
                    setIsLoadingAudio(false);
                    setIsPlaying(false);
                    speechSynthesisRef.current = null;
                }
            }, 50);
        } catch (error) {
            console.error('Error initializing speech:', error);
            setIsLoadingAudio(false);
            setIsPlaying(false);
        }
    };

    // Pause audio
    const handlePauseAudio = () => {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            try {
                if (isPlaying && !isPaused) {
                    // Pause
                    window.speechSynthesis.pause();
                    setIsPaused(true);
                    // Stop progress tracking
                    if (progressIntervalRef.current) {
                        clearInterval(progressIntervalRef.current);
                        progressIntervalRef.current = null;
                    }
                } else if (isPaused && isPlaying) {
                    // Resume
                    window.speechSynthesis.resume();
                    setIsPaused(false);
                    // Adjust start time to account for paused time
                    startTimeRef.current = Date.now() - (currentTime * 1000);
                    // Resume progress tracking
                    if (progressIntervalRef.current) {
                        clearInterval(progressIntervalRef.current);
                    }
                    progressIntervalRef.current = setInterval(() => {
                        setCurrentTime((prevTime) => {
                            const elapsed = (Date.now() - startTimeRef.current) / 1000;
                            const newTime = Math.min(elapsed, totalDuration);
                            return newTime;
                        });
                    }, 100);
                }
            } catch (error) {
                console.error('Error pausing/resuming:', error);
            }
        }
    };

    // Stop audio
    const handleStopAudio = () => {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            try {
                window.speechSynthesis.cancel();
                setIsPlaying(false);
                setIsPaused(false);
                isSpeakingRef.current = false;
                speechSynthesisRef.current = null;
                setCurrentTime(0);
                // Clear progress interval
                if (progressIntervalRef.current) {
                    clearInterval(progressIntervalRef.current);
                    progressIntervalRef.current = null;
                }
            } catch (error) {
                console.error('Error stopping audio:', error);
            }
        }
    };

    // Rewind 15 seconds
    const handleRewind = () => {
        if (currentTime > 0) {
            const wasPlaying = isPlaying;
            const wasPaused = isPaused;
            const newTime = Math.max(0, currentTime - 15);
            
            // Stop current playback
            if (wasPlaying) {
                window.speechSynthesis.cancel();
                if (progressIntervalRef.current) {
                    clearInterval(progressIntervalRef.current);
                    progressIntervalRef.current = null;
                }
            }
            
            // Update time immediately
            setCurrentTime(newTime);
            startTimeRef.current = Date.now() - (newTime * 1000);
            
            // If was playing, restart from new position
            if (wasPlaying) {
                setIsPlaying(false);
                setIsPaused(false);
                setTimeout(() => {
                    handlePlayAudio(newTime);
                    if (wasPaused) {
                        setTimeout(() => {
                            handlePauseAudio();
                        }, 100);
                    }
                }, 200);
            }
        }
    };

    // Fast forward 15 seconds
    const handleFastForward = () => {
        if (currentTime < totalDuration) {
            const wasPlaying = isPlaying;
            const wasPaused = isPaused;
            const newTime = Math.min(totalDuration, currentTime + 15);
            
            // Stop current playback
            if (wasPlaying) {
                window.speechSynthesis.cancel();
                if (progressIntervalRef.current) {
                    clearInterval(progressIntervalRef.current);
                    progressIntervalRef.current = null;
                }
            }
            
            // Update time immediately
            setCurrentTime(newTime);
            startTimeRef.current = Date.now() - (newTime * 1000);
            
            // If was playing, restart from new position
            if (wasPlaying) {
                setIsPlaying(false);
                setIsPaused(false);
                setTimeout(() => {
                    handlePlayAudio(newTime);
                    if (wasPaused) {
                        setTimeout(() => {
                            handlePauseAudio();
                        }, 100);
                    }
                }, 200);
            }
        }
    };

    // Toggle mute
    const handleToggleMute = () => {
        if (speechSynthesisRef.current) {
            const newMutedState = !isMuted;
            setIsMuted(newMutedState);
            speechSynthesisRef.current.volume = newMutedState ? 0 : 1;
        } else {
            setIsMuted(!isMuted);
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

    // Get related posts (excluding current post)
    const relatedPosts = allPosts
        .filter(post => post.id !== currentPost.id && post.category === currentPost.category)
        .slice(0, 3);

    // Format dates - matching image format: "Oct 06, 2025"
    const publishedDate = new Date(currentPost.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    // For now, use the same date for updated (backend may not have updated_at field)
    const updatedDate = new Date(currentPost.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

    // Share functionality
    const shareUrl = typeof window !== 'undefined' ? window.location.href : `/blog/${currentPost.slug}`;
    
    const handleShare = (platform: string) => {
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

                            {/* Horizontal Audio Player - Compact & Website Colors */}
                            <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-2 sm:p-2.5 mb-4 sm:mb-6 shadow-sm border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    {/* Rewind Button (15s) */}
                                    <button
                                        onClick={handleRewind}
                                        disabled={currentTime === 0}
                                        className="relative flex flex-col items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                        aria-label="Rewind 15 seconds"
                                        title="Rewind 15 seconds"
                                    >
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mb-0.5">
                                            <polygon points="11 19 2 12 11 5 11 19"></polygon>
                                            <polygon points="22 19 13 12 22 5 22 19"></polygon>
                                        </svg>
                                        <span className="text-[7px] font-semibold leading-none">15</span>
                                    </button>

                                    {/* Play/Pause Button - Website Blue */}
                                    <button
                                        onClick={() => {
                                            if (!isPlaying) {
                                                handlePlayAudio();
                                            } else if (isPaused) {
                                                handlePauseAudio();
                                            } else {
                                                handlePauseAudio();
                                            }
                                        }}
                                        disabled={isLoadingAudio}
                                        className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#2563eb] text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                        aria-label={isPlaying && !isPaused ? "Pause audio" : "Play audio"}
                                        title={isPlaying && !isPaused ? "Pause audio" : "Play audio"}
                                    >
                                        {isLoadingAudio ? (
                                            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        ) : isPlaying && !isPaused ? (
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"></path>
                                            </svg>
                                        ) : (
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
                                                <path d="M8 5v14l11-7z"></path>
                                            </svg>
                                        )}
                                    </button>

                                    {/* Fast Forward Button (15s) */}
                                    <button
                                        onClick={handleFastForward}
                                        disabled={currentTime >= totalDuration || totalDuration === 0}
                                        className="relative flex flex-col items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                        aria-label="Fast forward 15 seconds"
                                        title="Fast forward 15 seconds"
                                    >
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mb-0.5">
                                            <polygon points="13 19 22 12 13 5 13 19"></polygon>
                                            <polygon points="2 19 11 12 2 5 2 19"></polygon>
                                        </svg>
                                        <span className="text-[7px] font-semibold leading-none">15</span>
                                    </button>

                                    {/* Progress Bar */}
                                    <div className="flex-1 mx-1.5 sm:mx-2">
                                        <div className="relative h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#2563eb] to-[#00D4AA] rounded-full transition-all duration-300"
                                                style={{
                                                    width: totalDuration > 0 ? `${(currentTime / totalDuration) * 100}%` : '0%'
                                                }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Time Display */}
                                    <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 whitespace-nowrap min-w-[55px] sm:min-w-[65px] text-right">
                                        {formatTime(currentTime)} / {formatTime(totalDuration || 0)}
                                    </div>

                                    {/* Volume/Mute Button */}
                                    <button
                                        onClick={handleToggleMute}
                                        className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-all duration-200 hover:scale-105 active:scale-95"
                                        aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                                        title={isMuted ? "Unmute audio" : "Mute audio"}
                                    >
                                        {isMuted ? (
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                                                <line x1="23" y1="9" x2="17" y2="15"></line>
                                                <line x1="17" y1="9" x2="23" y2="15"></line>
                                            </svg>
                                        ) : (
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

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
                                            {currentPost.author.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="font-semibold text-foreground text-sm sm:text-base truncate">{currentPost.author.name}</p>
                                            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{currentPost.author.bio}</p>
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
            
            <Footer />
        </div>
    );
}
