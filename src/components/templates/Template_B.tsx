"use client";

import React from "react";

export default function TemplateA(props: any) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 lg:py-12 lg:px-4 py-4 px-1">

      <div className="relative z-10 lg:py-2 lg:px-4 py-1 px-1">
        <div className="max-w-5xl mx-auto">
          {/* Main Card with 3D Effect */}
          <div className="group relative transform hover:scale-[1.02] transition-all duration-700 ease-out">
            <div className="relative bg-white/95 backdrop-blur-xl  shadow-2xl overflow-hidden border border-white/20">
              <div className="relative bg-gradient-to-br from-slate-800 via-purple-800 to-indigo-900 text-white px-6 sm:px-8 py-12 overflow-hidden">

                {/* Floating orbs in header */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-purple-400/30 to-blue-400/30 rounded-full blur-xl animate-bounce"></div>
                <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>


                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  <div className="space-y-4">
                    <div className="transform hover:scale-105 transition-transform duration-300">
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-gradient-x">
                        {props.name}
                      </h1>
                      <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2 animate-pulse"></div>
                    </div>
                    <p className="text-xl sm:text-2xl text-purple-200 font-medium animate-slideInLeft">
                      {props.occupation}
                    </p>
                  </div>

                  {/* Contact Info Cards */}
                  <div className="space-y-4 animate-slideInRight">
                    <div className="group/contact flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                      <div className="p-2 bg-purple-500/30 rounded-xl group-hover/contact:rotate-12 transition-transform duration-300">
                        <svg className="w-5 h-5 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="text-purple-100 font-medium">{props.address}</span>
                    </div>

                    <div className="group/contact flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                      <div className="p-2 bg-blue-500/30 rounded-xl group-hover/contact:rotate-12 transition-transform duration-300">
                        <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="text-blue-100 font-medium">{props.telephoneNo}</span>
                    </div>

                    {props.email && (
                      <div className="group/contact flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                        <div className="p-2 bg-indigo-500/30 rounded-xl group-hover/contact:rotate-12 transition-transform duration-300">
                          <svg className="w-5 h-5 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-indigo-100 font-medium">{props.email}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="px-6 sm:px-8 py-10 lg:py-12 space-y-12">

                {/* About Section */}
                <section className="group/section animate-fadeInUp">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative">
                      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 group-hover/section:text-purple-700 transition-colors duration-300">
                        About Me
                      </h2>
                      <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-0 group-hover/section:w-full transition-all duration-500"></div>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-purple-200 to-transparent"></div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full opacity-50"></div>
                    <p className="text-gray-700 text-lg sm:text-xl leading-relaxed pl-8 transform group-hover/section:translate-x-2 transition-transform duration-300">
                      {props.description}
                    </p>
                  </div>
                </section>

                {/* Skills Section */}
                {props.skills && props.skills.length > 0 && (
                  <section className="group/section animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="relative">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 group-hover/section:text-purple-700 transition-colors duration-300">
                          Skills
                        </h2>
                        <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-0 group-hover/section:w-full transition-all duration-500"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-purple-200 to-transparent"></div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {props.skills.map((skill: any, index: any) => (
                        <div
                          key={index}
                          className="group/skill bg-gradient-to-br from-purple-50 to-pink-50 px-5 py-3 rounded-full border border-purple-200/50 hover:border-purple-400 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                        >
                          <span className="text-purple-800 font-semibold text-sm group-hover/skill:text-purple-900">
                            {skill.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Experience Section */}
                <section className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="relative group/title">
                      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 group-hover/title:text-indigo-700 transition-colors duration-300">
                        Experience
                      </h2>
                      <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-0 group-hover/title:w-full transition-all duration-500"></div>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-indigo-200 to-transparent"></div>
                  </div>

                  <div className="grid gap-6">
                    {props.experience?.map((exp: any, index: any) => (
                      <div
                        key={index}
                        className="group/exp relative transform hover:scale-[1.02] transition-all duration-500 hover:-translate-y-1"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200/50 group-hover/exp:shadow-2xl group-hover/exp:border-indigo-200 transition-all duration-500">

                          {/* Experience card header */}
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                            <div className="space-y-2">
                              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover/exp:text-indigo-700 transition-colors duration-300">
                                {exp.title}
                              </h3>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
                                <p className="text-gray-600 font-medium text-lg">{exp.company}</p>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-2 rounded-full">
                              <span className="text-indigo-700 font-semibold text-sm">{exp.years}</span>
                            </div>
                          </div>

                          {exp.description && (
                            <p className="text-gray-600 text-base leading-relaxed">
                              {exp.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Education Section */}
                {props.education && props.education.length > 0 && (
                  <section className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                    <div className="flex items-center gap-4 mb-10">
                      <div className="relative group/title">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 group-hover/title:text-blue-700 transition-colors duration-300">
                          Education
                        </h2>
                        <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-0 group-hover/title:w-full transition-all duration-500"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent"></div>
                    </div>

                    <div className="grid gap-6">
                      {props.education.map((edu: any, index: any) => (
                        <div
                          key={index}
                          className="group/edu relative transform hover:scale-[1.02] transition-all duration-500 hover:-translate-y-1"
                        >
                          <div className="relative bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-6 shadow-lg border border-gray-200/50 group-hover/edu:shadow-2xl group-hover/edu:border-blue-200 transition-all duration-500">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                              <div className="space-y-2">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover/edu:text-blue-700 transition-colors duration-300">
                                  {edu.degree}
                                </h3>
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                                  <p className="text-gray-600 font-medium text-lg">{edu.institution}</p>
                                </div>
                              </div>

                              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 px-4 py-2 rounded-full">
                                <span className="text-blue-700 font-semibold text-sm">{edu.year}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Projects Section */}
                {props.projects && props.projects.length > 0 && (
                  <section className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                    <div className="flex items-center gap-4 mb-10">
                      <div className="relative group/title">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 group-hover/title:text-emerald-700 transition-colors duration-300">
                          Projects
                        </h2>
                        <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-0 group-hover/title:w-full transition-all duration-500"></div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-emerald-200 to-transparent"></div>
                    </div>

                    <div className="grid gap-6">
                      {props.projects.map((project: any, index: any) => (
                        <div
                          key={index}
                          className="group/project relative transform hover:scale-[1.02] transition-all duration-500 hover:-translate-y-1"
                        >
                          <div className="relative bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-6 shadow-lg border border-gray-200/50 group-hover/project:shadow-2xl group-hover/project:border-emerald-200 transition-all duration-500">
                            <div className="space-y-3">
                              <div className="flex items-start justify-between gap-4">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover/project:text-emerald-700 transition-colors duration-300">
                                  {project.name}
                                </h3>
                                {project.link && (
                                  <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 p-2 bg-emerald-100 rounded-xl hover:bg-emerald-200 transition-colors duration-300 group-hover/project:rotate-12"
                                  >
                                    <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                  </a>
                                )}
                              </div>
                              <p className="text-gray-600 text-base leading-relaxed">
                                {project.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* Enhanced Footer */}
              <div className="relative bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 px-6 sm:px-8 py-8 text-center border-t border-gray-200/30 overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-8 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                    <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                    <div className="w-8 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                  </div>

                  <p className="text-gray-300 font-medium">
                    © {new Date().getFullYear()} {props.name}.
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent ml-1">
                      All rights reserved.
                    </span>
                  </p>

                  <div className="mt-4 flex justify-center">
                    <div className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                      <span className="text-white/70 text-sm">✨ Crafted with passion</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
    
    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 3s ease infinite;
    }
    
    .animate-slideInLeft {
      animation: slideInLeft 0.8s ease-out;
    }
    
    .animate-slideInRight {
      animation: slideInRight 0.8s ease-out;
    }
    
    .animate-fadeInUp {
      animation: fadeInUp 0.8s ease-out both;
    }
  `}</style>

    </div>
  );
}