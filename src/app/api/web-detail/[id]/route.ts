import dbConnect from "@/lib/db";
import PFUser from "@/model/PFUser";
import Template from "@/model/Template";
import WebDetail from "@/model/WebDetail";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    await dbConnect();

    try {
        const { id } = params;

        if (!id) {
            return NextResponse.json({ success: false, error: "ID is required" }, { status: 400 });
        }

        const webDetail = await WebDetail.findById(id);

        if (!webDetail) {
            return NextResponse.json({ success: false, error: "WebDetail not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: webDetail }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
