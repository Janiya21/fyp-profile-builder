"use client";

import React, { useState, useEffect } from "react";

export default function TemplateE(props: any) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSectionChange = (section: any) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900 relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-xl animate-float-medium"></div>
        <div className="absolute bottom-40 left-40 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-float-fast"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-xl animate-float-slow"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        {/* Left Sidebar - Profile */}
        <div className={`w-full lg:w-2/5 xl:w-1/3 bg-white/10 backdrop-blur-xl lg:border-r border-white/20 p-4 sm:p-6 lg:p-8 xl:p-12 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>

          {/* Profile Header */}
          <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-500">
            <div className="relative inline-block mb-8">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full p-1">
                <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-6xl font-bold text-white">
                  {props.name ? props.name.charAt(0) : 'User'}
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-white/20 animate-pulse"></div>
            </div>

            <h1 className="text-2xl lg:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              {props.name || "Professional Name"}
            </h1>

            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <p className="text-blue-200 font-semibold text-lg">
                {props.occupation || "Professional Title"}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="p-3 bg-emerald-500/30 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-6 h-6 text-emerald-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-white/90 font-medium text-left">
                  {props.address || "Professional Address"}
                </span>
              </div>

              <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="p-3 bg-blue-500/30 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-white/90 font-medium">
                  {props.telephoneNo || "+1 (555) 123-4567"}
                </span>
              </div>

              {props.email && (
                <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="p-3 bg-purple-500/30 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                    <svg className="w-6 h-6 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-white/90 font-medium">
                    {props.email}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            {[
              { id: 'about', label: 'About', icon: '👤' },
              { id: 'experience', label: 'Experience', icon: '💼' },
              { id: 'skills', label: 'Skills', icon: '🚀' },
              { id: 'education', label: 'Education', icon: '🎓' },
              { id: 'projects', label: 'Projects', icon: '⚡' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionChange(item.id)}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 transform hover:scale-105 ${activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 border-blue-400/50 text-white'
                    : 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-semibold text-md">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Content Area */}
        <div className={`flex-1 p-4 sm:p-6 lg:p-8 xl:p-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>

          {/* About Section */}
          {activeSection === 'about' && (
            <div className="animate-fade-in-up">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  About Me
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 xl:p-12 border border-white/20 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-xl xl:text-xl leading-relaxed text-white/90 font-light">
                    {props.description || "I am a dedicated professional committed to excellence in my field. With years of experience and a passion for continuous learning, I strive to make a meaningful impact in everything I do."}
                  </p>
                </div>

                {/* Stats Cards */}
                <div className="rid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
                  <div className="text-center mb-6 p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold text-blue-300 mb-2">
                      {props.experience?.length || "5+"}
                    </div>
                    <div className="text-white/70 font-medium">Years Experience</div>
                  </div>

                  <div className="text-center mb-6 p-6 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold text-emerald-300 mb-2">
                      {props.projects?.length || "50+"}
                    </div>
                    <div className="text-white/70 font-medium">Projects Completed</div>
                  </div>

                  <div className="text-center mb-6 p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold text-purple-300 mb-2">
                      {props.skills?.length || "10+"}
                    </div>
                    <div className="text-white/70 font-medium">Core Skills</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Experience Section */}
          {activeSection === 'experience' && (
            <div className="animate-fade-in-up">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Experience
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mb-8"></div>
              </div>

              <div className="space-y-8">
                {(props.experience || [
                  { title: "Senior Professional", company: "Leading Organization", years: "2020 - Present", description: "Leading innovative projects and mentoring team members to achieve exceptional results." },
                  { title: "Professional", company: "Previous Company", years: "2018 - 2020", description: "Developed expertise in core competencies while contributing to major initiatives." }
                ]).map((exp: any, index: number) => (
                  <div
                    key={index}
                    className="group relative bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                    <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-6">
                      <div className="flex-1">
                        <h3 className="text-2xl xl:text-3xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                          <p className="text-xl text-blue-200 font-semibold">{exp.company}</p>
                        </div>
                        {exp.description && (
                          <p className="text-lg text-white/80 leading-relaxed font-light">
                            {exp.description}
                          </p>
                        )}
                      </div>

                      <div className="bg-gradient-to-r from-emerald-500/30 to-blue-500/30 px-6 py-3 rounded-full border border-white/20">
                        <span className="text-white font-semibold whitespace-nowrap">{exp.years}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <div className="animate-fade-in-up">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  Skills
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {(props.skills || [
                  { value: "Leadership" },
                  { value: "Communication" },
                  { value: "Problem Solving" },
                  { value: "Project Management" },
                  { value: "Team Collaboration" },
                  { value: "Strategic Planning" }
                ]).map((skill: any, index: number) => (
                  <div
                    key={index}
                    className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg"></div>
                      </div>
                      <span className="text-white font-semibold text-lg group-hover:text-purple-300 transition-colors duration-300">
                        {skill.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education Section */}
          {activeSection === 'education' && (
            <div className="animate-fade-in-up">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Education
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-8"></div>
              </div>

              <div className="space-y-8">
                {(props.education || [
                  { degree: "Master's Degree", institution: "Prestigious University", year: "2020" },
                  { degree: "Bachelor's Degree", institution: "Leading College", year: "2018" }
                ]).map((edu: any, index: number) => (
                  <div
                    key={index}
                    className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl xl:text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-xl text-cyan-200 font-semibold">{edu.institution}</p>
                      </div>
                      <div className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30 px-6 py-3 rounded-full border border-white/20">
                        <span className="text-white font-semibold">{edu.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Section */}
          {activeSection === 'projects' && (
            <div className="animate-fade-in-up">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Projects
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-8"></div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {(props.projects || [
                  { name: "Innovation Initiative", description: "Led a groundbreaking project that transformed operational efficiency and user experience." },
                  { name: "Excellence Program", description: "Developed comprehensive strategies that improved outcomes by 40% across multiple metrics." }
                ]).map((project: any, index: number) => (
                  <div
                    key={index}
                    className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-white/80 text-lg leading-relaxed font-light mb-6">
                      {project.description}
                    </p>
                    {project.link && (
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-2 text-orange-300 hover:text-orange-200 font-semibold transition-colors duration-300"
                      >
                        View Project
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-40px) rotate(180deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out both;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
}