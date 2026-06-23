// app/api/check-username/route.ts
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import PFUser from '@/model/PFUser';
import dbConnect from '@/lib/db';


export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');
    
    // Validate input
    if (!username || typeof username !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Username parameter is required' },
        { status: 400 }
      );
    }
    
    // Check if username exists
    const existingUser = await PFUser.findOne({ name: username }).select('name').lean();
    
    return NextResponse.json(
      { 
        success: true, 
        exists: !!existingUser,
        message: existingUser ? 'Username already taken' : 'Username available'
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error checking username:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}