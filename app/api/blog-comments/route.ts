import { NextRequest, NextResponse } from 'next/server';

const API_URL = 'https://competent-shirley.72-61-78-56.plesk.page';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { postId, name, email, content, review, url: websiteUrl } = body;

        // Validate required fields
        if (!postId || !name || !email || !content) {
            return NextResponse.json(
                { 
                    success: false, 
                    message: 'Missing required fields: postId, name, email, and content are required' 
                },
                { status: 400 }
            );
        }

        // Validate review if provided (must be between 1 and 5)
        if (review !== undefined && review !== null) {
            const reviewNum = parseInt(review);
            if (isNaN(reviewNum) || reviewNum < 1 || reviewNum > 5) {
                return NextResponse.json(
                    { 
                        success: false, 
                        message: 'Review must be a number between 1 and 5' 
                    },
                    { status: 400 }
                );
            }
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { 
                    success: false, 
                    message: 'Invalid email format' 
                },
                { status: 400 }
            );
        }

        // POST to external API
        const apiUrl = `${API_URL}/api/blog-comments`;
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                post_id: postId,
                name: name.trim(),
                email: email.trim(),
                content: content.trim(),
                review: review !== undefined && review !== null ? parseInt(review) : null,
                url: websiteUrl ? websiteUrl.trim() : null,
                is_approved: false, // Comments need admin approval before showing
            }),
        });
        
        if (!response.ok) {
            const errorText = await response.text();
            return NextResponse.json(
                { 
                    success: false, 
                    message: `API Error: ${response.status} ${response.statusText}`,
                    error: errorText 
                },
                { status: response.status }
            );
        }
        
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error: any) {
        console.error('Error in blog-comments API route:', error);
        return NextResponse.json(
            { 
                success: false, 
                message: error.message || 'Failed to submit comment',
                error: 'Internal server error' 
            },
            { status: 500 }
        );
    }
}

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const postId = searchParams.get('post_id') || searchParams.get('postId');
        
        if (!postId) {
            return NextResponse.json(
                { 
                    success: false, 
                    message: 'post_id parameter is required' 
                },
                { status: 400 }
            );
        }

        // Only fetch approved comments for public display
        const isApproved = searchParams.get('is_approved') || 'true';
        const apiUrl = `${API_URL}/api/blog-comments?post_id=${postId}&is_approved=${isApproved}`;
        
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            next: { revalidate: 60 }, // Revalidate every 60 seconds
        });
        
        if (!response.ok) {
            const errorText = await response.text();
            return NextResponse.json(
                { 
                    success: false, 
                    message: `API Error: ${response.status} ${response.statusText}`,
                    error: errorText 
                },
                { status: response.status }
            );
        }
        
        const data = await response.json();
        
        // Strictly filter to only return approved comments
        if (data.data && Array.isArray(data.data)) {
            const approvedComments = data.data.filter((comment: any) => 
                // Only return comments that are explicitly approved
                comment.is_approved === true || 
                comment.is_approved === 1 || 
                comment.status === 'approved'
            );
            return NextResponse.json({
                ...data,
                data: approvedComments
            });
        }
        
        return NextResponse.json(data);
    } catch (error: any) {
        console.error('Error in blog-comments GET API route:', error);
        return NextResponse.json(
            { 
                success: false, 
                message: error.message || 'Failed to fetch comments',
                error: 'Internal server error' 
            },
            { status: 500 }
        );
    }
}

