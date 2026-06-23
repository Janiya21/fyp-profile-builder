import React, { useState } from 'react';
import { Sun, Moon, MapPin, Phone, Mail, ExternalLink, Award, Briefcase, GraduationCap, User, Star, TrendingUp } from 'lucide-react';

export default function TemplateF(props: any) {
    const [isDark, setIsDark] = useState(true);

    // Sample data - replace with props
    const profileData = props;

    const themeClasses = isDark
        ? 'bg-gray-900 text-white'
        : 'bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800';

    const cardClasses = isDark
        ? 'bg-gray-800/90 border-gray-700/50'
        : 'bg-white/80 border-white/50';

    const accentColor = isDark ? 'from-purple-500 to-pink-500' : 'from-blue-500 to-purple-500';

    return (
        <div className={`min-h-screen transition-all duration-700 ${themeClasses}`}>
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br ${accentColor} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse`}></div>
                <div className={`absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse`} style={{ animationDelay: '2s' }}></div>
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-green-500 to-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse`} style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Theme Toggle */}
            {/* <div className="relative z-50">
                <div className="absolute right-2 top-10 z-50">
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className={`group flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-lg transition-all duration-300 hover:scale-110 ${isDark
                            ? 'bg-gray-800/80 border-gray-600 text-yellow-400 hover:bg-gray-700/80'
                            : 'bg-white/80 border-gray-200 text-gray-700 hover:bg-gray-50/80'
                            }`}
                    >
                        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        <span className="font-medium">{isDark ? 'Light' : 'Dark'}</span>
                    </button>
                </div>
            </div> */}

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
                {/* Hero Section */}
                <div className={`relative backdrop-blur-xl rounded-3xl border shadow-2xl mb-8 overflow-hidden ${cardClasses}`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${accentColor} opacity-10`}></div>

                    <div className="relative p-8 lg:p-12">
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            {/* Profile Image */}
                            {profileData?.photoUrl ? (
                                <div>
                                    <div className="relative group">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${accentColor} rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
                                        <img
                                            src={profileData.photoUrl}
                                            alt={profileData.name}
                                            className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-2xl object-cover border-4 border-white/20 group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute -bottom-2 -right-2 p-2 bg-green-500 rounded-full border-4 border-white animate-pulse">
                                            <div className="w-3 h-3 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                                        <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border-4 border-white/30 backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 shadow-2xl overflow-hidden transform group-hover:scale-110 transition-all duration-500 hover:rotate-6">
                                            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-900 flex items-center justify-center relative">
                                                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                                                    {props?.name?.charAt(0)}
                                                </span>
                                                {/* Shine Effect */}
                                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 transform rotate-45"></div>
                                            </div>
                                        </div>
                                        {/* Floating Ring */}
                                        <div className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 border-2 border-white/10 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
                                    </div>
                                </div>
                            )}

                            {/* Profile Info */}
                            <div className="flex-1 text-center lg:text-left space-y-4">
                                <div>
                                    <h1 className={`text-4xl lg:text-6xl font-bold bg-gradient-to-r ${accentColor} bg-clip-text text-transparent mb-2 animate-fadeInUp`}>
                                        {profileData.name}
                                    </h1>
                                    <p className={`text-xl lg:text-2xl font-semibold ${isDark ? 'text-purple-300' : 'text-purple-600'} animate-fadeInUp`} style={{ animationDelay: '0.2s' }}>
                                        {profileData.position}
                                    </p>
                                    <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} animate-fadeInUp`} style={{ animationDelay: '0.4s' }}>
                                        {profileData.company} • {profileData.industry}
                                    </p>
                                </div>

                                {/* Contact Info */}
                                <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-gray-700/50' : 'bg-white/50'} backdrop-blur-sm hover:scale-105 transition-transform duration-300`}>
                                        <MapPin className="w-4 h-4 text-red-500" />
                                        <span className="text-sm">{profileData.address.split(',')[0]}</span>
                                    </div>
                                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-gray-700/50' : 'bg-white/50'} backdrop-blur-sm hover:scale-105 transition-transform duration-300`}>
                                        <Phone className="w-4 h-4 text-green-500" />
                                        <span className="text-sm">{profileData.telephoneNo}</span>
                                    </div>
                                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-gray-700/50' : 'bg-white/50'} backdrop-blur-sm hover:scale-105 transition-transform duration-300`}>
                                        <Mail className="w-4 h-4 text-blue-500" />
                                        <span className="text-sm">{profileData.email}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Summary Section */}
                <div className={`backdrop-blur-xl rounded-3xl border shadow-xl mb-8 overflow-hidden ${cardClasses}`}>
                    <div className="p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <User className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                            <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>About</h2>
                        </div>
                        <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            {profileData.summary}
                        </p>
                    </div>
                </div>

                {/* Core Competencies */}
                <div className={`backdrop-blur-xl rounded-3xl border shadow-xl mb-8 overflow-hidden ${cardClasses}`}>
                    <div className="p-8">
                        <div className="flex items-center gap-3">
                            <Star className={`w-6 h-6 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
                            <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Core Competencies</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {profileData.coreCompetencies.map((competency: any, index: number) => (
                                <div>
                                    <div
                                        key={index}
                                        className={`flex flex-col group p-4 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fadeInUp ${isDark
                                            ? 'bg-gray-700/30 border-gray-600/30 hover:bg-gray-700/50'
                                            : 'bg-white/50 border-gray-200/50 hover:bg-white/80'
                                            }`}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        {/* <div className={`w-2 h-2 bg-gradient-to-r ${accentColor} rounded-full mb-2 group-hover:scale-150 transition-transform duration-300`}></div> */}
                                        <p className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                                            {competency.value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <div className={`backdrop-blur-xl rounded-3xl border shadow-xl mb-8 overflow-hidden ${cardClasses}`}>
                    <div className="p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Briefcase className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                            <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Experience</h2>
                        </div>
                        <div className="space-y-8">
                            {profileData.experience.map((exp: any, index: number) => (
                                <div
                                    key={index}
                                    className={`group p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] animate-fadeInUp ${isDark
                                        ? 'bg-gray-700/20 border-gray-600/30 hover:bg-gray-700/40'
                                        : 'bg-white/40 border-gray-200/40 hover:bg-white/60'
                                        }`}
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                                {exp.title}
                                            </h3>
                                            <p className={`text-lg font-semibold ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>
                                                {exp.company}
                                            </p>
                                            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {exp.location}
                                            </p>
                                        </div>
                                        <div className={`px-4 py-2 rounded-full ${isDark ? 'bg-gray-600/50' : 'bg-gray-200/50'} backdrop-blur-sm`}>
                                            <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                                                {exp.years}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        {exp.achievements.map((achievement: any, achIndex: number) => (
                                            <div key={achIndex} className="flex items-start gap-3">
                                                <TrendingUp className={`w-4 h-4 mt-1 flex-shrink-0 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                                                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                                                    {typeof achievement === 'object' ? achievement.value : achievement}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Education & Certifications */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Education */}
                    <div className={`backdrop-blur-xl rounded-3xl border shadow-xl overflow-hidden ${cardClasses}`}>
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <GraduationCap className={`w-6 h-6 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Education</h2>
                            </div>
                            <div className="space-y-6">
                                {profileData.education.map((edu: any, index: number) => (
                                    <div
                                        key={index}
                                        className={`p-4 rounded-2xl border transition-all duration-300 hover:scale-105 animate-fadeInUp ${isDark
                                            ? 'bg-gray-700/20 border-gray-600/30'
                                            : 'bg-white/40 border-gray-200/40'
                                            }`}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <h3 className={`font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                            {edu.degree}
                                        </h3>
                                        <p className={`${isDark ? 'text-purple-300' : 'text-purple-600'} font-medium`}>
                                            {edu.institution}
                                        </p>
                                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {edu.year}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className={`backdrop-blur-xl rounded-3xl border shadow-xl overflow-hidden ${cardClasses}`}>
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Award className={`w-6 h-6 ${isDark ? 'text-orange-400' : 'text-orange-600'}`} />
                                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Certifications</h2>
                            </div>
                            <div className="space-y-6">
                                {profileData.certifications.map((cert: any, index: number) => (
                                    <div
                                        key={index}
                                        className={`p-4 rounded-2xl border transition-all duration-300 hover:scale-105 animate-fadeInUp ${isDark
                                            ? 'bg-gray-700/20 border-gray-600/30'
                                            : 'bg-white/40 border-gray-200/40'
                                            }`}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <h3 className={`font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                            {cert.name}
                                        </h3>
                                        <p className={`${isDark ? 'text-orange-300' : 'text-orange-600'} font-medium`}>
                                            {cert.issuingOrganization}
                                        </p>
                                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {cert.year}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-12 text-center">
                    <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${isDark ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
                        <div className={`w-2 h-2 bg-gradient-to-r ${accentColor} rounded-full animate-pulse`}></div>
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Professional Profile • Crafted with Excellence
                        </span>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
        </div>
    );
}