"use client";

import PageLoader from "@/components/PageLOader";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@heroui/react";
import React from "react";
import confetti from "canvas-confetti";
import Image from "next/image";
import TypewriterHeading from "@/components/TypeWritterWord";
import Copy from "@/components/gsap/Copy";
import Spline from '@splinetool/react-spline';
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <SessionProviderWrapper>
      <HomeContent />
    </SessionProviderWrapper>
  );
}

const FloatingCard = ({ children, className = '', delay = 0 }: { children: any, className?: string, delay?: number }) => {
  return (
    <div
      className={`transform transition-all duration-1000 ease-out ${className}`}
      style={{
        animation: `floatUp 0.8s ease-out ${delay}s both, float 6s ease-in-out infinite ${delay + 4.8}s`
      }}
    >
      {children}
    </div>
  );
};

function HomeContent() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState<any>(null);
  const [routeName, setRouteName] = useState<"Sign-In" | "Create-Profile" | "Continue" | "Web-profile" | null>(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [currentText, setCurrentText] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  const texts = [
    "Create stunning portfolios",
    "Build professional websites",
    "Design amazing experiences",
    "Launch your digital presence"
  ];

  const menuItems = [{ name: "Home", href: "/" }, { name: "Templates", href: "/templates-preview" }, { name: "Contact Us", href: "/contact-us" }];

  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "Launch-Ready Templates",
      description: "Hit the ground running with our collection of professionally designed starting points.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Zero-Code Customization",
      description: "Make it uniquely yours without touching a line of code.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Dedicated Support",
      description: "Priority assistance as we build this platform together.",
      gradient: "from-emerald-500 to-teal-600"
    }
  ];

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
    if (routeName == "Create-Profile") {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
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
        // setLoading(false);
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
      <div className="bg-white">

        <Navbar
          onMenuOpenChange={setIsMenuOpen}
          isBordered={false}
          className={`fixed top-0 backdrop-blur-xl bg-white/50 border-b border-white/20 shadow-sm z-40 transition-all duration-500`}
          maxWidth="full"
        >
          {/* Left side - Logo and Mobile Menu Toggle */}
          <NavbarContent className="basis-1/5 sm:basis-full lg:ms-10" justify="start">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden text-foreground"
            />
            <NavbarBrand>
              <img
                src="https://jsr-dev-portfolio.s3.eu-north-1.amazonaws.com/mainlogo.png"
                alt="logo"
                className="w-28 h-18 hover:scale-105 transition-transform duration-300"
              />
            </NavbarBrand>
          </NavbarContent>

          {/* Center - Navigation Links (Desktop) */}
          <NavbarContent
            className="hidden sm:flex gap-4 md:gap-8 lg:gap-12"
            justify="center"
          >
            {menuItems.map((item, index) => (
              <NavbarItem key={item.name}>
                <Link
                  color="foreground"
                  className={`px-3 py-1 rounded-lg transition-all duration-300 ${darkMode
                    ? 'hover:bg-gray-800/50 hover:text-purple-300'
                    : 'hover:bg-white/50 hover:text-purple-600'
                    } ${index === 0 ? 'text-indigo-700 font-medium' : 'font-normal'
                    }`}
                  href={item.href}
                >
                  {item.name}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>

          {/* Right side - Action Button */}
          <NavbarContent justify="end" className="basis-1/5 sm:basis-full">
            <Button
              color="secondary"
              onClick={routeUser}
              className={`font-medium border-2 ${darkMode
                ? 'border-purple-400 hover:bg-purple-600/30'
                : 'border-purple-600 hover:bg-purple-100'
                } transition-all duration-300 hover:scale-105`}
            >
              {routeName}
            </Button>
          </NavbarContent>

          {/* Mobile Menu */}
          <NavbarMenu className={`backdrop-blur-lg bg-opacity-80 ${darkMode ? 'dark bg-gray-900/90' : 'bg-white/90'
            }`}>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item.name}-${index}`}>
                <Link
                  className={`w-full py-3 text-lg px-4 rounded-lg ${darkMode
                    ? 'hover:bg-gray-800/50 hover:text-purple-300'
                    : 'hover:bg-white/50 hover:text-purple-600'
                    } ${index === 0 ? 'text-warning font-medium' : 'text-foreground'
                    }`}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>

        {/* Hero Section */}
        <div className="min-h-screen mt-10 lg:mt-0 relative overflow-hidden">
          {/* Animated Background with White Base */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-white">
            {/* Floating geometric shapes */}
            <div className="absolute inset-0">
              <div
                className="absolute w-96 h-96 bg-gradient-to-r from-purple-100/40 to-pink-100/40 rounded-full blur-3xl"
                style={{
                  top: '10%',
                  left: '10%',
                  animation: 'float 8s ease-in-out infinite',
                  animationDelay: '0s'
                }}
              ></div>
              <div
                className="absolute w-80 h-80 bg-gradient-to-r from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl"
                style={{
                  bottom: '20%',
                  right: '10%',
                  animation: 'float 10s ease-in-out infinite',
                  animationDelay: '2s'
                }}
              ></div>
              <div
                className="absolute w-64 h-64 bg-gradient-to-r from-emerald-100/30 to-teal-100/30 rounded-full blur-3xl"
                style={{
                  top: '50%',
                  left: '70%',
                  animation: 'float 12s ease-in-out infinite',
                  animationDelay: '4s'
                }}
              ></div>
            </div>

            {/* Subtle geometric patterns */}
            <div className="absolute inset-0 opacity-20">
              <svg className="absolute animate-spin-slow" style={{ top: "15%", left: "15%", animationDuration: '20s' }} width="60" height="60">
                <polygon points="30,5 55,45 5,45" fill="url(#gradient1)" />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>

              <svg className="absolute animate-bounce" style={{ bottom: "25%", right: "20%", animationDuration: '4s' }} width="80" height="80">
                <rect x="10" y="10" width="60" height="60" rx="15" fill="url(#gradient2)" />
                <defs>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>

              <svg className="absolute animate-pulse" style={{ top: "60%", left: "5%", animationDuration: '3s' }} width="50" height="50">
                <circle cx="25" cy="25" r="20" fill="url(#gradient3)" />
                <defs>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Main Content */}
          <section className="relative min-h-screen flex items-center z-10">
            <div className="container mx-auto px-6 py-12">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Left Content */}
                <div className="lg:w-1/2 space-y-8 lg:ms-20">
                  {/* Animated Typewriter Heading */}
                  <div className="space-y-4">
                    <TypewriterHeading darkMode={darkMode} />
                    <Copy duration={6}>
                      <p className="text-lg md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                        with our customizable templates and share your work with the world through stunning,
                        professional designs that captivate and inspire.
                      </p>
                    </Copy>
                  </div>

                  {/* Enhanced CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-6">
                    <button
                      onClick={() => {
                        routeUser();
                        triggerConfetti();
                      }}
                      className="group relative overflow-hidden px-10 py-5 rounded-full text-lg font-bold text-white transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
                      style={{
                        background: 'linear-gradient(135deg, #0f172a 0%, #3730a3 100%)',
                        boxShadow: '0 20px 40px -15px rgba(55, 48, 163, 0.5), 0 0 0 1px rgba(255,255,255,0.1) inset'
                      }}
                    >
                      {/* Animated background layers */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                      {/* Floating particles */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-ping"></div>
                        <div className="absolute bottom-3 right-6 w-1 h-1 bg-white rounded-full animate-ping delay-300"></div>
                        <div className="absolute top-1/2 right-4 w-0.5 h-0.5 bg-white rounded-full animate-ping delay-700"></div>
                      </div>

                      <span className="relative flex items-center justify-center gap-3 group-hover:translate-y-[-1px] transition-transform duration-300">

                        <span>{routeName == "Sign-In" ? "Sign In - It's Free" : routeName == "Continue" ? "Continue - It's Free" : routeName == "Create-Profile" ? "Create Profile - It's Free" : "View Profile"}</span>

                        <svg className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      </span>
                    </button>

                    <button
                      className="px-10 py-5 text-lg font-semibold bg-white/60 backdrop-blur-xl text-slate-800 border border-slate-200 rounded-full hover:bg-white hover:border-indigo-400 hover:text-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      onClick={() => { router.push("/templates-preview"); setLoading(true); }}
                    >
                      View Templates
                    </button>
                  </div>

                  {/* Enhanced Trust Indicators */}
                  <div className="flex flex-col sm:flex-row items-start gap-8 pt-8">
                    <div className="flex items-center group cursor-pointer">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 text-white mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-lg">100% Satisfaction</p>
                        <p className="text-gray-600 text-sm">Money-back guarantee</p>
                      </div>
                    </div>

                    <div className="flex items-center group cursor-pointer">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 text-white mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-lg">24/7 Support</p>
                        <p className="text-gray-600 text-sm">Always here to help</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - 3D Image */}
                <div className="lg:w-2/5 lg:ms-10 mt-10 lg:-mt-16">
                  <FloatingCard delay={1.0} className="relative">
                    <div
                      className="relative p-1 transform transition-all duration-700 hover:scale-105"
                      style={{
                        transform: `perspective(1000px) rotateX(${mousePosition.y * 5 - 4.5}deg) rotateY(${mousePosition.x * 5 - 4.5}deg)`,
                      }}
                    >
                      <div className={''}>
                        <div className="relative overflow-hidden rounded-lg">
                          <img
                            src="https://jsr-dev-portfolio.s3.eu-north-1.amazonaws.com/logo-2.avif"
                            alt="Portfolio Preview"
                            className="rounded-lg w-full max-w-lg mx-auto transition-all duration-500 hover:brightness-110" />
                          <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      </div>
                    </div>
                  </FloatingCard>
                </div>

              </div>
            </div>
          </section>
        </div>

        {/* Features Section */}
        <div className="min-h-screen bg-[#0f172a] relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>

          {/* Dark Mode Toggle */}
          <div className="absolute top-8 right-8 z-10">
            {/* <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              {darkMode ? (
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button> */}
          </div>

          <section className="py-20 relative z-10">
            <div className="container mx-auto px-6">
              {/* Header with 3D Text Effect */}
              <div className="text-center mb-20">
                <div className="relative">
                  <h2
                    className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
                    style={{
                      textShadow: '0 0 40px rgba(168, 85, 247, 0.4)',
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                    }}
                  >
                    Why Start With ProfiMake ?
                  </h2>
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-2xl -z-10"></div>
                </div>
                <p className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
                  The perfect toolkit to launch your professional online presence with style and sophistication.
                </p>
              </div>

              {/* 3D Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {features.map((feature: any, index: any) => (
                  <div
                    key={index}
                    className="group perspective-1000"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div
                      className={`
                    relative h-80 transition-all duration-700 transform-gpu
                    ${hoveredCard === index ? 'rotate-y-12 scale-105' : 'rotate-y-0 scale-100'}
                  `}
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: hoveredCard === index
                          ? 'rotateY(12deg) rotateX(-5deg) scale3d(1.05, 1.05, 1.05)'
                          : 'rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)'
                      }}
                    >
                      {/* Card Shadow */}
                      <div
                        className={`
                      absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 rounded-2xl blur transform translate-y-4 translate-x-2
                      ${hoveredCard === index ? 'opacity-40 blur-xl' : 'opacity-20 blur'}
                    `}
                        style={{ transform: 'translateZ(-20px)' }}
                      ></div>

                      {/* Main Card */}
                      <div
                        className={`
                      relative h-full p-8 rounded-2xl backdrop-blur-xl border transition-all duration-700
                      ${darkMode
                            ? 'bg-gray-900/80 border-gray-700/50 hover:border-purple-500/50'
                            : 'bg-white/10 border-white/20 hover:border-white/40'
                          }
                    `}
                        style={{
                          background: hoveredCard === index
                            ? `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`
                            : darkMode
                              ? 'rgba(17, 24, 39, 0.8)'
                              : 'rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        {/* Floating Icon Container */}
                        <div className="relative mb-8">
                          <div
                            className={`
                          w-20 h-20 flex items-center justify-center rounded-2xl transition-all duration-500
                          bg-gradient-to-br ${feature.gradient} shadow-2xl
                          ${hoveredCard === index ? 'scale-110 rotate-3' : 'scale-100 rotate-0'}
                        `}
                            style={{
                              transform: hoveredCard === index
                                ? 'translateZ(20px) scale(1.1) rotateZ(3deg)'
                                : 'translateZ(0px) scale(1) rotateZ(0deg)',
                              boxShadow: hoveredCard === index
                                ? '0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(168, 85, 247, 0.3)'
                                : '0 10px 20px rgba(0,0,0,0.2)'
                            }}
                          >
                            <div className="text-white drop-shadow-lg">
                              {feature.icon}
                            </div>
                          </div>

                          {/* Floating particles */}
                          {hoveredCard === index && (
                            <>
                              <div className="absolute -top-2 -right-2 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
                              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-300"></div>
                              <div className="absolute top-1/2 -right-4 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-700"></div>
                            </>
                          )}
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                          <h3
                            className={`
                          text-2xl font-bold transition-all duration-300
                          ${darkMode ? 'text-white' : 'text-white'}
                          ${hoveredCard === index ? 'text-transparent bg-gradient-to-r bg-clip-text ' + feature.gradient.replace('from-', 'from-').replace('to-', 'to-') : ''}
                        `}
                            style={{
                              transform: hoveredCard === index ? 'translateZ(10px)' : 'translateZ(0px)'
                            }}
                          >
                            {feature.title}
                          </h3>
                          <p
                            className={`
                          leading-relaxed transition-all duration-300
                          ${darkMode ? 'text-gray-300' : 'text-gray-200'}
                          ${hoveredCard === index ? 'text-gray-100' : ''}
                        `}
                            style={{
                              transform: hoveredCard === index ? 'translateZ(5px)' : 'translateZ(0px)'
                            }}
                          >
                            {feature.description}
                          </p>
                        </div>

                        {/* Hover Glow Effect */}
                        <div
                          className={`
                        absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500
                        ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}
                      `}
                          style={{
                            background: `linear-gradient(135deg, ${feature.gradient.includes('purple') ? 'rgba(168, 85, 247, 0.1)' : feature.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.1)' : 'rgba(16, 185, 129, 0.1)'} 0%, transparent 70%)`,
                            filter: 'blur(0.5px)'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              {/* <div className="text-center mt-20">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 transform-gpu">
                  <span className="relative z-10">Start Building Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                </button>
              </div> */}
            </div>
          </section>

          <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
        </div>

        {/* CTA Section */}
        {/* <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-600 to-purple-600'} text-white`}>
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Dream Portfolio?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of professionals who showcase their work with PortfolioPro.
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
                className="px-8 py-6 text-lg font-semibold bg-white text-blue-600"
              >
                Get Started Free
              </Button>
              <Button
                size="lg"
                color="primary"
                variant="bordered"
                className="px-8 py-6 text-lg font-semibold border-white text-white"
                onClick={() => { router.push("/templates-preview") }}
              >
                View Demo Portfolios
              </Button>
            </div>
          </div>
        </section> */}

        {/* Footer */}
        <Footer />

      </div>
    </div >
  );
}
