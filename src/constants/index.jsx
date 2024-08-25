import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";


import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiAdobephotoshop, SiAdobexd, SiNodedotjs } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiPython } from "react-icons/di";
import { SiPhp, SiLaravel, SiTailwindcss, SiReact,  SiNextdotjs} from "react-icons/si";


// import { RiReactjsLine } from "react-icons/ri";
// import { TbBrandNextjs } from "react-icons/tb";
// import { SiMongodb } from "react-icons/si";
// import { DiRedis } from "react-icons/di";
// import { FaNodeJs } from "react-icons/fa";
// import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Educations", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#work" },
  // { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Hi, there I'm a",
  greet: "Web Developer",
  description:
    "I am a proactive and dedicated individual with a strong sense of responsibility and a passion for my work. I thrive in collaborative environments and am highly adaptable to new challenges. Whether working within a team or independently, I consistently bring initiative and focus to every task. I excel under pressure and am committed to meeting tight deadlines with precision and efficiency.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Shop Platform",
    description:
      "This website showcases a range of products, integrates with suppliers for seamless ordering, and features an intuitive interface for managing and purchasing items.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,
    name: "Brand Website",
    description:
    "A brand website developed with Next.js and Markdown, designed to showcase products and tell the brand's story. It includes a rich text editor for content creation, a tag system for organizing posts, and user authentication for secure access."
    ,
      // "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "Personal Portofolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
  },
  // {
  //   id: 4,
  //   name: "Weather App",
  //   description:
  //     "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
  //   image: projectImage4,
  //   githubLink: "https://github.com/user/weather-app",
  // },
  // {
  //   id: 5,
  //   name: "Blog Platform",
  //   description:
  //     "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
  //   image: projectImage5,
  //   githubLink: "https://github.com/user/blog-platform",
  // },
  // {
  //   id: 6,
  //   name: "Chat Application",
  //   description:
  //     "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
  //   image: projectImage6,
  //   githubLink: "https://github.com/user/chat-application",
  // },
];

export const BIO = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est porro et in dignissimos sit temporibus ex laboriosam ullam eligendi similique. Expedita officia repudiandae iure tempore nostrum sint natus, cupiditate quae?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est porro et in dignissimos sit temporibus ex laboriosam ullam eligendi similique. Expedita officia repudiandae iure tempore nostrum sint natus, cupiditate quae?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est porro et in dignissimos sit temporibus ex laboriosam ullam eligendi similique. Expedita officia repudiandae iure tempore nostrum sint natus, cupiditate quae?",
];


export const SKILLS = {
  programming: [
    { icon: <AiFillHtml5 className="text-6xl text-orange-600" alt="html" /> },
    { icon: <DiCss3 className="text-6xl text-blue-600" alt="css" /> },
    { icon: <DiJavascript1 className="text-6xl text-yellow-500" alt="javascript" /> },
    { icon: <SiPhp className="text-6xl text-indigo-700" alt="php" /> },
  ],
  design: [
    { icon: <SiTailwindcss className="text-6xl text-purple-600" alt="tailwind" /> },
    { icon: <SiReact className="text-6xl text-blue-500" alt="React" /> },
    { icon: <SiLaravel className="text-6xl text-red-500" alt="laravel" /> },
  ],
};

export const EXPERIENCES = [
  {
    title: "Full Stack Developer",
    company: "PT Evolusi Teknologi Solusi",
    duration: "September 2024 - Present",
    description:
      "In my role as a Full Stack Developer, I led the development of web applications, managing both frontend and backend tasks. Utilizing Laravel on the backend, I built robust and scalable systems, while also ensuring smooth and responsive user interfaces. I collaborated closely with cross-functional teams, including designers, product managers, and other developers, to create efficient and high-performance applications that meet user needs.",
  },
  {
    title: "Digital Marketing",
    company: "Universitas Hayam Wuruk Perbanas",
    duration: "January 2023 - January 2024",
    description:
      "As part of the Digital Marketing team, I played a key role in the production process, where I was responsible for scheduling and coordinating tasks using Gantt charts for various events and campaigns. My role involved closely collaborating with different departments to ensure timely execution and alignment with marketing goals. Additionally, I contributed to content creation, social media management, and the implementation of digital marketing strategies to enhance brand visibility and engagement. ",
  },
  {
    title: "Video Content Creator",
    company: "@eilasya",
    duration: "September 2021 - January 2023",
    description:
      "As a Video Content Creator, I specialized in producing anime content, leveraging trending algorithms to reach a wide audience. My work included various edits and design enhancements that resonated with viewers. I managed a TikTok account with 220,000 followers under the username @eilasya, though it was unfortunately hacked. I continue to engage with my audience through my active Instagram account @eilasya_ , where I share creative content and maintain a strong online presence.",
  },
  {
    title: "Digital Business",
    company: "ToolStoreIdn",
    duration: "Febuary 2019 - Present",
    description:
      "As a Digital Business Specialist at Toolstoreidn, I managed and optimized product listings on Shopee and Tokopedia. I worked closely with various sellers to offer a diverse selection of tools and equipment. My role involved handling customer inquiries, managing order fulfillment, and implementing strategies to boost online visibility and sales performance across both e-commerce platforms.",
  },
];



export const EDUCATION = [
  {
    institution: "Universitas Hayam Wuruk Perbanas Surabaya",
    duration: "2022 - Present",
    degree: " Bachelor of Science in Information Systems"
  },
  {
    institution: "SMA Kristen Anak Bangsa ",
    duration: "2018 - 2021",
    degree: "Majoring in Science"
  },
  {
    institution: "SMP Bethel Sulung",
    duration: "2015 - 2018",
    degree: "✔️"
  },
  {
    institution: "SD Bethel Sulung",
    duration: "2009 - 2015",
    degree: "✔️"
  }
];

export const SOCIAL_MEDIA_LINKS = [
  // {
    //   href: "https://x.com/",
    //   icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
    // },
    {
      href: "https://www.linkedin.com/in/michael-christoper-8a0023255/",
      icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://github.com/michaelcwk1",
      icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
    },

    {
      href: "https://www.instagram.com/cwk.66/",
      icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
    },
    // {
      //   href: "https://x.com/",
      //   icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
      // },
      {
      href: "https://x.com/",
      icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
    },
    ];
