"use client";

import React from "react";

export default function TemplateJ(props) {
  // Default props for demonstration
  const defaultProps = {
    photoUrl: "https://randomuser.me/api/portraits/men/42.jpg",
    name: "Jonathan R. Kensington",
    position: "Elite Personal Trainer & Performance Coach",
    company: "Horizon Fitness Academy",
    industry: "Fitness & Athletic Performance",
    telephoneNo: "+1 (212) 555-0198",
    email: "jkensington@horizonfitness.com",
    address: "200 Park Avenue, New York, NY 10166",
    socialLinks: {
      linkedIn: "https://linkedin.com/in/jkensington",
      twitter: "https://twitter.com/jrkensington"
    },
    summary: "Elite performance coach with 15+ years of experience transforming athletes and fitness enthusiasts. Specializing in strength training, athletic performance optimization, and holistic wellness programs that deliver measurable results.",
    coreCompetencies: [
      {value:"Strength & Conditioning"},
      {value:"Athletic Performance Training"},
      {value:"Nutrition & Meal Planning"},
      {value:"Injury Prevention & Recovery"},
      {value:"Mental Performance Coaching"},
      {value:"Body Composition Analysis"}
    ],
    experience: [
      {
        title: "Elite Personal Trainer & Performance Coach",
        company: "Horizon Fitness Academy",
        location: "New York, NY",
        years: "2018-Present",
        achievements: [
          {value:"Trained 50+ professional athletes achieving 95% performance improvement"},
          {value:"Developed signature training programs adopted by 12 fitness centers"},
          {value:"Reduced client injury rates by 85% through preventive conditioning protocols"}
        ]
      },
      {
        title: "Senior Strength Coach",
        company: "Elite Performance Center",
        location: "Chicago, IL",
        years: "2012-2018",
        achievements: [
          "Led team of 8 trainers serving 200+ clients monthly",
          "Designed rehabilitation programs with 98% success rate",
          "Implemented performance tracking systems increasing client retention by 40%"
        ]
      }
    ],
    education: [
      {
        degree: "Master of Science in Exercise Physiology",
        institution: "Springfield College",
        year: "2010-2012"
      },
      {
        degree: "Bachelor of Science in Kinesiology",
        institution: "University of Massachusetts",
        year: "2006-2010"
      }
    ],
    certifications: [
      {
        name: "Certified Strength & Conditioning Specialist (CSCS)",
        issuingOrganization: "NSCA",
        year: "2012"
      },
      {
        name: "Precision Nutrition Certified Coach",
        issuingOrganization: "Precision Nutrition",
        year: "2015"
      }
    ]
  };

  const data = { ...defaultProps, ...props };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-indigo-500/10 rounded-full blur-2xl animate-bounce" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 py-8 px-4 lg:py-12 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Section */}
          <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-r from-slate-800/90 via-blue-900/90 to-slate-700/90 backdrop-blur-xl border border-blue-500/20 shadow-2xl">
            
            {/* Geometric patterns */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-500/20"></div>
              <div className="absolute top-10 right-10 w-64 h-64 border border-blue-400/30 rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-48 h-48 border border-cyan-400/30 rounded-full"></div>
            </div>

            <div className="relative z-10 p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                
                {/* Profile Image */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                  <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-blue-400/50 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src={data.photoUrl} 
                      alt={data.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                  </div>
                  
                  {/* Fitness icons around image */}
                  <div className="absolute -top-2 -right-2 p-3 bg-blue-500 rounded-full shadow-lg animate-bounce">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -left-2 p-3 bg-cyan-500 rounded-full shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-200 mb-4 animate-fadeInUp">
                    {data.name}
                  </h1>
                  <p className="text-xl lg:text-2xl text-blue-300 font-semibold mb-2 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                    {data.position}
                  </p>
                  <p className="text-lg text-blue-400 mb-6 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                    {data.company} • {data.industry}
                  </p>
                  
                  {/* Contact Info */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                    <div className="flex items-center gap-2 bg-blue-800/30 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30 hover:bg-blue-700/40 transition-all duration-300">
                      <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-blue-200 text-sm font-medium">{data.telephoneNo}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-cyan-800/30 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-500/30 hover:bg-cyan-700/40 transition-all duration-300">
                      <svg className="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-cyan-200 text-sm font-medium">{data.email}</span>
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
              
              {/* Professional Summary */}
              <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-blue-400/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Professional Summary</h2>
                </div>
                <p className="text-blue-100 leading-relaxed text-lg">
                  {data.summary}
                </p>
              </div>

              {/* Experience */}
              <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-blue-400/30">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Experience</h2>
                </div>
                
                <div className="space-y-8">
                  {data.experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-blue-500/30">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-300 font-semibold">{exp.company}</p>
                        <p className="text-blue-400 text-sm">{exp.location} • {exp.years}</p>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-blue-100">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{typeof achievement === 'object' ? achievement.value : achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              
              {/* Core Competencies */}
              <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-blue-400/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-white">Core Competencies</h2>
                </div>
                <div className="grid gap-3">
                  {data.coreCompetencies.map((skill, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl px-4 py-3 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                      <span className="text-blue-100 font-medium">{skill.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-blue-400/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-white">Education</h2>
                </div>
                <div className="space-y-4">
                  {data.education.map((edu, index) => (
                    <div key={index} className="bg-blue-900/20 rounded-xl p-4 border border-blue-500/20">
                      <h3 className="font-bold text-white mb-1">{edu.degree}</h3>
                      <p className="text-blue-300 text-sm">{edu.institution}</p>
                      <p className="text-blue-400 text-xs">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-blue-400/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-white">Certifications</h2>
                </div>
                <div className="space-y-4">
                  {data.certifications.map((cert, index) => (
                    <div key={index} className="bg-cyan-900/20 rounded-xl p-4 border border-cyan-500/20">
                      <h3 className="font-bold text-white mb-1 text-sm">{cert.name}</h3>
                      <p className="text-cyan-300 text-xs">{cert.issuingOrganization}</p>
                      <p className="text-cyan-400 text-xs">{cert.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-blue-400/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-white">Location</h2>
                </div>
                <p className="text-blue-200">{data.address}</p>
                
                {/* Social Links */}
                <div className="flex gap-4 mt-6">
                  <a href={data.socialLinks?.linkedIn} className="p-3 bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href={data.socialLinks?.twitter} className="p-3 bg-cyan-600 hover:bg-cyan-500 rounded-xl transition-colors duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-slate-800/60 backdrop-blur-xl px-6 py-3 rounded-full border border-blue-500/20">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-blue-200 text-sm font-medium">Ready to Transform Your Fitness Journey</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
}