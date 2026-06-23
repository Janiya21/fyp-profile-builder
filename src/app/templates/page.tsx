"use client";

import CommonNav from "@/components/CommonNav";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLOader";
import { templates } from "@/data/TemplatesData";
import { Button, Image, Tooltip } from "@heroui/react";
import confetti from "canvas-confetti";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { FaCrown } from "react-icons/fa";
import { FiLock } from "react-icons/fi";

const TemplatesPage = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <TemplatesPageContent />
    </Suspense>
  );
};

const TemplatesPageContent = () => {
  const searchParams = useSearchParams();
  const pfUserId = searchParams.get("pfUserId"); // Get pfUserId from URL

  console.log("pfUserId:", pfUserId);

  return <TemplateSelector pfUserId={pfUserId} />;
};

export default TemplatesPage;

function TemplateSelector({ pfUserId }: { pfUserId: string | null }) {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [choosedTemplate, setChoosedTemplate] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [webLength, setWebLength] = useState<number>(0);
  const [eligible, setEligible] = useState<boolean>(false);
  const [sub, setSub] = useState<any>({});

  const categories = ["All", "Professional", "Creative", "Premium"];

  const filteredTemplates = templates
    .filter(t => activeCategory === "All" || t.category === activeCategory)
    .filter(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()));


  const setProceedSelected = () => {
    setLoading(true);
    setShowForm(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const setSelectedFormSubmission = async (data: any) => {
    try {
      setLoading(true);
      console.log("DATA:", data);

      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/template?name=${encodeURIComponent(String(selectedTemplate))}`);
      const apiRes = await response.json();
      console.log("Template Id:", apiRes.data._id);

      const obj = {
        pfUser: pfUserId,
        template: apiRes.data._id,
        active: "true",
        fieldsValues: data
      };

      const response2 = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/web-detail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });

      const webDetailData = await response2.json();

      if (webDetailData.success) {
        confetti({ particleCount: 150, spread: 60 });
        router.push(`/web/${webDetailData.data._id}`);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedTemplate(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    fetchUserWebsites();
    console.log("PFU " + pfUserId);

  }, []);

  const fetchUserWebsites = async () => {
    try {
      setLoading(true);
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/web-count?id=${pfUserId}`);
      // if (!response.ok) throw new Error('Failed to fetch websites');

      const data = await response.json();
      console.log("DATA LENGTH:", data.data);
      await fetchSubscription(pfUserId);
      setWebLength(data.data);
    } catch (err) {
      // setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const fetchSubscription = async (userId: any) => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/pf/${userId}/subscription`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch subscription');
      }
      setSub(data.subscription);
      return data.subscription; // Returns "yearly", "monthly", etc.
    } catch (error) {
      console.error('Error fetching subscription:', error);
      throw error; // Re-throw for error handling in the calling component
    }
  };

  return (

    <div>
      <CommonNav />

      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} px-2 md:px-36`}>

        {loading && <PageLoader />}

        <div className="relative min-h-screen">
          {/* Animated background */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
  </div> */}

          <div className="relative z-10 container px-2 mx-auto">
            {/* Header Section with floating animation */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div className="ms-2 md:ms-0 mt-4 lg:mt-10">
                <div className="relative">
                  <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                    Template Gallery
                  </h1>
                  <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 blur-xl rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <p className={`mt-4 text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'} sm:text-xl transform hover:translate-x-2 transition-transform duration-300`}>
                  Choose from a variety of templates and make your mark.
                  <span className="inline-block ml-2 text-indigo-500">✨ Move On...</span>
                </p>
              </div>
            </div>

            {/* Enhanced Search and Filter Section */}
            <div className="mb-6 space-y-6 px-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search templates..."
                    className={`w-full p-2 pl-12 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] focus:scale-[1.02] focus:shadow-2xl ${darkMode
                      ? 'bg-gray-800/80 border-gray-700 text-white focus:border-indigo-500'
                      : 'bg-white/80 border-gray-300 focus:border-indigo-500'
                      }`}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 3D Category Buttons */}
              <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                {categories.map((cat, index) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 ms-5 mt-3 py-3 rounded-full whitespace-nowrap text-xs lg:text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg ${activeCategory === cat
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                      : darkMode
                        ? 'bg-gray-700/80 text-gray-300 hover:bg-gray-600 shadow-md'
                        : 'bg-white/80 text-gray-700 hover:bg-gray-50 shadow-md backdrop-blur-sm'
                      }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      boxShadow: activeCategory === cat ? '0 8px 25px rgba(99, 102, 241, 0.3)' : undefined
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Premium Upgrade Notifications with enhanced styling */}
            {(sub === "none" && webLength >= 1) && (
              <div className="mb-8 transform hover:scale-[1.02] transition-all duration-300">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-50 to-pink-50 border border-blue-200 p-4 sm:p-6 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-blue-400/10 animate-pulse"></div>
                  <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-start sm:items-center gap-3">
                      <div className="p-2 bg-indigo-100 rounded-full animate-bounce flex-shrink-0">
                        <FiLock className="text-sky-600 w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-amber-800 font-medium text-sm sm:text-base">
                        You've reached your limit. <span className="font-bold">Upgrade to Premium</span> to create more websites.
                      </span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto sm:size-lg"
                      onClick={() => window.location.href = '/pricing'}
                    >
                      ⚡ Upgrade Now
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {(sub === "none" && webLength == 0) && (
              <div className="mb-8 transform hover:scale-[1.02] transition-all duration-300">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-4 sm:p-6 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 animate-pulse"></div>
                  <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-start sm:items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-full animate-bounce flex-shrink-0">
                        <FiLock className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-blue-800 font-medium text-sm sm:text-base">
                        Free : Create one portfolio. <span className="font-bold">Upgrade to Premium</span> for unlimited access.
                      </span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto sm:size-lg"
                      onClick={() => window.location.href = '/pricing'}
                    >
                      🚀 Go Premium
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Enhanced 3D Templates Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map((template, index) => (
                <div
                  key={template.id}
                  className="group relative"
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  {/* 3D Card Container */}
                  <div className={`relative rounded-3xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 hover:rotate-1 ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'
                    } backdrop-blur-sm shadow-xl hover:shadow-2xl group-hover:shadow-indigo-500/25`}
                    style={{
                      perspective: '1000px',
                      transformStyle: 'preserve-3d'
                    }}>

                    {/* Glowing border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                    {/* Image Container with 3D effect */}
                    <div className="relative h-56 overflow-hidden rounded-t-3xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                      <Image
                        alt={template.name}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        src={template.previewImage}
                      />

                      {/* Floating elements */}
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-yellow-400 animate-pulse">⭐</span>
                      <span className="text-white ml-2 text-sm font-medium">
                        {template.rating} ({template.users})
                      </span>
                    </div> */}

                      {/* Premium badge */}
                      {(sub === "none") && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-bounce">
                          <FaCrown className="w-3 h-3" />
                          PREMIUM
                        </div>
                      )}
                    </div>

                    {/* Content with 3D depth */}
                    <div className="p-6 relative z-10">
                      <h3 className={`font-bold text-xl mb-2 transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-indigo-300' : 'text-gray-800 group-hover:text-indigo-600'
                        }`}>
                        {template.name}
                      </h3>
                      <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {template.category} Style
                      </p>

                      {/* Enhanced Button */}
                      <Button
                        onClick={() => {
                          setLoading(true);
                          setSelectedTemplate(template.id);
                          setChoosedTemplate(template);
                          setTimeout(() => setLoading(false), 1000);
                        }}
                        className={`w-full relative overflow-hidden transition-all duration-300 ${false
                          ? 'bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 hover:shadow-lg hover:shadow-indigo-500/25 transform hover:scale-105'
                          }`}
                        size="lg"
                      // isDisabled={template.category === "Premium"}
                      >
                        <div className="relative z-10 flex items-center justify-center gap-2">
                          {template.category !== "Premium" ? (
                            <div className="text-white">
                              {/* <FiLock className="w-4 h-4" /> */}
                              Preview Template
                              {/* <FaCrown className="w-4 h-4 text-yellow-300" /> */}
                            </ div>
                          ) : (
                            <>
                              <span className="text-white">Preview Template</span>
                              <FaCrown className="w-4 h-4 text-yellow-300" />
                            </>
                          )}
                        </div>
                        {/* {(sub === "yearly") && (
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      )} */}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Empty State */}
            {filteredTemplates.length === 0 && (
              <div className={`text-center py-20 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <div className="transform hover:scale-105 transition-all duration-300">
                  <div className="text-6xl mb-4 animate-bounce">🔍</div>
                  <p className="text-2xl font-semibold mb-2">No templates found</p>
                  <p className="text-lg">Try adjusting your search or filter criteria</p>
                </div>
              </div>
            )}

            {/* Enhanced Modal with 3D effects */}
            {selectedTemplate && (
              <div className="fixed inset-0 z-50 flex items-center justify-center lg:p-4 p-2 bg-black/60 backdrop-blur-md animate-fadeIn">
                <div className={`relative rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col transform animate-slideUp ${darkMode ? 'bg-gray-800/95' : 'bg-white/95'
                  } backdrop-blur-xl border border-white/20`}
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                  }}>

                  {/* Enhanced Header */}
                  <div className={`flex justify-between items-center md:p-6 py-2 px-6 border-b backdrop-blur-sm ${darkMode ? 'border-gray-700/50 bg-gray-800/50' : 'border-gray-200/50 bg-white/50'
                    }`}>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      {!showForm ? "" : "Fill Your Details"}
                    </h3>

                    <div className="flex gap-4 items-center">
                      {(!showForm && (
                        <div>
                          {(!showForm && ((sub === "none" && webLength === 0) || (sub === "yearly"))) ? (
                            <div>
                              {templates.map((template) =>
                                template.id === selectedTemplate ? (
                                  <div>{template.category !== "Premium" ? (
                                    <button
                                      onClick={setProceedSelected}
                                      className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white transition-all duration-300 hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 hover:shadow-lg"
                                    >
                                      Use This Template
                                      <svg className="w-5 h-5 transition-transform hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                      </svg>
                                    </button>
                                  ) : (
                                    <div>
                                      ⚡ Use Premium
                                    </div>
                                  )} </div>
                                ) : null
                              )}

                            </div>
                          ) : (
                            <div>
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-orange-800 to-amber-600 text-white hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto sm:size-lg"
                                onClick={() => window.location.href = '/pricing'}
                              >
                                ⚡ Your Limit Reached. Use Premium
                              </Button></div>
                          )}
                        </div>
                      ))}

                      <button
                        onClick={() => {
                          setSelectedTemplate(null);
                          setShowForm(false);
                        }}
                        className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
                          }`}
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  {/* Enhanced Progress Steps */}
                  <div className="flex justify-center gap-8 p-6 border-b border-gray-200/50 dark:border-gray-700/50">
                    <div className={`flex ms-2 items-center gap-3 transition-all duration-300 ${!showForm ? 'text-indigo-600 scale-110' : darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                      {/* <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${!showForm
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                      : darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-600'
                      }`}>
                      1
                    </div> */}
                      <span className="font-medium">Choose Template</span>
                    </div>

                    <div className="flex items-center">
                      <div className={`w-16 h-1 rounded-full transition-all duration-500 ${showForm ? 'bg-gradient-to-r from-indigo-500 to-purple-600' : darkMode ? 'bg-gray-600' : 'bg-gray-300'
                        }`}></div>
                    </div>

                    <div className={`flex items-center gap-3 transition-all duration-300 ${showForm ? 'text-indigo-600 scale-110' : darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                      {/* <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${showForm
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                      : darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-600'
                      }`}>
                      2
                    </div> */}
                      <span className="font-medium">Enter Details</span>
                    </div>
                  </div>

                  {/* Content with smooth transitions */}
                  <div className="flex-1 overflow-auto">
                    <div className="transition-all duration-500 ease-in-out">
                      {!showForm ? (
                        <div className=" animate-fadeIn">
                          {templates.map((template) =>
                            template.id === selectedTemplate ? (
                              <template.component key={template.id} {...template.sampleData} />
                            ) : null
                          )}
                        </div>
                      ) : (
                        <div className="p-2 md:p-6 animate-slideIn">
                          {templates.map((template) =>
                            template.id === selectedTemplate ? (
                              <template.form
                                key={template.id}
                                onSubmit={setSelectedFormSubmission}
                              />
                            ) : null
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <style jsx global>{`
    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideUp {
      from { 
        opacity: 0;
        transform: translateY(50px) scale(0.95);
      }
      to { 
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    
    @keyframes slideIn {
      from { 
        opacity: 0;
        transform: translateX(20px);
      }
      to { 
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 3s ease infinite;
    }
    
    .animate-fadeIn {
      animation: fadeIn 0.3s ease-out;
    }
    
    .animate-slideUp {
      animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .animate-slideIn {
      animation: slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
  `}</style>
        </div>

      </div>
      <Footer />
    </div>
  );
}