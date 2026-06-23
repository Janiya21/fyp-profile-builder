"use client";

import CommonNav from "@/components/CommonNav";
import Footer from "@/components/Footer";
import { Button, Input, Textarea } from "@heroui/react";
import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <CommonNav />
      <section className={`lg:py-20 py-10 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'} relative overflow-hidden`}>
        {/* Background Glow Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-16 w-72 h-72 rounded-full bg-purple-500 blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-16 w-72 h-72 rounded-full bg-blue-500 blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Get In Touch
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Have questions or want to discuss a project? Reach out to us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Info Card */}
            <div className={`p-8 rounded-2xl backdrop-blur-md shadow-xl border ${darkMode
              ? 'bg-gray-800/70 border-gray-700'
              : 'bg-white/80 border-gray-200'
              } transform transition-all duration-500 hover:scale-[1.02] animate-slide-in-left`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className={`p-3 rounded-full mr-4 transition-transform duration-300 group-hover:scale-110 ${darkMode ? 'bg-gray-700 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</h4>
                    <a
                      href="mailto:contact@jsrprofiles.com"
                      className={`${darkMode ? 'text-purple-800 hover:text-purple-300' : 'text-purple-800 hover:text-purple-800'} transition-colors`}
                    >
                      janithsandaru999@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className={`p-3 rounded-full mr-4 transition-transform duration-300 group-hover:scale-110 ${darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Phone</h4>
                    <a
                      href="tel:+1234567890"
                      className={`${darkMode ? 'text-blue-800 hover:text-blue-300' : 'text-blue-800 hover:text-blue-800'} transition-colors`}
                    >
                      +94-788026091
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className={`p-3 rounded-full mr-4 transition-transform duration-300 group-hover:scale-110 ${darkMode ? 'bg-gray-700 text-green-400' : 'bg-green-100 text-green-600'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Office</h4>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      435, 10th Mile Post Rd,<br />
                      Boralesgamuwa<br />
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-10">
                <h4 className={`font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    // { name: "Twitter", icon: "𝕏", link: "#" },
                    { name: "LinkedIn", icon: "https://img.icons8.com/?size=100&id=8808&format=png&color=000000", link: "www.linkedin.com/in/janith21" },
                    { name: "GitHub", icon: "https://img.icons8.com/?size=100&id=12599&format=png&color=000000", link: "https://github.com/Janiya21" }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode
                        ? 'bg-gray-700 hover:bg-gray-600'
                        : 'bg-gray-200 hover:bg-gray-300'
                        } transition-all duration-300 hover:scale-110`}
                      aria-label={social.name}
                    >
                      {/* <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {social.icon}
                      </span> */}
                      <img src={social.icon} alt={social.name} className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className={`p-8 rounded-2xl backdrop-blur-md shadow-xl border ${darkMode
              ? 'bg-gray-800/70 border-gray-700'
              : 'bg-white/80 border-gray-200'
              } transform transition-all duration-500 hover:scale-[1.02] animate-slide-in-right`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Send us a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  isRequired
                  type="text"
                  label="Name"
                  variant="bordered"
                  classNames={{
                    base: `${darkMode ? 'text-white' : 'text-gray-900'}`,
                    inputWrapper: `${darkMode
                      ? 'bg-gray-700 border-gray-600 data-[hover=true]:border-purple-500'
                      : 'bg-white border-gray-300 data-[hover=true]:border-purple-500'
                      }`,
                    label: `${darkMode ? 'text-gray-300' : 'text-gray-600'}`
                  }}
                  value=""
                  onChange={() => { }}
                />

                <Input
                  isRequired
                  type="email"
                  label="Email"
                  variant="bordered"
                  classNames={{
                    base: `${darkMode ? 'text-white' : 'text-gray-900'}`,
                    inputWrapper: `${darkMode
                      ? 'bg-gray-700 border-gray-600 data-[hover=true]:border-purple-500'
                      : 'bg-white border-gray-300 data-[hover=true]:border-purple-500'
                      }`,
                    label: `${darkMode ? 'text-gray-300' : 'text-gray-600'}`
                  }}
                  value=""
                  onChange={() => { }}
                />

                <Textarea
                  isRequired
                  label="Message"
                  variant="bordered"
                  minRows={5}
                  classNames={{
                    base: `${darkMode ? 'text-white' : 'text-gray-900'}`,
                    inputWrapper: `${darkMode
                      ? 'bg-gray-700 border-gray-600 data-[hover=true]:border-purple-500'
                      : 'bg-white border-gray-300 data-[hover=true]:border-purple-500'
                      }`,
                    label: `${darkMode ? 'text-gray-300' : 'text-gray-600'}`
                  }}
                  value=""
                  onChange={() => { }}
                />

                <Button
                  type="submit"
                  color="secondary"
                  endContent={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  }
                  className={`w-full md:w-auto px-8 py-6 font-medium ${darkMode
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white'
                    : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 text-white'
                    } rounded-lg transition-transform hover:scale-105 transform`}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}