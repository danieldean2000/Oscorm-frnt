import { NextRequest, NextResponse } from 'next/server';

const API_URL = 'https://competent-shirley.72-61-78-56.plesk.page';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const url = `${API_URL}/api/blog-posts/slug/${slug}`;
        
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            // Add cache control
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
        return NextResponse.json(data);
    } catch (error: any) {
        console.error('Error in blog-posts slug API route:', error);
        return NextResponse.json(
            { 
                success: false, 
                message: error.message || 'Failed to fetch blog post',
                error: 'Internal server error' 
            },
            { status: 500 }
        );
    }
}

