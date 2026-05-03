export type SkillGroup = {
  title: string;
  summary: string;
  skills: string[];
};

export type ExpertiseArea = {
  category: string;
  title: string;
  summary: string;
  capabilities: string[];
  leadership: string;
};

export type GlobalExperienceItem = {
  title: string;
  region: string;
  summary: string;
  detail: string;
};

export type OperatingPrinciple = {
  title: string;
  description: string;
  detail: string;
};

export type ProjectCaseStudy = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  techStack: string[];
  problem: string;
  architectureOverview: string;
  architecturePrinciples: string[];
  systemLayers: Array<{
    title: string;
    description: string;
    stack: string[];
  }>;
  deliveryHighlights: string[];
  liveUrl: string;
  sourceUrl: string;
};

export type TimelineItem = {
  label: string;
  title: string;
  meta: string;
  points: string[];
};

export const profile = {
  name: "Hein Htet Zaw",
  initials: "HHZ",
  title: "Full-Stack Developer",
  tagline: "Building scalable modern web applications with React and Node.js.",
  location: "Myanmar",
  email: "heinhtetzaw6328@gmail.com",
  phone: "09764456315",
  availability: "Open to new opportunities and freelance projects",
  focus:
    "Deepening expertise in React.js, Express.js, Next.js, and full-stack architecture.",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/githubPA001" },
    {
      label: "Facebook",
      href: "https://www.facebook.com/share/18bP8qa5Qz/?mibextid=wwXIfr",
    },
  ],
};

export const timeline: TimelineItem[] = [
  {
    label: "Education",
    title: "B.Sc in Computer Science",
    meta: "University of Computer Studies (Yangon) | Graduated 2019",
    points: [
      "Built a strong foundation in programming, databases, software design, and computer science fundamentals.",
    ],
  },
  {
    label: "Experience",
    title: "Software Engineer",
    meta: "DIR-ACE Co., Ltd. | 2021 - March 2026",
    points: [
      "Developed and maintained full-stack web applications.",
      "Collaborated in Agile teams to deliver production features on schedule.",
      "Improved application performance and applied clean engineering practices.",
    ],
  },
  {
    label: "Current Focus",
    title: "Modern full-stack architecture",
    meta: "React, Next.js, Express.js, APIs, deployment, and production readiness",
    points: [
      "Sharpening frontend architecture, backend service design, and reliable end-to-end delivery.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    summary: "Responsive interfaces with clean component architecture.",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    summary: "Practical APIs and authentication for real business flows.",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Database",
    summary: "Data modeling for application features and dashboards.",
    skills: ["MongoDB", "PostgreSQL", "SQL Basics"],
  },
  {
    title: "Tools",
    summary: "Everyday delivery tools for modern web projects.",
    skills: ["Git", "GitHub", "Vercel", "Postman", "Figma"],
  },
  {
    title: "Concepts",
    summary: "Engineering habits that keep projects maintainable.",
    skills: ["Responsive Design", "Clean Code", "Agile/Scrum", "SEO Basics"],
  },
];

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "e-commerce-platform",
    category: "Full-stack commerce",
    title: "E-Commerce Platform",
    summary:
      "A responsive shopping experience with product catalog, cart flow, payments, and admin-ready data structure.",
    techStack: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    liveUrl: "#contact",
    sourceUrl: "https://github.com/githubPA001",
    problem:
      "Customers need a fast store experience while admins need dependable product and order management.",
    architectureOverview:
      "The app can use Next.js for product pages, API routes for checkout orchestration, and MongoDB for flexible product data.",
    architecturePrinciples: [
      "Keep checkout flow simple and resilient.",
      "Optimize product pages for mobile users.",
      "Separate storefront concerns from admin workflows.",
    ],
    systemLayers: [
      {
        title: "Storefront",
        description:
          "Product listing, product detail, cart, and checkout pages designed for smooth browsing.",
        stack: ["Next.js", "React", "Tailwind CSS"],
      },
      {
        title: "API",
        description:
          "Payment session creation, order validation, and customer-facing REST endpoints.",
        stack: ["Node.js", "Stripe", "REST"],
      },
      {
        title: "Data",
        description:
          "Product, customer, and order documents structured for admin reporting and customer history.",
        stack: ["MongoDB", "Indexes"],
      },
    ],
    deliveryHighlights: [
      "Mobile-first product browsing.",
      "Payment-ready architecture.",
      "Clear path for inventory and admin features.",
    ],
  },
  {
    slug: "task-management-app",
    category: "Productivity SaaS",
    title: "Task Management App",
    summary:
      "A team task board with authentication, project spaces, status workflows, and clean collaboration views.",
    techStack: ["React", "Express.js", "JWT Auth", "PostgreSQL"],
    liveUrl: "#contact",
    sourceUrl: "https://github.com/githubPA001",
    problem:
      "Small teams need a lightweight place to track work without losing ownership, priority, and deadline context.",
    architectureOverview:
      "A React client handles fast interactions while Express APIs manage users, projects, tasks, and secure token-based access.",
    architecturePrinciples: [
      "Make ownership and status visible at a glance.",
      "Protect private project data with clear auth boundaries.",
      "Keep API contracts predictable for future mobile clients.",
    ],
    systemLayers: [
      {
        title: "Client",
        description:
          "Kanban-style task board, filters, project views, and responsive task forms.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Services",
        description:
          "Authentication, task CRUD, project permissions, and validation endpoints.",
        stack: ["Express.js", "JWT", "REST APIs"],
      },
      {
        title: "Persistence",
        description:
          "Relational tables for teams, users, projects, tasks, comments, and activity history.",
        stack: ["PostgreSQL", "SQL"],
      },
    ],
    deliveryHighlights: [
      "Role-aware task management.",
      "Reusable API structure.",
      "Designed for future notification features.",
    ],
  },
  {
    slug: "real-time-chat-app",
    category: "Realtime app",
    title: "Real-Time Chat App",
    summary:
      "A messaging interface with live rooms, typing states, online presence, and responsive conversation layout.",
    techStack: ["Socket.io", "Node.js", "React", "MongoDB"],
    liveUrl: "#contact",
    sourceUrl: "https://github.com/githubPA001",
    problem:
      "Users need instant communication with a clear, reliable interface across desktop and mobile devices.",
    architectureOverview:
      "Socket.io manages realtime events while REST endpoints support authentication, room history, and user profile data.",
    architecturePrinciples: [
      "Keep realtime events small and explicit.",
      "Persist message history separately from live presence.",
      "Design mobile chat interactions first.",
    ],
    systemLayers: [
      {
        title: "Interface",
        description:
          "Conversation list, chat room, message composer, online state, and typing indicators.",
        stack: ["React", "Tailwind CSS"],
      },
      {
        title: "Realtime Gateway",
        description:
          "WebSocket channels for room messages, delivery signals, typing events, and presence.",
        stack: ["Node.js", "Socket.io"],
      },
      {
        title: "Storage",
        description:
          "Message history and room membership stored for reliable reloads and search.",
        stack: ["MongoDB"],
      },
    ],
    deliveryHighlights: [
      "Realtime event-driven architecture.",
      "Mobile-friendly chat layout.",
      "Strong base for notifications and read receipts.",
    ],
  },
  {
    slug: "admin-dashboard",
    category: "Analytics dashboard",
    title: "Admin Dashboard",
    summary:
      "A role-based dashboard for monitoring users, activity, operational metrics, and business health.",
    techStack: ["React", "Chart.js", "Express.js", "Role-based Access"],
    liveUrl: "#contact",
    sourceUrl: "https://github.com/githubPA001",
    problem:
      "Admins need clear operational visibility without switching between spreadsheets and disconnected tools.",
    architectureOverview:
      "The dashboard groups metrics, tables, and role-protected actions into a fast React interface backed by documented APIs.",
    architecturePrinciples: [
      "Prioritize scan-friendly data density.",
      "Gate sensitive actions by role.",
      "Keep charts useful, lightweight, and explainable.",
    ],
    systemLayers: [
      {
        title: "Dashboard UI",
        description:
          "Metric cards, charts, data tables, filters, and admin actions.",
        stack: ["React", "Chart.js", "Tailwind CSS"],
      },
      {
        title: "API Layer",
        description:
          "Role-protected endpoints for metrics, users, settings, and audit events.",
        stack: ["Express.js", "JWT", "REST"],
      },
      {
        title: "Reporting Data",
        description:
          "Aggregated data structures optimized for common dashboard reads.",
        stack: ["PostgreSQL", "SQL"],
      },
    ],
    deliveryHighlights: [
      "Clean dashboard information hierarchy.",
      "Role-based access model.",
      "Ready for production monitoring features.",
    ],
  },
];

export const operatingPrinciples: OperatingPrinciple[] = [
  {
    title: "Responsive by default",
    description:
      "Every section is built to read cleanly on a 360px phone and still feel composed on a wide desktop.",
    detail:
      "Navigation, project cards, forms, and timeline blocks use stable responsive layout rules.",
  },
  {
    title: "Accessible interactions",
    description:
      "The interface includes semantic sections, keyboard focus styles, contrast-aware colors, and reduced-motion support.",
    detail:
      "Interactive controls are built as real links and buttons with clear labels.",
  },
  {
    title: "Easy to edit",
    description:
      "Portfolio content lives in structured data so projects, skills, and personal details are simple to replace.",
    detail:
      "Update data/portfolio.ts when you want to change the portfolio story.",
  },
];

export const expertiseAreas: ExpertiseArea[] = skillGroups.map((group) => ({
  category: group.title,
  title: group.summary,
  summary: group.skills.join(", "),
  capabilities: group.skills,
  leadership: group.summary,
}));

export const globalExperienceHighlights: GlobalExperienceItem[] = timeline.map((item) => ({
  title: item.title,
  region: item.label,
  summary: item.meta,
  detail: item.points.join(" "),
}));

export function getProjectCaseStudy(slug: string) {
  return projectCaseStudies.find((project) => project.slug === slug);
}
