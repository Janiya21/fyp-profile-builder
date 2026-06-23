import dbConnect from "@/lib/db";
import PFUser from "@/model/PFUser";
import Template from "@/model/Template";
import User from "@/model/User";
import WebDetail from "@/model/WebDetail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const body = await req.json();
    const { pfUser, template, active, fieldsValues } = body;

    let pfUserObj = await PFUser.findById(pfUser);
    if (!pfUserObj) {
      return NextResponse.json(
        { success: false, message: "Profile User not found" },
        { status: 404 }
      );
    }
    
    const newWebDetail = new WebDetail({ pfUser, template, active, fieldsValues });
    const savedRecord = await newWebDetail.save();

    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/web/${savedRecord._id}`;

    let actualUser = await User.findById(pfUserObj.userId);
    if (!actualUser) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    actualUser.progressStep = "websiteFilled";
    await actualUser.save();

    savedRecord.webUrl = url;
    await savedRecord.save();

    return NextResponse.json({ success: true, data: newWebDetail }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  await dbConnect();

  try {

    const webDetails = await WebDetail.find()
      .populate("pfUser") // ✅ Now PFUser is registered
      .populate("template");

    return NextResponse.json({ success: true, data: webDetails }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
