import { Control, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, Input, Textarea, Select, Checkbox } from '@heroui/react';
import { useEffect, useRef } from 'react';
import { CrownIcon } from 'lucide-react';

function ExperienceItem({ control, register, errors, expIndex, field, removeExperience }: { control: Control<any>, register: any, errors: any, expIndex: number, field: any, removeExperience: any }) {
  const {
    fields: achievementFields,
    append: appendAchievement,
    remove: removeAchievement
  } = useFieldArray({
    control,
    name: `experience.${expIndex}.achievements`
  });

  return (
    <div key={field.id} className="border p-4 rounded-lg mb-4">

      {/* Experience fields... */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          placeholder="Job Title"
          {...register(`experience.${expIndex}.title`)}
          errorMessage={errors.experience?.[expIndex]?.title?.message}
          classNames={{
            inputWrapper: "border-gray-100 hover:border-blue-500",
            placeholder: "text-gray-700 font-medium"
          }}
        />
        <Input
          placeholder="Company"
          {...register(`experience.${expIndex}.company`)}
          errorMessage={errors.experience?.[expIndex]?.company?.message}
          classNames={{
            inputWrapper: "border-gray-100 hover:border-blue-500",
            placeholder: "text-gray-700 font-medium"
          }}
        />
        <Input
          placeholder="Location"
          {...register(`experience.${expIndex}.location`)}
          errorMessage={errors.experience?.[expIndex]?.location?.message}
          classNames={{
            inputWrapper: "border-gray-100 hover:border-blue-500",
            placeholder: "text-gray-700 font-medium"
          }}
        />
        <Input
          // placeholder="Years egL: 2022/09-2023/06"
          placeholder='Years eg: 2022/09-2023/06'
          {...register(`experience.${expIndex}.years`)}
          errorMessage={errors.experience?.[expIndex]?.years?.message}
          classNames={{
            inputWrapper: "border-gray-100 hover:border-blue-500",
            placeholder: "text-gray-700 font-medium"
          }}
        />
      </div>

      {/* Achievements section */}
      <div className="mt-4">
        {/* <placeholder className="block text-sm font-medium mb-2">Achievements</placeholder> */}
        {achievementFields.map((achField, achIndex) => (
          <div key={achField.id} className="flex gap-2 mb-2">
            <Input
              {...register(`experience.${expIndex}.achievements.${achIndex}.value`)}
              classNames={{
                inputWrapper: "border-gray-100 hover:border-blue-500",
                placeholder: "text-gray-700 font-medium"
              }}
            />
            <Button
              type="button"
              color="danger"
              onClick={() => removeAchievement(achIndex)}
            >
              Remove
            </Button>
          </div>
        ))}
        <Button
          type="button"
          onClick={() => appendAchievement({ value: "" })}
          className="mt-2 bg-transparent"
        >
          Add Achievement
        </Button>
        <hr></hr>
      </div>

      <Button
        type="button"
        color="danger"
        onClick={() => removeExperience(expIndex)}
        className="mt-4"
      >
        Remove Experience
      </Button>
    </div>
  );
}

// Zod Schema
const userSchema = z.object({
  // Required fields
  name: z.string().min(4, "Name must be at least 4 characters"),
  position: z.string().min(3, "Position must be at least 3 characters"),
  telephoneNo: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Please enter a valid email address"),

  // Optional fields
  photoUrl: z.string().url().optional().or(z.literal("")),
  company: z.string().min(2).optional().or(z.literal("")),
  industry: z.string().min(3).optional().or(z.literal("")),
  address: z.string().min(10).optional().or(z.literal("")),
  website: z.string().url().optional().or(z.literal("")),

  // Optional nested objects
  socialLinks: z.object({
    linkedIn: z.string().url().optional().or(z.literal("")),
    twitter: z.string().url().optional().or(z.literal(""))
  }).optional(),

  summary: z.string().min(50).max(500).optional().or(z.literal("")),

  // Optional arrays
  coreCompetencies: z.array(
    z.object({
      value: z.string().optional()
    })
  ).optional(),

  experience: z.array(
    z.object({
      title: z.string().optional(),
      company: z.string().optional(),
      location: z.string().optional(),
      years: z.string().optional(),
      achievements: z.array(
        z.object({
          value: z.string().optional()
        })
      ).optional()
    })
  ).optional(),

  education: z.array(
    z.object({
      degree: z.string().optional(),
      institution: z.string().optional(),
      year: z.string().optional()
    })
  ).optional(),

  certifications: z.array(
    z.object({
      name: z.string().optional(),
      issuingOrganization: z.string().optional(),
      year: z.string().optional()
    })
  ).optional()
});

type PortfolioFormData = z.infer<typeof userSchema>;

export function EditTemplateFormF({ onSubmit, samplePortfolioData }: { onSubmit: (data: PortfolioFormData) => void, samplePortfolioData: any }) {

  const { register, handleSubmit, getValues,
    setValue, formState: { errors, isValid }, control } = useForm<PortfolioFormData>({
      resolver: zodResolver(userSchema),
      mode: "onTouched",
      defaultValues:samplePortfolioData
    });

  console.log('Form errors:', errors); // Check console for validation errors
  console.log('Is form valid:', isValid);

  const onFormSubmit = (data: PortfolioFormData) => {
    sessionStorage.setItem("pfUser", data.name);
    console.log("Submitted Form Data:", data); // ✅ Logs all form data
    onSubmit(data); // If you have further processing
  };

  const { fields: experienceFields, append: appendExperience, remove: removeExperience } = useFieldArray({
    control,
    name: "experience"
  });

  const { fields: fields, append: append, remove: remove } = useFieldArray({
    control,
    name: "coreCompetencies" as never
  });

  const { fields: educationFields, append: appendEducation, remove: removeEducation } = useFieldArray({
    control,
    name: "education"
  });

  const { fields: certificationFields, append: appendCertification, remove: removeCertification } = useFieldArray({
    control,
    name: "certifications"
  });

  const handleAddExperience = () => {
    console.log('Adding experience'); // Check how many times this logs
    appendExperience({
      title: "",
      company: "",
      location: "",
      years: "",
      achievements: []
    });
  };

  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      setValue('experience', []); // Or your initial data
    }
  }, [setValue]);

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6 md:p-6 max-w-5xl mx-auto">
      <h2 className="text-lg md:text-xl font-bold mb-6">Complete Professional Profile</h2>

      {/* Basic Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <Input
            placeholder="Full Name"
            {...register("name")}
            errorMessage={errors.name?.message}
            variant="bordered"
            classNames={{
              inputWrapper: [
                "border-gray-100 hover:border-blue-500",
                errors.name && "border-red-500"
              ],
              label: "text-gray-700 font-medium"
            }}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Position */}
        <div>
          <Input
            placeholder="Position"
            {...register("position")}
            errorMessage={errors.position?.message}
            classNames={{
              inputWrapper: [
                "border-gray-100 hover:border-blue-500",
                errors.position && "border-red-500"
              ],
              label: "text-gray-700 font-medium"
            }}
          />
          {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <Input
            placeholder="Phone (+94 123 456 789)"
            {...register("telephoneNo")}
            errorMessage={errors.telephoneNo?.message}
            classNames={{
              inputWrapper: [
                "border-gray-100 hover:border-blue-500",
                errors.telephoneNo && "border-red-500"
              ],
              label: "text-gray-700 font-medium"
            }}
          />
          {errors.telephoneNo && <p className="text-red-500 text-sm mt-1">{errors.telephoneNo.message}</p>}
        </div>

        {/* Email */}
        <div>
          <Input
            placeholder="Email"
            type="email"
            {...register("email")}
            errorMessage={errors.email?.message}
            classNames={{
              inputWrapper: [
                "border-gray-100 hover:border-blue-500",
                errors.email && "border-red-500"
              ],
              label: "text-gray-700 font-medium"
            }}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Company */}
        <div>
          <Input
            placeholder="Company"
            {...register("company")}
            errorMessage={errors.company?.message}
            classNames={{
              inputWrapper: [
                "border-gray-100 hover:border-blue-500",
                errors.company && "border-red-500"
              ],
              label: "text-gray-700 font-medium"
            }}
          />
          {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
        </div>

        {/* Industry */}
        <div>
          <Input
            placeholder="Industry"
            {...register("industry")}
            errorMessage={errors.industry?.message}
            classNames={{
              inputWrapper: [
                "border-gray-100 hover:border-blue-500",
                errors.industry && "border-red-500"
              ],
              label: "text-gray-700 font-medium"
            }}
          />
          {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry.message}</p>}
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <Input
            placeholder="Address"
            {...register("address")}
            errorMessage={errors.address?.message}
            classNames={{
              inputWrapper: [
                "border-gray-100 hover:border-blue-500",
                errors.address && "border-red-500"
              ],
              label: "text-gray-700 font-medium"
            }}
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
        </div>

        {/* Photo URL */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className='w-2/3'>
              <Input
                placeholder="Photo URL"
                {...register("photoUrl")}
                errorMessage={errors.photoUrl?.message}
                classNames={{
                  inputWrapper: [
                    "border-gray-100 hover:border-blue-500",
                    errors.photoUrl && "border-red-500"
                  ],
                  label: "text-gray-700 font-medium"
                }}
              />
            </div>

            {/* Disabled file input with premium icon */}
            <div className='w-1/3'>
              <Button
                isDisabled
                type="button"
                color="secondary"
                className="relative"
                startContent={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                endContent={
                  <span className="absolute right-0">
                    <CrownIcon className="h-5 w-5 text-yellow-500" />
                  </span>
                }
              >
                upload&nbsp;&nbsp;
              </Button>
            </div>
          </div>
          {errors.photoUrl && <p className="text-red-500 text-sm mt-1">{errors.photoUrl.message}</p>}
        </div>
      </div>

      {/* Social Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LinkedIn */}
        <div>
          <Input
            placeholder="LinkedIn URL"
            {...register("socialLinks.linkedIn")}
            errorMessage={errors.socialLinks?.linkedIn?.message}
            classNames={{
              inputWrapper: [
                "border-gray-100 hover:border-blue-500",
                errors.socialLinks?.linkedIn && "border-red-500"
              ],
              label: "text-gray-700 font-medium"
            }}
          />
          {errors.socialLinks?.linkedIn && <p className="text-red-500 text-sm mt-1">{errors.socialLinks.linkedIn.message}</p>}
        </div>

        {/* Twitter */}
        <div>
          <Input
            placeholder="Twitter URL"
            {...register("socialLinks.twitter")}
            errorMessage={errors.socialLinks?.twitter?.message}
            classNames={{
              inputWrapper: [
                "border-gray-100 hover:border-blue-500",
                errors.socialLinks?.twitter && "border-red-500"
              ],
              label: "text-gray-700 font-medium"
            }}
          />
          {errors.socialLinks?.twitter && <p className="text-red-500 text-sm mt-1">{errors.socialLinks.twitter.message}</p>}
        </div>
      </div>

      {/* Professional Summary */}
      <div>
        <Textarea
          placeholder="Professional Summary"
          minRows={4}
          {...register("summary")}
          errorMessage={errors.summary?.message}
          classNames={{
            inputWrapper: [
              "border-gray-100 hover:border-blue-500",
              errors.summary && "border-red-500"
            ],
            label: "text-gray-700 font-medium"
          }}
        />
        {errors.summary && <p className="text-red-500 text-sm mt-1">{errors.summary.message}</p>}
      </div>

      {/* Core Competencies - Dynamic Field Array */}
      <div>
        <label className="block text-sm font-medium mb-2">Core Competencies</label>
        {fields.map((field: any, index: any) => (
          <div key={field.id} className="flex gap-2 mb-2">
            <Input
              {...register(`coreCompetencies.${index}.value`)}
              defaultValue={field.value}
              errorMessage={errors.coreCompetencies?.[index]?.value?.message}
              classNames={{
                inputWrapper: [
                  "border-gray-100 hover:border-blue-500",
                  errors.coreCompetencies?.[index]?.value && "border-red-500"
                ],
                label: "text-gray-700 font-medium"
              }}
            />
            {errors.coreCompetencies?.[index]?.value && (
              <p className="text-red-500 text-sm mt-1">
                {errors.coreCompetencies[index]?.value?.message}
              </p>
            )}
            <Button
              type="button"
              color="danger"
              onClick={() => remove(index)}
            >
              Remove
            </Button>
          </div>
        ))}
        <Button
          type="button"
          onClick={() => append("")}
          className="mt-2"
        >
          Add Competency
        </Button>
      </div>

      {/* Experience Section - Dynamic Array */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Work Experience</h3>
        {experienceFields.map((field, expIndex) => (
          <div key={field.id}>
            <ExperienceItem
              control={control}
              register={register}
              errors={errors}
              expIndex={expIndex}
              field={field}
              removeExperience={removeExperience}
            />
          </div>
        ))}
        <Button
          type="button"
          onClick={handleAddExperience}
          className="mt-2"
        >
          Add Experience
        </Button>
      </div>

      {/* Education Section */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Education</h3>
        {educationFields.map((field, index) => (
          <div key={field.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Degree */}
            <div>
              <Input
                placeholder="Degree"
                {...register(`education.${index}.degree`)}
                errorMessage={errors.education?.[index]?.degree?.message}
                classNames={{
                  inputWrapper: [
                    "border-gray-100 hover:border-blue-500",
                    errors.education?.[index]?.degree && "border-red-500"
                  ],
                  label: "text-gray-700 font-medium"
                }}
              />
              {errors.education?.[index]?.degree && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.education[index]?.degree?.message}
                </p>
              )}
            </div>

            {/* Institution */}
            <div>
              <Input
                placeholder="Institution"
                {...register(`education.${index}.institution`)}
                errorMessage={errors.education?.[index]?.institution?.message}
                classNames={{
                  inputWrapper: [
                    "border-gray-100 hover:border-blue-500",
                    errors.education?.[index]?.institution && "border-red-500"
                  ],
                  label: "text-gray-700 font-medium"
                }}
              />
              {errors.education?.[index]?.institution && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.education[index]?.institution?.message}
                </p>
              )}
            </div>

            {/* Year */}
            <div>
              <Input
                placeholder="Years eg: 2022/09-2023/06"
                {...register(`education.${index}.year`)}
                errorMessage={errors.education?.[index]?.year?.message}
                classNames={{
                  inputWrapper: [
                    "border-gray-100 hover:border-blue-500",
                    errors.education?.[index]?.year && "border-red-500"
                  ],
                  label: "text-gray-700 font-medium"
                }}
              />
              {errors.education?.[index]?.year && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.education[index]?.year?.message}
                </p>
              )}
            </div>
          </div>
        ))}
        <Button
          type="button"
          onClick={() => appendEducation({
            degree: "",
            institution: "",
            year: ""
          })}
        >
          Add Education
        </Button>
      </div>

      {/* Certifications Section */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Certifications</h3>
        {certificationFields.map((field, index) => (
          <div key={field.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Name */}
            <div>
              <Input
                placeholder="Certification Name"
                {...register(`certifications.${index}.name`)}
                errorMessage={errors.certifications?.[index]?.name?.message}
                classNames={{
                  inputWrapper: [
                    "border-gray-100 hover:border-blue-500",
                    errors.certifications?.[index]?.name && "border-red-500"
                  ],
                  label: "text-gray-700 font-medium"
                }}
              />
              {errors.certifications?.[index]?.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.certifications[index]?.name?.message}
                </p>
              )}
            </div>

            {/* Issuing Organization */}
            <div>
              <Input
                placeholder="Issuing Organization"
                {...register(`certifications.${index}.issuingOrganization`)}
                errorMessage={errors.certifications?.[index]?.issuingOrganization?.message}
                classNames={{
                  inputWrapper: [
                    "border-gray-100 hover:border-blue-500",
                    errors.certifications?.[index]?.issuingOrganization && "border-red-500"
                  ],
                  label: "text-gray-700 font-medium"
                }}
              />
              {errors.certifications?.[index]?.issuingOrganization && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.certifications[index]?.issuingOrganization?.message}
                </p>
              )}
            </div>

            {/* Year */}
            <div>
              <Input
                placeholder="Years eg: 2022/09-2023/06"
                {...register(`certifications.${index}.year`)}
                errorMessage={errors.certifications?.[index]?.year?.message}
                classNames={{
                  inputWrapper: [
                    "border-gray-100 hover:border-blue-500",
                    errors.certifications?.[index]?.year && "border-red-500"
                  ],
                  label: "text-gray-700 font-medium"
                }}
              />
              {errors.certifications?.[index]?.year && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.certifications[index]?.year?.message}
                </p>
              )}
            </div>
          </div>
        ))}
        <Button
          type="button"
          onClick={() => appendCertification({
            name: "",
            issuingOrganization: "",
            year: ""
          })}
        >
          Add Certification
        </Button>
      </div>

      <Button type="submit" color="primary" className="w-full">
        Save Profile
      </Button>
    </form>
  );
}