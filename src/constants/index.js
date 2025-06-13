import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  bitcode,
  tesla,
  shopify,
  travelzip,
  travello,
  my3Dportfolio,
  tripguide,
  threejs,
  bit,
  shining,
  rjt,
  python,
  java,
  anguler,
  spring
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Creative Frontend Innovator",
    icon: mobile,
  },
  {
    title: "Graphic Designer",
    icon: backend,
  },
  {
    title: "Cybersecurity Learner",
    icon: creator,
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
    {
    name: "Java",
    icon: java,
  },
      {
    name: "Angular",
    icon: anguler,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
    {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Main Coordinator – BITCODE 5.0 (Inter-University Coding Competition)",
    company_name: "BITSA - Rajarata University of Sri Lanka",
    icon: bit,
    iconBg: "#E6DEDD",
    date: "October 2024 - December 2024",
    points: [
      "Coordinated cross-functional teams including coding, marketing, fundraising, and logistics committees to successfully organize a national-level coding competition.",
      "Oversaw the development and review of technical tasks, including pre-selection coding challenges on HackerRank and a final full-stack web application challenge integrating Stripe for payments and optional AI features.",
      "Led strategic planning and execution of digital marketing campaigns, content creation, and event promotion across social media platforms.",
    ],
  },
  {
    title: "Vice President – Brand & Marketing | Empower All Shining Minds powered by Emerald",
    company_name: "AIESEC in Sri Lanka",
    icon: shining,
    iconBg: "#E6DEDD",
    date: "September 2024",
    points: [
      "Led the Brand & Marketing function of a social impact initiative aimed at supporting underprivileged schoolchildren in Anuradhapura.",
      "Planned and executed promotional strategies to drive engagement, raise awareness, and attract support for the donation campaign.",
      "Strengthened leadership, marketing, and communication skills while contributing to a meaningful cause through community outreach and media coordination.",
    ],
  },
  {
    title: "Student Committee Member – 3rd International Research Symposium on Management (IRSM 2024)",
    company_name: "Rajarata University of Sri Lanka",
    icon: rjt,
    iconBg: "#E6DEDD",
    date: "November 2024",
    points: [
      "Assisted with technical operations, including screen setups, presentation handling, and smooth session transitions during the symposium.",
      "Acknowledged for proactive involvement and contributed to both technical assistance and the official media coverage of the event.",
      "Supported participant coordination and contributed to overall event execution.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TravelZip",
    description:
      "Desktop-first travel website that lets users explore destinations, book camping gear, and view hotel packages in Sri Lanka, with features like user registration, feedback, and cart management.",
        tags: [
        {
          name: "html",
          color: "from-orange-400 to-orange-600",
        },
        {
          name: "css",
          color: "from-blue-400 to-blue-600",
        },
        {
          name: "javascript",
          color: "from-yellow-400 to-yellow-600",
        },
        {
          name: "php",
          color: "from-purple-500 to-purple-700",
        },
        {
          name: "mysql",
          color: "from-teal-400 to-teal-600",
        },
        {
          name: "xampp",
          color: "from-amber-500 to-amber-700",
        },
      ],
    image: travelzip,
    source_code_link: "https://ruwina-ranasinghe.github.io/TravelZip-website/",
  },
  {
    name: "Travello",
    description:
      "Responsive social travel web app where users can register, log in, share travel photos, manage friend connections, and explore posts through a personalized dashboard, featuring secure JWT authentication and a clean user interface.",
    tags: [
  {
    name: "react",
    color: "from-sky-400 to-sky-600", // React blue tones
  },
  {
    name: "express",
    color: "from-zinc-500 to-zinc-700", // Neutral dark gray for Express
  },
  {
    name: "node",
    color: "from-lime-400 to-lime-600", // Node.js green tones
  },
  {
    name: "mongodb",
    color: "from-emerald-400 to-emerald-600", // MongoDB rich green
  },
  {
    name: "jwt",
    color: "from-orange-400 to-orange-600", // JWT usually uses orange
  },
],
    image: travello,
    source_code_link: "https://github.com/Ruwina-Ranasinghe/travello-frontend",
  },
  {
  name: "3D Interactive Portfolio",
  description:
    "A visually rich and interactive portfolio website showcasing creative 3D animations powered by Three.js. The interface is fully responsive and beautifully styled using Tailwind CSS, while jQuery enhances user engagement through smooth interactions.",
  tags: [
    {
      name: "three.js",
      color: "from-purple-400 to-purple-600", // 3D vibe
    },
    {
      name: "tailwindcss",
      color: "from-cyan-400 to-cyan-600", // Tailwind cyan
    },
    {
      name: "jquery",
      color: "from-pink-400 to-pink-600", // Classic jQuery pink
    },
  ],
  image: my3Dportfolio, // Make sure you import or define this image
  source_code_link: "https://github.com/Ruwina-Ranasinghe/Ruwina-Ranasinghe-",
},

];

export { services, technologies, experiences, testimonials, projects };
