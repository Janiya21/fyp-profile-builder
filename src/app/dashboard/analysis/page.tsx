"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import CommonNav from "@/components/CommonNav";
import Footer from "@/components/Footer";

export default function AnalysisDashboard() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const websiteId = searchParams.get("websiteId");
    
    const [loading, setLoading] = useState(true);
    const [analysisData, setAnalysisData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!websiteId) {
            setError("No Portfolio ID provided.");
            setLoading(false);
            return;
        }
        fetchAnalysis(websiteId);
    }, [websiteId]);

    const fetchAnalysis = async (id: string) => {
        try {
            setLoading(true);
            
            // 1. Fetch website details
            const webResponse = await fetch(`/api/web-detail/${id}`);
            if (!webResponse.ok) throw new Error("Failed to load portfolio details.");
            const webData = await webResponse.json();
            
            if (!webData.success) throw new Error(webData.message);
            
            // 2. Send payload to AI
            const aiResponse = await fetch("/api/ai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "analyzeProfile",
                    payload: { profileData: webData.data.fieldsValues }
                })
            });
            
            const aiData = await aiResponse.json();
            if (!aiData.success) throw new Error(aiData.error || "AI Analysis failed.");
            
            setAnalysisData(aiData.data);
            
        } catch (err: any) {
            console.error("Analysis Error:", err);
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col">
                <CommonNav />
                <div className="flex-grow flex flex-col items-center justify-center p-8 text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600 mb-6"></div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Analyzing Your Profile...</h2>
                    <p className="text-gray-500">ProfiMake AI is evaluating your portfolio against professional standards.</p>
                </div>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col">
                <CommonNav />
                <div className="flex-grow flex flex-col items-center justify-center p-8">
                    <div className="bg-red-50 text-red-600 p-6 rounded-xl max-w-lg text-center">
                        <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                        <h2 className="text-xl font-bold mb-2">Analysis Failed</h2>
                        <p>{error}</p>
                        <button onClick={() => router.back()} className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Go Back</button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    const { score, feedback, missingInformation, recommendations } = analysisData || {};

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
            <CommonNav />
            <div className="flex-grow max-w-6xl mx-auto w-full p-4 sm:p-8">
                
                <div className="flex items-center gap-4 mb-8">
                    <button onClick={() => router.back()} className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                        <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    </button>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profile Quality Analysis</h1>
                        <p className="text-gray-500 dark:text-gray-400">AI-driven insights to make your portfolio stand out.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Score Gauge */}
                    <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 flex flex-col items-center justify-center text-center">
                        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Overall ATS Score</h3>
                        
                        <div className="relative w-48 h-48 mb-6">
                            {/* Circular Background */}
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-gray-200 dark:text-gray-700" />
                                <circle 
                                    cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" 
                                    strokeDasharray="282.7" 
                                    strokeDashoffset={282.7 - (282.7 * score) / 100}
                                    className={`${score >= 80 ? 'text-green-500' : score >= 50 ? 'text-yellow-500' : 'text-red-500'} transition-all duration-1000 ease-out`} 
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className={`text-5xl font-bold ${score >= 80 ? 'text-green-500' : score >= 50 ? 'text-yellow-500' : 'text-red-500'}`}>
                                    {score}
                                </span>
                                <span className="text-gray-400 text-sm mt-1">out of 100</span>
                            </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300">
                            {score >= 80 ? "Excellent profile! You have a high chance of passing ATS filters." :
                             score >= 50 ? "Good start, but there is room for improvement to stand out." :
                             "Your profile needs significant enhancements. Follow the recommendations below."}
                        </p>
                    </div>

                    {/* Feedback & Recommendations */}
                    <div className="lg:col-span-2 space-y-6">
                        
                        {/* Structure & Readability */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                                <span className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                </span>
                                Structure & Readability
                            </h3>
                            <ul className="space-y-3">
                                {feedback?.map((item: string, index: number) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                        <svg className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Missing Information */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                                <span className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                </span>
                                Missing Information
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {missingInformation?.map((item: string, index: number) => (
                                    <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg border border-gray-100 dark:border-gray-600">
                                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0"></span>
                                        <span className="text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Actionable Recommendations */}
                        <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl shadow-sm p-6 text-white">
                            <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                                <span className="p-2 bg-white/20 rounded-lg">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </span>
                                Actionable Recommendations
                            </h3>
                            <ul className="space-y-4">
                                {recommendations?.map((item: string, index: number) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold">
                                            {index + 1}
                                        </div>
                                        <span className="text-indigo-50">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
