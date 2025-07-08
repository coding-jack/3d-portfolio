import {
  backend,
  creator,
  react_gradient,
  wordpress_gradient,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  graphik,
  pn,
  kin,
  spire,
  signatry,
  dmarie,
  latsis,
  threejs,
  m5,
  wordpress,
  vue,
  materialui,
  framerMotion,
  next,
  jackson_links,
  shwarma,
  shwarma_links,
  prep_network,
  pn_events,
  movies_galore,
  goofball,
  fathers_day,
} from "../assets";

const navLinks = [
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React",
    icon: react_gradient,
  },
  {
    title: "Wordpress",
    icon: wordpress_gradient,
  },
  {
    title: "Front End",
    icon: backend,
  },
  {
    title: "Back End",
    icon: creator,
  },
];

const techCategories = [
  ["Testing", "Jest", "React Testing Library", "Cypress", "ESLint", "Playwright"],
  ["API", "Apollo", "GraphQL", "Redux", "Axios"],
  ["Database", "TypeORM", "PostgreSQL", "MySQL", "Appwrite", "Laravel Valet", "Firebase", "Sequel Pro", "SQLite", "phpMyAdmin", "MAMP Pro", "Airtable"],
  ["CI/CD", "CircleCI", "GitHub Actions", "Vercel", "Netlify", "Hostinger"],
  ["WordPress", "Sage 8/9", "Bedrock", "Trellis", "ACF Pro", "Gutenberg", "AWS"],
  ["CLI", "Git", "Zsh", "Bash", "NPM", "Yarn", "Composer", "WP-CLI", "Brew", "Bower", "Gulp"],
  ["Tools: Coding", "Windsurf", "Cascade", "Github Copilot", "VS Code", "Transmit", "iTerm"],
  ["Tools: Design", "Figma", "Canva", "Photoshop", "Illustrator", "Sketch"],
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "WordPress",
    icon: wordpress,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Vue Js",
    icon: vue,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: materialui,
  },
  {
    name: "Framer Motion",
    icon: framerMotion,
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
    title: "Full Stack Developer",
    company_name: "Prep Network",
    icon: pn,
    iconBg: "#383E56",
    date: "May 2022 - Oct 2024",
    points: [
      "Developing and maintaining each brand subsite within the WordPress multi-site as well as the Events Management application using React and Laravel.",
      "Manipulating large datasets communicating with API's from external and internal sources.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Product Owner, Full Stack Developer",
    company_name: "Kin + Carta",
    icon: kin,
    iconBg: "#E6DEDD",
    date: "Sep 2020 - Nov 2021",
    points: [
      "Worked on a massively talented team of developers, designers, QA engineers, team leads, and product owners to build a robust application for a leading donor-advised fund services company.",
      "Led the communication of the need with the client and the development team for a major insurance company's website.",
      "Delivered MVPs on pressured timelines to the client and the development team.",
      "Participated in group coding sessions and ran team meetings to ensure alignment on project direction.",
    ],
  },
  {
    title: "Wordpress Developer",
    company_name: "Spire Digital",
    icon: spire,
    iconBg: "#383E56",
    date: "June 2019 - Sept 2020",
    points: [
      "Developing and maintaining WordPress websites of various sizes and complexities.",
      "Collaborating with cross-functional teams including designers and product owners.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Adhearing to strict coding standards and best practices.",
    ],
  },
  {
    title: "Lead Developer, Junior Developer",
    company_name: "Graphik Creative",
    icon: graphik,
    iconBg: "#383E56",
    date: "July 2017 - May 2019",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "The Signatry",
    description:
      "Fintech web-based platform that allows users to set up their own donor advised funds by connecting their bank accounts, depositing funds, donating to charities, and investing funds in weighted, managed investment pools.  It utilizes authorization, api's, database management, transaction and fund accounting, tax and legal compliance and admin & sponsor dashboard management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: signatry,
    demo_link: "https://thesignatry.com/",
  },
  {
    name: "Movies Galore",
    description:
      "An application built with React and Tailwind CSS with the ability to search a movie API of over 1 million movies on demand, and list the top 5 most searched movies on the site.  It employs another API to record search history within Appwrite, then reads from that database.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "orange-text-gradient",
      },
      {
        name: "netlify",
        color: "pink-text-gradient",
      }
    ],
    image: movies_galore,
    demo_link: "https://movies-galore.netlify.app/",
    source_code_link: "https://github.com/coding-jack/movies-galore",
  },
  {
    name: "Shwarma Website",
    description:
      "A website build with Next.js and Tailwind CSS to display my band's music, tour dates, social media links, photos, and videos.  I work in collaboration on this site with my band mate Pieter.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      }
    ],
    image: shwarma,
    demo_link: "https://www.shwarma.band/",
    source_code_link: "https://github.com/montoulieu/shwarma",
  },
  {
    name: "Prep Network",
    description:
      "A WordPress Multi-site I built from the ground up and continually maintained and added new features and external integrations as our database grew and more customer need was defined.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "green-text-gradient",
      },
      {
        name: "wordpress-vip",
        color: "pink-text-gradient",
      }
    ],
    image: prep_network,
    demo_link: "https://prepnetwork.com/",
  },
  {
    name: "Prep Network Events",
    description:
      "A custom built Laravel application for Prep Network's Events Management, Ticketing, Registration and more.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "green-text-gradient",
      },
    ],
    image: pn_events,
    demo_link: "https://events.prephoops.com/e/1635/register/the-expo-texas",
  },
  {
    name: "Father's Day Card",
    description:
      "An application built with Next.js and Tailwind CSS that was simply a fun way to show my dad how much I love him on Father's Day.  And a fun excuse for me to build something new with React 😏",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "green-text-gradient",
      },
      {
        name: "netlify",
        color: "pink-text-gradient",
      }
    ],
    image: fathers_day,
    demo_link: "https://fathers-day-card.netlify.app/",
    source_code_link: "https://github.com/coding-jack/fathers-day-card",
  },
  {
    name: "Jackson's Links",
    description:
      "A custom built Link Tree like application for my own personal links.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "green-text-gradient",
      },
      {
        name: "netlify",
        color: "pink-text-gradient",
      }
    ],
    image: jackson_links,
    demo_link: "https://links.jacksonkaufman.com/",
    source_code_link: "https://github.com/coding-jack/link-ent/tree/multi-subject",
  },
  {
    name: "Goofball Bucket",
    description:
      "A custom built EPK style website built with Vue.js for my late band Goofball Bucket.",
    tags: [
      {
        name: "vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "green-text-gradient",
      },
      {
        name: "netlify",
        color: "pink-text-gradient",
      }
    ],
    image: goofball,
    demo_link: "https://modest-bhaskara-809f26.netlify.app/",
    source_code_link: "https://github.com/coding-jack/goofball-epk",
  },
  {
    name: "Shwarma Links",
    description:
      "A custom built Link Tree like application for my bands links.  I work in collaboration on this site with my band mate Pieter.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind.css",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      }
    ],
    image: shwarma_links,
    demo_link: "https://links.shwarma.band/",
    source_code_link: "https://github.com/montoulieu/shwarma-links",
  },
  {
    name: "D'Marie",
    description:
      "WordPress website custom made for an HR recruiting agency using Sage 9, ACF Pro and Blade.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "sage-9",
        color: "green-text-gradient",
      },
      {
        name: "acf-pro",
        color: "pink-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: dmarie,
    demo_link: "https://dmarieandco.com/",
  },
  {
    name: "Latsis",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "sage-9",
        color: "green-text-gradient",
      },
      {
        name: "acf-pro",
        color: "pink-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: latsis,
    demo_link: "https://latsiscustomhomes.com/",
  },
  {
    name: "M5 Networking",
    description:
      "A custom built WordPress website with a really cool SVG animation that was really fun to make.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "sage-9",
        color: "green-text-gradient",
      },
      {
        name: "acf-pro",
        color: "pink-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: m5,
    demo_link: "https://www.m5networking.com/",
  },
];

export { navLinks, services, technologies, experiences, projects, techCategories };