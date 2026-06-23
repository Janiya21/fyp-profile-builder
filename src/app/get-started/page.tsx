"use client"
import React, { useState, useEffect } from 'react';
import { AlertTriangle, Clock, RefreshCw } from 'lucide-react';

const DemoPage = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [showPayment, setShowPayment] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('Professional');
    const [animatedStats, setAnimatedStats] = useState({
        users: 0,
        projects: 0,
        revenue: 0
    });

    // Animate stats on mount
    useEffect(() => {
        const interval = setInterval(() => {
            setAnimatedStats(prev => ({
                users: Math.min(prev.users + 47, 2847),
                projects: Math.min(prev.projects + 12, 1253),
                revenue: Math.min(prev.revenue + 180, 18450)
            }));
        }, 50);

        setTimeout(() => clearInterval(interval), 2000);
        return () => clearInterval(interval);
    }, []);

    const demoTabs = [
        { id: 'dashboard', name: 'Dashboard', icon: '📊' },
        { id: 'analytics', name: 'Analytics', icon: '📈' },
        { id: 'projects', name: 'Projects', icon: '🚀' },
        { id: 'team', name: 'Team', icon: '👥' }
    ];

    const projects = [
        { name: 'E-commerce Platform', status: 'In Progress', progress: 75, team: 4, color: 'from-blue-500 to-cyan-500' },
        { name: 'Mobile App Redesign', status: 'Review', progress: 90, team: 3, color: 'from-purple-500 to-pink-500' },
        { name: 'Marketing Website', status: 'Planning', progress: 25, team: 2, color: 'from-green-500 to-teal-500' },
        { name: 'API Integration', status: 'Completed', progress: 100, team: 5, color: 'from-orange-500 to-red-500' }
    ];

    const teamMembers = [
        { name: 'Sarah Chen', role: 'Product Manager', avatar: 'SC', status: 'online' },
        { name: 'Alex Rodriguez', role: 'Lead Developer', avatar: 'AR', status: 'online' },
        { name: 'Maya Patel', role: 'UX Designer', avatar: 'MP', status: 'away' },
        { name: 'John Smith', role: 'DevOps Engineer', avatar: 'JS', status: 'offline' }
    ];

    const PaymentModal = () => (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 max-w-md w-full transform animate-pulse">
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Complete Your Order</h3>
                    <p className="text-gray-300">You're getting the {selectedPlan} plan</p>
                </div>

                <div className="space-y-6">
                    {/* Plan Summary */}
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4">
                        <div className="flex justify-between items-center">
                            <span className="text-white font-medium">{selectedPlan} Plan</span>
                            <span className="text-2xl font-bold text-white">$29/mo</span>
                        </div>
                        <p className="text-gray-400 text-sm mt-1">Billed monthly • Cancel anytime</p>
                    </div>

                    {/* Payment Form */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Card Number</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
                                placeholder="1234 5678 9012 3456"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Expiry</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
                                    placeholder="MM/YY"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">CVC</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
                                    placeholder="123"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-4 pt-4">
                        <button
                            onClick={() => setShowPayment(false)}
                            className="flex-1 py-3 px-6 border-2 border-white/20 text-white font-semibold rounded-xl hover:border-white/40 hover:bg-white/10 transition-all duration-300"
                        >
                            Cancel
                        </button>
                        <button className="flex-1 py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                            Start Trial
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
            </div>

            <div className="relative z-10 p-4 sm:p-6 lg:p-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                        Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Platform</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8">
                        See how our platform can transform your workflow
                    </p>

                    {/* <button
                        // onClick={() => setShowPayment(true)}
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        🚀 Proceed to Payment
                    </button> */}
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                        <div className="text-3xl mb-2">👥</div>
                        <div className="text-3xl font-bold text-white mb-1">20+</div>
                        <div className="text-gray-300">Active Users</div>
                    </div>
                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                        <div className="text-3xl mb-2">🚀</div>
                        <div className="text-3xl font-bold text-white mb-1">30+</div>
                        <div className="text-gray-300">Portfolio Created</div>
                    </div>
                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                        <div className="text-3xl mb-2">💰</div>
                        <div className="text-3xl font-bold text-white mb-1">10+</div>
                        <div className="text-gray-300">Premium Users</div>
                    </div>
                </div>

                <div className="max-w-md mx-auto bg-transparent rounded-lg shadow-lg border border-gray-200 p-6 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="bg-amber-100 p-3 rounded-full">
                            <AlertTriangle className="w-8 h-8 text-amber-600" />
                        </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-100 mb-2">
                        Payment System Under Maintenance
                    </h3>

                    <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                        We're currently performing scheduled maintenance on our payment system to improve your experience.
                        Please try again in a few minutes.
                    </p>

                    <div className="flex items-center justify-center gap-2 text-sm text-gray-200 mb-4">
                        <Clock className="w-4 h-4" />
                        <span>Expected completion: -</span>
                    </div>

                    <button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                        onClick={() => window.location.reload()}
                    >
                        <RefreshCw className="w-4 h-4" />
                        Refresh Page
                    </button>

                    <p className="text-xs text-gray-300 mt-3">
                        For urgent matters, contact our support team
                    </p>
                </div>

                {/* Demo Interface */}
                {/* <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
            
            <div className="flex overflow-x-auto border-b border-white/20 bg-white/5">
              {demoTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-white border-b-2 border-purple-400 bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            <div className="p-8">
              {activeTab === 'dashboard' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Project Dashboard</h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {['New Project', 'Add Team', 'Generate Report', 'View Analytics'].map((action, index) => (
                      <button
                        key={action}
                        className="p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                      >
                        <div className="text-white font-medium">{action}</div>
                      </button>
                    ))}
                  </div>

                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                      {[
                        { action: 'Project "E-commerce Platform" updated', time: '2 minutes ago', user: 'Sarah Chen' },
                        { action: 'New team member added to Mobile App project', time: '1 hour ago', user: 'Alex Rodriguez' },
                        { action: 'Marketing Website design approved', time: '3 hours ago', user: 'Maya Patel' }
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <div className="flex-1">
                            <div className="text-white text-sm">{activity.action}</div>
                            <div className="text-gray-400 text-xs">{activity.time} • {activity.user}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'projects' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white">Projects</h2>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all">
                      + New Project
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                      <div
                        key={project.name}
                        className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                            <p className="text-gray-300 text-sm">{project.status}</p>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}>
                            {project.progress}%
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-300 mb-2">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full bg-gradient-to-r ${project.color} transition-all duration-1000`}
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-gray-300 text-sm">
                            👥 {project.team} team members
                          </div>
                          <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                            View Details →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'team' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white">Team Members</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {teamMembers.map((member, index) => (
                      <div
                        key={member.name}
                        className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                              {member.avatar}
                            </div>
                            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-800 ${
                              member.status === 'online' ? 'bg-green-400' : 
                              member.status === 'away' ? 'bg-yellow-400' : 'bg-gray-400'
                            }`}></div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-white font-semibold">{member.name}</h3>
                            <p className="text-gray-300 text-sm">{member.role}</p>
                            <p className="text-gray-400 text-xs capitalize">{member.status}</p>
                          </div>
                          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white">Analytics Overview</h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Performance Metrics</h3>
                      <div className="space-y-4">
                        {[
                          { label: 'Task Completion Rate', value: 94, color: 'from-green-400 to-blue-500' },
                          { label: 'Team Productivity', value: 87, color: 'from-purple-400 to-pink-500' },
                          { label: 'Client Satisfaction', value: 96, color: 'from-orange-400 to-red-500' }
                        ].map((metric, index) => (
                          <div key={metric.label}>
                            <div className="flex justify-between text-sm text-gray-300 mb-2">
                              <span>{metric.label}</span>
                              <span>{metric.value}%</span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full bg-gradient-to-r ${metric.color} transition-all duration-1000`}
                                style={{ width: `${metric.value}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Monthly Growth</h3>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">+24%</div>
                        <div className="text-gray-300 mb-4">Compared to last month</div>
                        <div className="flex justify-center space-x-4 text-sm">
                          <div className="text-green-400">↗ Revenue +18%</div>
                          <div className="text-blue-400">↗ Users +31%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div> */}

                {/* Bottom CTA */}
                {/* <div className="text-center mt-12">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to get started?</h3>
            <p className="text-gray-300 mb-6">Join thousands of teams already using our platform</p>
            <button
              onClick={() => setShowPayment(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Start Free Trial
            </button>
          </div>
        </div> */}
            </div>

            {/* Payment Modal */}
            {showPayment && <PaymentModal />}
        </div>
    );
};

export default DemoPage;