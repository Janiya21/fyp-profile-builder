import TemplateA from '@/components/templates/Template_A';
import TemplateB from '@/components/templates/Template_B';
import TemplateC from '@/components/templates/Template_C';
import TemplateE from '@/components/templates/Template_E';
import TemplateF from '@/components/templates/Template_F';
import { TemplateBForm } from "@/components/forms/Template_B_Form";
import { TemplateCForm } from "@/components/forms/Template_C_Form";
import { TemplateAForm } from "@/components/forms/Template_A_Form";
import { TemplateEForm } from '@/components/forms/Template_E_Form';
import { TemplateDForm } from '@/components/forms/Template_D_Form';
import { EditTemplateFormA } from '@/components/edit-wrappers/Template_A_Edit';
import { EditTemplateFormB } from '@/components/edit-wrappers/Template_B_Edit';
import { EditTemplateFormC } from '@/components/edit-wrappers/Template_C_Edit';
import { EditTemplateFormD } from '@/components/edit-wrappers/Template_D_Edit';
import { EditTemplateFormE } from '@/components/edit-wrappers/Template_E_Edit';
import { EditTemplateFormF } from '@/components/edit-wrappers/Template_F_Edit';
import { TemplateFForm } from '@/components/forms/Template_F_Form';
import TemplateG from '@/components/templates/Template_G';
import TemplateH from '@/components/templates/Template_H';
import TemplateI from '@/components/templates/Template_I';
import TemplateJ from '@/components/templates/Template_J';
import TemplateL from '@/components/templates/Template_L';
import TemplateM from '@/components/templates/Template_M';
import TemplateD from '@/components/templates/Template_D';

const userDataTemplateB = {
  name: "Alexandra Chen",
  address: "123 Creative Lane, San Francisco, CA 94110",
  telephoneNo: "(415) 555-7890",
  email: "alex.chen@example.com",
  occupation: "Senior UX Designer & Frontend Developer",
  description: "Passionate designer-developer hybrid with 8+ years of experience creating beautiful, functional digital experiences. Specializing in design systems, interactive prototypes, and accessible frontend development. Believer in human-centered design and clean code.",

  skills: [
    { value: "User Experience Design" },
    { value: "Figma" },
    { value: "React" },
    { value: "TypeScript" },
    { value: "Design Systems" },
    { value: "User Research" },
    { value: "Prototyping" },
    { value: "Accessibility" },
    { value: "CSS/SCSS" },
    { value: "Product Strategy" }
  ],

  education: [
    {
      degree: "M.S. Human-Computer Interaction",
      institution: "Stanford University",
      year: "2015"
    },
    {
      degree: "B.A. Graphic Design",
      institution: "Rhode Island School of Design",
      year: "2013"
    }
  ],

  experience: [
    {
      title: "Lead UX Engineer",
      company: "Innovatech Solutions",
      years: "2020 - Present",
      description: "Lead cross-functional teams to deliver design systems and component libraries. Bridged gap between design and engineering by creating interactive prototypes and documentation."
    },
    {
      title: "Senior UI/UX Designer",
      company: "Digital Creative Agency",
      years: "2017 - 2020",
      description: "Designed and implemented interfaces for Fortune 500 clients. Conducted user research and created design systems for consistent brand experiences."
    },
    {
      title: "UX Designer",
      company: "StartUp Ventures",
      years: "2015 - 2017",
      description: "Early employee helping shape product direction. Created wireframes, prototypes, and conducted usability testing for MVP development."
    }
  ],

  projects: [
    {
      name: "Design System Framework",
      description: "Created comprehensive design system adopted by 30+ product teams, reducing design-dev handoff time by 40%.",
      link: "https://example.com/design-system"
    },
    {
      name: "Accessibility Toolkit",
      description: "Open source project helping developers build WCAG-compliant interfaces with React components.",
      link: "https://github.com/example/accessibility-toolkit"
    },
    {
      name: "E-commerce Redesign",
      description: "Led redesign of checkout flow resulting in 25% increase in conversion rates."
    }
  ]
};

const userDataTemplateD = {
  photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4uWBtuYUp-4aUZUBXL-lFyS5fJ2SAupPKew&s",
  name: "John Doe",
  position: "Chief Executive Officer",
  company: "Horizon Global Solutions",
  industry: "Management Consulting",
  telephoneNo: "+1 (212) 555-0198",
  email: "jkensington@horizonglobal.com",
  address: "200 Park Avenue, New York, NY 10166",
  socialLinks: {
    linkedIn: "https://linkedin.com/in/jkensington",
    twitter: "https://twitter.com/jrkensington"
  },
  summary: "Visionary leader with 15+ years of experience driving organizational transformation and delivering shareholder value. Proven track record in strategic planning, operational excellence, and building high-performance teams across global markets.",
  coreCompetencies: [
    {value:"Corporate Strategy Development"},
    {value:"Financial Performance Optimization"},
    {value:"Mergers & Acquisitions"},
    {value:"Global Market Expansion"},
    {value:"Stakeholder Relations"},
    {value:"Digital Transformation"}
  ],
  experience: [
    {
      title: "Chief Executive Officer",
      company: "Horizon Global Solutions",
      location: "New York, NY",
      years: "2018-Present",
      achievements: [
        {value:"Led company through successful IPO, achieving 300% shareholder return in 3 years"},
        {value:"Expanded operations to 12 new countries, increasing revenue by $450M annually"},
        {value:"Spearheaded digital transformation initiative reducing operational costs by 28%"}
      ]
    },
    {
      title: "Senior Vice President",
      company: "Global Strategic Partners",
      location: "Chicago, IL",
      years: "2012-2018",
      achievements: [
        {value:"Directed post-merger integration of $2.4B acquisition"},
        {value:"Developed Asia-Pacific market strategy resulting in 40% revenue growth"},
        {value:"Implemented cost restructuring saving $75M annually"}
      ]
    },
    {
      title: "Management Consultant",
      company: "McKinsey & Company",
      location: "London, UK",
      years: "2007-2012",
      achievements: [
        {value:"Led turnaround strategy for Fortune 500 retail client"},
        {value:"Developed operational efficiency framework adopted company-wide"},
        {value:"Mentored 15+ junior consultants in client engagement strategies"}
      ]
    }
  ],
  education: [
    {
      degree: "MBA, Finance & Strategy",
      institution: "Harvard Business School",
      year: "2005-2007"
    },
    {
      degree: "BSc, Economics",
      institution: "University of Pennsylvania",
      year: "2001-2005"
    }
  ],
  certifications: [
    {
      name: "Certified Management Consultant (CMC)",
      issuingOrganization: "Institute of Management Consultants",
      year: "2010"
    },
    {
      name: "Chartered Financial Analyst (CFA)",
      issuingOrganization: "CFA Institute",
      year: "2008"
    }
  ],
  website: "https://horizonglobal.com/leadership/jkensington"
};



export const templates = [
  {
    id: "TemplateB",
    name: "Professional White",
    component: TemplateB,
    form: TemplateBForm,
    editForm: EditTemplateFormB,
    category: "Professional",
    rating: 4.5,
    users: 3,
    previewImage: "/images/bgl.png",
    sampleData: userDataTemplateB,
    pdf:true
  },
  {
    id: "TemplateL",
    name: "Professional White 2",
    component: TemplateL,
    form: TemplateBForm,
    editForm: EditTemplateFormB,
    category: "Professional",
    rating: 4.5,
    users: 6,
    previewImage: "https://jsr-dev-portfolio.s3.eu-north-1.amazonaws.com/newx1.avif",
    sampleData: userDataTemplateB,
    pdf:true
  },{
    id: "TemplateM",
    name: "Professional White 3",
    component: TemplateM,
    form: TemplateBForm,
    editForm: EditTemplateFormB,
    category: "Professional",
    rating: 4.5,
    users: 6,
    previewImage: "https://jsr-dev-portfolio.s3.eu-north-1.amazonaws.com/newx2.avif",
    sampleData: userDataTemplateB,
    pdf:true
  },
  {
    id: "TemplateC",
    name: "Professional Dark",
    component: TemplateC,
    form: TemplateCForm,
    editForm: EditTemplateFormC,
    category: "Professional",
    rating: 4.7,
    users: 11,
    previewImage: "https://jsr-dev-portfolio.s3.eu-north-1.amazonaws.com/bhj.png",
    sampleData: userDataTemplateB,
    pdf:true
  },
  {
    id: "TemplateE",
    name: "Floating Particales",
    component: TemplateE,
    form: TemplateEForm,
    editForm: EditTemplateFormE,
    category: "Creative",
    rating: 4.7,
    users: 12,
    previewImage: "https://jsr-dev-portfolio.s3.eu-north-1.amazonaws.com/mka.avif",
    sampleData: userDataTemplateB,
    pdf:true
  },
  {
    id: "TemplateD",
    name: "Business Q",
    component: TemplateD,
    form: TemplateDForm,
    editForm: EditTemplateFormD,
    category: "Creative",
    rating: 4.6,
    users: 12,
    previewImage: "https://jsr-dev-portfolio.s3.eu-north-1.amazonaws.com/bna.avif",
    sampleData: userDataTemplateD,
    pdf:false
  },
  {
    id: "TemplateF",
    name: "Professional Businessman",
    component: TemplateF,
    form: TemplateFForm,
    editForm: EditTemplateFormF,
    category: "Professional",
    rating: 4.5,
    users: 14,
    previewImage: "https://jsr-dev-portfolio.s3.eu-north-1.amazonaws.com/me.avif",
    sampleData: userDataTemplateD,
    pdf:false
  },
  {
    id: "TemplateG",
    name: "Black Hacker",
    component: TemplateG,
    form: TemplateFForm,
    editForm: EditTemplateFormE,
    category: "Premium",
    rating: 4.7,
    users: 1,
    previewImage: "https://jsr-dev-portfolio.s3.eu-north-1.amazonaws.com/hacker.avif",
    sampleData: userDataTemplateD,
    pdf:false
  },
  {
    id: "TemplateH",
    name: "Pink Geek",
    component: TemplateH,
    form: TemplateFForm,
    editForm: EditTemplateFormE,
    category: "Premium",
    rating: 4.7,
    users: 2,
    previewImage: "https://jsr-dev-portfolio.s3.eu-north-1.amazonaws.com/bvn.avif",
    sampleData: userDataTemplateD,
    pdf:false
  },
  {
    id: "TemplateI",
    name: "Professional Gaming",
    component: TemplateI,
    form: TemplateFForm,
    editForm: EditTemplateFormE,
    category: "Premium",
    rating: 4.7,
    users: 112,
    previewImage: "https://jsr-dev-portfolio.s3.eu-north-1.amazonaws.com/gem.avif",
    sampleData: userDataTemplateD,
    pdf:false
  },
  {
    id: "TemplateJ",
    name: "Sportman",
    component: TemplateJ,
    form: TemplateFForm,
    editForm: EditTemplateFormE,
    category: "Premium",
    rating: 4.7,
    users: 112,
    previewImage: "https://jsr-dev-portfolio.s3.eu-north-1.amazonaws.com/gyma.avif",
    sampleData: userDataTemplateD,
    pdf:false
  }
];