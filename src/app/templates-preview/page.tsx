"use client";

import CommonNav from "@/components/CommonNav";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLOader";
import { templates } from "@/data/TemplatesData";
import { Button, Image } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCrown } from "react-icons/fa";
import { FiChevronRight, FiEye, FiLock, FiSearch, FiStar, FiX } from "react-icons/fi";

export default function TemplateSelector() {
    const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [webLength, setWebLength] = useState<boolean>(false);
    const [darkMode, setDarkMode] = useState(false);

    const categories = ["All", "Professional", "Creative", "Minimalist"];

    const filteredTemplates = templates
        .filter(t => activeCategory === "All" || t.category === activeCategory)
        .filter(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()));


    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedTemplate(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            {loading && <PageLoader />}

            <CommonNav />

            <div className="px-4 md:px-8 lg:px-12 py-8">
                <div className="relative z-10 container  lg:px-12 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                        <div className="px-2">
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
                                    className={`w-full p-2 pl-12 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 hover:shadow-sm hover:scale-[1.02] focus:scale-[1.02] focus:shadow-sm ${darkMode
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
                                    className={`px-6 ms-5 mt-3 py-3 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg ${activeCategory === cat
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
                    {webLength && (
                        <div className="mb-8 transform hover:scale-[1.02] transition-all duration-300">
                            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-4 sm:p-6 shadow-lg">
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-400/10 animate-pulse"></div>
                                <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                    <div className="flex items-start sm:items-center gap-3">
                                        <div className="p-2 bg-amber-100 rounded-full animate-bounce flex-shrink-0">
                                            <FiLock className="text-amber-600 w-4 h-4 sm:w-5 sm:h-5" />
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

                    {!webLength && (
                        <div className="mb-8 px-3 transform hover:scale-[1.02] transition-all duration-300">
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

                    {/* Templates Grid */}
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredTemplates.map((template) => (
                            <div
                                key={template.id}
                                className={`group relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                            >
                                {/* Template Badge */}
                                {/* {template.isPremium && (
                            <div className="absolute top-3 left-3 z-10 flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                                <FiCrown className="mr-1" /> PRO
                            </div>
                        )} */}

                                {/* Template Image */}
                                <div className="relative h-52 overflow-hidden">
                                    <Image
                                        alt={template.name}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                        src={template.previewImage}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                </div>

                                {/* Template Info */}
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            {template.name}
                                        </h3>
                                        <div className="flex items-center bg-black/20 rounded-full px-2 py-1">
                                            <FiStar className="text-yellow-400 mr-1" />
                                            <span className="text-white text-sm">
                                                {template.rating}
                                            </span>
                                        </div>
                                    </div>

                                    {/* <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {template.description || 'Professional portfolio template'}
                            </p> */}

                                    <div className="flex justify-between items-center">
                                        <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                                            {template.category}
                                        </span>

                                        <Button
                                            onClick={() => {
                                                setLoading(true);
                                                setSelectedTemplate(template.id);
                                                setTimeout(() => setLoading(false), 1000);
                                            }}
                                            className="transition-all"
                                            color="primary"
                                            variant={webLength ? "flat" : "shadow"}
                                            size="sm"
                                            // isDisabled={webLength && !template.isPremium}
                                            endContent={webLength ? <FiLock className="ml-1" /> : <FiEye className="ml-1" />}
                                        >
                                            {webLength ? 'Preview' : 'Preview'}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredTemplates.length === 0 && (
                        <div className="max-w-2xl mx-auto text-center py-16">
                            <FiSearch className={`mx-auto text-4xl mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                            <h3 className={`text-xl font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                No templates found
                            </h3>
                            <p className={`${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                                Try adjusting your search or filter criteria
                            </p>
                            <Button
                                onClick={() => {
                                    setSearchQuery('');
                                    setActiveCategory('All');
                                }}
                                variant="light"
                                className="mt-4"
                            >
                                Clear filters
                            </Button>
                        </div>
                    )}

                    {/* Template Preview Modal */}
                    {selectedTemplate && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-1 bg-black/80 backdrop-blur-sm">
                            <div className={`relative rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                {/* Header with steps */}
                                <div className={`flex justify-between items-center p-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                    <div className="flex items-center space-x-4">
                                        {/* <div className={`flex items-center justify-center w-8 h-8 rounded-full ${!showForm ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                                        1
                                    </div> */}
                                        <span className={`font-medium ${!showForm ? 'text-blue-600' : darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                            Template Preview
                                        </span>
                                        <FiChevronRight className={`text-xl ${darkMode ? 'text-gray-600' : 'text-gray-300'}`} />
                                        {/* <div className={`flex items-center justify-center w-8 h-8 rounded-full ${showForm ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                                        2
                                    </div> */}
                                        <span className={`font-medium flex items-center  ${showForm ? 'text-blue-600' : darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                            <h3>Customize</h3>
                                            <FaCrown className="ms-2" />
                                        </span>
                                    </div>

                                    <button
                                        onClick={() => {
                                            setSelectedTemplate(null);
                                            setShowForm(false);
                                        }}
                                        className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors`}
                                    >
                                        <FiX className="text-xl" />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="flex-1 overflow-auto">
                                    {templates.map((template) =>
                                        template.id === selectedTemplate ? (
                                            <div key={template.id} className="p-0">
                                                {/* <div className="absolute right-4 mb-2 lg:right-14 lg:mt-2">
                                                <Tooltip content="Open in new Window" placement="bottom">
                                                    <Button
                                                        className="-mt-2 lg:-mt-0"
                                                        variant="light"
                                                        onClick={() => {
                                                            const newWindow = window.open('', '_blank');
                                                            newWindow?.document.write(`
                                                                <!DOCTYPE html>
                                                                <html>
                                                                <head>
                                                                    <title>Template Preview</title>
                                                                    <script src="https://cdn.tailwindcss.com"></script>
                                                                </head>
                                                                <body>
                                                                    <div id="root"></div>
                                                                    <script>
                                                                    const root = document.getElementById('root');
                                                                    ReactDOM.render(
                                                                        React.createElement(${template.component}, ${JSON.stringify(template.sampleData)}),
                                                                        root
                                                                    );
                                                                    </script>
                                                                </body>
                                                                </html>
                                                            `);
                                                            newWindow?.document.close();
                                                        }}
                                                    >
                                                        open
                                                        <TfiNewWindow />
                                                    </Button>
                                                </Tooltip>
                                            </div> */}
                                                <template.component {...template.sampleData} />
                                            </div>
                                        ) : null
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
