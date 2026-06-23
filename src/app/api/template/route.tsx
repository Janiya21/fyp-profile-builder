import dbConnect from "@/lib/db";
import Template from "@/model/Template";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    // Extract template name from query parameters
    const { searchParams } = new URL(req.url);
    const templateName = searchParams.get("name");

    if (!templateName) {
      return NextResponse.json({ success: false, error: "Template name is required" }, { status: 400 });
    }

    // Find template by name
    const template = await Template.findOne({ name: templateName });

    if (!template) {
      return NextResponse.json({ success: false, error: "Template not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: template }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
