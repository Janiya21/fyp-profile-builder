"use client";

import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Validation schema
const portfolioSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  telephoneNo: z.string().min(10, "Phone must be at least 10 characters"),
  email: z.string().email("Invalid email address"),
  occupation: z.string().min(3, "Occupation must be at least 3 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  skills: z.array(z.object({
    value: z.string().min(1)
  })).min(1),
  education: z.array(
    z.object({
      degree: z.string().min(2, "Degree/Diploma required"),
      institution: z.string().min(2, "Institution required"),
      year: z
        .string()
        .regex(
          /^\d{4}\/(0[1-9]|1[0-2])-\d{4}\/(0[1-9]|1[0-2])$/,
          { message: "Year must be in format YYYY/MM-YYYY/MM (e.g., 2022/02-2023/10)" }
        ),
    })
  ).min(1, "At least one education entry required"),
  experience: z.array(
    z.object({
      title: z.string().min(2, "Title required"),
      company: z.string().min(2, "Company required"),
      years: z
        .string()
        .regex(
          /^\d{4}\/(0[1-9]|1[0-2])-\d{4}\/(0[1-9]|1[0-2])$/,
          { message: "Year must be in format YYYY/MM-YYYY/MM (e.g., 2022/02-2023/10)" }
        ),
      description: z.string().optional(),
    })
  ).min(1, "At least one experience required"),
  projects: z.array(
    z.object({
      name: z.string().min(2, "Project name required"),
      description: z.string().min(10, "Description must be at least 10 characters"),
      link: z.string().url("Invalid URL").or(z.literal("")).optional(),
    })
  ).optional(),
});

type PortfolioFormData = z.infer<typeof portfolioSchema>;

export function TemplateBForm({ onSubmit }: { onSubmit: (data: PortfolioFormData) => void }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PortfolioFormData>({
    resolver: zodResolver(portfolioSchema),
    defaultValues: {
      skills: [{ value: "" }],
      education: [{ degree: "", institution: "", year: "" }],
      experience: [{ title: "", company: "", years: "", description: "" }],
    },
  });

  // Array fields management
  const {
    fields: skillFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray<PortfolioFormData>({
    control,
    name: "skills" as never,
  });

  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "education",
  });

  const {
    fields: experienceFields,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control,
    name: "experience",
  });

  const {
    fields: projectFields,
    append: appendProject,
    remove: removeProject,
  } = useFieldArray({
    control,
    name: "projects",
  });

  const [showProjectLinks, setShowProjectLinks] = useState<boolean[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (data: PortfolioFormData) => {
    setIsSubmitting(true);
    sessionStorage.setItem("pfUser", data.name);
    console.log("Submitted Form Data:", data); // ✅ Logs all form data
    onSubmit(data); // If you have further processing
  };

  const toggleProjectLink = (index: number) => {
    const newLinks = [...showProjectLinks];
    newLinks[index] = !newLinks[index];
    setShowProjectLinks(newLinks);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="max-w-4xl mx-auto  p-2 lg:p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Your Portfolio</h2>

      {/* Basic Info */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
            <input
              placeholder="Alexander Johnson"
              {...register("name")}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Occupation*</label>
            <input
              placeholder="Web Developer"
              {...register("occupation")}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.occupation && <p className="text-red-500 text-xs mt-1">{errors.occupation.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
            <input
              type="email"
              placeholder="alexanderjohnson@example.com"
              {...register("email")}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
            <input
              placeholder="+94-123456789"
              {...register("telephoneNo")}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.telephoneNo && <p className="text-red-500 text-xs mt-1">{errors.telephoneNo.message}</p>}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Address*</label>
            <input
              {...register("address")}
              placeholder="123 Main Street, Anytown, USA"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description*</label>
            <textarea
              {...register("description")}
              rows={4}
              placeholder="Tell us about yourself, your skills, and achievements"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold border-b pb-2">Skills*</h3>
          <button
            type="button"
            onClick={() => appendSkill({ value: "" })}
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Skill
          </button>
        </div>

        {skillFields.map((field, index) => (
          <div key={field.id} className="flex items-center gap-2 mb-2">
            <input
              {...register(`skills.${index}.value`)}
              className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {skillFields.length > 1 && (
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        {errors.skills && <p className="text-red-500 text-xs mt-1">{errors.skills.message}</p>}
      </section>

      {/* Education */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold border-b pb-2">Education*</h3>
          <button
            type="button"
            onClick={() => appendEducation({ degree: "", institution: "", year: "" })}
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Education
          </button>
        </div>

        {educationFields.map((field, index) => (
          <div key={field.id} className="mb-6 p-4 border rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Degree/Diploma *</label>
                <input
                  placeholder="Bachelor of Science"
                  {...register(`education.${index}.degree`)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.education?.[index]?.degree && (
                  <p className="text-red-500 text-xs mt-1">{errors.education[index]?.degree?.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Institution*</label>
                <input
                  placeholder="University of Example"
                  {...register(`education.${index}.institution`)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.education?.[index]?.institution && (
                  <p className="text-red-500 text-xs mt-1">{errors.education[index]?.institution?.message}</p>
                )}
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Year*</label>
              <input
                placeholder="2022/09-2023/06"
                {...register(`education.${index}.year`)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.education?.[index]?.year && (
                <p className="text-red-500 text-xs mt-1">{errors.education[index]?.year?.message}</p>
              )}
            </div>

            {educationFields.length > 1 && (
              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="mt-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Remove Education
              </button>
            )}
          </div>
        ))}
        {errors.education && <p className="text-red-500 text-xs mt-1">{errors.education.message}</p>}
      </section>

      {/* Experience */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold border-b pb-2">Experience*</h3>
          <button
            type="button"
            onClick={() => appendExperience({ title: "", company: "", years: "", description: "" })}
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Experience
          </button>
        </div>

        {experienceFields.map((field, index) => (
          <div key={field.id} className="mb-6 p-4 border rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title*</label>
                <input
                  placeholder="Web Developer"
                  {...register(`experience.${index}.title`)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.experience?.[index]?.title && (
                  <p className="text-red-500 text-xs mt-1">{errors.experience[index]?.title?.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company*</label>
                <input
                  placeholder="Example Company"
                  {...register(`experience.${index}.company`)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.experience?.[index]?.company && (
                  <p className="text-red-500 text-xs mt-1">{errors.experience[index]?.company?.message}</p>
                )}
              </div>
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Years*</label>
              <input
                placeholder="2022/09-2023/06"
                {...register(`experience.${index}.years`)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.experience?.[index]?.years && (
                <p className="text-red-500 text-xs mt-1">{errors.experience[index]?.years?.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                placeholder="Describe your role and responsibilities"
                {...register(`experience.${index}.description`)}
                rows={3}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {experienceFields.length > 1 && (
              <button
                type="button"
                onClick={() => removeExperience(index)}
                className="mt-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Remove Experience
              </button>
            )}
          </div>
        ))}
        {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience.message}</p>}
      </section>

      {/* Projects */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold border-b pb-2">Projects</h3>
          <button
            type="button"
            onClick={() => {
              appendProject({ name: "", description: "", link: "" });
              setShowProjectLinks([...showProjectLinks, false]);
            }}
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Project
          </button>
        </div>

        {projectFields.map((field, index) => (
          <div key={field.id} className="mb-6 p-4 border rounded-lg">
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Name*</label>
              <input
                placeholder="Project Name"
                {...register(`projects.${index}.name`)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.projects?.[index]?.name && (
                <p className="text-red-500 text-xs mt-1">{errors.projects[index]?.name?.message}</p>
              )}
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description*</label>
              <textarea
                placeholder="Describe your project"
                {...register(`projects.${index}.description`)}
                rows={3}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.projects?.[index]?.description && (
                <p className="text-red-500 text-xs mt-1">{errors.projects[index]?.description?.message}</p>
              )}
            </div>

            <div className="flex items-center mb-2">
              <input
                placeholder="https://example.com"
                type="checkbox"
                id={`project-has-link-${index}`}
                checked={showProjectLinks[index]}
                onChange={() => toggleProjectLink(index)}
                className="mr-2"
              />
              <label htmlFor={`project-has-link-${index}`} className="text-sm text-gray-700">
                Include project link
              </label>
            </div>

            {showProjectLinks[index] && (
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Project URL</label>
                <input
                  {...register(`projects.${index}.link`)}
                  type="url"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.projects?.[index]?.link && (
                  <p className="text-red-500 text-xs mt-1">{errors.projects[index]?.link?.message}</p>
                )}
              </div>
            )}

            <button
              type="button"
              onClick={() => {
                removeProject(index);
                const newLinks = [...showProjectLinks];
                newLinks.splice(index, 1);
                setShowProjectLinks(newLinks);
              }}
              className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Remove Project
            </button>
          </div>
        ))}
      </section>

      <div className="flex justify-center">
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
  );
}