import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume',
  description: "Amy Garcia's resumewebsite built from Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Amy Garcia.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Experienced <strong className="text-stone-100">Information Technology Project</strong> specializing in product and program management currently working
        at <strong className="text-stone-100">Knoxville Utilities Board</strong> leading product teams to design, plan, and implement modern utility IT systems.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing tennis, golfing, 
        and exploring Knoxville's greenways and lakes.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://docs.google.com/document/d/1J67RZTmFaUWRbGxxdYSMIKJximzg8fZ7LAiSjDRsTdE/edit?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `https://calendly.com/amy-garcia579/30min`,
      text: 'Connect',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a results-oriented individual with a passion for learning and creating strategic visions to manage 
  innovative IT solutions that meet customer needs. Excellent at planning, scoping, strategizing, 
  and managing software development programs and products. I'm a certified Scum Master ensuring our 
  IT division follows agile best practices. I am excellent at Incorporating complex, technical data 
  into engaging presentations for business audiences. I excel at prioritization, time management, 
  organization, working autonomously, collaborating, communicating and maintaining stakeholder confidence`,
  aboutItems: [
    {label: 'Current Location', text: 'Knoxville, TN', Icon: MapIcon},
    {label: 'Age', text: '37', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American/French', Icon: FlagIcon},
    {label: 'Interests', text: 'Tennis, Golf, Hiking, Kayaking', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Tennessee (BSME) & Lincoln Memorial University (MBA)', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Knoxville Utilities Board', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Data Analysis',
    skills: [
      {
        name: 'Power BI',
        level: 9,
      },
      {
        name: 'SQL',
        level: 6,
      },
      {
        name: 'JIRA JQL',
        level: 10,
      },
    ],
  },
  {
    name: 'Program Management',
    skills: [
      {
        name: 'Prioritzing Strategic IT Initiatives',
        level: 10,
      },
      {
        name: 'Budget (Capital, O&M)',
        level: 8,
      },
      {
        name: 'Presenting complex data for business audience',
        level: 9,
      },
    ],
  },
  {
    name: 'IT Project & Product Management',
    skills: [
      {
        name: 'Waterfall, Scrum, & Kanban',
        level: 10,
      },
      {
        name: 'Product Roadmaps',
        level: 9,
      },
      {
        name: 'SDLC (Software Development Life Cycle)',
        level: 9,
      },
    ],
  },
  {
    name: 'Leadership',
    skills: [
      {
        name: 'Hiring, onboarding, and supervising',
        level: 8,
      },
      {
        name: 'Cross-functional team collaboration',
        level: 9,
      },
      {
        name: 'Build buy-in through influence',
        level: 7,
      },
    ],
  },
];
/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2021',
    location: 'Lincoln Memorial University',
    title: 'Master of Business Administration, MBA',
    content: <p>I graduated with a 3.96 GPA and increased my business acumen, including business strategy, 
      operations management, corporate finance, leadership, communication, ethics, accounting and marketing, 
      as well as critical thinking and analytical skills.
      Highest performing marketing team using Search Engine Optimization (SEO) during my MBA program.</p>,
  },
  {
    date: 'May 2011',
    location: 'University of Tennessee',
    title: 'Bachelor of Science - BS, Mechanical',
    content: <p>ASME and SWE member who graduated with a 3.13 GPA. Increased my knowledge in problem-solving, 
      design, 3-D CAD, creativity and analysis to create solutions for complex problems.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2018 - Present',
    location: 'Knoville Utilities Board',
    title: 'Senior IT Project Manager',
    content: (
      <p>
        Experienced Information Technology Project Manager and Product Manager who has succesfully managed software development 
        projects through their full life cycle, working with developers and cross-functional teams to design, implement, 
        and deploy solutions utilizing agile methodologies 
        Certified Scrum Master & Jira administrator who set up site for entire IT division for 200 employees
        Led teams using Scrum, including daily standups, backlog management, and sprint retrospectives
        Led the 10-year IT Program Roadmap strategy with 50-million-dollar budget
        Created onboarding content, designed curriculum, and supervised new Project & Product Managers
        Managed bill redesign project that improved 91% of customers' frustrations and successfully deployed new bill design to over 468,000 customers.
        Implemented GPS Location solution ensuring safety for hundreds of linemen and technicians.
      </p>
    ),
  },
  {
    date: 'May 2011 - June 2018',
    location: 'DENSO Corporation',
    title: 'Senior Project Engineer',
    content: (
      <p>
        Succesfully planned, scoped, crafted risk mitigation strategies, and managed multi-million-dollar machine 
        installations ranging from 25 to 75 milion dollars across North America for a global, top-tier automotive 
        corporation.
        Achieved machine MOR-Machine Operating Ratio goals through lean manufacturing and six-sigma processes.
      </p>
    ),
  },
  {
    date: 'May 2009 - August 2010',
    location: 'DENSO Corporation',
    title: 'Design Engineer Coop',
    content: (
      <p>
        Designed machinery, generated 3D models and D drawings in Soldiworks. 
        Programmed DENSO 4-axis and 6-axis robots.
        Created pneumatic diagrams, sensor layouts, and timing charts.

      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Please reach out if you would like to connect',
  items: [
    {
      type: ContactType.Email,
      text: 'amy.garcia579@icloud.com',
      href: 'mailto:amy.garcia579@icloud.com',
    },
    {
      type: ContactType.Location,
      text: 'Knoxville, TN',
      href: 'https://www.google.com/maps/place/Knoxville,+TN/@35.958462,-83.9250825,11z/data=!3m1!4b1!4m5!3m4!1s0x885c162246ce42a9:0x7bea92dac4f534c5!8m2!3d35.9606384!4d-83.9207392',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Amy Garcia',
      href: 'https://www.linkedin.com/in/amy-garcia-7028301a1/',
    },
    {
      type: ContactType.Github,
      text: 'Amy Garcia',
      href: 'https://github.com/zalf14',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/zalf14'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/amy-garcia-7028301a1/'},
];
