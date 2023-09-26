import {
  mobile,
  backend,
  web,
  typescript,
  reactjs,
  nextjs,
  tailwind,
  mongodb,
  obadi,
  python,
  django,
  expressjs,
  flutter,
  mysql,
  redis,
  nestjs,
  metaverse,
  chatly,
  gamehub,
  javascript,
  css,
  html,
  flask,
  cpp,
  cs,
  asp,
  git,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Flutter Developer',
    icon: mobile,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'ReactJS',
    icon: reactjs,
  },
  {
    name: 'NextJs',
    icon: nextjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'nestjs',
    icon: nestjs,
  },
  {
    name: 'expressjs',
    icon: expressjs,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'flask',
    icon: flask,
  },
  {
    name: 'django',
    icon: django,
  },

  {
    name: 'cpp',
    icon: cpp,
  },
  {
    name: 'cs',
    icon: cs,
  },

  {
    name: 'aspdotnet',
    icon: asp,
  },
  {
    name: 'flutter',
    icon: flutter,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'redis',
    icon: redis,
  },

  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Backend Developer',
    company_name: '3obadi',
    icon: obadi,
    iconBg: '#383E56',
    date: ' 14/11/2022 - Current',
    points: [
      'Fixing issues in an existing code base',
      'Redesigning Backend Infrastructure',
      '50% reduction in hosting expenses ',
      'Improved Response time by 60%',
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
    name: 'Metaversus',
    description:
      'Web application that allows users to see the beauty of the metaverse',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'framer-motion',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: metaverse,
    source_code_link: 'https://github.com/fadi-alhabib/metaversus',
    live_link: 'https://metaverse-two-tau.vercel.app/',
  },
  {
    name: 'Chatly',
    description:
      'a dynamic chatting platform that leverages cutting-edge technologies, with a primary focus on real-time messaging',
    tags: [
      {
        name: 'NextJs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Redis',
        color: 'orange-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
      {
        name: 'Pusher',
        color: 'blue-text-gradient',
      },
    ],
    image: chatly,
    source_code_link: 'https://github.com/fadi-alhabib/chatly',
    live_link: 'https://chatly-gules.vercel.app/',
  },
  {
    name: 'GAMEHUB',
    description:
      'a dynamic web application designed to help gamers find new games and rate the ones they played',
    tags: [
      {
        name: 'ReactJs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Chakra-UI',
        color: 'green-text-gradient',
      },
      {
        name: 'Framer-motion',
        color: 'pink-text-gradient',
      },
    ],
    image: gamehub,
    source_code_link: 'https://github.com/fadi-alhabib/game-hub',
    live_link: 'https://game-hub-two-taupe.vercel.app/',
  },
];

export { services, technologies, experiences, projects };
