import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  postgresql,
  git,
  framer,
  carrent,
  jobit,
  tripguide,
  threejs,
  gerardo,
  paula,
  benjamin
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Kotlin Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Framer Motion",
    icon: framer,
  }
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "SoftSol",
    icon: reactjs,
    iconBg: "#383E56",
    date: "December 2022 - June 2023",
    points: [
      "Developing and maintaining web applications using React.js, TailwindCSS and other libraries.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Freelancer",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Working with some local clients to transform their ideas to real world applications.",
      "Had to learn some Backend to make the products escalable and improving the server-side.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Making the process with my costumers fun helping with design and showing them weekly progress.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Freelancer",
    icon: reactjs,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Developing and maintaining mobile applications using React Native for local clients.",
      "Had to learn React Native technology to make sure that my products are high-quality from scratch.",
      "Working with VSCode and Android Studio make me ensure all the needs that the costumer have.",
      "Participating in weekly calls to improve the functionalities that the applications need.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with Diego was awesome! he's always open to new ideas and ready to collaborate and help in whatever we need, as a company and personally.",
    name: "Gerardo Arroyo",
    designation: "Senior QA",
    company: "SoftSol",
    image: gerardo,
  },
  {
    testimonial:
      "Work with Diego made my dream to have my own company website and manage my business through it. I presented him some ideas and he showed me a few days later the designs that he made from that and started to work inmediately. Amazing work!",
    name: "Moreno Paula",
    designation: "CEO",
    company: "Akash-Almico",
    image: paula,
  },
  {
    testimonial:
      "As my student, Diego consistently demonstrated a willingness to assist others in comprehending complex subjects, while also being adept at seeking assistance when he himself required it.",
    name: "Benjamin Flores",
    designation: "Academlo Instructor",
    company: "Academlo",
    image: benjamin,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
    source_code_link1: "https://netlify.com/"
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    source_code_link1: "https://netlify.com/"

  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    source_code_link1: "https://netlify.com/"
  },
];

export { services, technologies, experiences, testimonials, projects };