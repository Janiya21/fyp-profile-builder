import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

const s3 = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID_AWS!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY_AWS!,
  },
});

export async function POST(req: Request) {
  try {
    const { file, fileName } = await req.json();
    const buffer = Buffer.from(file, "base64");

    const params = {
      Bucket: process.env.BUCKET_NAME_AWS!,
      Key: fileName,
      Body: buffer,
      ContentType: "image/jpeg",
    };

    await s3.send(new PutObjectCommand(params));
    return NextResponse.json({ url: `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${fileName}` });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
