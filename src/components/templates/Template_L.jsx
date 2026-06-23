"use client";

import React, { useState, useEffect } from "react";


export default function TemplateL(props) {
    // State for controlling animations (optional, but good for sequential animations)
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        // Trigger animations after component mounts
        setHasAnimated(true);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-2 sm:p-4 md:p-8 font-sans antialiased">
            <div
                className={`max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-700 ease-out transform ${hasAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
            >
                {/* Header - Gradient Banner & Profile Photo */}
                <div className="relative">
                    <div className="py-12 lg:py-16 bg-gradient-to-br from-blue-600 to-gray-700 flex items-center justify-center p-4">
                        {/* Optional: Add a subtle pattern or texture to the banner */}
                        <h2 className="text-white text-3xl sm:text-4xl font-extrabold tracking-wide drop-shadow-lg text-center">
                            {props.name || "Portfolio"}
                        </h2>
                    </div>
                    {/* <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                        <div className="h-32 w-32 sm:h-40 sm:w-40 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center shadow-lg transition-all duration-700 ease-out delay-200 transform scale-0 animate-scale-in">
                            <span className="text-5xl sm:text-6xl text-gray-600 font-extrabold uppercase">
                                {props.name?.charAt(0) || "J"}
                            </span>
                        </div>
                    </div> */}
                </div>

                {/* Main Content Area */}
                <div className="mt-5 px-4 sm:px-6 md:px-10 pb-8 sm:pb-12">
                    {/* Personal Info & Contact Details */}
                    <div className="text-center mb-10 transition-all duration-700 ease-out delay-300 transform translate-y-5 animate-fade-up">
                        {/* <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
                            {props.name || "Your Name"}
                        </h1> */}
                        <p className="text-xl sm:text-2xl text-indigo-700 font-semibold mb-4">
                            {props.occupation || "Your Occupation"}
                        </p>
                        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            {props.description ||
                                "A dedicated professional with a passion for innovation and problem-solving. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        </p>

                        {/* Contact Information */}
                        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-700 text-sm sm:text-base">
                            <div className="flex items-center space-x-2">
                                <svg
                                    className="w-5 h-5 text-indigo-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                                </svg>
                                <span>{props.address || "123 Street, City, Country"}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg
                                    className="w-5 h-5 text-indigo-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.32.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.75-.25 1.02l-2.2 2.2z" />
                                </svg>
                                <span>{props.telephoneNo || "+123 456 7890"}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg
                                    className="w-5 h-5 text-indigo-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                <span>{props.email || "email@example.com"}</span>
                            </div>
                        </div>
                    </div>

                    {/* Grid Layout for Sections */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-14 mt-10">
                        {/* Left Column (Experience & Projects) */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Experience Section */}
                            <section
                                className={`transition-all duration-700 ease-out delay-400 transform translate-y-5 opacity-0 ${hasAnimated ? "animate-fade-up" : ""
                                    }`}
                            >
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center border-b-2 border-indigo-200 pb-2">
                                    <span className="w-4 h-4 bg-indigo-600 rounded-full mr-3 animate-pulse-light"></span>
                                    Professional Experience
                                </h2>
                                <div className="space-y-8">
                                    {props.experience && props.experience.length > 0 ? (
                                        props.experience.map((exp, index) => (
                                            <div
                                                key={index}
                                                className="pl-6 border-l-2 border-indigo-300 relative group transition-all duration-300 hover:border-indigo-500"
                                            >
                                                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-indigo-400 group-hover:bg-indigo-600 transition-all duration-300 transform group-hover:scale-125"></div>
                                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                                                    <h3 className="text-xl font-semibold text-gray-800">
                                                        {exp.title}
                                                    </h3>
                                                    <span className="text-indigo-600 font-medium text-sm sm:text-base">
                                                        {exp.years}
                                                    </span>
                                                </div>
                                                <p className="text-gray-600 font-medium mt-1">
                                                    {exp.company}
                                                </p>
                                                {exp.description && (
                                                    <p className="text-gray-700 mt-2 leading-relaxed text-sm sm:text-base">
                                                        {exp.description}
                                                    </p>
                                                )}
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-500 italic">No experience listed.</p>
                                    )}
                                </div>
                            </section>

                            {/* Projects Section */}
                            {props.projects && props.projects.length > 0 && (
                                <section
                                    className={`transition-all duration-700 ease-out delay-500 transform translate-y-5 opacity-0 ${hasAnimated ? "animate-fade-up" : ""
                                        }`}
                                >
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center border-b-2 border-indigo-200 pb-2">
                                        <span className="w-4 h-4 bg-blue-600 rounded-full mr-3 animate-pulse-light"></span>
                                        Notable Projects
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {props.projects.map((project, index) => (
                                            <div
                                                key={index}
                                                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                                            >
                                                <h3 className="font-bold text-lg text-gray-800 mb-2">
                                                    {project.name}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                    {project.description}
                                                </p>
                                                {project.link && (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-200 group"
                                                    >
                                                        View Project
                                                        <svg
                                                            className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                            ></path>
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>

                        {/* Right Column (Skills & Education) */}
                        <div className="space-y-12">
                            {/* Skills Section */}
                            <section
                                className={`transition-all duration-700 ease-out delay-600 transform translate-y-5 opacity-0 ${hasAnimated ? "animate-fade-up" : ""
                                    }`}
                            >
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center border-b-2 border-indigo-200 pb-2">
                                    <span className="w-4 h-4 bg-green-600 rounded-full mr-3 animate-pulse-light"></span>
                                    Skills & Expertise
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {props.skills && props.skills.length > 0 ? (
                                        props.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition-colors duration-200 cursor-default shadow-sm"
                                            >
                                                {skill.value}
                                            </span>
                                        ))
                                    ) : (
                                        <p className="text-gray-500 italic">No skills listed.</p>
                                    )}
                                </div>
                            </section>

                            {/* Education Section */}
                            <section
                                className={`transition-all duration-700 ease-out delay-700 transform translate-y-5 opacity-0 ${hasAnimated ? "animate-fade-up" : ""
                                    }`}
                            >
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center border-b-2 border-indigo-200 pb-2">
                                    <span className="w-4 h-4 bg-orange-600 rounded-full mr-3 animate-pulse-light"></span>
                                    Education
                                </h2>
                                <div className="space-y-6">
                                    {props.education && props.education.length > 0 ? (
                                        props.education.map((edu, index) => (
                                            <div
                                                key={index}
                                                className="pl-6 border-l-2 border-orange-300 relative group transition-all duration-300 hover:border-orange-500"
                                            >
                                                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-orange-400 group-hover:bg-orange-600 transition-all duration-300 transform group-hover:scale-125"></div>
                                                <h3 className="font-bold text-lg text-gray-800">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-gray-600 text-base">{edu.institution}</p>
                                                <p className="text-gray-500 text-sm mt-1">{edu.year}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-500 italic">No education listed.</p>
                                    )}
                                </div>
                            </section>

                            {/* Social Links (Optional - Uncomment and fill with actual links) */}
                            {/*
              <section
                className={`transition-all duration-700 ease-out delay-800 transform translate-y-5 opacity-0 ${
                  hasAnimated ? "animate-fade-up" : ""
                }`}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center border-b-2 border-indigo-200 pb-2">
                  <span className="w-4 h-4 bg-purple-600 rounded-full mr-3 animate-pulse-light"></span>
                  Connect
                </h2>
                <div className="flex space-x-4 justify-center sm:justify-start">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 rounded-full flex items-center justify-center text-lg transition-colors duration-200 shadow-sm hover:shadow-md">
                    <i className="fab fa-linkedin-in"></i> // Use Font Awesome or similar
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 rounded-full flex items-center justify-center text-lg transition-colors duration-200 shadow-sm hover:shadow-md">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 rounded-full flex items-center justify-center text-lg transition-colors duration-200 shadow-sm hover:shadow-md">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </section>
              */}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-900 text-white py-6 px-8 text-center rounded-b-2xl">
                    <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
                        <p className="text-gray-300 text-sm">
                            &copy; {new Date().getFullYear()} {props.name || "Your Name"}. All
                            rights reserved.
                        </p>
                        <p className="text-gray-400 mt-2 md:mt-0 text-sm">
                            {props.email || "email@example.com"}
                        </p>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                @keyframes fade-up {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                        }

                        @keyframes scale-in {
                        from {
                            transform: scale(0) translateX(-50%);
                            opacity: 0;
                        }
                        to {
                            transform: scale(1) translateX(-50%);
                            opacity: 1;
                        }
                        }

                        @keyframes pulse-light {
                        0%,
                        100% {
                            transform: scale(1);
                            opacity: 1;
                        }
                        50% {
                            transform: scale(1.1);
                            opacity: 0.7;
                        }
                        }
      `}</style>
        </div>
    );
}