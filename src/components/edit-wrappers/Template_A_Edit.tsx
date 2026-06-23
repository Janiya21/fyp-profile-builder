"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect, useState } from "react";
import { Kbd } from "@heroui/react";
import { Input } from "@heroui/react";
import { Textarea } from "@heroui/react";


const portfolioSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters").max(50, "Name is too long"),
  address: z.string().min(5, "Address must be at least 5 characters").max(100),
  telephoneNo: z
    .string()
    .regex(/^\+?[0-9]+$/, "Phone number must contain only digits and may start with '+'") // Allows + at the start
    .min(10, "Phone number must be at least 10 digits") // Minimum 10 digits
    .max(15, "Phone number must not exceed 15 digits"), // Maximum 15 digits
  description: z.string().min(20, "Description should be at least 20 characters"),
  occupation: z.string().min(2, "Occupation must be at least 2 characters").max(50),
  experience: z
    .array(
      z.object({
        title: z.string().min(2, "Title is required"),
        company: z.string().min(2, "Company name is required"),
        years: z.string().regex(/^\d{4}\/(0[1-9]|1[0-2])-\d{4}\/(0[1-9]|1[0-2])$/, "Years must be in YYYY/MM-YYYY/MM format"),
      })
    )
    .min(1, "At least one experience is required"),
});

type PortfolioFormData = z.infer<typeof portfolioSchema>;

export function EditTemplateFormA({ onSubmit, samplePortfolioData }: { onSubmit: (data: PortfolioFormData) => void, samplePortfolioData: any }) {


  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<PortfolioFormData>({
    resolver: zodResolver(portfolioSchema),
    mode: "onBlur",  // 👈 Triggers validation on blur (losing focus)
    defaultValues: samplePortfolioData
  });


  const [experiences, setExperiences] = useState([{ title: "", company: "", years: "" }]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addExperience = () => {
    setExperiences([...experiences, { title: "", company: "", years: "" }]);
  };

  const removeExperience = (index: number) => {
    if (experiences.length > 1) {
      setExperiences(experiences.filter((_, i) => i !== index));
    }
  };

  useEffect(() => {
    console.log("Edit :" + samplePortfolioData);
    
    samplePortfolioData.experience.length > 1 ?
    samplePortfolioData.experience.forEach(() => {
      addExperience();
    }) : null;
  }, []);

  const handleFormSubmit = (data: PortfolioFormData) => {
    setIsSubmitting(true);
    sessionStorage.setItem("pfUser", data.name);
    console.log("Submitted Form Data:", data); // ✅ Logs all form data
    onSubmit(data); // If you have further processing
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {/* Form Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <Kbd keys={["command"]} className="text-xs">Portfolio Details</Kbd>
              <h2 className="text-xl font-bold mt-1">Build Your Professional Profile</h2>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="p-6 space-y-6">
          {/* Personal Information Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <Input
                label="Full Name"
                type="text"
                {...register("name")}
                variant="bordered"
                classNames={{
                  inputWrapper: "border-gray-300 hover:border-blue-500",
                  label: "text-gray-700 font-medium"
                }}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Occupation */}
            <div>
              <Input
                label="Occupation"
                type="text"
                {...register("occupation")}
                variant="bordered"
                classNames={{
                  inputWrapper: "border-gray-300 hover:border-blue-500",
                  label: "text-gray-700 font-medium"
                }}
              />
              {errors.occupation && <p className="text-red-500 text-sm mt-1">{errors.occupation.message}</p>}
            </div>

            {/* Address */}
            <div>
              <Input
                label="Address"
                type="text"
                {...register("address")}
                variant="bordered"
                classNames={{
                  inputWrapper: "border-gray-300 hover:border-blue-500",
                  label: "text-gray-700 font-medium"
                }}
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <Input
                label="Phone Number"
                type="text"
                {...register("telephoneNo")}
                variant="bordered"
                startContent={
                  <div className="pointer-events-none flex items-center">
                    {/* <span className="text-gray-500 text-sm">+</span> */}
                  </div>
                }
                classNames={{
                  inputWrapper: "border-gray-300 hover:border-blue-500",
                  label: "text-gray-700 font-medium"
                }}
              />
              {errors.telephoneNo && <p className="text-red-500 text-sm mt-1">{errors.telephoneNo.message}</p>}
            </div>
          </div>

          {/* Description */}
          <div>
            <Textarea
              {...register("description")}
              label="Professional Summary"
              placeholder="Tell us about yourself, your skills, and achievements"
              variant="bordered"
              classNames={{
                inputWrapper: "border-gray-300 hover:border-blue-500",
                label: "text-gray-700 font-medium"
              }}
              minRows={4}
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Work Experience
              </h2>
              <button
                type="button"
                className="text-sm flex items-center gap-1 text-blue-600 hover:text-blue-800"
                onClick={addExperience}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Experience
              </button>
            </div>

            {experiences.map((_, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 relative group">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Job Title */}
                  <div>
                    <Input
                      {...register(`experience.${index}.title`)}
                      label="Job Title"
                      type="text"
                      variant="bordered"
                      classNames={{
                        inputWrapper: "border-gray-300 hover:border-blue-500",
                        label: "text-gray-700 font-medium"
                      }}
                    />
                    {errors.experience?.[index]?.title && (
                      <p className="text-red-500 text-sm mt-1">{errors.experience[index]?.title?.message}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <Input
                      {...register(`experience.${index}.company`)}
                      label="Company"
                      type="text"
                      variant="bordered"
                      classNames={{
                        inputWrapper: "border-gray-300 hover:border-blue-500",
                        label: "text-gray-700 font-medium"
                      }}
                    />
                    {errors.experience?.[index]?.company && (
                      <p className="text-red-500 text-sm mt-1">{errors.experience[index]?.company?.message}</p>
                    )}
                  </div>

                  {/* Years */}
                  <div>
                    <Input
                      {...register(`experience.${index}.years`)}
                      label="Duration (YYYY/MM-YYYY/MM)"
                      type="text"
                      variant="bordered"
                      classNames={{
                        inputWrapper: "border-gray-300 hover:border-blue-500",
                        label: "text-gray-700 font-medium"
                      }}
                    />
                    {errors.experience?.[index]?.years && (
                      <p className="text-red-500 text-sm mt-1">{errors.experience[index]?.years?.message}</p>
                    )}
                  </div>

                  {/* Remove Button */}
                  {experiences.length > 1 && (
                    <button
                      type="button"
                      className="absolute -top-3 -right-3 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => removeExperience(index)}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className={`w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-md'
                }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Save Profile
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
