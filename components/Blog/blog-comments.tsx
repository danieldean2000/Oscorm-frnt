'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface Comment {
  id: string;
  author: {
    name: string;
    email: string;
    avatar?: string;
    initials: string;
  };
  content: string;
  date: string;
  review?: number | null;
  url?: string | null;
}

interface BlogCommentsProps {
  postId: string;
  postSlug: string;
}

export default function BlogComments({ postId, postSlug }: BlogCommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newComment, setNewComment] = useState('');
  const [review, setReview] = useState<number | ''>('');
  const [url, setUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Fetch comments when postId changes - Using Next.js API route as proxy
  useEffect(() => {
    const fetchComments = async () => {
      if (!postId) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        // Use Next.js API route as proxy to avoid CORS issues
        const response = await fetch(`/api/blog-comments?post_id=${postId}&is_approved=true`);
        const data = await response.json();
        
        if (data.success && data.data && Array.isArray(data.data)) {
          // Filter and transform API response to Comment format - ONLY show approved comments
          const transformedComments: Comment[] = data.data
            .filter((item: any) => 
              // Strictly check for approved status
              item.is_approved === true || 
              item.is_approved === 1 || 
              item.status === 'approved'
            )
            .map((item: any) => ({
              id: item.id?.toString() || Date.now().toString(),
              author: {
                name: item.name || item.author?.name || 'Anonymous',
                email: item.email || item.author?.email || '',
                initials: getInitials(item.name || item.author?.name || 'AN'),
              },
              content: item.content || item.comment || '',
              date: item.created_at || item.date || new Date().toISOString().split('T')[0],
              review: item.review !== undefined && item.review !== null ? parseInt(item.review) : null,
              url: item.url || null,
            }));
          setComments(transformedComments);
        } else if (data.data && Array.isArray(data.data)) {
          // Handle case where data is directly an array - ONLY show approved comments
          const transformedComments: Comment[] = data.data
            .filter((item: any) => 
              // Strictly check for approved status
              item.is_approved === true || 
              item.is_approved === 1 || 
              item.status === 'approved'
            )
            .map((item: any) => ({
              id: item.id?.toString() || Date.now().toString(),
              author: {
                name: item.name || item.author?.name || 'Anonymous',
                email: item.email || item.author?.email || '',
                initials: getInitials(item.name || item.author?.name || 'AN'),
              },
              content: item.content || item.comment || '',
              date: item.created_at || item.date || new Date().toISOString().split('T')[0],
              review: item.review !== undefined && item.review !== null ? parseInt(item.review) : null,
              url: item.url || null,
            }));
          setComments(transformedComments);
        } else {
          setComments([]);
        }
      } catch (err: any) {
        console.error('Error fetching comments:', err);
        setError('Failed to load comments');
        setComments([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !newComment.trim() || !postId) return;

    // Validate review if provided
    if (review !== '' && (isNaN(Number(review)) || Number(review) < 1 || Number(review) > 5)) {
      setError('Review must be a number between 1 and 5');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Use Next.js API route as proxy to avoid CORS issues
      const response = await fetch('/api/blog-comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postId: postId,
          name: name.trim(),
          email: email.trim(),
          content: newComment.trim(),
          review: review !== '' ? Number(review) : null,
          url: url.trim() || null,
        }),
      });

      const data = await response.json();

      if (data.success || response.ok) {
        // Show success message - comment is pending approval
        setError(null);
        setSuccessMessage('Your comment has been submitted successfully! It will be visible after admin approval.');
        // Don't add to comments list - it will appear after admin approval
        setName('');
        setEmail('');
        setNewComment('');
        setReview('');
        setUrl('');
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      } else {
        setError(data.message || 'Failed to submit comment. Please try again.');
        setSuccessMessage(null);
      }
    } catch (err: any) {
      console.error('Error submitting comment:', err);
      setError('Failed to submit comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Comments
        </h2>
        <p className="text-sm text-muted-foreground">
          {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
        </p>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-12">
        {/* Hidden postId field - automatically passed */}
        <input type="hidden" name="postId" value={postId} />
        
        {error && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}
        
        {successMessage && (
          <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-sm text-green-600 dark:text-green-400">{successMessage}</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-foreground placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-foreground placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-foreground mb-2">
            Comment <span className="text-red-500">*</span>
          </label>
          <textarea
            id="comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment..."
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-foreground placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent resize-none transition-all"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="url" className="block text-sm font-medium text-foreground mb-2">
            Website URL (Optional)
          </label>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://your-website.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-foreground placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Add your website URL (any valid website)
          </p>
          
          {/* Rating below URL */}
          <div className="mt-3">
            <label className="block text-sm font-medium text-foreground mb-2">
              Rating (Optional)
            </label>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setReview(review === star ? '' : star)}
                    className="focus:outline-none transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-6 h-6 transition-colors ${
                        review && star <= review
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300 fill-gray-200'
                      } hover:text-yellow-400 hover:fill-yellow-400`}
                    />
                  </button>
                ))}
              </div>
              {review && (
                <span className="text-sm text-muted-foreground">
                  {review === 1 && 'Poor'}
                  {review === 2 && 'Fair'}
                  {review === 3 && 'Good'}
                  {review === 4 && 'Very Good'}
                  {review === 5 && 'Excellent'}
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Click stars to rate (1-5)
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting || !name.trim() || !email.trim() || !newComment.trim() || !postId}
            className="px-6 py-2.5 bg-[#2563eb] text-white rounded-lg font-medium hover:bg-[#1d4ed8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Posting...' : 'Post Comment'}
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-8">
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading comments...</p>
          </div>
        ) : comments.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No comments yet. Be the first to comment!</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="pb-8 border-b border-gray-200 dark:border-gray-700 last:border-b-0 last:pb-0">
              {/* Comment */}
              <div className="flex gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#2563eb] flex items-center justify-center text-white text-sm font-semibold">
                    {comment.author.avatar ? (
                      <Image
                        src={comment.author.avatar}
                        alt={comment.author.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    ) : (
                      comment.author.initials
                    )}
                  </div>
                </div>

                {/* Comment Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h4 className="font-semibold text-foreground text-base">{comment.author.name}</h4>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{formatDate(comment.date)}</span>
                    {comment.review && (
                      <>
                        <span className="text-xs text-muted-foreground">•</span>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-3 h-3 ${
                                star <= comment.review!
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-300 fill-gray-200'
                              }`}
                            />
                          ))}
                          <span className="text-xs text-foreground font-medium ml-1">
                            ({comment.review}/5)
                          </span>
                        </div>
                      </>
                    )}
                    {comment.url && (
                      <>
                        <span className="text-xs text-muted-foreground">•</span>
                        <a
                          href={comment.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#2563eb] hover:underline"
                        >
                          Website
                        </a>
                      </>
                    )}
                  </div>
                  <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                    {comment.content}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

