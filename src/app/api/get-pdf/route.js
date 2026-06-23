import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function POST(request) {
    try {
        const { url } = await request.json();

        if (!url) {
            return NextResponse.json(
                { error: 'URL is required' },
                { status: 400 }
            );
        }

        // Launch browser (local development)
        const browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu',
            ],
        });

        const page = await browser.newPage();

        // Set viewport for consistent rendering
        await page.setViewport({
            width: 1200,
            height: 1600,
            deviceScaleFactor: 2,
        });

        // Navigate to the page
        await page.goto(url, {
            waitUntil: 'networkidle0',
            timeout: 30000,
        });

        // Wait for content to render
        // await page.waitForTimeout(2000);

        // Hide buttons before generating PDF
        await page.evaluate(() => {
            const buttons = document.querySelectorAll('button');
            buttons.forEach(btn => {
                (btn).style.display = 'none';
            });
        });

        // Generate PDF
        const pdf = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: {
                top: '10mm',
                right: '10mm',
                bottom: '10mm',
                left: '10mm',
            },
            preferCSSPageSize: false,
        });

        await browser.close();

        // Return PDF as response
        return new NextResponse(pdf, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename="doctor_profile.pdf"',
            },
        });

    } catch (error) {
        console.error('PDF generation error:', error);
        return NextResponse.json(
            { error: 'Failed to generate PDF', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}

// Increase timeout for PDF generation
export const maxDuration = 30; // 30 seconds