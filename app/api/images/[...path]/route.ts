import { NextRequest, NextResponse } from 'next/server';

const API_URL = 'https://competent-shirley.72-61-78-56.plesk.page';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ path: string[] }> }
) {
    try {
        const { path } = await params;
        const imagePath = path.join('/');
        
        // Construct the full URL to the external image
        let imageUrl: string;
        if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
            // If it's already a full URL, decode it
            imageUrl = decodeURIComponent(imagePath);
        } else if (imagePath.startsWith('/uploads/') || imagePath.startsWith('/storage/') || imagePath.startsWith('/images/')) {
            // If it's a relative path, prepend API URL
            imageUrl = `${API_URL}${imagePath}`;
        } else {
            // Default: prepend API URL with slash
            imageUrl = `${API_URL}/${imagePath}`;
        }
        
        // Fetch the image from the external API
        const response = await fetch(imageUrl, {
            method: 'GET',
            headers: {
                'Accept': 'image/*',
            },
            next: { revalidate: 3600 }, // Cache for 1 hour
        });
        
        if (!response.ok) {
            return new NextResponse('Image not found', { status: 404 });
        }
        
        // Get the image data
        const imageBuffer = await response.arrayBuffer();
        const contentType = response.headers.get('content-type') || 'image/jpeg';
        
        // Return the image with proper headers
        return new NextResponse(imageBuffer, {
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=3600, s-maxage=3600',
            },
        });
    } catch (error: any) {
        console.error('Error in image proxy API route:', error);
        return new NextResponse('Failed to fetch image', { status: 500 });
    }
}

