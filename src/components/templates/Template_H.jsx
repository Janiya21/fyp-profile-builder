"use client"
import React from "react";

export default function TemplateH(props) {
    // Sample data structure based on the provided object
    const sampleData = {
        photoUrl: "https://randomuser.me/api/portraits/women/45.jpg",
        name: "Sarah M. Williams",
        position: "Content Creator & Social Media Strategist",
        company: "Creative Digital Studios",
        industry: "Digital Marketing & Influencer Management",
        telephoneNo: "+1 (555) 123-4567",
        email: "sarah@creativedigital.com",
        address: "Los Angeles, CA 90210",
        socialLinks: {
            linkedIn: "https://linkedin.com/in/sarahwilliams",
            twitter: "https://twitter.com/sarahcreates",
            instagram: "https://instagram.com/sarahcreates"
        },
        summary: "Creative digital strategist with 8+ years of experience building engaging content and growing online communities. Specialized in brand storytelling, influencer partnerships, and social media growth strategies that drive authentic engagement and measurable results.",
        coreCompetencies: [
            { value: "Content Strategy & Creation" },
            { value: "Social Media Management" },
            { value: "Brand Partnerships" },
            { value: "Influencer Marketing" },
            { value: "Community Building" },
            { value: "Creative Direction" }
        ],
        experience: [
            {
                title: "Senior Content Creator",
                company: "Creative Digital Studios",
                location: "Los Angeles, CA",
                years: "2020-Present",
                achievements: [
                    { value: "Grew Instagram following from 50K to 500K+ in 2 years" },
                    { value: "Created viral campaigns reaching 10M+ impressions" },
                    { value: "Managed $2M+ in brand partnership revenue" }
                ]
            },
            {
                title: "Social Media Manager",
                company: "Lifestyle Brands Co.",
                location: "San Francisco, CA",
                years: "2018-2020",
                achievements: [
                    "Increased engagement rates by 300% across all platforms",
                    "Launched successful influencer collaboration program",
                    "Developed content calendar system adopted company-wide"
                ]
            }
        ],
        education: [
            {
                degree: "Bachelor of Arts, Digital Media",
                institution: "UCLA",
                year: "2014-2018"
            }
        ],
        certifications: [
            {
                name: "Google Analytics Certified",
                issuingOrganization: "Google",
                year: "2022"
            },
            {
                name: "Facebook Blueprint Certification",
                issuingOrganization: "Meta",
                year: "2021"
            }
        ]
    };

    // Use provided props or fall back to sample data
    //   const data = { ...sampleData, ...props };
    const data = sampleData;

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white py-8 px-4">
            {/* Floating background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-3xl animate-bounce"></div>
                <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-gradient-to-br from-pink-100/20 to-white/20 rounded-full blur-3xl animate-bounce"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="group relative mb-12 transform hover:scale-[1.02] transition-all duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-300/20 to-purple-300/20 blur-xl rounded-3xl"></div>
                    <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl overflow-hidden">
                        <div className="bg-gradient-to-br from-pink-400 via-purple-400 to-pink-500 text-white p-8 relative overflow-hidden">
                            {/* Sparkle effects */}
                            <div className="absolute top-8 right-8 w-3 h-3 bg-white rounded-full animate-ping"></div>
                            <div className="absolute top-16 right-16 w-2 h-2 bg-pink-200 rounded-full animate-pulse"></div>
                            <div className="absolute bottom-8 left-8 w-4 h-4 bg-purple-200 rounded-full animate-bounce"></div>

                            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
                                {/* Profile Photo */}
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <img
                                        src={data.photoUrl}
                                        alt={data.name}
                                        className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-white/50 shadow-xl transform group-hover:scale-110 transition-all duration-500"
                                    />
                                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Name and Title */}
                                <div className="text-center lg:text-left flex-1 space-y-4">
                                    <div className="transform hover:scale-105 transition-transform duration-300">
                                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent">
                                            {data.name}
                                        </h1>
                                        <div className="h-1 w-24 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full mt-3 mx-auto lg:mx-0 animate-pulse"></div>
                                    </div>
                                    <p className="text-xl lg:text-2xl text-pink-100 font-medium">
                                        {data.position}
                                    </p>
                                    <p className="text-lg text-purple-100 opacity-90">
                                        {data.company} • {data.industry}
                                    </p>
                                </div>

                                {/* Contact Cards */}
                                <div className="space-y-3">
                                    <div className="group flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-2xl px-4 py-3 hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:rotate-1">
                                        <div className="p-2 bg-pink-500/40 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                                            <svg className="w-5 h-5 text-pink-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <span className="text-pink-50 font-medium text-sm lg:text-base">{data.email}</span>
                                    </div>

                                    <div className="group flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-2xl px-4 py-3 hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:-rotate-1">
                                        <div className="p-2 bg-purple-500/40 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                                            <svg className="w-5 h-5 text-purple-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <span className="text-purple-50 font-medium text-sm lg:text-base">{data.telephoneNo}</span>
                                    </div>

                                    <div className="group flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-2xl px-4 py-3 hover:bg-white/25 transition-all duration-300 hover:scale-105 hover:rotate-1">
                                        <div className="p-2 bg-pink-400/40 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                                            <svg className="w-5 h-5 text-pink-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <span className="text-pink-50 font-medium text-sm lg:text-base">{data.address}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Summary Section */}
                        <div className="group relative transform hover:scale-[1.02] transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 to-purple-200/30 blur-xl rounded-2xl"></div>
                            <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl shadow-lg">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                        Professional Summary
                                    </h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {data.summary}
                                </p>
                            </div>
                        </div>

                        {/* Experience Section */}
                        <div className="group relative transform hover:scale-[1.02] transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-200/30 to-pink-200/30 blur-xl rounded-2xl"></div>
                            <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl shadow-lg">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                        Professional Experience
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    {data.experience?.map((exp, index) => (
                                        <div key={index} className="relative">
                                            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                                                    <p className="text-lg text-pink-600 font-semibold">{exp.company}</p>
                                                    <p className="text-gray-600">{exp.location}</p>
                                                </div>
                                                <div className="px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full border border-pink-200">
                                                    <span className="text-pink-700 font-medium text-sm">{exp.years}</span>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                {exp.achievements?.map((achievement, achIndex) => (
                                                    <div key={achIndex} className="flex items-start gap-3 group">
                                                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                                                        <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                                                            {typeof achievement === 'object' ? achievement.value : achievement}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>

                                            {index < data.experience.length - 1 && (
                                                <div className="mt-8 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent"></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {/* Core Competencies */}
                        <div className="group relative transform hover:scale-[1.02] transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-200/40 to-purple-200/40 blur-xl rounded-2xl"></div>
                            <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-gradient-to-br from-pink-400 to-purple-400 rounded-xl shadow-lg">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                        Core Skills
                                    </h2>
                                </div>

                                <div className="space-y-3">
                                    {data.coreCompetencies?.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="group p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-100 hover:border-pink-200 hover:shadow-md transition-all duration-300 transform hover:scale-105"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                                                <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                                                    {typeof skill === 'object' ? skill.value : skill}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="group relative transform hover:scale-[1.02] transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-200/40 to-pink-200/40 blur-xl rounded-2xl"></div>
                            <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl shadow-lg">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                        Education
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    {data.education?.map((edu, index) => (
                                        <div key={index} className="group p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:border-purple-200 hover:shadow-md transition-all duration-300">
                                            <h3 className="font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-purple-600 font-medium">{edu.institution}</p>
                                            <p className="text-gray-600 text-sm">{edu.year}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Certifications */}
                        {data.certifications && data.certifications.length > 0 && (
                            <div className="group relative transform hover:scale-[1.02] transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-200/40 to-purple-200/40 blur-xl rounded-2xl"></div>
                                <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl p-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-gradient-to-br from-pink-400 to-purple-400 rounded-xl shadow-lg">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                            Certifications
                                        </h2>
                                    </div>

                                    <div className="space-y-4">
                                        {data.certifications.map((cert, index) => (
                                            <div key={index} className="group p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-100 hover:border-pink-200 hover:shadow-md transition-all duration-300">
                                                <h3 className="font-bold text-gray-800 group-hover:text-pink-700 transition-colors duration-300">
                                                    {cert.name}
                                                </h3>
                                                <p className="text-pink-600 font-medium">{cert.issuingOrganization}</p>
                                                <p className="text-gray-600 text-sm">{cert.year}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Social Links */}
                        {data.socialLinks && (
                            <div className="group relative transform hover:scale-[1.02] transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-200/40 to-pink-200/40 blur-xl rounded-2xl"></div>
                                <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl p-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl shadow-lg">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                            </svg>
                                        </div>
                                        <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                            Connect With Me
                                        </h2>
                                    </div>

                                    <div className="space-y-3">
                                        {Object.entries(data.socialLinks).map(([platform, url], index) => (
                                            <a
                                                key={platform}
                                                href={url}
                                                className="group flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:border-purple-200 hover:shadow-md transition-all duration-300 transform hover:scale-105"
                                            >
                                                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                                                <span className="text-gray-700 font-medium capitalize group-hover:text-purple-700 transition-colors duration-300">
                                                    {platform}
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-white/50 shadow-lg">
                        <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-600 font-medium">✨ Crafted with creativity & passion</span>
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}