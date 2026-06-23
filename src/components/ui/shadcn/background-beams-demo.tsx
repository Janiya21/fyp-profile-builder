"use client";

import React, { useEffect, useState } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { signIn, signOut, useSession } from "next-auth/react";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import { useRouter } from "next/navigation";
import { Kbd } from "@heroui/kbd";
import PageLoader from "@/components/PageLOader";
import { motion } from "framer-motion";

export default function BeamUI() {
  return (
    <SessionProviderWrapper>
      <BackgroundBeamsWithCollisionDemo />
    </SessionProviderWrapper>
  );
}

function BackgroundBeamsWithCollisionDemo() {
  const { data: session, status } = useSession();
  const [isHovered, setIsHovered] = useState(false);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);

  useEffect(() => {
    handleRouteAccordingToUser();
  }, [session]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  async function handleRouteAccordingToUser() {
    if (session) {
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
          router.push(`/templates?pfUserId=${userData._id}`);
        } else if (data?.user?.progressStep === "signedIn") {
          console.log("mmmm 2");
        }

      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {

      }
    } else {
      // router.push(`/`);
    }

  }

  const [formData, setFormData] = useState({
    userId: session?.user?.id || "",
    name: session?.user?.name || "",
    email: session?.user?.email || "",
    hometown: "",
    phoneNumber: "",
    jobTitle: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    hometown: "",
    phoneNumber: "",
    jobTitle: "",
  });

  useEffect(() => {
    if (session) {
      setFormData((prev) => ({
        ...prev,
        name: session.user?.name?.replace(/\s+/g, '') || "",
        email: session.user?.email || "",
      }));

    }
  }, [session]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear error when user types
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: "", email: "", hometown: "", phoneNumber: "", jobTitle: "" };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    }

    // Hometown validation
    if (!formData.hometown.trim()) {
      newErrors.hometown = "Hometown is required.";
      valid = false;
    }

    // Phone number validation (Sri Lanka: +947XXXXXXXX)
    const phoneRegex = /^\+947\d{8}$/; // Must start with +947 and be 11 digits total
    if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid Sri Lankan phone number (e.g., +94788029011).";
      valid = false;
    }

    // Job Title validation
    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = "Job Title / Profession is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setLoading(true);
        const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/pf-user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (data.success) {
          console.log("✅ User saved successfully:", data.user);
          router.push(`/templates?pfUserId=${data.user._id}`);
        } else {
          console.error("❌ Error saving user:", data.message);
        }
      } catch (error) {
        console.error("❌ Error submitting form:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    }
  };

  const verifyUsername = async () => {
    // First validate format
    if (!formData.name.trim()) {
      setErrors(prev => ({
        ...prev,
        name: 'Username is required'
      }));
      return;
    }

    if (!validateUsername(formData.name)) {
      setErrors(prev => ({
        ...prev,
        name: 'Only letters, numbers, underscore (_) and hyphen (-) allowed'
      }));
      return;
    }

    try {
      setIsVerifying(true);
      const response = await fetch(`/api/check-username?username=${encodeURIComponent(formData.name)}`);
      const data = await response.json();

      if (data.exists) {
        setErrors(prev => ({
          ...prev,
          name: 'Username already taken'
        }));
      } else {
        setErrors(prev => ({
          ...prev,
          name: ''
        }));
        setIsUsernameValid(true);
        // You might want to show a success message here
      }
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        name: 'Error verifying username'
      }));
    } finally {
      setIsVerifying(false);
    }
  };

  const validateUsername = (username: any) => {
    const regex = /^[a-zA-Z0-9_-]+$/; // No spaces, only letters, numbers, underscore and hyphen
    return regex.test(username);
  };

  return (
    <div>
      {loading && <PageLoader />}
      <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-2">
          {/* Left Section - Hero Text */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white leading-tight mb-6"
              variants={itemVariants}
            >
              Craft an Impressive Portfolio
            </motion.h2>

            <motion.div
              className="relative mb-8"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 blur-xl opacity-30 rounded-full"></div>
              <div className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold">In Just a Few Clicks</span>
              </div>
            </motion.div>

            <motion.div
              className="hidden lg:block"
              variants={itemVariants}
            >
              <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <motion.li
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Professional templates designed to impress
                </motion.li>
                <motion.li
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Mobile-friendly and responsive designs
                </motion.li>
                <motion.li
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Easy customization with no coding required
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div
            className="w-full lg:w-1/2 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="p-6 sm:p-8">
                {/* <div className="mb-6">
                  <Kbd keys={["command"]}>Complete Your Profile</Kbd>
                </div> */}

                {/* session.user.image */}
                {/* Profile Image */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                      {session?.user?.image ? (
                        <img
                          src={`https://img.freepik.com/premium-vector/identification-card-icon-id-profile-neon-style-light-decoration-icon-bright-electric-symbol-isolated-brick-wall_549897-591.jpg`}
                          className="w-full h-full object-cover"
                          alt="Profile"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                          {session?.user?.name?.charAt(0) || 'U'}
                        </div>
                      )}
                    </div>
                    <button
                      className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <svg
                        className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform ${isHovered ? 'scale-110' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </button>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                    {session?.user?.name || 'Welcome!'}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {session?.user?.email || 'Complete your profile'}
                  </p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Username (will be used in your URL)
                    </label>
                    <div className="flex gap-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className={`flex-1 px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                          } focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white`}
                        placeholder="john-doe"
                      />
                      <button
                        type="button"
                        onClick={verifyUsername}
                        disabled={isVerifying || !formData.name.trim()}
                        className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg disabled:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                      >
                        {isVerifying ? '..........' : 'Check'}
                      </button>
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                    {/* {!errors.name && formData.name && (
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Your URL will be: https://webquen.com/web/{formData.name}
                      </p>
                    )} */}
                  </div>

                  {/* Email Field (disabled) */}
                  <div>
                    {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label> */}
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      disabled
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 cursor-not-allowed"
                    />
                  </div>

                  {/* Hometown Field */}
                  <div>
                    {/* <label htmlFor="hometown" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Hometown
                    </label> */}
                    <input
                      id="hometown"
                      name="hometown"
                      type="text"
                      value={formData.hometown}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.hometown ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white`}
                      placeholder="Colombo, Sri Lanka"
                    />
                    {errors.hometown && (
                      <p className="mt-1 text-sm text-red-600">{errors.hometown}</p>
                    )}
                  </div>

                  {/* Phone Number Field */}
                  <div>
                    {/* <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number
                    </label> */}
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white`}
                      placeholder="+94781111111"
                    />
                    {errors.phoneNumber && (
                      <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
                    )}
                  </div>

                  {/* Job Title Field */}
                  <div>
                    {/* <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Profession
                    </label> */}
                    <input
                      id="jobTitle"
                      name="jobTitle"
                      type="text"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.jobTitle ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white`}
                      placeholder="Software Engineer"
                    />
                    {errors.jobTitle && (
                      <p className="mt-1 text-sm text-red-600">{errors.jobTitle}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className={`w-full py-3 px-6 text-white font-medium rounded-lg shadow-md transition-all duration-300 ${isUsernameValid
                        ? 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600'
                        : 'bg-gray-400 cursor-not-allowed'
                      }`}
                    whileHover={isUsernameValid ? { scale: 1.02 } : {}}
                    whileTap={isUsernameValid ? { scale: 0.98 } : {}}
                    disabled={!isUsernameValid}
                  >
                    Continue to Templates
                    <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
