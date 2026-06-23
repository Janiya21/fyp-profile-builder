"use client";

import PageLoader from "@/components/PageLOader";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@heroui/react";
import React from "react";
import confetti from "canvas-confetti";
import Image from "next/image";
import TypewriterHeading from "@/components/TypeWritterWord";
import Spline from '@splinetool/react-spline';

// Enhanced 3D Components
const FloatingCard = ({ children, className = '', delay = 0 }:{children:any, className?:string, delay?:number}) => {
    return (
        <div
            className={`transform transition-all duration-1000 ease-out ${className}`}
            style={{
                animation: `floatUp 0.8s ease-out ${delay}s both, float 3s ease-in-out infinite ${delay + 0.8}s`
            }}
        >
            {children}
        </div>
    );
};

const Particle = ({ delay }:{delay:number}) => {
    return (
        <div
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60"
            style={{
                animation: `particleFloat 4s ease-in-out infinite ${delay}s`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
            }}
        />
    );
};

export default function HomePage() {
    return (
        <SessionProviderWrapper>
            <HomeContent />
        </SessionProviderWrapper>
    );
}

function HomeContent() {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [userData, setUserData] = useState<any>(null);
    const [routeName, setRouteName] = useState<"Sign-In" | "Create-Profile" | "Continue" | "Web-profile" | null>(null);
    const [loading, setLoading] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const heroRef = useRef(null);

    const menuItems = [{ name: "Home", href: "/" }, { name: "Templates", href: "/templates-preview" }, { name: "Contact Us", href: "/contact-us" }];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // useEffect(() => {
    //     const handleMouseMove = (e:any) => {
    //         if (heroRef.current) {
    //             const rect = heroRef.current.getBoundingClientRect();
    //             setMousePosition({
    //                 x: (e.clientX - rect.left) / rect.width,
    //                 y: (e.clientY - rect.top) / rect.height
    //             });
    //         }
    //     };

    //     const heroElement = heroRef.current;
    //     if (heroElement) {
    //         heroElement.addEventListener('mousemove', handleMouseMove);
    //         return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    //     }
    // }, []);

    useEffect(() => {
        if (status === "authenticated" && session?.user) {
            handleRouteAccordingToUser();
        } else {
            setRouteName("Sign-In");
        }
    }, [status]);

    const handleSignIn = async () => {
        setLoading(true);
        try {
            localStorage.setItem("justLoggedIn", "true");
            await signIn("google");
        } catch (error) {
            console.log(error);
        } finally {
            handleRouteAccordingToUser();
            setLoading(false);
        }
    };

    const triggerConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    };

    async function handleRouteAccordingToUser() {
        console.log(session);

        if (session) {
            setLoading(true);
            try {
                const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/get-user?email=${session.user?.email}`, {
                    method: "GET",
                });

                if (!res.ok) {
                    throw new Error("Failed to fetch restaurants");
                }

                const data = await res.json();
                setUserData(data?.user);

                if (data?.user?.progressStep === "profileSaved") {
                    setRouteName("Continue");
                } else if (data?.user?.progressStep === "signedIn") {
                    setRouteName("Create-Profile");
                } else if (data?.user?.progressStep === "websiteFilled") {
                    setRouteName("Web-profile");
                }

            } catch (error) {
                console.error("Error fetching restaurants:", error);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            }
        } else {
            setRouteName("Sign-In");
        }

        console.log("ROUTENAME:", routeName);
    }

    function routeUser() {
        console.log(routeName);
        try {
            setLoading(true);
            if (routeName === "Sign-In") {
                handleSignIn();
            } else if (routeName === "Create-Profile") {
                router.push("/data-form");
            } else if (routeName === "Continue") {
                router.push(`/templates?pfUserId=${userData._id}`);
            } else if (routeName === "Web-profile") {
                router.push(`/web-profile?frg=${userData.pfUser}`);
            }
        } catch (error) {
            console.log(error);
            setRouteName("Sign-In");
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }

    return (
        <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
            {loading && <PageLoader />}

            {/* Enhanced Navbar with glassmorphism */}
            <Navbar
                onMenuOpenChange={setIsMenuOpen}
                isBordered
                className={`fixed top-0 z-50 backdrop-blur-md border-b border-white/10 ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'
                    } shadow-lg transition-all duration-300`}
            >
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <img src="https://jsr-dev-portfolio.s3.eu-north-1.amazonaws.com/wqen.png" alt="logo" className="w-28 h-18" />
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-12" justify="center">
                    {menuItems.map((item, index) => (
                        <NavbarItem key={item.name}>
                            <Link
                                color={index === 1 ? "warning" : "foreground"}
                                className="hover:text-purple-600 transition-colors font-medium"
                                href={item.href}
                            >
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>

                <NavbarContent justify="end">
                    <Button
                        variant="flat"
                        onClick={() => setDarkMode(!darkMode)}
                        className="mr-2 min-w-10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300"
                    >
                        {darkMode ? '☀️' : '🌙'}
                    </Button>
                    <Button
                        color="secondary"
                        onClick={routeUser}
                        className="font-medium -ms-4 md:ms-0 border-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        {routeName}
                    </Button>
                </NavbarContent>

                <NavbarMenu className={`${darkMode ? 'dark bg-gray-900/95 backdrop-blur-lg' : 'bg-white/95 backdrop-blur-lg'}`}>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item.name}-${index}`}>
                            <Link
                                className="w-full py-2 text-lg hover:text-purple-600 transition-colors"
                                color={index === 1 ? "warning" : "foreground"}
                                href={item.href}
                            >
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>

            {/* Enhanced 3D Hero Section */}
            <section className="relative overflow-hidden min-h-screen flex items-center pt-20">
                {/* Animated background */}
                <div className={`absolute inset-0 transition-all duration-1000 ${darkMode
                    ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900'
                    : 'bg-gradient-to-br from-blue-50 via-purple-50 to-violet-100'
                    }`}>
                    {/* Floating particles */}
                    {[...Array(20)].map((_, i) => (
                        <Particle key={i} delay={i * 0.2} />
                    ))}

                    {/* Animated mesh gradient */}
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                rgba(139, 69, 255, 0.3) 0%, transparent 50%)`,
                            transition: 'background 0.3s ease'
                        }}
                    />
                </div>

                {/* Glassmorphism Overlay */}
                <div className={`absolute inset-0 backdrop-blur-sm ${darkMode ? 'bg-gray-900/30' : 'bg-white/40'} z-[1]`}></div>

                {/* Floating SVG Shapes */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-[2]">
                    <svg className="absolute animate-bounce" style={{ top: "10%", left: "10%", animationDuration: "3s" }} width="100" height="100">
                        <circle cx="50" cy="50" r="40" fill="#a855f7" />
                    </svg>
                    <svg className="absolute animate-pulse" style={{ bottom: "20%", right: "15%", animationDuration: "2s" }} width="120" height="120">
                        <rect x="10" y="10" width="100" height="100" rx="20" fill="#6366f1" />
                    </svg>
                </div>

                {/* Main content */}
                <div
                    ref={heroRef}
                    className={`relative z-10 container mx-auto px-6 py-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <div className="flex flex-col lg:flex-row items-center">
                        {/* Text & Buttons */}
                        <div className="lg:w-1/2 lg:ms-20 mt-16 md:-mt-10 lg:mb-0">
                            <FloatingCard delay={0.2}>
                                <TypewriterHeading darkMode={darkMode} />
                            </FloatingCard>

                            <FloatingCard delay={0.4}>
                                <p className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                    portfolios with our customizable templates and share your work with the world.
                                </p>
                            </FloatingCard>

                            <FloatingCard delay={0.6}>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={() => {
                                            routeUser();
                                            if (routeName !== "Web-profile" && routeName !== "Sign-In") {
                                                triggerConfetti();
                                            }
                                        }}
                                        className="group relative overflow-hidden px-8 py-4 md:px-10 md:py-5 rounded-xl text-lg font-semibold text-white transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl"
                                        style={{
                                            background: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #6366F1 100%)',
                                            boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3)',
                                        }}
                                    >
                                        {/* Animated shine effect */}
                                        <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-700"></span>

                                        {/* 3D button depth */}
                                        <span className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent"></span>

                                        {/* Button content */}
                                        <span className="relative flex items-center justify-center gap-2 group-hover:translate-y-[-2px] transition-transform duration-300">
                                            {routeName === "Web-profile" ? (
                                                <>
                                                    <span>View My Profiles</span>
                                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-2 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                                    </svg>
                                                </>
                                            ) : routeName === "Sign-In" ? (
                                                "Sign In"
                                            ) : (
                                                <>
                                                    <span>Start Building — It's Free</span>
                                                    <svg className="w-5 h-5 transition-transform group-hover:scale-110 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                                    </svg>
                                                </>
                                            )}
                                        </span>
                                    </button>

                                    <button
                                        onClick={() => router.push("/templates-preview")}
                                        className={`px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 ${darkMode
                                            ? 'bg-gray-800/50 text-white border-gray-600 hover:bg-gray-700/50 backdrop-blur-sm'
                                            : 'bg-white/80 text-gray-900 border-gray-200 hover:bg-white backdrop-blur-sm'
                                            }`}
                                    >
                                        View Templates
                                    </button>
                                </div>
                            </FloatingCard>

                            <FloatingCard delay={0.8}>
                                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                                    <div className="flex items-center group">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white mr-3 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            <span className="font-semibold">100%</span> Satisfaction Guarantee
                                        </p>
                                    </div>
                                    <div className="flex items-center group">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 text-white mr-3 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            <span className="font-semibold">24/7</span> Support
                                        </p>
                                    </div>
                                </div>
                            </FloatingCard>
                        </div>

                        {/* 3D Image Section */}
                        <div className="lg:w-2/5 lg:ms-10 mt-10 lg:-mt-16">
                            <FloatingCard delay={1.0} className="relative">
                                <div
                                    className="relative p-1 transform transition-all duration-700 hover:scale-105"
                                    style={{
                                        transform: `perspective(1000px) rotateX(${mousePosition.y * 5 - 2.5}deg) rotateY(${mousePosition.x * 5 - 2.5}deg)`,
                                    }}
                                >
                                    <div className={`p-1 rounded-xl shadow-2xl backdrop-blur-sm border ${darkMode
                                        ? 'bg-gray-900/50 border-gray-700'
                                        : 'bg-white/80 border-gray-200'
                                        }`}>
                                        <div className="relative overflow-hidden rounded-lg">
                                            <img
                                                src="https://jsr-dev-portfolio.s3.eu-north-1.amazonaws.com/hero1.avif"
                                                alt="Portfolio Preview"
                                                className="rounded-lg w-full max-w-lg mx-auto transition-all duration-500 hover:brightness-110"
                                                style={{
                                                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))',
                                                }}
                                            />

                                            {/* Overlay gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-blue-500/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

                                            {/* Floating UI elements */}
                                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-bounce opacity-80"></div>
                                            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse opacity-80"></div>
                                        </div>
                                    </div>

                                    {/* 3D shadow */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl blur-xl -z-10"
                                        style={{
                                            transform: 'translateY(20px) scale(0.9)',
                                        }}
                                    />
                                </div>
                            </FloatingCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Features Section */}
            <section className={`py-20 relative ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/20 to-transparent"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Why Start With WebQuen ?
                        </h2>
                        <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            The perfect toolkit to launch your professional online presence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                    </svg>
                                ),
                                title: "Launch-Ready Templates",
                                description: "Hit the ground running with our collection of professionally designed starting points."
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                ),
                                title: "Zero-Code Customization",
                                description: "Make it uniquely yours without touching a line of code."
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ),
                                title: "Dedicated Support",
                                description: "Priority assistance as we build this platform together."
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className={`p-8 rounded-xl transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group ${darkMode ? 'bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm' : 'bg-gray-50/80 hover:bg-white backdrop-blur-sm'
                                    }`}
                            >
                                <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 transition-all duration-300 group-hover:scale-110 ${darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-600'
                                    }`}>
                                    {feature.icon}
                                </div>
                                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
                                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className={`py-20 relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-800 via-purple-900 to-gray-800' : 'bg-gradient-to-r from-blue-600 to-purple-600'
                } text-white`}>
                <div className="absolute inset-0 opacity-20">
                    {[...Array(10)].map((_, i) => (
                        <Particle key={i} delay={i * 0.5} />
                    ))}
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Dream Portfolio?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Join thousands of professionals who showcase their work with WebQuen.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            size="lg"
                            color="primary"
                            variant="solid"
                            onClick={() => {
                                routeUser();
                                triggerConfetti();
                            }}
                            className="px-8 py-6 text-lg font-semibold bg-white text-blue-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                            Get Started Free
                        </Button>
                        <Button
                            size="lg"
                            color="primary"
                            variant="bordered"
                            className="px-8 py-6 text-lg font-semibold border-white text-white hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
                            onClick={() => router.push("/templates-preview")}
                        >
                            View Demo Portfolios
                        </Button>
                    </div>
                </div>
            </section>

            {/* Enhanced Footer */}
            <footer className={`py-12 relative ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between gap-10">
                        {/* Brand Column */}
                        <div className="mb-8 md:mb-0">
                            <h2 className="text-2xl font-bold flex items-center">
                                <span className={darkMode ? 'text-purple-400' : 'text-purple-600'}>Web</span>
                                <span className="text-blue-500">Quen</span>
                            </h2>
                            <p className={`mt-2 max-w-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Creating stunning portfolios with customizable templates. Build your brand online in minutes.
                            </p>
                        </div>

                        {/* Links Columns */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 flex-1">

                            {/* Company */}
                            <div>
                                <h3 className="font-semibold mb-4">Company</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:underline transition-colors">About Us</a></li>
                                    <li><a href="#" className="hover:underline transition-colors">Careers</a></li>
                                    <li><a href="#" className="hover:underline transition-colors">Blog</a></li>
                                    <li><a href="#" className="hover:underline transition-colors">Press</a></li>
                                </ul>
                            </div>

                            {/* Support */}
                            <div>
                                <h3 className="font-semibold mb-4">Support</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:underline transition-colors">Help Center</a></li>
                                    <li><a href="#" className="hover:underline transition-colors">Contact Us</a></li>
                                    <li><a href="#" className="hover:underline transition-colors">FAQ</a></li>
                                    <li><a href="#" className="hover:underline transition-colors">Pricing</a></li>
                                </ul>
                            </div>

                            {/* Legal */}
                            <div>
                                <h3 className="font-semibold mb-4">Legal</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="hover:underline transition-colors">Terms of Service</a></li>
                                    <li><a href="#" className="hover:underline transition-colors">Privacy Policy</a></li>
                                    <li><a href="#" className="hover:underline transition-colors">Cookie Policy</a></li>
                                </ul>
                            </div>

                            {/* Social / Newsletter */}
                            <div>
                                <h3 className="font-semibold mb-4">Connect</h3>
                                <div className="flex space-x-4 mb-4">
                                    {['Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map((social) => (
                                        <a
                                            key={social}
                                            href="#"
                                            aria-label={social}
                                            className={`w-9 h-9 rounded-full flex items-center justify-center ${darkMode
                                                ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white'
                                                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                                                } transition-all`}
                                        >
                                            {/* Placeholder icon (replace with real ones like SVGs or Font Awesome) */}
                                            <span className="text-sm">{social.charAt(0)}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className={`mt-12 pt-6 border-t ${darkMode ? 'border-gray-800' : 'border-gray-300'} text-center`}>
                        <p>© {new Date().getFullYear()} PortfolioPro — All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </div>
    );
}
