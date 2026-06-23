"use client";
import React from "react";

// Icon Components (define these elsewhere in your project)
function PhoneIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function LocationIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
}

export default function TemplateD(props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 md:p-12">
      <div className={`max-w-5xl mx-auto bg-gradient-to-br from-slate-900 md:rounded-xl via-purple-900 to-slate-900 shadow-xl overflow-hidden border ${props?.darkMode ? 'border-gray-700' : 'border-purple-500'} transform transition-all duration-500 hover:shadow-2xl`}>

        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "4s" }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 px-4 py-8 sm:py-12 lg:py-6 flex justify-center">
          <div className="w-full max-w-6xl mx-auto">
            {/* Glass Card Container */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:shadow-2xl">

              {/* Profile Section - Responsive Flex Layout */}
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">

                {/* Profile Avatar with 3D Effects */}
                <div className="relative group w-fit mx-auto lg:mx-0">
                  {/* Gradient Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-md opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                  {/* Avatar Container */}
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full border-4 border-white/20 backdrop-blur-sm bg-gradient-to-br from-blue-500/30 to-purple-600/30 overflow-hidden transition-transform duration-500 group-hover:scale-105">
                    {/* Initial or Image */}
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-800">
                      <span className="text-5xl font-bold text-white">
                        {props?.name?.charAt(0)?.toUpperCase()}
                      </span>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>

                  {/* Floating Ring */}
                  <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-spin-slow pointer-events-none"></div>
                </div>

                {/* Profile Info Section */}
                <div className="flex-1 text-center lg:text-left space-y-5">
                  {/* Name and Title */}
                  <div className="space-y-2">
                    <h1 className="text-3xl sm:text-4xl font-bold text-white">
                      {props?.name}
                    </h1>

                    <div className="space-y-1">
                      <p className="text-md sm:text-xl text-blue-100 font-medium">
                        {props?.position} at <span className="text-cyan-300 font-semibold">{props?.company}</span>
                      </p>
                      {/* <p className="text-lg text-white/80">
                        at 
                      </p> */}
                      {props?.industry && (
                        <p className="text-sm text-purple-200/90">
                          {props?.industry} Industry
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Contact Info - Responsive Grid */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {[
                      { icon: PhoneIcon, text: props?.telephoneNo, id: 'phone' },
                      { icon: MailIcon, text: props?.email, id: 'email' },
                      { icon: LocationIcon, text: props?.address, id: 'address' }
                    ].filter(item => item.text).map((item) => (
                      <div
                        key={item.id}
                        className="relative backdrop-blur-sm bg-white/5 border border-white/15 rounded-xl p-3 hover:bg-white/10 transition-all duration-300 w-full"
                      >
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 shrink-0">
                            <item.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm sm:text-base text-white/90 truncate">
                            {item.text}
                          </span>
                          {/* {item.text.length > 30 && (
                            <span className="absolute right-2 bottom-2 text-xs text-white/50">
                              ...
                            </span>
                          )} */}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  {props?.socialLinks && (
                    <div className="flex justify-center lg:justify-start gap-3 mt-6">
                      {Object.entries(props.socialLinks).map(([platform, url]) => (
                        url && (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 border border-white/15 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110"
                            aria-label={platform}
                          >
                            {platform === 'linkedIn' ? (
                              <LinkedInIcon className="w-5 h-5 text-white hover:text-blue-400" />
                            ) : (
                              <TwitterIcon className="w-5 h-5 text-white hover:text-sky-400" />
                            )}
                          </a>
                        )
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 md:p-10">

          {/* Executive Summary */}
          <section className="mb-10 animate-fade-in">
            <h2 className="text-2xl text-gray-100 font-bold mb-6 flex items-center">
              <span className="h-1 w-12 bg-blue-600 rounded-full mr-4"></span>
              Executive Profile
            </h2>
            <p className="text-gray-200 leading-relaxed text-lg">
              {props?.summary || props?.description}
            </p>
          </section>

          {/* Core Competencies */}
          {props?.coreCompetencies && (
            <section className="mb-10 animate-slide-up">
              <h2 className="text-2xl text-gray-100 font-bold mb-6 flex items-center">
                <span className="h-1 w-12 bg-blue-600 rounded-full mr-4"></span>
                Core Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {props?.coreCompetencies.length > 0 && props?.coreCompetencies.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2 group">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                      <svg className="w-3 h-3 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{skill?.value}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Professional Experience */}
          <section className="mb-10 animate-slide-up-delay">
            <h2 className="text-2xl text-gray-100 font-bold mb-6 flex items-center">
              <span className="h-1 w-12 bg-blue-600 rounded-full mr-4"></span>
              Professional Experience
            </h2>
            <div className="space-y-8">
              {props?.experience.length > 0 && props?.experience.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-200 group hover:border-blue-400 transition-colors">
                  <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-white group-hover:bg-blue-500 transition-colors"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-200">{exp.title}</h3>
                      <p className="text-gray-300">{exp.company} | {exp.location}</p>
                    </div>
                    <span className="text-blue-200 font-medium">{exp.years}</span>
                  </div>
                  {exp.achievements && (
                    <ul className="mt-4 space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-gray-300">{achievement?.value}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Education & Certifications */}
          {(props?.education || props?.certifications) && (
            <section className="animate-fade-in-delay">
              <h2 className="text-2xl text-gray-100 font-bold mb-6 flex items-center">
                <span className="h-1 w-12 bg-blue-600 rounded-full mr-4"></span>
                Education & Credentials
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {props?.education.length > 0 && props?.education && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-200 mb-4">Education</h3>
                    <div className="space-y-4">
                      {props?.education.map((edu, index) => (
                        <div key={index} className="flex p-3 rounded-lg hover:bg-blue-50 transition-colors">
                          <div className="mr-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-200">{edu.degree}</h4>
                            <p className="text-gray-300">{edu.institution}</p>
                            <p className="text-gray-400 text-sm">{edu.year}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {props?.certifications && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-300 mb-4">Certifications</h3>
                    <div className="space-y-4">
                      {props?.certifications.length > 0 && props?.certifications.map((cert, index) => (
                        <div key={index} className="flex p-3 rounded-lg hover:bg-blue-50 transition-colors">
                          <div className="mr-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-200">{cert.name}</h4>
                            <p className="text-gray-300">{cert.issuingOrganization}</p>
                            <p className="text-gray-400 text-sm">Issued {cert.year}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>

        {/* Footer */}
        <div className={`px-8 py-6 border-t ${props?.darkMode ? 'border-gray-700' : 'border-gray-200'} text-center`}>
          <p className="text-gray-100 text-sm">
            © {new Date().getFullYear()} {props?.name} — All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}