import {
  als,
  arz,
  asp,
  awaed,
  backend,
  chatly,
  cpp,
  cs,
  css,
  flutter,
  futureClr,
  gamehub,
  git,
  grodd,
  html,
  javascript,
  klgk,
  metaverse,
  mobile,
  mongodb,
  mysql,
  nestjs,
  nextjs,
  obadi,
  reactjs,
  redis,
  tailwind,
  typescript,
  web,
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
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Flutter Development",
    icon: mobile,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "NextJs",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "nestjs",
    icon: nestjs,
  },
  // {
  //   name: "expressjs",
  //   icon: expressjs,
  // },
  // {
  //   name: "python",
  //   icon: python,
  // },
  // {
  //   name: "flask",
  //   icon: flask,
  // },
  // {
  //   name: "django",
  //   icon: django,
  // },

  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "cs",
    icon: cs,
  },

  {
    name: "aspdotnet",
    icon: asp,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "redis",
    icon: redis,
  },

  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Technical Lead",
    company_name: "Ape Revolution Zone",
    icon: arz,
    iconBg: "#383E56",
    date: " 04/2023 - 04/2025",
    points: [
      "Provided mentorship and guidance to junior team members in their professional growth.",
      "Managed remote teams to ensure smooth delivery of projects.",
      "Writing clean, maintainable, and well documented code, while ensuring system security and performance optimization.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Knowlgica LTD",
    icon: klgk,
    iconBg: "#383E56",
    date: " 04/2023 - 04/2025",
    points: [
      "Building scalable backend services using C# and ASP.NET and integrating them with responsive frontend interfaces using ReactJs.",
      "Writing clean, maintainable, and well documented code, while ensuring system security and performance optimization.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "obadi",
    icon: obadi,
    iconBg: "#383E56",
    date: " 11/2022 - 08/2022",
    points: [
      "Utilized security practices and techniques to protect applications and web pages from viruses and hacks.",
      "Modernized legacy codebases to align with current industry standards, enhancing maintainability and future scalability.",
      "Developed user-friendly mobile applications for iOS and Android platforms.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
//     name: 'Sara Lee',
//     designation: 'CFO',
//     company: 'Acme Co',
//     image: 'https://randomuser.me/api/portraits/women/4.jpg',
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: 'Chris Brown',
//     designation: 'COO',
//     company: 'DEF Corp',
//     image: 'https://randomuser.me/api/portraits/men/5.jpg',
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: 'Lisa Wang',
//     designation: 'CTO',
//     company: '456 Enterprises',
//     image: 'https://randomuser.me/api/portraits/women/6.jpg',
//   },
// ];

const projects = [
  {
    name: "Grodd, Feature-Based CLI Tool for React",
    description:
      "Created a command-line tool to automate and streamline feature-based architecture in React applications, reducing setup time and enforcing best practices",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: grodd,
    // source_code_link: "https://github.com/fadi-alhabib/metaversus",
    live_link: "https://www.npmjs.com/package/grodd",
  },
  {
    name: "Awaed Game Suit For LEAP 2025",
    description:
      "in a matter of 4 days I developed 3 games (Mines, Plinko, Spin the Wheel) for awaed's booth at LEAP",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "chakraui",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "orange-text-gradient",
      },
      {
        name: "nestjs",
        color: "pink-text-gradient",
      },
    ],
    image: awaed,
    // source_code_link: "https://github.com/fadi-alhabib/metaversus",
    live_link: "https://awaed.aperevolutionzone.com/",
  },
  {
    name: "Future Colors Printing",
    description:
      "Portfolio for a printing company based in saudi arabia with an admin dashboard to control the content of the site",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "chakraui",
        color: "green-text-gradient",
      },
      {
        name: "nestjs",
        color: "pink-text-gradient",
      },
    ],
    image: futureClr,
    // source_code_link: "https://github.com/fadi-alhabib/metaversus",
    live_link: "https://futureclr.com/",
  },
  {
    name: "Arabic Learning System",
    description: "web application for learning arabic",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "moodle LMS",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: als,
    // source_code_link: "https://github.com/fadi-alhabib/metaversus",
    live_link: "https://arabicsoftonline.org/",
  },
  {
    name: "Metaversus",
    description:
      "Web application that allows users to see the beauty of the metaverse",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: metaverse,
    source_code_link: "https://github.com/fadi-alhabib/metaversus",
    live_link: "https://metaverse-two-tau.vercel.app/",
  },
  {
    name: "Chatly",
    description:
      "a dynamic chatting platform that leverages cutting-edge technologies, with a primary focus on real-time messaging",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Redis",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "Pusher",
        color: "blue-text-gradient",
      },
    ],
    image: chatly,
    source_code_link: "https://github.com/fadi-alhabib/chatly",
    live_link: "https://chatly-gules.vercel.app/",
  },
  {
    name: "GAMEHUB",
    description:
      "a dynamic web application designed to help gamers find new games and rate the ones they played",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Chakra-UI",
        color: "green-text-gradient",
      },
      {
        name: "Framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: gamehub,
    source_code_link: "https://github.com/fadi-alhabib/game-hub",
    live_link: "https://game-hub-two-taupe.vercel.app/",
  },
];

export { experiences, projects, services, technologies };
