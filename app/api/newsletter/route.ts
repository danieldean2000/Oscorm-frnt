import { NextRequest, NextResponse } from 'next/server';

const API_URL = 'https://competent-shirley.72-61-78-56.plesk.page';

// POST - Subscribe to newsletter
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email } = body;

        // Validate required fields
        if (!email) {
            return NextResponse.json(
                { 
                    success: false, 
                    message: 'Email is required' 
                },
                { status: 400 }
            );
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
        const apiUrl = `${API_URL}/api/newsletter`;
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email.trim().toLowerCase(),
            }),
        });
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: response.statusText }));
            return NextResponse.json(
                { 
                    success: false, 
                    message: errorData.message || `API Error: ${response.status} ${response.statusText}`,
                },
                { status: response.status }
            );
        }
        
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error: any) {
        console.error('Error in newsletter API route:', error);
        return NextResponse.json(
            { 
                success: false, 
                message: error.message || 'Failed to subscribe to newsletter',
                error: 'Internal server error' 
            },
            { status: 500 }
        );
    }
}

// GET - Get all newsletter subscriptions (for admin/dashboard)
export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const page = searchParams.get('page') || '1';
        const limit = searchParams.get('limit') || '10';

        const apiUrl = `${API_URL}/api/newsletter?page=${page}&limit=${limit}`;
        
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
        return NextResponse.json(data);
    } catch (error: any) {
        console.error('Error in newsletter GET API route:', error);
        return NextResponse.json(
            { 
                success: false, 
                message: error.message || 'Failed to fetch newsletter subscriptions',
                error: 'Internal server error' 
            },
            { status: 500 }
        );
    }
}

