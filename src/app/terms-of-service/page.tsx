"use client";
import { useState, useEffect } from 'react';
import { FileText, Shield, CreditCard, Users, Globe, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function TermsOfService() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (index:any) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const sections = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Service Description",
      content: "Our platform allows users to create professional digital portfolios using pre-built templates. We offer both free and premium subscription plans with varying features and capabilities."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Account Registration",
      content: "You must provide accurate and complete information when creating your account. You are responsible for maintaining the security of your account credentials. You must be at least 13 years old to use our service. One account per person is permitted."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Service Plans",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-800 mb-2">Free Plan</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Create and maintain one (1) portfolio website</li>
              <li>• Access to basic templates and features</li>
              <li>• Limited customization options</li>
              <li>• Platform branding included</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-800 mb-2">Subscription Plans</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Create multiple portfolio websites</li>
              <li>• Access to premium templates and advanced features</li>
              <li>• Enhanced customization options</li>
              <li>• Priority customer support</li>
              <li>• Remove platform branding</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Payment and Billing",
      content: "Subscription fees are billed in advance on a recurring basis. All fees are non-refundable unless required by law. Failure to pay may result in service suspension or termination."
    },
    // {
    //   icon: <FileText className="w-6 h-6" />,
    //   title: "Template Usage and Licensing",
    //   content: "Templates are licensed for use, not sold. You may customize templates for your portfolio content. Redistribution or resale of templates is strictly prohibited. Premium templates require an active subscription to access and use."
    // },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "User Content and Responsibilities",
      content: "You retain ownership of content you upload to your portfolio. You grant us a license to host and display your content as part of our service. You are responsible for ensuring your content doesn't violate any laws or third-party rights. Prohibited content includes: illegal material, hate speech, harassment, spam, or copyright infringement."
    },
    // {
    //   icon: <Globe className="w-6 h-6" />,
    //   title: "Service Availability",
    //   content: "We strive for 99.9% uptime but cannot guarantee uninterrupted service. Scheduled maintenance will be announced in advance when possible. We are not liable for any losses due to service interruptions."
    // },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy and Data Protection",
      content: "Your privacy is important to us. We collect and process data as described in our Privacy Policy. We implement reasonable security measures to protect your information. You may request data deletion upon account termination."
    },
    // {
    //   icon: <AlertCircle className="w-6 h-6" />,
    //   title: "Termination",
    //   content: "Either party may terminate the service relationship at any time. We may suspend or terminate accounts for violations of these terms. Upon termination, your access to premium features will cease. You may export your content before termination (subject to technical limitations)."
    // }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute bottom-20 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center py-20 px-6">
          <div 
            className="inline-block p-4 bg-white/10 backdrop-blur-lg rounded-2xl mb-8 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            style={{ 
              transform: `perspective(1000px) rotateX(${scrollY * 0.01}deg) rotateY(${scrollY * 0.005}deg) scale(${1 + scrollY * 0.0001})`,
            }}
          >
            <FileText className="w-16 h-16 text-white mx-auto" />
          </div>
          <h1 className="text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully. By using our digital portfolio platform, you agree to these conditions.
          </p>
          <div className="mt-6 text-sm text-gray-400">
            Last Updated: December 2024
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 pb-20">
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 shadow-2xl"
                style={{
                  transform: `perspective(1000px) rotateY(${Math.sin(scrollY * 0.001 + index) * 2}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {section.icon}
                    </div>
                    <h2 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {section.title}
                    </h2>
                  </div>
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {expandedSection === index ? (
                      <ChevronUp className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedSection === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="bg-black/20 rounded-xl p-6 border border-white/5">
                      <div className="text-gray-300 leading-relaxed">
                        {typeof section.content === 'string' ? (
                          <p>{section.content}</p>
                        ) : (
                          section.content
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Important Notice */}
          <div className="mt-12 bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-xl rounded-2xl border border-red-500/20 p-8 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-red-500/20 rounded-xl">
                <AlertCircle className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Important Notice</h3>
                <p className="text-gray-300 leading-relaxed">
                  By using our service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. 
                  We may update these terms periodically, and significant changes will be communicated via email or platform notifications.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8 text-center">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 transform hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">Questions?</h3>
              <p className="text-gray-300 mb-4">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="space-y-2 text-blue-400">
                <p>Email: janithsandaru999@gmail.com</p>
                <p>Address: 435, 10th mile post rd, Werahera, Boralesgamuwa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}