"use client";

interface PortfolioPropsB {
  name: string;
  address: string;
  telephoneNo: string;
  email: string;
  description: string;
  occupation: string;
  skills: { value: string }[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  experience: {
    title: string;
    company: string;
    years: string;
    description?: string;
  }[];
  projects?: {
    name: string;
    description: string;
    link?: string;
  }[];
}

export default function TemplateC(props: any) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 p-1 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto bg-black rounded-2xl shadow-xl overflow-hidden">
        {/* Header with Glass Morphism Effect */}
        <div className="relative h-64 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <div className="h-32 w-32 rounded-full border-4 border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center mb-4">
              <span className="text-5xl text-white font-bold">
                {props.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-white">{props?.name}</h1>
            <p className="text-xl text-white/90 mt-2">{props?.occupation}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="pt-16 px-6 pb-8">
          {/* Personal Info Section */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column */}
            <div className="lg:w-2/3">
              {/* About Section */}
              <section className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />
                  <h2 className="ml-4 text-2xl font-bold text-gray-200">About Me</h2>
                </div>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {props?.description}
                </p>
              </section>

              {/* Experience Section */}
              <section className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />
                  <h2 className="ml-4 text-2xl font-bold text-gray-200">Experience</h2>
                </div>
                <div className="space-y-8">
                  {props.experience?.map((exp:any, index:number) => (
                    <div key={index} className="group relative pl-8">
                      <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200">
                        <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-indigo-600 group-hover:bg-indigo-800 transition-colors" />
                      </div>
                      <div className="bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <h3 className="text-xl font-semibold text-gray-300">{exp?.title}</h3>
                          <span className="text-indigo-600 font-medium">{exp?.years}</span>
                        </div>
                        <p className="text-gray-600 font-medium mt-1">{exp?.company}</p>
                        {exp.description && (
                          <p className="text-gray-400 mt-3">{exp?.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Projects Section */}
              {props?.projects && props?.projects.length > 0 && (
                <section>
                  <div className="flex items-center mb-6">
                    <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />
                    <h2 className="ml-4 text-2xl font-bold text-gray-200">Projects</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {props?.projects.map((project:any, index:number) => (
                      <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-semibold text-gray-300 text-lg">{project?.name}</h3>
                        <p className="text-gray-500 mt-2">{project?.description}</p>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-indigo-600 mt-3 hover:text-indigo-800 transition-colors"
                          >
                            View Project
                            <svg
                              className="w-4 h-4 ml-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right Column */}
            <div className="lg:w-1/3">
              <div className="sticky top-8 space-y-8">
                {/* Contact Card */}
                <div className="bg-gray-900 p-6 rounded-xl shadow-sm">
                  <h2 className="text-xl font-bold text-gray-200 mb-4">Contact</h2>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 text-gray-400 mt-0.5 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-gray-400">{props?.address}</span>
                    </div>
                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 text-gray-400 mt-0.5 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="text-gray-400">{props?.telephoneNo}</span>
                    </div>
                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 text-gray-400 mt-0.5 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-gray-400">{props?.email}</span>
                    </div>
                  </div>
                </div>

                {/* Skills Card */}
                <div className="bg-gray-900 p-6 rounded-xl shadow-sm">
                  <h2 className="text-xl font-bold text-gray-200 mb-4">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    { props?.skills.length > 0 && props?.skills?.map((skill:any, index:number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-900 text-gray-400 rounded-full text-sm font-medium"
                      >
                        {skill?.value}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Education Card */}
                <div className="bg-gray-900 p-6 rounded-xl shadow-sm">
                  <h2 className="text-xl font-bold text-gray-200 mb-4">Education</h2>
                  <div className="space-y-4">
                    {props?.education.length > 0 &&props?.education?.map((edu:any, index:number) => (
                      <div key={index} className="pl-4 border-l-2 border-indigo-400">
                        <h3 className="font-semibold text-gray-300">{edu?.degree}</h3>
                        <p className="text-gray-400 text-sm">{edu?.institution}</p>
                        <p className="text-gray-500 text-xs mt-1">{edu?.year}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                {/* <div className="bg-gray-900 p-6 rounded-xl shadow-sm">
                  <h2 className="text-xl font-bold text-gray-300 mb-4">Connect</h2>
                  <div className="flex space-x-4">
                    {[
                      { name: "LinkedIn", icon: "Li" },
                      { name: "GitHub", icon: "Gh" },
                      { name: "Twitter", icon: "Tw" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-10 h-10 bg-gray-600 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                        aria-label={social?.name}
                      >
                        <span className="text-gray-300">{social?.icon}</span>
                      </a>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-800 text-white py-6 px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">
              © {new Date().getFullYear()} {props?.name}. All rights reserved.
            </p>
            <p className="text-gray-400 mt-2 md:mt-0">
              {props?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}