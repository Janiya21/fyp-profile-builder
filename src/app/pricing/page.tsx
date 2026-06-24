"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

const PricingPage = () => {
    const [isAnnual, setIsAnnual] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);
    const router = useRouter();

    const pricingPlans = [
        {
            name: "Professional",
            description: "Ideal for single persons for their personal portfolios",
            // monthlyPrice: 29,
            annualPrice: 8,
            features: [
                "Upto 3 portfolios",
                "Web analytics dashboard",
                "Priority support",
                "Premium templates",
                "API access"
            ],
            color: "from-purple-500 to-pink-500",
            popular: false,
            icon: "⭐"
        },
        {
            name: "Starter",
            description: "Perfect for individuals and small projects",
            monthlyPrice: 9,
            annualPrice: 7,
            features: [
                "Up to 5 projects",
                "Basic analytics",
                "24/7 support",
                "5GB storage",
                "Standard templates",
                "Mobile app access"
            ],
            color: "from-blue-500 to-cyan-500",
            popular: false,
            icon: "🚀"
        },
        {
            name: "Enterprise",
            description: "For large organizations with custom needs",
            monthlyPrice: 99,
            annualPrice: 79,
            features: [
                "Everything in Professional",
                "Unlimited storage",
                "Dedicated support",
                "Custom branding",
                "Advanced security",
                "SSO integration",
                "Custom workflows",
                "SLA guarantee"
            ],
            color: "from-orange-500 to-red-500",
            popular: false,
            icon: "🏢"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-slate-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "4s" }}></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-6 lg:mb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                        Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-indigo-600 dark:from-white dark:to-indigo-400">Plan</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Select the perfect plan for your needs. Upgrade or downgrade at any time.
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-2 mb-12">
                        {/* <button
                            onClick={() => setIsAnnual(false)}
                            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${!isAnnual
                                    ? 'bg-white text-gray-900 shadow-lg transform scale-105'
                                    : 'text-white/70 hover:text-white'
                                }`}
                        >
                            Monthly
                        </button> */}
                        <button
                            onClick={() => setIsAnnual(true)}
                            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative ${isAnnual
                                ? 'bg-white text-gray-900 shadow-lg transform scale-105'
                                : 'text-white/70 hover:text-white'
                                }`}
                        >
                            Annual
                            {/* <span className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs px-2 py-1 rounded-full">
                                -20%
                            </span> */}
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
                    {pricingPlans.map((plan: any, index: any) => (
                        <div
                            key={plan.name}
                            className={`relative transform transition-all duration-700 hover:scale-105 ${plan.popular ? 'lg:scale-110 lg:-translate-y-4' : ''
                                }`}
                            style={{ animationDelay: `${index * 200}ms` }}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Popular Badge - only show for index 1 (2nd card) */}
                            {plan.popular && index === 1 && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                                        🔥 Most Popular
                                    </div>
                                </div>
                            )}

                            {/* Card Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} rounded-3xl blur-xl opacity-20 transition-opacity duration-500 ${hoveredCard === index ? 'opacity-40' : ''
                                }`}></div>

                            {/* Main Card */}
                            <div className={`relative backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 h-full transition-all duration-500 ${plan.popular ? 'border-white/40 bg-white/15' : ''
                                } ${hoveredCard === index ? 'bg-white/20 border-white/30' : ''}`}>

                                {/* Show loading skeleton for 1st and 3rd cards (index 0 and 2) */}
                                {(index === 1 || index === 2) ? (
                                    <div className="animate-pulse">
                                        {/* Skeleton Header */}
                                        <div className="text-center mb-8">
                                            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4"></div>
                                            <div className="h-8 bg-white/20 rounded-lg mb-2 mx-auto w-3/4"></div>
                                            <div className="h-4 bg-white/20 rounded-lg mb-6 mx-auto w-1/2"></div>

                                            {/* Skeleton Pricing */}
                                            <div className="mb-6">
                                                <div className="flex items-center justify-center space-x-2">
                                                    <div className="h-12 w-24 bg-white/20 rounded-lg"></div>
                                                    <div className="text-left">
                                                        <div className="h-3 w-16 bg-white/20 rounded mb-1"></div>
                                                        <div className="h-2 w-20 bg-white/20 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Skeleton Features List */}
                                        <div className="space-y-4 mb-8">
                                            {[...Array(4)].map((_, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center space-x-3">
                                                    <div className="w-5 h-5 rounded-full bg-white/20 flex-shrink-0"></div>
                                                    <div className="h-3 bg-white/20 rounded flex-1"></div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Skeleton CTA Button */}
                                        <div className="w-full h-12 bg-white/20 rounded-2xl"></div>
                                    </div>
                                ) : (
                                    // Show actual content for 2nd card (index 1)
                                    <>
                                        {/* Card Header */}
                                        <div className="text-center mb-8">
                                            <div className="text-4xl mb-4">{plan.icon}</div>
                                            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                            <p className="text-gray-300 mb-6">{plan.description}</p>

                                            {/* Pricing */}
                                            <div className="mb-6">
                                                <div className="flex items-center justify-center space-x-2">
                                                    <span className="text-5xl font-bold text-white">
                                                        ${!isAnnual ? plan.annualPrice : plan.monthlyPrice}
                                                    </span>
                                                    <div className="text-left">
                                                        <div className="text-gray-300 text-sm">per year</div>
                                                        {isAnnual && (
                                                            <div className="text-green-400 text-xs">
                                                                Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Features List */}
                                        <div className="space-y-4 mb-8">
                                            {plan.features.map((feature: any, featureIndex: any) => (
                                                <div
                                                    key={featureIndex}
                                                    className="flex items-center space-x-3 transform transition-all duration-300"
                                                    style={{
                                                        animationDelay: `${(index * 200) + (featureIndex * 100)}ms`,
                                                        opacity: hoveredCard === index ? 1 : 0.8
                                                    }}
                                                >
                                                    <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center flex-shrink-0`}>
                                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-gray-200 text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA Button */}
                                        <button className={`w-full py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${plan.popular
                                            ? `bg-gradient-to-r ${plan.color} shadow-2xl hover:shadow-3xl`
                                            : `border-2 border-white/20 hover:border-white/40 backdrop-blur-xl bg-white/10 hover:bg-white/20`
                                            }`} onClick={() => router.push(`/get-started`)}>
                                            {plan.popular ? 'Start Free Trial' : 'Get Started'}
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="text-center mt-20">
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Not sure which plan is right for you?
                        </h3>
                        <p className="text-gray-300 mb-6 text-lg">
                            There are lot of templates that you can start with free of charge. Upgrade anytime. No commitments, cancel anytime.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onClick={() => router.push('/templates-preview')} className="px-8 py-4 bg-gradient-to-r from-slate-800 to-indigo-600 text-white font-semibold rounded-full hover:from-slate-700 hover:to-indigo-500 transform hover:-translate-y-1 transition-all duration-300 shadow-xl">
                                Go to Templates
                            </button>
                            <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-2xl hover:border-white/40 hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PricingPage;