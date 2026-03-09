import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Francisco Omedes — Mobile & Web Developer",
  author: "fomedes.dev",
  description:
    "Website Developer based in London. I specialize in web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/profile-small.png",
  navLinks: [
    { text: "Projects", href: "#projects" },
    { text: "Experience", href: "#experience" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/francisco-omedes-896795206",
    },
    { text: "Github", href: "https://github.com/fomedes" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app", /// Update
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Francisco Omedes",
    specialty: "Mobile & Web Developer",
    summary:
      "Website Developer based in London. I specialize in web and mobile application development and maintenance.",
    email: "fomedes.dev@gmail.com",
  },
  experience: [
    {
      company: "Self-Employed",
      position: "Freelance Web Developer",
      startDate: "2025",
      endDate: "Present",
      summary: [
        "Built and maintained full-stack web projects using Angular, Astro, Node.js, and MongoDB.",
        "Designed responsive interfaces with Tailwind CSS and implemented REST APIs for data-driven applications.",
        "Independently managed development lifecycle including architecture, implementation, debugging, and deployment.",
      ],
    },
    {
      company: "Balls Brothers",
      position: "Events Manager",
      startDate: "Nov 2024",
      endDate: "Present",
      summary: [
        "Provided customer service for company-organised events with catered food and drinks. This role required strong communication and organizational skills to ensure a positive experience for attendees.",
        "Supported event setup, logistics, and smooth operations. This involved coordinating with vendors, managing event timelines, and troubleshooting any issues that arose during events.",
      ],
    },
    {
      company: "Career Break",
      position: "N/A",
      startDate: "Aug 2023",
      endDate: "Oct 2024",
      summary:
        "Took a career break and traveled around the world while focusing on personal development, including learning new programming languages and frameworks, and enhancing my skills in mobile and web development with the goal of transitioning into a software engineering role.",
    },
    {
      company: "Benugo",
      position: "Food & Beverage Manager",
      startDate: "Jun 2023",
      endDate: "Aug 2023",
      summary: [
        "Managed inventory, procurement, and cost control for the site. This involved overseeing stock levels, negotiating with suppliers, and implementing cost-saving measures to optimize profitability.",
        "Analysed operational data to support decision-making and efficiency improvements.",
      ],
    },
    {
      company: "GAIL's Bakery",
      position: "General Manager • London",
      startDate: "Nov 2020",
      endDate: "Oct 2022",
      summary: [
        "Led team management and operational oversight, including P&L responsibility.",
        "Focused on improving team productivity and customer service standards.",
      ],
    },
    {
      company: "Benugo",
      position: "Restaurant Manager • Serpentine's B&K",
      startDate: "May 2019",
      endDate: "Oct 2020",
      summary: [
        "Managed day-to-day operations across multiple hospitality sites.",
        "Oversaw administrative tasks, team scheduling, and operation standards.",
        "Worked alongside central teams to implement operational changes and site requirements.",
      ],
    },
    {
      company: "Benugo",
      position: "Maintenance and BOH Manager • Science Museum",
      startDate: "Apr 2017",
      endDate: "May 2019",
      summary: [
        "Coordinated maintenance and minor refurbishment works in a live trading environment.",
        "Acted as liaison between site teams and external contractors, ensuring works were completed with minimal disruption.",
        "Ensured health & safety, food safety, and operational compliance during works.",
        "Managed inventory levels and procurement related to operations.",
      ],
    },
  ],
  projects: [
    {
      name: "Road to Glory FC",
      type: "Personal Project",
      tech: ["Angular", "Nodejs", "MongoDB"],
      summary:
        "Web application designed to manage a multiplayer career mode for EA Sports FC. It allows players to organize leagues, track teams, and manage competition data through a custom backend.",
      linkPreview: "/",
      linkSource: "https://github.com/fomedes/road-to-glory-app",
      video: "/projects/road-to-glory.webm",
      image: "/projects/clone-ig.png",
    },
    {
      name: "Cerrajero Camp 24h",
      type: "Client Project",
      tech: ["Astro", "Tailwind CSS"],
      summary:
        "Business website for a Spanish locksmith service focused on clear service presentation and SEO-friendly structure. Built with Astro for performance and styled using Tailwind CSS.",
      linkPreview: "https://cerrajerocamp24h.es/",
      linkSource: "https://github.com/fomedes/cerrajerocamp24h",
      image: "/projects/cerrajero-camp.png",
    },
    {
      name: "Mindful Healing",
      type: "Prototype",
      tech: ["Astro", "Tailwind CSS"],
      summary:
        "Prototype website for a psychology practice showcasing services and content in a clean and accessible layout. Built as a lightweight static site using Astro and Tailwind.",
      linkPreview: "https://mindfulhealing-prot.netlify.app",
      linkSource: "https://github.com/fomedes/sabrinadimauro",
      image: "/projects/mindfull-healing.png",
    },
    {
      name: "MetaCrew",
      type: "Personal Project",
      tech: ["Angular"],
      summary:
        "Web application designed to retrieve and display data from a blockchain football game using its APIs.\nThe project has been shut down, so the site is currently unable to get data anymore.",
      linkPreview: "https://metacrew.netlify.app/",
      linkSource: "https://github.com/fomedes/meta-crew",
      image: "/projects/metacrew.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Frank, a passionate Web Developer based in London. I specialize in creating dynamic and responsive websites that provide seamless user experiences. With a strong background in both front-end and back-end development, I enjoy bringing ideas to life through code. \nWhen I'm not coding, you can find me exploring new technologies, discovering the world or squeezing my brain with a good video game.
    `,
    image: "/profile-big.png",
  },
};
