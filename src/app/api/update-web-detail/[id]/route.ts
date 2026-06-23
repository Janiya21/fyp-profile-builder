// app/api/web-detail/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import WebDetail from '@/model/WebDetail';
import dbConnect from '@/lib/db';

export async function PATCH(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await dbConnect();
        
        const { id } = params;
        const body = await request.json();
        const { fieldsValues } = body;

        // Validate ID
        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json(
                { success: false, message: 'Invalid web detail ID' },
                { status: 400 }
            );
        }

        // Validate fieldsValues exists
        if (!fieldsValues || typeof fieldsValues !== 'object') {
            return NextResponse.json(
                { success: false, message: 'fieldsValues must be an object' },
                { status: 400 }
            );
        }

        // Update only the fieldsValues
        const updatedWebDetail = await WebDetail.findByIdAndUpdate(
            id,
            { $set: { fieldsValues } },
            { new: true }
        ).lean();

        if (!updatedWebDetail) {
            return NextResponse.json(
                { success: false, message: 'Web detail not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            data: updatedWebDetail
        });

    } catch (error: any) {
        console.error('Error updating fieldsValues:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Internal server error',
                error: error.message
            },
            { status: 500 }
        );
    }
}

// Optional: Add TypeScript interface for the response
interface ApiResponse<T> {
    success: boolean;
    message?: string;
    data?: T;
    error?: string;
}