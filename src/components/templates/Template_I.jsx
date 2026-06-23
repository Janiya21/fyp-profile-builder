import React, { useState, useEffect } from "react";

export default function TemplateI() {
  const [activeTab, setActiveTab] = useState('overview');
  const [skillProgress, setSkillProgress] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const profileData = {
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    name: "Jonathan R. Kensington",
    position: "Chief Executive Officer",
    company: "Horizon Global Solutions",
    industry: "Management Consulting", 
    telephoneNo: "+1 (212) 555-0198",
    email: "jkensington@horizonglobal.com",
    address: "200 Park Avenue, New York, NY 10166",
    socialLinks: {
      linkedIn: "https://linkedin.com/in/jkensington",
      twitter: "https://twitter.com/jrkensington"
    },
    summary: "Visionary leader with 15+ years of experience driving organizational transformation and delivering shareholder value. Proven track record in strategic planning, operational excellence, and building high-performance teams across global markets.",
    coreCompetencies: [
      { name: "Corporate Strategy Development", level: 95 },
      { name: "Financial Performance Optimization", level: 92 },
      { name: "Mergers & Acquisitions", level: 88 },
      { name: "Global Market Expansion", level: 90 },
      { name: "Stakeholder Relations", level: 94 },
      { name: "Digital Transformation", level: 86 }
    ],
    experience: [
      {
        title: "Chief Executive Officer",
        company: "Horizon Global Solutions", 
        location: "New York, NY",
        years: "2018-Present",
        achievements: [
          "Led company through successful IPO, achieving 300% shareholder return in 3 years",
          "Expanded operations to 12 new countries, increasing revenue by $450M annually",
          "Spearheaded digital transformation initiative reducing operational costs by 28%"
        ]
      },
      {
        title: "Senior Vice President",
        company: "Global Strategic Partners",
        location: "Chicago, IL", 
        years: "2012-2018",
        achievements: [
          "Directed post-merger integration of $2.4B acquisition",
          "Developed Asia-Pacific market strategy resulting in 40% revenue growth",
          "Implemented cost restructuring saving $75M annually"
        ]
      },
      {
        title: "Management Consultant",
        company: "McKinsey & Company",
        location: "London, UK",
        years: "2007-2012",
        achievements: [
          "Led turnaround strategy for Fortune 500 retail client",
          "Developed operational efficiency framework adopted company-wide",
          "Mentored 15+ junior consultants in client engagement strategies"
        ]
      }
    ],
    education: [
      {
        degree: "MBA, Finance & Strategy",
        institution: "Harvard Business School",
        year: "2005-2007"
      },
      {
        degree: "BSc, Economics", 
        institution: "University of Pennsylvania",
        year: "2001-2005"
      }
    ],
    certifications: [
      {
        name: "Certified Management Consultant (CMC)",
        issuingOrganization: "Institute of Management Consultants",
        year: "2010"
      },
      {
        name: "Chartered Financial Analyst (CFA)",
        issuingOrganization: "CFA Institute",
        year: "2008"
      }
    ]
  };

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
    
    // Animate skill bars
    const timer = setTimeout(() => {
      const progress = {};
      profileData.coreCompetencies.forEach((skill, index) => {
        setTimeout(() => {
          setSkillProgress(prev => ({
            ...prev,
            [skill.name]: skill.level
          }));
        }, index * 200);
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: 'overview', label: 'OVERVIEW', icon: '🎯' },
    { id: 'skills', label: 'SKILLS', icon: '⚡' },
    { id: 'experience', label: 'QUEST LOG', icon: '🏆' },
    { id: 'achievements', label: 'ACHIEVEMENTS', icon: '🏅' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10 p-4 lg:p-8">
        <div className="max-w-7xl mx-auto">
          
          {/* HUD Header */}
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-t-2xl border-2 border-cyan-400 p-6 relative overflow-hidden">
              
              {/* Animated border glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 animate-pulse"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                
                {/* Profile Section */}
                <div className="flex items-center gap-6">
                  {/* 3D Avatar Frame */}
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-2xl border-2 border-cyan-400 transform group-hover:scale-105 transition-transform duration-300">
                      <div className="relative overflow-hidden rounded-xl">
                        <img 
                          src={profileData.photoUrl}
                          alt={profileData.name}
                          className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent"></div>
                      </div>
                    </div>
                    {/* Status indicator */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-gray-800 animate-pulse"></div>
                  </div>

                  {/* Player Info */}
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text mb-2 font-mono tracking-wider">
                      {profileData.name}
                    </h1>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-sm font-bold border border-purple-400">
                        LVL 15+ CEO
                      </div>
                      <div className="px-3 py-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-full text-white text-sm font-bold border border-green-400">
                        ACTIVE
                      </div>
                    </div>
                    <p className="text-cyan-300 font-bold text-lg">{profileData.position}</p>
                    <p className="text-purple-300">{profileData.company}</p>
                  </div>
                </div>

                {/* Stats Panel */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-gradient-to-b from-blue-600/20 to-blue-800/20 rounded-lg p-3 border border-blue-400">
                    <div className="text-2xl font-bold text-blue-300">15+</div>
                    <div className="text-xs text-blue-200">YEARS EXP</div>
                  </div>
                  <div className="bg-gradient-to-b from-green-600/20 to-green-800/20 rounded-lg p-3 border border-green-400">
                    <div className="text-2xl font-bold text-green-300">300%</div>
                    <div className="text-xs text-green-200">ROI BOOST</div>
                  </div>
                  <div className="bg-gradient-to-b from-purple-600/20 to-purple-800/20 rounded-lg p-3 border border-purple-400">
                    <div className="text-2xl font-bold text-purple-300">12</div>
                    <div className="text-xs text-purple-200">COUNTRIES</div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className={`transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
            <div className="bg-gray-800/90 backdrop-blur-xl border-x-2 border-cyan-400 p-4">
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 border-2
                      ${activeTab === tab.id 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-cyan-400 shadow-lg shadow-cyan-400/50 transform scale-105' 
                        : 'bg-gray-700/50 text-gray-300 border-gray-600 hover:border-cyan-400 hover:text-cyan-300 hover:bg-gray-600/50'
                      }
                    `}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Panel */}
          <div className={`transform transition-all duration-1000 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-b-2xl border-2 border-cyan-400 p-6 min-h-96">
              
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Contact Panel */}
                    <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-400/50">
                      <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                        <span>📡</span> CONTACT DATA
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-600">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">📞</span>
                          </div>
                          <span className="text-gray-300 font-mono">{profileData.telephoneNo}</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-600">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">📧</span>
                          </div>
                          <span className="text-gray-300 font-mono text-sm">{profileData.email}</span>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-600">
                          <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">📍</span>
                          </div>
                          <span className="text-gray-300 font-mono text-sm">{profileData.address}</span>
                        </div>
                      </div>
                    </div>

                    {/* Mission Brief */}
                    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-400/50">
                      <h3 className="text-xl font-bold text-pink-300 mb-4 flex items-center gap-2">
                        <span>🎯</span> MISSION BRIEF
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {profileData.summary}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-3">
                    <span>⚡</span> SKILL TREE
                  </h3>
                  <div className="grid gap-4">
                    {profileData.coreCompetencies.map((skill, index) => (
                      <div key={index} className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-4 border border-gray-600 hover:border-cyan-400 transition-colors duration-300">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-cyan-300 font-bold">{skill.name}</span>
                          <span className="text-purple-300 font-mono text-sm">{skill.level}/100</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full"></div>
                          <div 
                            className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                            style={{ width: `${skillProgress[skill.name] || 0}%` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience/Quest Log Tab */}
              {activeTab === 'experience' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-3">
                    <span>🏆</span> QUEST LOG
                  </h3>
                  <div className="space-y-4">
                    {profileData.experience.map((exp, index) => (
                      <div key={index} className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-purple-300 mb-1">{exp.title}</h4>
                            <p className="text-cyan-300 font-semibold">{exp.company}</p>
                            <p className="text-gray-400 text-sm">{exp.location}</p>
                          </div>
                          <div className="mt-2 lg:mt-0">
                            <div className="px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 rounded-full text-white text-sm font-bold border border-green-400">
                              {exp.years}
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="text-yellow-300 font-semibold text-sm mb-2">🏅 ACHIEVEMENTS UNLOCKED:</p>
                          {exp.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start gap-3 p-2 bg-gray-800/30 rounded-lg">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements Tab */}
              {activeTab === 'achievements' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-3">
                    <span>🏅</span> ACHIEVEMENTS & CERTIFICATIONS
                  </h3>
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Education */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-purple-300 flex items-center gap-2">
                        <span>🎓</span> EDUCATION TREE
                      </h4>
                      {profileData.education.map((edu, index) => (
                        <div key={index} className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-4 border border-blue-400/50">
                          <h5 className="font-bold text-blue-300">{edu.degree}</h5>
                          <p className="text-purple-300 text-sm">{edu.institution}</p>
                          <p className="text-gray-400 text-xs">{edu.year}</p>
                        </div>
                      ))}
                    </div>

                    {/* Certifications */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-green-300 flex items-center gap-2">
                        <span>🛡️</span> CERTIFICATIONS
                      </h4>
                      {profileData.certifications.map((cert, index) => (
                        <div key={index} className="bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-xl p-4 border border-green-400/50">
                          <h5 className="font-bold text-green-300">{cert.name}</h5>
                          <p className="text-teal-300 text-sm">{cert.issuingOrganization}</p>
                          <p className="text-gray-400 text-xs">Earned: {cert.year}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Footer HUD */}
          <div className={`transform transition-all duration-1000 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mt-4`}>
            <div className="bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-xl border-2 border-cyan-400 p-4 text-center">
              <p className="text-cyan-300 font-mono text-sm">
                <span className="animate-pulse">●</span> SYSTEM ONLINE 
                <span className="mx-4">|</span> 
                EXECUTIVE PROFILE v2.5.3 
                <span className="mx-4">|</span>
                <span className="text-green-400">CONNECTION STABLE</span>
              </p>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&display=swap');
        
        .font-mono {
          font-family: 'Orbitron', monospace;
        }
        
        body {
          font-family: 'Rajdhani', sans-serif;
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }
        
        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(34, 211, 238, 0.4);
          }
          50% { 
            box-shadow: 0 0 40px rgba(34, 211, 238, 0.8);
          }
        }
        
        @keyframes matrix {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}