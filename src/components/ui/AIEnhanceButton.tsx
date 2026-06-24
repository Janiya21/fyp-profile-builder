"use client";

import { useState } from "react";

interface AIEnhanceButtonProps {
    originalText: string;
    context?: string;
    onEnhanced: (enhancedText: string) => void;
    className?: string;
}

export default function AIEnhanceButton({ originalText, context = "", onEnhanced, className = "" }: AIEnhanceButtonProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleEnhance = async (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent form submission
        
        if (!originalText || originalText.trim().length < 10) {
            alert("Please write at least a few words before optimizing.");
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch("/api/ai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "enhanceContent",
                    payload: { originalText, context }
                })
            });

            const data = await response.json();
            if (data.success && data.data) {
                onEnhanced(data.data);
            } else {
                console.error("AI Enhancement failed:", data.error);
                alert("AI optimization failed. Please try again.");
            }
        } catch (error) {
            console.error("Error calling AI API:", error);
            alert("Network error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            type="button"
            onClick={handleEnhance}
            disabled={isLoading}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                isLoading 
                    ? "bg-gray-100 text-gray-400 cursor-wait" 
                    : "bg-gradient-to-r from-violet-100 to-indigo-100 text-indigo-700 hover:from-violet-200 hover:to-indigo-200 hover:shadow-sm"
            } border border-indigo-200 ${className}`}
        >
            {isLoading ? (
                <>
                    <svg className="animate-spin h-3 w-3 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Optimizing...
                </>
            ) : (
                <>
                    <span className="text-sm">✨</span>
                    AI Optimize
                </>
            )}
        </button>
    );
}
