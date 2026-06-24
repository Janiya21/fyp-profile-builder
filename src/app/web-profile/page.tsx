"use client";
import { useState, useEffect, Suspense } from 'react';
import { Card, Button, Spinner, Divider, Chip, Avatar, Tooltip } from '@heroui/react';
import { FiEdit2, FiExternalLink, FiEye, FiEyeOff, FiGlobe, FiPlus, FiTrash2, FiActivity, FiBriefcase, FiDownload } from 'react-icons/fi';
import { useSession } from 'next-auth/react';
import SessionProviderWrapper from '@/components/SessionProviderWrapper';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaCrown } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import PageLoader from '@/components/PageLOader';
import { IoMdAnalytics, IoMdHome } from "react-icons/io";
import { templates } from '@/data/TemplatesData';
import CommonNav from '@/components/CommonNav';
import Footer from '@/components/Footer';
import { FaChalkboardTeacher } from "react-icons/fa";

interface Website {
    _id: string;
    name: string;
    webUrl: string;
    template: string;
    active: boolean;
    updatedAt: string;
    thumbnail?: string;
}

export default function UserProfileWithSession() {
    return (
        <SessionProviderWrapper>
            <Suspense fallback={<PageLoader />}>
                <UserProfile />
            </Suspense>
        </SessionProviderWrapper>
    )
}

function UserProfile() {
    const { data: session } = useSession();
    const [websites, setWebsites] = useState<Website[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const searchParams = useSearchParams();
    const pfUserId = searchParams.get("frg");
    const [user, setUser] = useState<any>({ isPremium: true });
    const [templateData, setTemplateData] = useState<any>(null);
    const [selectedWebData, setSelectedWebData] = useState<any>(null);
    const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        console.log(pfUserId);
        fetchUserWebsites();
    }, []);

    useEffect(() => {
        // if (session?.user?.id) {
        //     fetchUserWebsites(session.user.id);
        // }
    }, []);

    const fetchUserWebsites = async () => {
        try {
            setLoading(true);
            const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/websites?id=${pfUserId}`);
            const data = await response.json();

            setWebsites(data.data);

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error occurred');
        } finally {
            setLoading(false);
        }
    };

    const getTemplate = async (website: any) => {
        let id = website.template;
        setSelectedWebData(website);
        console.log("Website:", website);

        try {
            setLoading(true);
            const templateResponse = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/template-by-id?id=${encodeURIComponent(id)}`
            );
            const { data } = await templateResponse.json();
            setTemplateData(data);

            const matchedTemplate = templates.find(t => t.id === data?.name);
            if (matchedTemplate) {
                setSelectedTemplate(matchedTemplate.id);
            }

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error occurred');
        } finally {
            setLoading(false);
        }
    };

    const toggleWebsiteStatus = async (websiteId: string) => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/websites/${websiteId}/toggle-status`, {
                method: 'PATCH'
            });

            if (!response.ok) throw new Error('Failed to update status');

            setWebsites(websites.map(website =>
                website._id === websiteId
                    ? { ...website, active: !website.active }
                    : website
            ));
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to update status');
        }
    };

    const handleDelete = async (websiteId: string) => {
        if (!confirm('Are you sure you want to delete this website?')) return;

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/websites/${websiteId}`, {
                method: 'DELETE'
            });

            if (!response.ok) throw new Error('Failed to delete website');

            setWebsites(websites.filter(website => website._id !== websiteId));
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to delete website');
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                {/* <Spinner size="lg" /> */}
                <PageLoader />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center p-8">
                <p className="text-red-500 mb-4">{error}</p>
                <Button
                    color="primary"
                    onClick={() => fetchUserWebsites()}
                >
                    Retry
                </Button>
            </div>
        );
    }

    const handleSave = async (updatedData: any) => {
        console.log("Updated data:", updatedData);
        setIsEditing(false);

        console.log("Id:", selectedWebData._id);

        try {
            const result = await updateFields(selectedWebData._id, updatedData);
            console.log('Update successful:', result.data);
        } catch (error) {
            console.error('Update failed:', error);
        }

    };

    async function updateFields(id: string, newFields: Record<string, any>) {
        try {
            setLoading(true);
            const res = await fetch(`/api/update-web-detail/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fieldsValues: newFields }),
            });

            if (!res.ok) {
                throw new Error('Failed to update fields');
            }

            return await res.json();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
            setSelectedTemplate(null);
        }
    }

    return (
        <div>
            <CommonNav />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:mb-20 mb-5">

                {selectedTemplate && (
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        {/* Overlay */}
                        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />

                        {/* Dialog container */}
                        <div className="flex items-center justify-center min-h-screen p-4 sm:p-6">
                            <div className="relative w-full max-w-6xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                                {/* Header with close button */}
                                <div className="flex justify-between items-center p-4 sm:p-6 border-b sticky top-0 bg-white z-10">
                                    <h2 className="text-xl font-semibold">
                                        {templates.find(t => t.id === selectedTemplate)?.name || 'Template Editor'}
                                    </h2>
                                    <button
                                        onClick={() => setSelectedTemplate(null)}
                                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                        aria-label="Close"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {/* Scrollable content */}
                                <div className="flex-1 overflow-auto p-4 sm:p-6">
                                    {templates.map((template) =>
                                        template.id === selectedTemplate ? (
                                            <template.editForm
                                                onSubmit={handleSave}
                                                samplePortfolioData={selectedWebData.fieldsValues}
                                            />
                                        ) : null
                                    )}
                                </div>

                                {/* Footer (optional) */}
                                <div className="p-4 sm:p-6 border-t bg-gray-50 flex justify-end space-x-3">
                                    <button
                                        onClick={() => setSelectedTemplate(null)}
                                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                        <div className='w-full'>
                            <div className="flex items-center justify-between w-full pe-4 py-3 ">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                                        <MdWeb size={24} className="text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                                        My Portfolios
                                    </h1>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mt-2">
                                <button onClick={() => { router.push("/") }} className="px-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                                    <IoMdHome size={20} className="text-gray-600 dark:text-gray-300" />
                                </button>
                                <p className="text-gray-500 dark:text-gray-400">
                                    | &nbsp;&nbsp;&nbsp; {websites.length} {websites.length === 1 ? 'site' : 'sites'} created
                                </p>
                            </div>

                        </div>

                        {user?.isPremium ? (
                            <Button
                                color="primary"
                                radius="full"
                                startContent={
                                    <div className="flex items-center gap-1">
                                        <FiPlus className="text-lg" />
                                        <FaCrown size={25} className="text-yellow-400" /> {/* Premium icon */}
                                    </div>
                                }
                                className="shadow-md bg-gray-600 px-4 hover:shadow-lg transition-shadow"
                                onClick={() => window.location.href = '/templates?pfUserId=' + pfUserId}
                            >
                                Create New
                            </Button>
                        ) : (
                            <Tooltip content="Upgrade to premium to create more sites" placement="bottom">
                                <Button
                                    isDisabled
                                    color="primary"
                                    variant="bordered"
                                    radius="full"
                                    startContent={<FiPlus className="text-lg" />}
                                    className="opacity-70"
                                >
                                    <FaCrown size={25} className="text-yellow-400" />
                                    Create New
                                </Button>
                            </Tooltip>
                        )}
                    </div>

                    <Divider className="my-6 dark:bg-gray-700" />

                    {websites.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="mx-auto max-w-md">
                                <FiGlobe className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
                                <h2 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">
                                    No portfolio sites yet
                                </h2>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    {user?.isPremium
                                        ? "Get started by creating your first portfolio site"
                                        : "Upgrade to premium to create your portfolio site"}
                                </p>
                                <div className="mt-6">
                                    {user?.isPremium ? (
                                        <Button
                                            color="primary"
                                            radius="full"
                                            startContent={<FiPlus />}
                                            onClick={() => window.location.href = '/create-website'}
                                        >
                                            Create First Site
                                        </Button>
                                    ) : (
                                        <Button
                                            color="primary"
                                            radius="full"
                                            onClick={() => window.location.href = '/pricing'}
                                        >
                                            Upgrade to Premium
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {websites.map((website) => (
                                <Card
                                    key={website._id}
                                    className="p-4 hover:shadow-lg dark:hover:shadow-gray-700 transition-shadow group"
                                    isHoverable
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white line-clamp-1">
                                                {website.name}
                                            </h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                Updated: {new Date(website.updatedAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <Chip
                                            color={website.active ? "success" : "warning"}
                                            variant="flat"
                                            size="sm"
                                            classNames={{
                                                content: "text-xs font-medium"
                                            }}
                                        >
                                            {website.active ? "Active" : "Disabled"}
                                        </Chip>
                                    </div>

                                    {/* Website Preview */}
                                    <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 overflow-hidden relative">
                                        {website.webUrl ? (
                                            <div className="relative group h-full w-full">
                                                {/* Clickable overlay */}
                                                <div
                                                    className="absolute inset-0 z-10 cursor-pointer"
                                                    onClick={() => window.open(website.webUrl, '_blank')}
                                                    onTouchEnd={() => window.open(website.webUrl, '_blank')}
                                                    role="button"
                                                    aria-label={`Open ${website.name}`}
                                                    tabIndex={0}
                                                    onKeyDown={(e) => e.key === 'Enter' && window.open(website.webUrl, '_blank')}
                                                />

                                                <iframe
                                                    src={website.webUrl}
                                                    className="w-full h-full border-none pointer-events-none"
                                                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                                    loading="lazy"
                                                    referrerPolicy="no-referrer"
                                                    title={`Preview of ${website.name}`}
                                                />
                                            </div>
                                        ) : website.thumbnail ? (
                                            <img
                                                src={website.thumbnail}
                                                alt={`${website.name} thumbnail`}
                                                className="object-cover w-full h-full"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800">
                                                <Avatar
                                                    name={website.name}
                                                    className="w-20 h-20 text-large"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-2">

                                            <Button
                                                isIconOnly
                                                variant="light"
                                                aria-label={website.active ? "Disable" : "Enable"}
                                                className={website.active ? "text-violet-400 dark:text-yellow-400" : "text-green-500 dark:text-green-400"}
                                                onPress={() => { router.push('analytics') }}
                                                disabled={!user.isPremium}
                                            >
                                                <IoMdAnalytics />
                                            </Button>

                                            <Button
                                                isIconOnly
                                                variant="light"
                                                aria-label={website.active ? "Disable" : "Enable"}
                                                className={website.active ? "text-yellow-500 dark:text-yellow-400" : "text-green-500 dark:text-green-400"}
                                                onPress={() => { router.push('interview') }}
                                                disabled={!user.isPremium}
                                            >
                                                <FaChalkboardTeacher />
                                            </Button>

                                            <Tooltip content="AI Quality Analysis" placement="top">
                                                <Button
                                                    isIconOnly
                                                    variant="light"
                                                    aria-label="AI Analysis"
                                                    className="text-indigo-500 dark:text-indigo-400"
                                                    onPress={() => { router.push(`/dashboard/analysis?websiteId=${website._id}`) }}
                                                >
                                                    <FiActivity />
                                                </Button>
                                            </Tooltip>

                                            <Tooltip content="Job Matcher" placement="top">
                                                <Button
                                                    isIconOnly
                                                    variant="light"
                                                    aria-label="Job Matcher"
                                                    className="text-pink-500 dark:text-pink-400"
                                                    onPress={() => { router.push(`/dashboard/job-match?websiteId=${website._id}`) }}
                                                >
                                                    <FiBriefcase />
                                                </Button>
                                            </Tooltip>

                                            <Tooltip content="Export CV" placement="top">
                                                <Button
                                                    isIconOnly
                                                    variant="light"
                                                    aria-label="Export CV"
                                                    className="text-cyan-500 dark:text-cyan-400"
                                                    onPress={() => { router.push(`/dashboard/export-cv?websiteId=${website._id}`) }}
                                                >
                                                    <FiDownload />
                                                </Button>
                                            </Tooltip>

                                        </div>
                                        <Button
                                            isIconOnly
                                            variant="light"
                                            aria-label="Edit"
                                            className="text-blue-500 dark:text-blue-400"
                                            onPress={async () => {
                                                await getTemplate(website);
                                            }}
                                        >
                                            <FiEdit2 />
                                        </Button>

                                    </div>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}