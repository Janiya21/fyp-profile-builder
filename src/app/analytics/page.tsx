'use client';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import CommonNav from '@/components/CommonNav';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export default function AnalyticsDashboard() {
const [isFeatureReady, setIsFeatureReady] = useState(false); // Simulate feature development
    
    // Sample data - replace with your actual analytics data
    const viewsData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Portfolio Views',
                data: [120, 190, 300, 250, 420, 380],
                backgroundColor: 'rgba(124, 58, 237, 0.7)',
            },
        ],
    };
    
    const countryData = {
        labels: ['USA', 'India', 'UK', 'Germany', 'Canada'],
        datasets: [
            {
                data: [35, 25, 15, 10, 15],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.7)',
                    'rgba(16, 185, 129, 0.7)',
                    'rgba(245, 158, 11, 0.7)',
                    'rgba(239, 68, 68, 0.7)',
                    'rgba(139, 92, 246, 0.7)',
                ],
            },
        ],
    };
    
    const deviceData = {
        labels: ['Desktop', 'Mobile', 'Tablet'],
        datasets: [
            {
                data: [60, 30, 10],
                backgroundColor: [
                    'rgba(99, 102, 241, 0.7)',
                    'rgba(14, 165, 233, 0.7)',
                    'rgba(20, 184, 166, 0.7)',
                ],
            },
        ],
    };
    
    if (!isFeatureReady) {
        return (
            <div>
                <CommonNav />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6 animate-pulse">
                        <span className="inline-block animate-bounce mr-2">🛠️</span>
                        Analytics Dashboard
                        <span className="inline-block animate-bounce ml-2">🛠️</span>
                    </h1>
                    <p className="text-lg text-gray-600">
                        This feature is currently under development and will be available soon.
                        We are working hard to bring you valuable insights into your portfolio performance.
                    </p>
                </div>
                <Footer />
            </div>
        );
    }
    
    return (
        <div className="opacity-0 animate-fade-in"> {/* Add a fade-in animation to the whole container */}
            <CommonNav />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:mb-20 mb-5">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 animate-slide-in-left">Portfolio Analytics</h1> {/* Example animation */}
    
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Monthly Views */}
                    <div className="bg-white p-6 rounded-lg shadow animate-slide-in-bottom"> {/* Example animation */}
                        <h2 className="text-xl font-semibold mb-4">Monthly Views</h2>
                        <div className="h-64">
                            <Bar
                                data={viewsData}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: { position: 'top' },
                                    },
                                }}
                            />
                        </div>
                    </div>
    
                    {/* Traffic by Country */}
                    <div className="bg-white p-6 rounded-lg shadow animate-slide-in-bottom delay-100"> {/* Example with delay */}
                        <h2 className="text-xl font-semibold mb-4">Traffic by Country</h2>
                        <div className="h-64">
                            <Pie
                                data={countryData}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: { position: 'right' },
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
    
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Devices */}
                    <div className="bg-white p-6 rounded-lg shadow animate-fade-in delay-200"> {/* Example animation */}
                        <h2 className="text-xl font-semibold mb-4">Device Distribution</h2>
                        <div className="h-64">
                            <Pie
                                data={deviceData}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                }}
                            />
                        </div>
                    </div>
    
                    {/* Top Pages */}
                    <div className="bg-white p-6 rounded-lg shadow md:col-span-2 animate-fade-in delay-300"> {/* Example animation */}
                        <h2 className="text-xl font-semibold mb-4">Top Viewed Pages</h2>
                        <div className="space-y-3">
                            {[
                                { page: '/', views: 420 },
                                { page: '/projects', views: 380 },
                                { page: '/about', views: 210 },
                                { page: '/contact', views: 180 },
                                { page: '/blog', views: 150 },
                            ].map((item) => (
                                <div key={item.page} className="flex items-center">
                                    <div className="w-48 text-gray-600">{item.page}</div>
                                    <div className="flex-1">
                                        <div
                                            className="bg-purple-100 h-4 rounded-full"
                                            style={{ width: `${(item.views / 420) * 100}%` }}
                                        >
                                            <div className="bg-purple-600 h-4 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="w-12 text-right font-medium">{item.views}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
    
                {/* Recent Visitors */}
                <div className="bg-white p-6 rounded-lg shadow mt-6 animate-slide-up"> {/* Example animation */}
                    <h2 className="text-xl font-semibold mb-4">Recent Visitors</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {[
                                    { time: '2 mins ago', country: 'USA', device: 'Desktop', page: '/' },
                                    { time: '5 mins ago', country: 'India', device: 'Mobile', page: '/projects' },
                                    { time: '12 mins ago', country: 'UK', device: 'Desktop', page: '/about' },
                                    { time: '24 mins ago', country: 'Canada', device: 'Tablet', page: '/' },
                                    { time: '38 mins ago', country: 'Germany', device: 'Desktop', page: '/contact' },
                                ].map((visitor, index) => (
                                    <tr key={index} className="hover:bg-gray-100 transition-all duration-200"> {/* Example hover effect */}
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visitor.time}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{visitor.country}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visitor.device}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visitor.page}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}