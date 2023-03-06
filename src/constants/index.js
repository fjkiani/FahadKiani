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
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "enterprise technical solutions",
    icon: web,
  },
  {
    title: "3D & Fullstack Web development",
    icon: mobile,
  },
  {
    title: "Data Integration and transformation ",
    icon: backend,
  },
  {
    title: "Data Warehouse and Storage",
    icon: backend,
  },
  {
    title: "ecommerce stores",
    icon: creator,
  },

  {
    title: "On-prem to cloud migration",
    icon: creator,
  },

  {
    title: "no code to low code applications",
    icon: creator,
  },
  {
    title: "API Driven Healthcare Solutions",
    icon: creator,
  },
  {
    title: "Automated Healthcare Solutions",
    icon: creator,
  },
  {
    title: "Automated  solutions for restaurants",
    icon: creator,
  },

];

const technologies = [


  {
    name: "JavaScript",
    icon: javascript,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Founder",
    company_name: "FahadKiani.com ",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "5/2021 - Present",
    points: [
      "Transform information technology operations for small businesses to become 2x+ profitable",
      "Develop low-code/no-code full-stack web applications for small businesses to become 100%+ more agile",
    ],
  },
  {
    title: "Senior Solutions Engineer",
    company_name: "Talend.com",
    icon: starbucks,
    iconBg: "#383E56",
    date: "05/2021 - 3/2023",
    points: [
      "Solved big data use-cases to help enterprise accounts including estee lauder build real time data streaming",
      "Conducted product demos, presentations and solved use-cases around data migration to close business deals",
      "Specialized within big-data streaming, ETL pipelines and API"
    ],
  },

  {
    title: "Lead Engineering Instructor",
    company_name: "techtalentpipeline.nyc",
    icon: shopify,
    iconBg: "#383E56",
    date: "1/2021 - 5/2021",
    points: [
      "Co-created and enhanced a technical Web Development training program for the New York City Department of Education",
      "Delivered technical lectures and mentored over 40 CUNY Computer Science students learn modern foundations of Full-Stack Engineering",
    ],
  },
  {
    title: "Solutions Engineer",
    company_name: "1stdibs.com",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "8/2017 - 12/2018",
    points: [
      "Helped increase revenue operations over 100% for the worlds largest luxury ecommerce website within 1 year",
    ],
  },
  {
    title: "Founding Solutions Engineer",
    company_name: "imedicare.com",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "8/2017 - 12/2018",
    points: [
      "One of the founding Technical Executives that contributed to growing over 3000 customers in 2 years by integrating web API solutions catered to local pharmacies",
      "Partnered directly with Product, Marketing, and Sales teams to build curriculums customized for complex integration and helped customers achieve 100%+ ROI",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Fahad brings tremendous passion and talent to his work. He's driven, focused and intent on helping others through his expertise in the SWE space. Fahad also is also a strong communicator in a pre- and post-sale context.",
    name: "Sarah Anddrews",
    designation: "Enterprise Technology Sales Leader | Columbia Business School MBA Candidate '25 | Salesforce",
    company: "Salesforce",
    image: "https://media.licdn.com/dms/image/C4D03AQGPvyJ4DhseBA/profile-displayphoto-shrink_100_100/0/1644284477049?e=1683763200&v=beta&t=-apcwGxJiSipQRKH7kcNyobpvhBqeIfmF7fE1XQ9qak",
  },
  {
    testimonial:
      "Fahad is an amazing highly motivated individual who has a passion for technology and is highly skillful in software engineering. As one of my former students at the John Jay College of Criminal Justice, Fahad shows a great deal of motivation, commitment,detailed-oriented and overall a great compassionate person. His drive and love for technology will be an asset to any organization! ",
    name: "Irving Contreras, MPA",
    designation: "Doctoral Student |Adjunct Professor | Policy Analyst | Experienced Public Safety & Private Security Expert | NYPD Lieutenant (Ret.) | US Navy Veteran",
    company: "John Jay College (CUNY)",
    image: "https://media.licdn.com/dms/image/C4D03AQECbJR3N0lupg/profile-displayphoto-shrink_100_100/0/1570147061867?e=1683763200&v=beta&t=1jiNyXi0S6QZBbzPuB4L7A66Rl62oOsV-BuFrCiLYVc",
  },
  {
    testimonial:
      "Fahad is a great mentor who opened up a world of opportunity to our Tech Talent Pipeline cohort. He taught us the basics of full stack development and gave us a foundation to build our skills from, but most importantly he supplied us with resources and showed us how to approach learning any new tech.",
    name: "Joseph LaMantia Jr",
    designation: "Software Engineer",
    company: "BHG Financial",
    image: "https://media.licdn.com/dms/image/C4D03AQEmyB3CPB3utw/profile-displayphoto-shrink_400_400/0/1612802002887?e=1683763200&v=beta&t=-IO0T6DQQg9TaY4ZwWoQvZKfvhBDVs2agVm2CsUTdAM",
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
  },
];

export { services, technologies, experiences, testimonials, projects };
