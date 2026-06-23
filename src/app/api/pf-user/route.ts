import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import PFUser from "@/model/PFUser";
import dbConnect from "@/lib/db";
import User from "@/model/User";
import { getToken } from 'next-auth/jwt';

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { name, email, hometown, jobTitle, phoneNumber } = body;
    let subscription = email=="janithsandaru999@gmail.com"?"yearly":"none";

    // Validate required fields
    if (!name || !email || !hometown || !jobTitle || !phoneNumber) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if the user exists
    let user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    // Create PFUser and link it to the User model
    const newPFUser = await PFUser.create({
      name,
      email,
      hometown,
      jobTitle,
      phoneNumber,
      subscription,
      userId: user._id, // ✅ Use found user's ObjectId
    });

    // Update User with reference to PFUser
    user.pfUser = newPFUser._id;
    user.progressStep = "profileSaved";
    await user.save();

    return NextResponse.json(
      { success: true, message: "User created successfully", user: newPFUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Error creating user:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
