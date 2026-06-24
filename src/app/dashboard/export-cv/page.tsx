"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import CommonNav from "@/components/CommonNav";
import Footer from "@/components/Footer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ExportCVDashboard() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const websiteId = searchParams.get("websiteId");
    
    const [loading, setLoading] = useState(true);
    const [originalData, setOriginalData] = useState<any>(null);
    const [displayData, setDisplayData] = useState<any>(null);
    const [isAiOptimized, setIsAiOptimized] = useState(false);
    const [optimizing, setOptimizing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const cvRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!websiteId) {
            setError("No Portfolio ID provided.");
            setLoading(false);
            return;
        }
        fetchWebsiteData(websiteId);
    }, [websiteId]);

    const fetchWebsiteData = async (id: string) => {
        try {
            setLoading(true);
            const webResponse = await fetch(`/api/web-detail/${id}`);
            if (!webResponse.ok) throw new Error("Failed to load portfolio details.");
            const webData = await webResponse.json();
            
            if (!webData.success) throw new Error(webData.message);
            
            setOriginalData(webData.data.fieldsValues);
            setDisplayData(webData.data.fieldsValues);
        } catch (err: any) {
            console.error("Fetch Error:", err);
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    const handleOptimizeToggle = async () => {
        if (isAiOptimized) {
            // Revert to original
            setDisplayData(originalData);
            setIsAiOptimized(false);
            return;
        }

        // Condense using AI
        setOptimizing(true);
        try {
            const aiResponse = await fetch("/api/ai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "condenseForCV",
                    payload: { profileData: originalData }
                })
            });
            
            const aiData = await aiResponse.json();
            if (!aiData.success) throw new Error(aiData.error || "AI Condensing failed.");
            
            setDisplayData(aiData.data);
            setIsAiOptimized(true);
        } catch (err: any) {
            console.error("AI Error:", err);
            alert("Failed to optimize CV. " + err.message);
        } finally {
            setOptimizing(false);
        }
    };

    const downloadPDF = async () => {
        if (!cvRef.current) return;
        
        try {
            const canvas = await html2canvas(cvRef.current, {
                scale: 2,
                useCORS: true,
                logging: false
            });
            
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${displayData?.name?.replace(/\s+/g, '_') || 'Resume'}_CV.pdf`);
        } catch (err) {
            console.error("PDF generation error:", err);
            alert("Failed to generate PDF.");
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col">
                <CommonNav />
                <div className="flex-grow flex flex-col items-center justify-center p-8 text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600 mb-6"></div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Loading Profile...</h2>
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
                        <h2 className="text-xl font-bold mb-2">Failed to load</h2>
                        <p>{error}</p>
                        <button onClick={() => router.back()} className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Go Back</button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
            <CommonNav />
            <div className="flex-grow max-w-6xl mx-auto w-full p-4 sm:p-8">
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div className="flex items-center gap-4">
                        <button onClick={() => router.back()} className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                            <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        </button>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Export to PDF</h1>
                            <p className="text-gray-500 dark:text-gray-400">Preview and download your professional CV.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={handleOptimizeToggle}
                            disabled={optimizing}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all ${
                                isAiOptimized 
                                    ? 'bg-purple-100 text-purple-700 border border-purple-200 hover:bg-purple-200' 
                                    : 'bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100'
                            }`}
                        >
                            {optimizing ? (
                                <svg className="animate-spin h-4 w-4 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                            ) : (
                                <span>✨</span>
                            )}
                            {isAiOptimized ? "Revert to Original" : "AI Optimize for 1-Page"}
                        </button>
                        
                        <button 
                            onClick={downloadPDF}
                            className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-gray-900 to-black text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                            Download PDF
                        </button>
                    </div>
                </div>

                {/* CV Preview Area */}
                <div className="flex justify-center bg-gray-200 dark:bg-gray-800 p-8 rounded-2xl overflow-x-auto shadow-inner">
                    
                    <div 
                        ref={cvRef} 
                        className="bg-white text-black p-10 shadow-lg"
                        style={{ width: "210mm", minHeight: "297mm" }} // A4 size proportions
                    >
                        {/* Header */}
                        <div className="border-b-2 border-gray-800 pb-4 mb-6">
                            <h1 className="text-4xl font-extrabold uppercase tracking-wider text-gray-900">{displayData?.name || "Your Name"}</h1>
                            <h2 className="text-xl text-gray-600 font-medium mt-1">{displayData?.occupation || "Your Profession"}</h2>
                            
                            <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                                {displayData?.email && <span className="flex items-center gap-1">✉ {displayData.email}</span>}
                                {displayData?.telephoneNo && <span className="flex items-center gap-1">☏ {displayData.telephoneNo}</span>}
                                {displayData?.address && <span className="flex items-center gap-1">⌂ {displayData.address}</span>}
                            </div>
                        </div>

                        {/* Professional Summary */}
                        {displayData?.description && (
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wide border-b border-gray-300 pb-1 mb-2">Professional Summary</h3>
                                <p className="text-sm leading-relaxed text-gray-700">{displayData.description}</p>
                            </div>
                        )}

                        <div className="grid grid-cols-3 gap-8">
                            <div className="col-span-2">
                                {/* Experience */}
                                {displayData?.experience?.length > 0 && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wide border-b border-gray-300 pb-1 mb-3">Experience</h3>
                                        <div className="space-y-4">
                                            {displayData.experience.map((exp: any, i: number) => (
                                                <div key={i}>
                                                    <div className="flex justify-between items-baseline">
                                                        <h4 className="font-bold text-gray-900">{exp.title}</h4>
                                                        <span className="text-sm font-semibold text-gray-500">{exp.years}</span>
                                                    </div>
                                                    <div className="text-sm font-medium text-gray-700 mb-1">{exp.company}</div>
                                                    {exp.description && <p className="text-sm text-gray-600 leading-relaxed">{exp.description}</p>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Projects */}
                                {displayData?.projects?.length > 0 && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wide border-b border-gray-300 pb-1 mb-3">Projects</h3>
                                        <div className="space-y-4">
                                            {displayData.projects.map((proj: any, i: number) => (
                                                <div key={i}>
                                                    <div className="flex justify-between items-baseline">
                                                        <h4 className="font-bold text-gray-900">{proj.name}</h4>
                                                    </div>
                                                    {proj.description && <p className="text-sm text-gray-600 leading-relaxed mt-1">{proj.description}</p>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="col-span-1">
                                {/* Skills */}
                                {displayData?.skills?.length > 0 && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wide border-b border-gray-300 pb-1 mb-3">Skills</h3>
                                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                            {displayData.skills.map((skill: any, i: number) => (
                                                <li key={i}>{skill.value || skill}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Education */}
                                {displayData?.education?.length > 0 && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wide border-b border-gray-300 pb-1 mb-3">Education</h3>
                                        <div className="space-y-3">
                                            {displayData.education.map((edu: any, i: number) => (
                                                <div key={i}>
                                                    <h4 className="font-bold text-sm text-gray-900">{edu.degree}</h4>
                                                    <div className="text-sm text-gray-700">{edu.institution}</div>
                                                    <div className="text-xs text-gray-500 mt-0.5">{edu.year}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
