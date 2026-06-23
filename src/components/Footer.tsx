"use client";
import React, { useState } from 'react'

const Footer = () => {

    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className=''>
            {/* Footer */}
            <footer className={`py-12 mt-10  ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-700'}`}>
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row  justify-between lg:px-32 lg:gap-20 gap-2">

                        {/* Brand Column */}
                        <div className="mb-8 md:mb-0">
                            {/* <img
                                src="https://jsr-dev-portfolio.s3.eu-north-1.amazonaws.com/mainlogo.png"
                                alt="logo"
                                className="w-28 h-18 hover:scale-105 transition-transform duration-300"
                            /> */}
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
                                    <li><a href="https://jsr-dev.vercel.app/" className="hover:underline transition-colors">About Us</a></li>
                                    {/* <li><a href="#" className="hover:underline transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:underline transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:underline transition-colors">Press</a></li> */}
                                </ul>
                            </div>

                            {/* Support */}
                            <div>
                                <h3 className="font-semibold mb-4">Support</h3>
                                <ul className="space-y-2">
                                    {/* <li><a href="#" className="hover:underline transition-colors">Help Center</a></li> */}
                                    <li><a href="/contact-us" className="hover:underline transition-colors">Contact Us</a></li>
                                    {/* <li><a href="#" className="hover:underline transition-colors">FAQ</a></li> */}
                                    {/* <li><a href="/pricing" className="hover:underline transition-colors">Pricing</a></li> */}
                                </ul>
                            </div>

                            {/* Legal */}
                            <div>
                                <h3 className="font-semibold mb-4">Legal</h3>
                                <ul className="space-y-2">
                                    <li><a href="/terms-of-service" className="hover:underline transition-colors">Terms of Service</a></li>
                                    <li><a href="#" className="hover:underline transition-colors">Privacy Policy</a></li>
                                    <li><a href="#" className="hover:underline transition-colors">Cookie Policy</a></li>
                                </ul>
                            </div>

                            {/* Social / Newsletter */}
                            <div>
                                <h3 className="font-semibold mb-4">Pricing</h3>
                                <ul className="space-y-2">
                                    {/* <li><a href="#" className="hover:underline transition-colors">Help Center</a></li> */}
                                    {/* <li><a href="/contact-us" className="hover:underline transition-colors">Contact Us</a></li> */}
                                    {/* <li><a href="#" className="hover:underline transition-colors">FAQ</a></li> */}
                                    <li><a href="/pricing" className="hover:underline transition-colors">Pricing</a></li>
                                </ul>
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
    )
}

export default Footer
