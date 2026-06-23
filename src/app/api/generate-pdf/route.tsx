import { NextResponse } from 'next/server';
import chromium from 'chrome-aws-lambda';

// Important: Puppeteer requires Node.js runtime
export const runtime = 'nodejs';

export async function POST(request: Request) {
  let browser = null;
  try {
    const { html } = await request.json();

    // Launch Puppeteer
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
    });

    const page = await browser.newPage();
    
    // Set the HTML content
    await page.setContent(html, {
      waitUntil: ['networkidle0', 'load', 'domcontentloaded']
    });

    // Generate PDF
    const pdf = await page.pdf({
      format: 'a4',
      printBackground: true,
      margin: { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' },
      preferCSSPageSize: true
    });

    // Create response with PDF
    return new NextResponse(new Uint8Array(pdf), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=doctor-profile.pdf',
      },
    });

  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json(
      { error: 'PDF generation failed' },
      { status: 500 }
    );
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
}