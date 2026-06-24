"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import CommonNav from "@/components/CommonNav";
import Footer from "@/components/Footer";

export default function JobMatchDashboard() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const websiteId = searchParams.get("websiteId");
    
    const [jobDescription, setJobDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [matchData, setMatchData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const handleMatch = async () => {
        if (!websiteId) {
            setError("No Portfolio ID provided.");
            return;
        }

        if (jobDescription.trim().length < 50) {
            setError("Please paste a comprehensive job description.");
            return;
        }

        setError(null);
        setMatchData(null);
        setLoading(true);

        try {
            // 1. Fetch website details
            const webResponse = await fetch(`/api/web-detail/${websiteId}`);
            if (!webResponse.ok) throw new Error("Failed to load portfolio details.");
            const webData = await webResponse.json();
            
            if (!webData.success) throw new Error(webData.message);
            
            // 2. Send payload to AI
            const aiResponse = await fetch("/api/ai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "matchJobDescription",
                    payload: { profileData: webData.data.fieldsValues, jobDescription }
                })
            });
            
            const aiData = await aiResponse.json();
            if (!aiData.success) throw new Error(aiData.error || "AI Matching failed.");
            
            setMatchData(aiData.data);
            
        } catch (err: any) {
            console.error("Match Error:", err);
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    const { matchPercentage, matchingSkills, missingSkills, analysis, careerRecommendations } = matchData || {};

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
            <CommonNav />
            <div className="flex-grow max-w-6xl mx-auto w-full p-4 sm:p-8">
                
                <div className="flex items-center gap-4 mb-8">
                    <button onClick={() => router.back()} className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                        <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    </button>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Job Match & Career Recommendations</h1>
                        <p className="text-gray-500 dark:text-gray-400">See how well your portfolio aligns with your dream job.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Left Side: Input area */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 flex flex-col">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Paste Job Description</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Paste the requirements, responsibilities, and description of the target job.</p>
                        
                        <textarea 
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                            className="flex-grow w-full min-h-[300px] p-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
                            placeholder="e.g. We are looking for a Senior Frontend Engineer with 5+ years of React experience..."
                        />

                        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

                        <button 
                            onClick={handleMatch}
                            disabled={loading || jobDescription.length < 10}
                            className={`mt-4 w-full py-3 px-6 rounded-xl font-bold text-white transition-all ${
                                loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:shadow-lg hover:from-indigo-700 hover:to-violet-700'
                            }`}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    Analyzing Fit...
                                </span>
                            ) : "Analyze Match"}
                        </button>
                    </div>

                    {/* Right Side: Results */}
                    <div className="flex flex-col gap-6">
                        {!matchData && !loading && (
                            <div className="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8 flex flex-col items-center justify-center text-center text-gray-500 dark:text-gray-400">
                                <svg className="w-16 h-16 text-indigo-200 dark:text-indigo-900/50 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <p>Your AI match analysis will appear here.</p>
                            </div>
                        )}

                        {matchData && (
                            <>
                                {/* Top: Score and Analysis */}
                                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 flex flex-col sm:flex-row items-center gap-6">
                                    <div className="relative w-32 h-32 shrink-0">
                                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-gray-100 dark:text-gray-700" />
                                            <circle 
                                                cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" 
                                                strokeDasharray="282.7" 
                                                strokeDashoffset={282.7 - (282.7 * matchPercentage) / 100}
                                                className={`${matchPercentage >= 75 ? 'text-green-500' : matchPercentage >= 50 ? 'text-yellow-500' : 'text-red-500'} transition-all duration-1000 ease-out`} 
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className={`text-3xl font-bold ${matchPercentage >= 75 ? 'text-green-500' : matchPercentage >= 50 ? 'text-yellow-500' : 'text-red-500'}`}>
                                                {matchPercentage}%
                                            </span>
                                            <span className="text-gray-400 text-xs">Match</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Overall Fit</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{analysis}</p>
                                    </div>
                                </div>

                                {/* Middle: Skills Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Matching Skills */}
                                    <div className="bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30 rounded-2xl p-5">
                                        <h4 className="font-semibold text-green-800 dark:text-green-400 mb-3 flex items-center gap-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            Matching Skills
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {matchingSkills?.length ? matchingSkills.map((skill: string, i: number) => (
                                                <span key={i} className="px-2.5 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                                                    {skill}
                                                </span>
                                            )) : <span className="text-xs text-green-600/70">No direct skill matches found.</span>}
                                        </div>
                                    </div>

                                    {/* Missing Skills */}
                                    <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-2xl p-5">
                                        <h4 className="font-semibold text-red-800 dark:text-red-400 mb-3 flex items-center gap-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                            Missing Skills
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {missingSkills?.length ? missingSkills.map((skill: string, i: number) => (
                                                <span key={i} className="px-2.5 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-medium rounded-full">
                                                    {skill}
                                                </span>
                                            )) : <span className="text-xs text-red-600/70">You match all required skills!</span>}
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom: Career Recommendations */}
                                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                        <span className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                        </span>
                                        Career Recommendations
                                    </h4>
                                    <ul className="space-y-3">
                                        {careerRecommendations?.map((rec: string, index: number) => (
                                            <li key={index} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/30 p-3 rounded-xl border border-gray-100 dark:border-gray-600">
                                                <span className="text-purple-500 font-bold mt-0.5">{index + 1}.</span>
                                                <span>{rec}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
