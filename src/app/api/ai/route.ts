import { enhanceContent, analyzeProfile, matchJobDescription, condenseForCV } from '@/lib/ai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { action, payload } = body;

        if (!action || !payload) {
            return NextResponse.json({ error: "Missing action or payload" }, { status: 400 });
        }

        let result;

        switch (action) {
            case 'enhanceContent':
                result = await enhanceContent(payload.originalText, payload.context);
                break;
            case 'analyzeProfile':
                result = await analyzeProfile(payload.profileData);
                break;
            case 'matchJobDescription':
                if (!payload.profileData || !payload.jobDescription) {
                    return NextResponse.json({ success: false, error: 'Missing profileData or jobDescription' }, { status: 400 });
                }
                result = await matchJobDescription(payload.profileData, payload.jobDescription);
                break;
            case 'condenseForCV':
                if (!payload.profileData) {
                    return NextResponse.json({ success: false, error: 'Missing profileData' }, { status: 400 });
                }
                result = await condenseForCV(payload.profileData);
                break;
            default:
                return NextResponse.json({ error: "Invalid action" }, { status: 400 });
        }

        return NextResponse.json({ success: true, data: result });

    } catch (error: any) {
        console.error("AI API Error:", error);
        return NextResponse.json({ success: false, error: error.message || "Internal Server Error" }, { status: 500 });
    }
}
