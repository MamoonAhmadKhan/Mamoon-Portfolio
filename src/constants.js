// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Education Section Logo's
import ggsipuLogo from './assets/education_logo/GGSIPU_Logo.png';

// Project Section Logo's
import botflixLogo from './assets/work_logo/botflix.png';
import foodyLogo from './assets/work_logo/foody.png';
import streamifyLogo from './assets/work_logo/streamify.png';
import mamoonStoreLogo from './assets/work_logo/mamoon_store.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: ggsipuLogo,
      school: "Guru Gobind Singh Indraprastha University, New Delhi",
      date: "Sept 2022 - July 2025",
      grade: "7.81 CGPA",
      desc: "I have completed my Bachelor's degree (BCA) in Computer Applications from Guru Gobind Singh Indraprastha University, New Delhi. During my time at college, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures & Algorithms, Object-Oriented Programming (OOPs), Database Management Systems (DBMS), Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at my University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Computer Applications - BCA",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "BotFlix",
      description:
        "A full stack movie streaming web-app with Firebase backend, featuring authentication (Login & Logout). Integrated Gemini’s AI model to provide personalized movie suggestions. Used memoization and Redux Toolkit to reduce redundant API calls and enhance performance by 25-40%. Fully responsive UI with dynamic routing, ensuring smooth navigation across all devices. Fetched live movie data from TMDB and Gemini APIs for up-to-date content.",
      image: botflixLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "TailwindCSS", "Firebase", "Gemini", "TMDB API"],
      github: "https://github.com/MamoonAhmadKhan/Bot-Flix",
      webapp: "https://bot-flix.vercel.app/",
    },
    {
      id: 1,
      title: "Foody",
      description:
        "A responsive food ordering web app with seamless navigation and dynamic data rendering from Swiggy API. Created multi-page navigation (Home, Auth, Cart, Restaurant Menu) with React Router. Implemented Redux Toolkit for managing cart items and global dark mode functionality. Enhanced UI/UX with Tailwind CSS, loading skeletons with Shimmer UI, and user-friendly error handling.",
      image: foodyLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Swiggy API", "TailwindCSS"],
      github: "https://github.com/MamoonAhmadKhan/FoodStore",
      webapp: "#",
    },
    {
      id: 2,
      title: "Streamify",
      description:
        "STREAMIFY, a video streaming platform inspired by YouTube!. This project was a great learning experience where I got to implement real-world features and optimize performance. Integrated YouTube API to fetch live video data. Built search suggestions with Debouncing & Cache Mechanism (Redux Toolkit). Implemented live chat with API polling for real-time engagement.",
      image: streamifyLogo,
      tags: ["React JS", "Google Youtube API", "HTML", "CSS", "JavaScript", "TailwindCSS"],
      github: "https://github.com/MamoonAhmadKhan/Streamify",
      webapp: "https://streamify-one-sepia.vercel.app/",
    },
    {
      id: 3,
      title: "Mamoon Store",
      description:
        "A full-featured e-commerce platform built with modern web technologies. The application allows users to browse products, manage their cart, and place orders. A clean and responsive multi-page e-commerce web application. The platform includes dedicated pages for home, product listings, product details, cart, and checkout, all connected through smooth client-side routing. The UI is designed for clarity and ease of use, with interactive components, dynamic content rendering, and consistent styling across all pages.",
      image: mamoonStoreLogo,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/MamoonAhmadKhan/E-Commerce",
      webapp: "#",
    },
  ];  