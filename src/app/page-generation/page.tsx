"use client";
import TemplateA from '@/components/templates/Template_A';
import TemplateB from '@/components/templates/Template_B';
import TemplateC from '@/components/templates/Template_C';
import React, { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import { Spinner } from '@heroui/react';
import PageLoader from '@/components/PageLOader';
import SessionProviderWrapper from '@/components/SessionProviderWrapper';
import { useSession } from 'next-auth/react';
import TemplateD from '@/components/templates/Template_D';
import TemplateE from '@/components/templates/Template_E';
import TemplateF from '@/components/templates/Template_F';

const PageGeneration = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <SessionProviderWrapper>
                <GeneratedPage />
            </SessionProviderWrapper>
        </Suspense>
    );
};
export default PageGeneration;

function GeneratedPage() {
    const searchParams = useSearchParams();
    const { data: session } = useSession();
    const pfUserId = searchParams.get("frg");
    // const backUrl = searchParams.get("bkrl");
    const [templateData, setTemplateData] = useState<any>(null);
    const [pageData, setPageData] = useState<any>(null);
    const [pfUserData, setPfUserData] = useState<any>(null);
    const [sessionData, setSessionData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (pfUserId) {
            setData(pfUserId);
        }
    }, [pfUserId]);

    useEffect(() => {
        setSessionData(sessionStorage.getItem("pfUser"));
    }, [pageData]);

    async function setData(id: string) {
        try {
            setLoading(true);
            const detailData = await getWebDetailById(id);
            if (detailData.success) {
                setPfUserData(detailData.data.pfUser);
                setPageData(detailData.data.fieldsValues);
            } else {
                setError("Failed to load portfolio data");
            }
        } catch (error) {
            console.error("Error setting data:", error);
            setError("An error occurred while loading the portfolio");
        } finally {
            setLoading(false);
        }
    }

    async function getWebDetailById(id: string) {
        try {
            const webResponse = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/web-detail/${id}`);
            if (!webResponse.ok) throw new Error("Network response was not ok");

            const webResJson = await webResponse.json();
            if (!webResJson.success) throw new Error(webResJson.message);

            const templateResponse = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/template-by-id?id=${encodeURIComponent(String(webResJson.data.template))}`);
            if (!templateResponse.ok) throw new Error("Network response was not ok");

            const templateResJson = await templateResponse.json();
            if (!templateResJson.success) throw new Error(templateResJson.message);

            setTemplateData(templateResJson.data);
            return webResJson;
        } catch (error) {
            console.error("Error fetching WebDetail:", error);
            setError(error instanceof Error ? error.message : "Unknown error occurred");
            return { success: false, error };
        }
    }

    const renderTemplate = () => {
        if (!templateData || !pageData) return null;

        switch (templateData.name) {
            case "TemplateA":
                return <TemplateA {...pageData} />;
            case "TemplateB":
                return <TemplateB {...pageData} />;
            case "TemplateC":
                return <TemplateC {...pageData} />;
            case "TemplateD":
                return <TemplateD {...pageData} />;
            case "TemplateE":
                return <TemplateE {...pageData} />;
            case "TemplateF":
                return <TemplateF {...pageData} />;
            default:
                return <div className="text-center p-8">Unknown template type</div>;
        }
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                {/* <Spinner size="lg" /> */}
                <PageLoader />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center p-8 text-red-500">
                <p>Error loading portfolio: {error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="relative">
            {/* <h1>Hello {session?.expires}</h1> */}
            {session && (
                <button
                    className="absolute right-4 top-4 p-2 bg-white rounded-full shadow-md z-50 hover:bg-gray-100 transition-colors"
                    onClick={() => {
                        setLoading(true);
                        router.push(`/web-profile?frg=${pfUserData}`)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                    </svg>
                </button>
            )}
            {renderTemplate()}
        </div>
    );
}