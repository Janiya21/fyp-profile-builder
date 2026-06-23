import dbConnect from "@/lib/db";
import Template from "@/model/Template";
import WebDetail from "@/model/WebDetail";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    // Extract template id from query parameters
    const { searchParams } = new URL(req.url);
    const pfUserId = searchParams.get("id");

    if (!pfUserId) {
      return NextResponse.json({ success: false, error: "User id is required" }, { status: 400 });
    }

    // Find template by name
    const count = await WebDetail.countDocuments({ pfUser: pfUserId });

    return NextResponse.json({ success: true, data: count }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
