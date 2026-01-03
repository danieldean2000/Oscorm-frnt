import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    author: {
        name: string;
        avatar: string;
        bio: string;
    };
    date: string;
    readTime: string;
    image: string;
    category: string;
    tags: string[];
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    description: string;
    created_at: string;
    updated_at: string;
}

interface BlogState {
    posts: BlogPost[];
    currentPost: BlogPost | null;
    categories: Category[];
    categoriesLoading: boolean;
    categoriesError: string | null;
    loading: boolean;
    error: string | null;
}

// Helper function to calculate read time
const calculateReadTime = (content: string): string => {
    const wordsPerMinute = 200;
    const text = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
    const wordCount = text.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
};

// Helper function to parse tags
const parseTags = (tags: string | null): string[] => {
    if (!tags) return [];
    if (typeof tags === 'string') {
        return tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
    }
    return Array.isArray(tags) ? tags : [];
};

// Get API URL from environment variable
const API_URL ='https://competent-shirley.72-61-78-56.plesk.page';

// Transform backend post to frontend format
const transformPost = (backendPost: any): BlogPost => {
    // Handle image URL - support multiple formats
    let imageUrl = backendPost.featured_image || backendPost.image || backendPost.thumbnail || null;
    
    if (!imageUrl || imageUrl === '' || imageUrl === 'null' || imageUrl === 'undefined') {
        // Use default image if no image provided
        imageUrl = '/images/home/services/AI-2.jpg';
    } else {
        // Clean up the URL (remove any whitespace)
        imageUrl = imageUrl.trim();
        
        // If it's a relative path starting with /uploads or /storage, use proxy (external API)
        if (imageUrl.startsWith('/uploads/') || imageUrl.startsWith('/storage/')) {
            // Use Next.js API route as proxy to avoid CORS issues
            imageUrl = `/api/images${imageUrl}`;
        }
        // If it's already a full URL (http/https), encode it for proxy
        else if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
            // Use proxy for external URLs to avoid CORS
            imageUrl = `/api/images/${encodeURIComponent(imageUrl)}`;
        }
        // If it's a relative path without leading slash, use proxy (external API)
        else if (!imageUrl.startsWith('/')) {
            imageUrl = `/api/images/${imageUrl}`;
        }
        // If it starts with /images/, it's a local image, keep it as is
        // (already handled above, but keeping for clarity)
    }
    
    // Debug log (remove in production if needed)
    if (process.env.NODE_ENV === 'development') {
        console.log('Image URL transformed:', {
            original: backendPost.featured_image || backendPost.image || backendPost.thumbnail,
            transformed: imageUrl
        });
    }
    
    // Format date from ISO string to YYYY-MM-DD
    let formattedDate = '';
    if (backendPost.published_at) {
        formattedDate = backendPost.published_at.split('T')[0];
    } else if (backendPost.created_at) {
        formattedDate = backendPost.created_at.split('T')[0];
    } else if (backendPost.date) {
        formattedDate = backendPost.date.split('T')[0];
    } else {
        formattedDate = new Date().toISOString().split('T')[0];
    }
    
    return {
        id: backendPost.id,
        title: backendPost.title || 'Untitled',
        slug: backendPost.slug || `post-${backendPost.id}`,
        excerpt: backendPost.excerpt || backendPost.description || '',
        content: backendPost.content || backendPost.body || '',
        author: {
            name: backendPost.author_name || backendPost.author?.name || 'Anonymous',
            avatar: backendPost.author?.avatar || '/frontend-asset/images/Love-1.png',
            bio: backendPost.author?.bio || `Author at Oscorm`
        },
        date: formattedDate,
        readTime: calculateReadTime(backendPost.content || backendPost.body || ''),
        image: imageUrl,
        category: backendPost.category_name || backendPost.category || 'Uncategorized',
        tags: parseTags(backendPost.tags)
    };
};

// Helper function to create fetch with timeout
const fetchWithTimeout = async (url: string, options: RequestInit, timeout = 10000) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal,
        });
        clearTimeout(id);
        return response;
    } catch (error: any) {
        clearTimeout(id);
        if (error.name === 'AbortError') {
            throw new Error('Request timeout: API took too long to respond');
        }
        throw error;
    }
};

// Fetch all blog posts from API
export const fetchAllPosts = createAsyncThunk(
    'blog/fetchAllPosts',
    async (_, { rejectWithValue }) => {
        try {
            // Use Next.js API route as proxy to avoid CORS issues
            const apiRoute = '/api/blog-posts';
            const response = await fetchWithTimeout(
                apiRoute,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                },
                15000 // 15 second timeout
            );
            
            // Check if response is ok before parsing JSON
            if (!response.ok) {
                // Try to parse error message from response
                let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || errorMessage;
                } catch {
                    // If response is not JSON, use status text
                    try {
                        const text = await response.text();
                        errorMessage = text || errorMessage;
                    } catch {
                        // If we can't read the response, use status
                        errorMessage = `HTTP ${response.status}: ${response.statusText}`;
                    }
                }
                throw new Error(errorMessage);
            }
            
            const data = await response.json();
            
            // Handle different response structures
            let postsArray = [];
            if (data.success && data.data && Array.isArray(data.data)) {
                postsArray = data.data;
            } else if (Array.isArray(data)) {
                // If response is directly an array
                postsArray = data;
            } else if (data.data && Array.isArray(data.data)) {
                postsArray = data.data;
            } else if (data.posts && Array.isArray(data.posts)) {
                postsArray = data.posts;
            } else {
                console.error('Unexpected API response structure:', data);
                throw new Error('Invalid response format from API');
            }
            
            // Transform backend posts to frontend format
            const transformedPosts = postsArray.map(transformPost);
            
            // Log for debugging
            console.log('Fetched posts:', transformedPosts.length);
            
            return transformedPosts;
        } catch (error: any) {
            console.error('Error fetching posts:', error);
            const errorMessage = error.message || 'Failed to fetch blog posts';
            return rejectWithValue(errorMessage);
        }
    }
);

// Fetch single post by slug
export const fetchPostBySlug = createAsyncThunk(
    'blog/fetchPostBySlug',
    async (slug: string, { rejectWithValue }) => {
        try {
            // Use Next.js API route as proxy to avoid CORS issues
            const apiRoute = `/api/blog-posts/slug/${slug}`;
            const response = await fetchWithTimeout(
                apiRoute,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                },
                15000 // 15 second timeout
            );
            
            // Check if response is ok before parsing JSON
            if (!response.ok) {
                // Try to parse error message from response
                let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || errorMessage;
                } catch {
                    // If response is not JSON, use status text
                    try {
                        const text = await response.text();
                        errorMessage = text || errorMessage;
                    } catch {
                        // If we can't read the response, use status
                        errorMessage = `HTTP ${response.status}: ${response.statusText}`;
                    }
                }
                throw new Error(errorMessage);
            }
            
            const data = await response.json();
            
            if (!data.success) {
                throw new Error(data.message || 'Post not found');
            }
            
            return transformPost(data.data);
        } catch (error: any) {
            console.error('Error fetching post by slug:', error);
            const errorMessage = error.message || 'Failed to fetch post';
            return rejectWithValue(errorMessage);
        }
    }
);

// Fetch all categories from API
export const fetchCategories = createAsyncThunk(
    'blog/fetchCategories',
    async (_, { rejectWithValue }) => {
        try {
            // Use Next.js API route as proxy to avoid CORS issues
            const apiRoute = '/api/categories';
            const response = await fetchWithTimeout(
                apiRoute,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                },
                15000 // 15 second timeout
            );
            
            // Check if response is ok before parsing JSON
            if (!response.ok) {
                // Try to parse error message from response
                let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || errorMessage;
                } catch {
                    // If response is not JSON, use status text
                    try {
                        const text = await response.text();
                        errorMessage = text || errorMessage;
                    } catch {
                        // If we can't read the response, use status
                        errorMessage = `HTTP ${response.status}: ${response.statusText}`;
                    }
                }
                throw new Error(errorMessage);
            }
            
            const data = await response.json();
            
            // Handle different response structures
            let categoriesArray = [];
            if (data.success && data.data && Array.isArray(data.data)) {
                categoriesArray = data.data;
            } else if (Array.isArray(data)) {
                // If response is directly an array
                categoriesArray = data;
            } else if (data.data && Array.isArray(data.data)) {
                categoriesArray = data.data;
            } else {
                console.error('Unexpected API response structure:', data);
                throw new Error('Invalid response format from API');
            }
            
            // Log for debugging
            console.log('Fetched categories:', categoriesArray.length);
            
            return categoriesArray;
        } catch (error: any) {
            console.error('Error fetching categories:', error);
            const errorMessage = error.message || 'Failed to fetch categories';
            return rejectWithValue(errorMessage);
        }
    }
);

const initialState: BlogState = {
    posts: [],
    currentPost: null,
    categories: [],
    categoriesLoading: false,
    categoriesError: null,
    loading: false,
    error: null,
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setCurrentPost: (state, action: PayloadAction<string>) => {
            const post = state.posts.find(p => p.slug === action.payload);
            state.currentPost = post || null;
        },
        clearCurrentPost: (state) => {
            state.currentPost = null;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        // Fetch all posts
        builder
            .addCase(fetchAllPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = Array.isArray(action.payload) ? action.payload : [];
                state.error = null;
                console.log('Posts set in Redux:', state.posts.length);
            })
            .addCase(fetchAllPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
        
        // Fetch post by slug
        builder
            .addCase(fetchPostBySlug.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPostBySlug.fulfilled, (state, action) => {
                state.loading = false;
                state.currentPost = action.payload;
                // Also add to posts if not already there
                if (!state.posts.find(p => p.id === action.payload.id)) {
                    state.posts.push(action.payload);
                }
                state.error = null;
            })
            .addCase(fetchPostBySlug.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.currentPost = null;
            });
        
        // Fetch categories
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.categoriesLoading = true;
                state.categoriesError = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categoriesLoading = false;
                state.categories = Array.isArray(action.payload) ? action.payload : [];
                state.categoriesError = null;
                console.log('Categories set in Redux:', state.categories.length);
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.categoriesLoading = false;
                state.categoriesError = action.payload as string;
            });
    },
});

export const { setCurrentPost, clearCurrentPost, clearError } = blogSlice.actions;

// Selectors - Using inline type to avoid circular dependency
export const selectAllPosts = (state: { blog: BlogState }) => state.blog.posts;
export const selectCurrentPost = (state: { blog: BlogState }) => state.blog.currentPost;
export const selectPostBySlug = (slug: string) => (state: { blog: BlogState }) =>
    state.blog.posts.find(post => post.slug === slug);
export const selectAllCategories = (state: { blog: BlogState }) => state.blog.categories;

export default blogSlice.reducer;
