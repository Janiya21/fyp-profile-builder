// app/api/getUser/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/model/User';

export async function GET(req: Request) {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');

    if (!email) {
        return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const user = await User.findOne({ email }).lean();

    if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user: user });
}