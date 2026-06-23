"use client";

import React, { useState, useEffect } from "react";


export default function TemplateM(props) {
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        // Trigger animations after component mounts
        setHasAnimated(true);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
            <div
                className={`max-w-7xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden transition-all duration-700 ease-out transform ${hasAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
            >
                {/* Header/Hero Section */}
                <div className="relative bg-gradient-to-br py-8 from-indigo-600 to-sky-800 text-white p-4 md:px-6 lg:px-16 flex flex-col items-center justify-center text-center">
                    {/* Subtle background pattern/texture */}
                    <div className="absolute inset-0 opacity-10"></div>
                    {/* <div className="relative z-10 mb-6 transition-all duration-700 ease-out delay-200 transform scale-0 animate-scale-in-slow">
                        Profile Photo Placeholder
                        <div className="h-36 w-36 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center shadow-lg mx-auto">
                            <span className="text-6xl text-gray-600 font-extrabold uppercase">
                                {props.name?.charAt(0) || "P"}
                            </span>
                        </div>
                    </div> */}

                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 animate-fade-in-up delay-300">
                        {props.name || "Your Name Here"}
                    </h1>
                    <p className="text-xl md:text-2xl font-light opacity-90 mb-4 animate-fade-in-up delay-400">
                        {props.occupation || "Your Professional Title"}
                    </p>
                    <p className="max-w-3xl text-sm md:text-base text-gray-100 opacity-60 leading-relaxed animate-fade-in-up delay-500">
                        {props.description ||
                            "A passionate and results-driven professional dedicated to creating impactful solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    </p>
                </div>

                {/* Contact Info Bar */}
                <div className="bg-gray-100 py-4 px-6 md:px-12 lg:px-16 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-gray-700 text-sm md:text-base border-b border-gray-200 animate-fade-in-up delay-600">
                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" /></svg>
                        <span>{props.address || "City, Country"}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.32.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.75-.25 1.02l-2.2 2.2z" /></svg>
                        <span>{props.telephoneNo || "+123 456 7890"}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                        <span>{props.email || "email@example.com"}</span>
                    </div>
                </div>

                {/* Main Content Sections */}
                <div className="p-6 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Left Column (Experience & Projects) */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Experience Section */}
                        <section className={`bg-gray-50 p-6 rounded-lg shadow-inner border border-gray-100 transition-all duration-700 ease-out delay-700 transform translate-y-5 opacity-0 ${hasAnimated ? "animate-fade-in-up" : ""}`}>
                            <h2 className="text-3xl font-bold text-sky-600 mb-6 border-b-2 border-indigo-200 pb-3 flex items-center">
                                <span className="text-sky-600 mr-3 text-4xl leading-none">💼</span> Professional Experience
                            </h2>
                            <div className="space-y-8">
                                {props.experience && props.experience.length > 0 ? (
                                    props.experience.map((exp, index) => (
                                        <div
                                            key={index}
                                            className="relative pl-8 pb-4 group hover:bg-gray-100 -mx-6 px-6 py-2 rounded-lg transition-all duration-200"
                                        >
                                            <div className="absolute left-0 top-0 w-1 h-full bg-indigo-300 group-hover:bg-indigo-500 rounded-full transition-colors duration-200"></div>
                                            {/* <div className="absolute left-0 top-0 mt-4 -ml-2 w-4 h-4 rounded-full bg-indigo-500 group-hover:bg-indigo-700 transition-colors duration-200 transform scale-100 group-hover:scale-125"></div> */}
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                                <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                                                <span className="text-gray-600 text-sm sm:text-base font-medium">{exp.years}</span>
                                            </div>
                                            <p className="text-indigo-600 font-medium mb-2">{exp.company}</p>
                                            {exp.description && (
                                                <p className="text-gray-700 leading-relaxed text-sm">{exp.description}</p>
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 italic">No professional experience listed.</p>
                                )}
                            </div>
                        </section>

                        {/* Projects Section */}
                        {props.projects && props.projects.length > 0 && (
                            <section className={`bg-gray-50 p-6 rounded-lg shadow-inner border border-gray-100 transition-all duration-700 ease-out delay-800 transform translate-y-5 opacity-0 ${hasAnimated ? "animate-fade-in-up" : ""}`}>
                                <h2 className="text-3xl font-bold text-sky-600 mb-6 border-b-2 border-indigo-200 pb-3 flex items-center">
                                    <span className="text-sky-600 mr-3 text-4xl leading-none">🚀</span> Notable Projects
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {props.projects.map((project, index) => (
                                        <div
                                            key={index}
                                            className="bg-white p-5 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                                        >
                                            <h3 className="font-bold text-xl text-gray-900 mb-2">{project.name}</h3>
                                            <p className="text-gray-700 text-sm leading-relaxed mb-4">{project.description}</p>
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-200"
                                                >
                                                    View Project
                                                    <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
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
                        <section className={`bg-gray-50 p-6 rounded-lg shadow-inner border border-gray-100 transition-all duration-700 ease-out delay-900 transform translate-y-5 opacity-0 ${hasAnimated ? "animate-fade-in-up" : ""}`}>
                            <h2 className="text-3xl font-bold text-sky-600 mb-6 border-b-2 border-indigo-200 pb-3 flex items-center">
                                <span className="text-sky-600 mr-3 text-4xl leading-none">💡</span> Skills & Expertise
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {props.skills && props.skills.length > 0 ? (
                                    props.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-sky-100 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-200 hover:text-indigo-800 transition-colors duration-200 shadow-sm"
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
                        <section className={`bg-gray-50 p-6 rounded-lg shadow-inner border border-gray-100 transition-all duration-700 ease-out delay-1000 transform translate-y-5 opacity-0 ${hasAnimated ? "animate-fade-in-up" : ""}`}>
                            <h2 className="text-3xl font-bold text-sky-600 mb-6 border-b-2 border-indigo-200 pb-3 flex items-center">
                                <span className="text-sky-600 mr-3 text-4xl leading-none">🎓</span> Education
                            </h2>
                            <div className="space-y-6">
                                {props.education && props.education.length > 0 ? (
                                    props.education.map((edu, index) => (
                                        <div
                                            key={index}
                                            className="relative pl-8 pb-4 group hover:bg-gray-100 -mx-6 px-6 py-2 rounded-lg transition-all duration-200"
                                        >
                                            <div className="absolute left-0 top-0 w-1 h-full bg-blue-300 group-hover:bg-blue-500 rounded-full transition-colors duration-200"></div>
                                            {/* <div className="absolute left-0 top-0 mt-3 -ml-2 w-4 h-4 rounded-full bg-blue-500 group-hover:bg-blue-700 transition-colors duration-200 transform scale-100 group-hover:scale-125"></div> */}
                                            <h3 className="font-bold text-xl text-gray-900">{edu.degree}</h3>
                                            <p className="text-gray-700 text-base">{edu.institution}</p>
                                            <p className="text-gray-500 text-sm mt-1">{edu.year}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 italic">No education listed.</p>
                                )}
                            </div>
                        </section>

                        {/* Optional: Call to Action/Social Links */}
                        {/*
            <section className={`bg-indigo-600 text-white p-6 rounded-lg shadow-lg text-center transition-all duration-700 ease-out delay-[1100ms] transform translate-y-5 opacity-0 ${hasAnimated ? "animate-fade-in-up" : ""}`}>
              <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
              <p className="mb-6 opacity-90">I'm always open to new opportunities and collaborations.</p>
              <div className="flex justify-center space-x-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white text-indigo-600 rounded-full flex items-center justify-center text-xl hover:bg-indigo-100 transition-colors duration-200 shadow-md">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white text-indigo-600 rounded-full flex items-center justify-center text-xl hover:bg-indigo-100 transition-colors duration-200 shadow-md">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </section>
            */}
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-900 text-white py-6 px-8 text-center rounded-b-xl border-t border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto text-sm">
                        <p className="text-gray-300">
                            &copy; {new Date().getFullYear()} {props.name || "Your Name"}. All rights reserved.
                        </p>
                        <p className="text-gray-400 mt-2 md:mt-0">
                            {props.email || "email@example.com"}
                        </p>
                    </div>
                </div>
            </div>
            <style jsx global>{`
        @keyframes fade-in-up {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
                }

                @keyframes scale-in-slow {
                from {
                    transform: scale(0.5) translateX(-50%);
                    opacity: 0;
                }
                to {
                    transform: scale(1) translateX(-50%);
                    opacity: 1;
                }
                }
      `}</style>
        </div>
    );
}