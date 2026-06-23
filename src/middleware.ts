import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: any) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    console.log("================== MIDDLEWARE =======================");
    console.log("TOKEN:", token);

    const now = Math.floor(Date.now() / 1000);
    const isTokenExpired = token?.expires ? Number(token.expires) < now : true;

    console.log("TOKEN EXPIRES AT:", token?.expires ? new Date(Number(token.expires) * 1000).toLocaleString() : "N/A");
    console.log("CURRENT TIME:", new Date(now * 1000).toLocaleString());
    console.log("TOKEN EXPIRED? :", isTokenExpired ? "YES" : "NO");

    console.log("================== MIDDLEWARE =======================");

    if (!token || isTokenExpired) {
        // Check if this is an API request
        console.log("REQ PATH:", req.nextUrl.pathname);
        
        if(req.nextUrl.pathname.startsWith('/page-generation') || req.nextUrl.pathname.startsWith('/web') || req.nextUrl.pathname.startsWith('/api/web-detail') || req.nextUrl.pathname.startsWith('/api/template-by-id')){
            return NextResponse.next();
        }else{
            if (req.nextUrl.pathname.startsWith('/api')) {
                // Return 401 Unauthorized for API requests
                return new NextResponse(
                    JSON.stringify({ 
                        success: false, 
                        message: 'Authentication token is expired or invalid' 
                    }),
                    { 
                        status: 401,
                        headers: { 'Content-Type': 'application/json' }
                    }
                );
            } else {
                // Handle page requests as before
                const loginUrl = new URL('/auth/signin', req.nextUrl.origin);
                loginUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);
                loginUrl.searchParams.set('error', 'SessionExpired');
                
                const response = NextResponse.redirect(loginUrl, 307);
                response.cookies.delete('next-auth.session-token');
                return response;
            }
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api/auth|terms-of-service|pricing|contact-us|templates-preview|_next/static|_next/image|favicon.ico|spline|auth|$).*)',
    ],
};
