// app/api/users/[id]/subscription/route.ts
import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import PFUser from '@/model/PFUser';
import dbConnect from '@/lib/db';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    dbConnect();

    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid user ID format' },
        { status: 400 }
      );
    }

    // Find the user by ID and select only the subscription field
    const user = await PFUser.findById(id).select('subscription');

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        subscription: user.subscription 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error fetching subscription:', error);
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