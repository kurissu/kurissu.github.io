// Define types for our data
export type Project = {
  id: number;
  title: string;
  description: string;
  categories: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  featured: boolean;
};

export type SkillItem = {
  name: string;
  level: number; // 0-100
};

export type PersonalInfo = {
  name: string;
  email: string;
  location: string;
  phone?: string;
  bio: string;
  shortBio: string;
  availability: string;
  linkedin: string;
  github: string;
  twitter?: string;
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
  description: string;
};

export type WorkExperience = {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
};

// Personal information
export const personalInfo: PersonalInfo = {
  name: "Kris Tantinirundr",
  email: "kris.ttr.dev@gmail.com",
  location: "Bangkok, Thailand",
  bio: "I'm a passionate Full Stack Developer with 3+ years of experience building web applications using modern technologies. I specialize in JavaScript/TypeScript, React, Node.js, and cloud services. I enjoy creating efficient, scalable, and user-friendly solutions that solve real-world problems.",
  shortBio:
    "Passionate Full Stack Developer with expertise in React, Node.js, and modern web technologies. I build efficient, scalable, and user-friendly applications.",
  availability: "Available for full-time positions and freelance projects",
  linkedin: "https://linkedin.com/in/kris-tantinirundr",
  github: "https://github.com/kurissu",
};

// Work experience
export const workExperience: WorkExperience[] = [
  // {
  //   company: "Tech Solutions Inc.",
  //   position: "Senior Full Stack Developer",
  //   period: "Jan 2021 - Present",
  //   responsibilities: [
  //     "Leading a team of 5 developers in developing and maintaining multiple client projects",
  //     "Implementing microservices architecture using Node.js, Express, and MongoDB",
  //     "Building responsive frontend applications with React, TypeScript, and Redux",
  //     "Optimizing application performance and implementing security best practices",
  //     "Conducting code reviews and mentoring junior developers",
  //   ],
  // },
  // {
  //   company: "Digital Innovations LLC",
  //   position: "Full Stack Developer",
  //   period: "Mar 2019 - Dec 2020",
  //   responsibilities: [
  //     "Developed RESTful APIs using Node.js and Express",
  //     "Created interactive user interfaces with React and Material UI",
  //     "Implemented authentication and authorization using JWT and OAuth",
  //     "Integrated third-party services and payment gateways",
  //     "Performed database design and optimization in PostgreSQL",
  //   ],
  // },
  {
    company: "Tomitech24",
    position: "Frontend Developer",
    period: "Feb 2024 - Apr 2025",
    responsibilities: [
      "Built responsive and accessible web applications using HTML, CSS, and JavaScript",
      "Implemented features using Next.js and state management libraries",
      "Worked with design team to translate wireframe into functional components",
      "Optimized website performance through code splitting and lazy loading",
      "Assist with optimizing SEO for traffic boost, following Google’s guidelines.",
    ],
  },
];

// Education
export const education: Education[] = [
  {
    institution: "Queens College, City University of New York",
    degree: "Bachelor of Arts in Computer Science",
    period: "2018 - 2022",
    description:
      "Coursework included data structures, algorithms, database systems, and web development.",
  },
];

// Technical skills
export const technicalSkills = {
  frontend: [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 90 },
    { name: "Vue", level: 60 },
  ],
  frontendFrameworks: [
    "React",
    "vue",
    "Next.js",
    "Nuxt.js",
    "Zustand",
    "Tailwind CSS",
    "Shadcn",
    "Styled Components",
    "Framer Motion",
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 70 },
    // { name: "Python", level: 50 },
    // { name: "Java", level: 65 },
  ],
  backendTechnologies: [
    "Express.js",
    // "NestJS",
    // "Django",
    // "Spring Boot",
    // "GraphQL",
    "REST API",
    "WebSockets",
  ],
  database: [
    { name: "MongoDB", level: 70 },
    { name: "PostgreSQL", level: 80 },
    { name: "MySQL", level: 70 },
    // { name: "Redis", level: 65 },
  ],
  devOps: [
    "Docker",
    // "Kubernetes",
    // "AWS",
    "CI/CD",
    "GitHub Actions",
    // "Terraform",
    // "Nginx",
  ],
  testing: ["Jest", "React Testing Library", "Cypress"],
  versionControl: ["Git", "GitHub", "GitLab"],
  other: [
    "Agile/Scrum",
    // "JIRA",
    "Figma",
    "Responsive Design",
    "PWA",
    "SEO",
    "Accessibility",
  ],
};

// Projects
export const projects: Project[] = [
  // {
  //   id: 1,
  //   title: "E-commerce Platform",
  //   description:
  //     "A full-featured e-commerce platform with product management, cart functionality, payment processing, and order management.",
  //   categories: ["Full Stack", "Web Application"],
  //   technologies: [
  //     "React",
  //     "Node.js",
  //     "Express",
  //     "MongoDB",
  //     "Redux",
  //     "Stripe API",
  //     "AWS S3",
  //   ],
  //   demoUrl: "https://ecommerce-demo.example.com",
  //   githubUrl: "https://github.com/johndoe/ecommerce-platform",
  //   featured: true,
  // },
  // {
  //   id: 2,
  //   title: "Task Management System",
  //   description:
  //     "A collaborative task management tool with real-time updates, user roles, and analytics dashboards.",
  //   categories: ["Full Stack", "Web Application"],
  //   technologies: [
  //     "React",
  //     "TypeScript",
  //     "Node.js",
  //     "Socket.io",
  //     "PostgreSQL",
  //     "Chart.js",
  //   ],
  //   demoUrl: "https://taskmanager-demo.example.com",
  //   githubUrl: "https://github.com/johndoe/task-manager",
  //   featured: true,
  // },
  // {
  //   id: 3,
  //   title: "Real Estate Marketplace",
  //   description:
  //     "A platform for property listings with advanced search, virtual tours, and user authentication.",
  //   categories: ["Full Stack", "Web Application"],
  //   technologies: [
  //     "Next.js",
  //     "Node.js",
  //     "MongoDB",
  //     "Google Maps API",
  //     "Cloudinary",
  //     "Auth0",
  //   ],
  //   demoUrl: "https://realestate-demo.example.com",
  //   githubUrl: "https://github.com/johndoe/real-estate-app",
  //   featured: true,
  // },
  // {
  //   id: 4,
  //   title: "Social Media Dashboard",
  //   description:
  //     "An analytics dashboard that aggregates data from multiple social media platforms.",
  //   categories: ["Frontend", "Data Visualization"],
  //   technologies: [
  //     "React",
  //     "Redux",
  //     "D3.js",
  //     "Material UI",
  //     "Various Social Media APIs",
  //   ],
  //   githubUrl: "https://github.com/johndoe/social-dashboard",
  //   featured: false,
  // },
  // {
  //   id: 5,
  //   title: "Inventory Management System",
  //   description:
  //     "A system for tracking inventory levels, orders, sales, and deliveries for small businesses.",
  //   categories: ["Full Stack", "Business Solution"],
  //   technologies: [
  //     "React",
  //     "Node.js",
  //     "Express",
  //     "MySQL",
  //     "Docker",
  //     "PDF Generation",
  //   ],
  //   demoUrl: "https://inventory-demo.example.com",
  //   githubUrl: "https://github.com/johndoe/inventory-system",
  //   featured: false,
  // },
  // {
  //   id: 6,
  //   title: "Blog Platform",
  //   description:
  //     "A content management system for creating and publishing blog posts with comments and analytics.",
  //   categories: ["Full Stack", "Content Management"],
  //   technologies: [
  //     "Next.js",
  //     "Tailwind CSS",
  //     "Prisma",
  //     "PostgreSQL",
  //     "NextAuth.js",
  //   ],
  //   demoUrl: "https://blog-demo.example.com",
  //   githubUrl: "https://github.com/johndoe/blog-platform",
  //   featured: false,
  // },
  {
    id: 7,
    title: "Todo List Application",
    description:
      "A Todo List for user to create keep their task in",
    categories: ["Full Stack", "Web Application"],
    technologies: [
      "Nuxt.js",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Better-Auth",
    ],
    demoUrl: "https://todo-list-nuxt-sigma.vercel.app/",
    githubUrl: "https://github.com/kurissu/todo-list",
    featured: true,
  },
  {
    id: 8,
    title: "Tomitech24",
    description:
      "Tomitech24 gaming company website and landing page",
    categories: ["Frontend"],
    technologies: [
      "Next.js",
      "Tailwind CSS",
    ],
    demoUrl: "https://tomitech24.com/",
    // githubUrl: "https://github.com/johndoe/blog-platform",
    featured: true,
  },
  {
    id: 9,
    title: "Porsiriyont Fork Lift",
    description:
      "Landing page with product information",
    categories: ["Frontend"],
    technologies: [
      "Next.js",
      "Tailwind CSS",
    ],
    demoUrl: "https://psiriyontforklift.com",
    // githubUrl: "https://github.com/johndoe/blog-platform",
    featured: false,
  },
  {
    id: 10,
    title: "Badminton Application",
    description:
      "A Badminton application that generate Badminton teams",
    categories: ["Web Application"],
    technologies: [
      "Next.js",
      "Tailwind CSS",
    ],
    demoUrl: "https://badminton-match-generator.vercel.app/",
    // githubUrl: "https://github.com/johndoe/blog-platform",
    featured: true,
  },
];
