import { GoogleGenAI, Type, Schema } from "@google/genai";

// Initialize the Google Gen AI SDK
// It automatically picks up process.env.GEMINI_API_KEY
const ai = new GoogleGenAI({});

/**
 * Enhance text content (e.g., project descriptions, summaries)
 */
export async function enhanceContent(originalText: string, context: string = ""): Promise<string> {
    const prompt = `
    You are an expert career coach and professional copywriter.
    Enhance the following text to make it sound highly professional, impactful, and tailored for a CV or portfolio.
    Fix any grammatical errors and improve the vocabulary. 
    Maintain the original meaning but make it sound more impressive.
    
    Context about the user/role: ${context}
    
    Original Text:
    ${originalText}
    
    Enhanced Text:`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    
    return response.text || originalText;
}

/**
 * Analyze a CV / Profile and return structured quality analysis
 */
export async function analyzeProfile(profileData: any) {
    const prompt = `
    Analyze the following professional profile/CV data.
    Provide a quality score out of 100.
    Provide an analysis of the structure, readability, and ATS compliance.
    Identify missing information or weak areas.
    Provide 3-5 specific recommendations for improvement.
    
    Profile Data:
    ${JSON.stringify(profileData, null, 2)}
    `;

    const schema: Schema = {
        type: Type.OBJECT,
        properties: {
            score: { type: Type.INTEGER, description: "Overall quality score from 0 to 100" },
            feedback: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: "Specific feedback points on structure and readability"
            },
            missingInformation: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "What key information is missing from the profile?"
            },
            recommendations: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "Actionable recommendations for improvement"
            }
        },
        required: ["score", "feedback", "missingInformation", "recommendations"]
    };

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: schema,
        }
    });

    try {
        return JSON.parse(response.text || "{}");
    } catch (e) {
        console.error("Failed to parse AI response:", e);
        return null;
    }
}

/**
 * Match profile against a Job Description and provide Career Recommendations
 */
export async function matchJobDescription(profileData: any, jobDescription: string) {
    const prompt = `
    Compare the following professional profile against the provided Job Description.
    Evaluate how well the candidate matches the requirements.
    Identify matching skills and missing skills.
    Provide an overall match percentage.
    Also, act as a career coach and provide specific career recommendations on what the candidate should learn or do next to bridge the gap.
    
    Job Description:
    ${jobDescription}
    
    Profile Data:
    ${JSON.stringify(profileData, null, 2)}
    `;

    const schema: Schema = {
        type: Type.OBJECT,
        properties: {
            matchPercentage: { type: Type.INTEGER, description: "Match percentage from 0 to 100" },
            matchingSkills: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Skills that the candidate possesses which match the JD" },
            missingSkills: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Skills required by the JD that the candidate lacks" },
            analysis: { type: Type.STRING, description: "A short paragraph analyzing the fit" },
            careerRecommendations: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Advice on what skills or certifications to pursue next to bridge the gap" }
        },
        required: ["matchPercentage", "matchingSkills", "missingSkills", "analysis", "careerRecommendations"]
    };

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: schema,
        }
    });

    try {
        return JSON.parse(response.text || "{}");
    } catch (e) {
        console.error("Failed to parse AI response:", e);
        return null;
    }
}

/**
 * Condense and format profile data for a 1-page CV
 */
export async function condenseForCV(profileData: any) {
    const prompt = `
    You are an expert resume writer. The user wants to export their web portfolio to a clean, 1-page printable CV PDF.
    Take the following portfolio data and condense all long descriptions, summaries, and experience bullet points so they are extremely concise, impactful, and fit perfectly on a single page.
    Remove fluff and keep only the strongest achievements and keywords.
    Return the optimized JSON structure identical to the input schema but with shorter text.
    
    Original Data:
    ${JSON.stringify(profileData, null, 2)}
    `;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            responseMimeType: "application/json",
        }
    });

    try {
        return JSON.parse(response.text || "{}");
    } catch (e) {
        console.error("Failed to parse AI response:", e);
        return null;
    }
}
