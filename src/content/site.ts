// All site copy lives here. Current-employer work is described by capability only:
// no product, client or repo names.

// The live address. Used for canonical URLs, the sitemap, the RSS feed and share links.
// Change this one line when a custom domain is attached.
export const SITE_URL = "https://muhiqkapadia.vercel.app";

export const profile = {
  name: "Muhiq Kapadia",
  role: "Software Engineer",
  location: "Ahmedabad, India",
  email: "muhiq26@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhiq-kapadia",
  github: "https://github.com/Muhiq146",
  headline: "I build real-time, voice-first AI products.",
  summary:
    "I'm a software engineer with about 5 years of experience building web apps for healthcare, e-commerce, hiring and logistics. Right now I mostly work on voice AI: apps where you talk to an AI agent and it talks back. I work on both sides, React on the frontend and FastAPI on the backend.",
};

export const stats = [
  { value: "~5 yrs", label: "of experience" },
  { value: "15+", label: "products" },
  { value: "3", label: "companies" },
];

export const capabilities = [
  {
    id: "voice",
    title: "Real-time voice agents",
    body: "AI agents you can have a spoken conversation with. I've worked on ones for mock interviews, sales calls, online shopping and patient check-ins. One thing I spent time on was making the agent reply faster by sending the LLM's answer to text-to-speech one sentence at a time.",
    stack: ["LiveKit", "OpenAI Realtime", "Azure Speech", "WebRTC", "FastAPI"],
  },
  {
    id: "avatars",
    title: "Video avatars",
    body: "Same idea, but the agent shows up as a talking video avatar. I've integrated a few avatar providers and handled switching between personas in the middle of a call.",
    stack: ["LiveKit Agents", "Avatar SDKs", "Azure OpenAI", "Next.js"],
  },
  {
    id: "agents",
    title: "Multi-agent setups",
    body: "One agent figures out what the user needs and hands them over to a specialist agent. I've also built tools for agents using MCP, and worked on a drag-and-drop builder for agent workflows.",
    stack: ["AI Agents", "MCP", "LangChain", "TypeScript"],
  },
  {
    id: "rag",
    title: "RAG and knowledge bases",
    body: "Letting agents answer from a company's own documents. This covers uploading and splitting files, storing them in a vector database, searching them, and suggesting follow-up questions during a live call.",
    stack: ["Qdrant", "Embeddings", "PostgreSQL", "MongoDB"],
  },
  {
    id: "health",
    title: "Healthcare features",
    body: "Things for doctors and patients: a chat before the appointment, a review screen where doctors see suggested tests and can send referral letters, medical image models, and connecting to EHR systems.",
    stack: ["Azure Health Data", "DICOM", "Medical imaging models", "React"],
  },
  {
    id: "code",
    title: "Codebase analysis",
    body: "A tool where AI agents go through a codebase and report on its architecture, security issues and outdated dependencies, with steps to upgrade them. It can also write docs for the project.",
    stack: ["Multi-agent", "CVE scanning", "Python", "React"],
  },
];

export const platformSkills = [
  "Keycloak SSO",
  "Azure Functions & Blob",
  "Redis task queues",
  "Grafana Loki logging",
  "Docker",
  "CI/CD pipelines",
];

export type Project = {
  name: string;
  company: string;
  summary: string;
  did: string;
  stack: string[];
  url?: string;
};

export const featuredProjects: Project[] = [
  {
    name: "Dealermade",
    company: "Seaflux",
    summary:
      "A platform that creates high-quality car photos and media for car dealers, including 3D views of each car.",
    did: "Rebuilt the UI with Tailwind CSS and built the 3D car view with Three.js. Also fixed performance issues and removed a lot of old code.",
    stack: ["Next.js", "GraphQL", "Three.js", "Tailwind CSS"],
    url: "https://www.dealermade.com",
  },
  {
    name: "Trakit",
    company: "Seaflux",
    summary:
      "Fleet tracking for shipping and trucking companies. It shows every vehicle on a live map.",
    did: "Got the map to handle a very large number of vehicles without slowing down, and added emergency markers and filters.",
    stack: ["React", "Google Maps", "REST APIs"],
    url: "https://trakit.in",
  },
  {
    name: "Coavmi",
    company: "Seaflux",
    summary:
      "A flight sharing app for private planes in Europe. It can also find pilots nearby.",
    did: "Added API endpoints across different microservices, worked on the database schemas and wrote test cases.",
    stack: ["NestJS", "GraphQL", "Prisma", "PostgreSQL"],
  },
  {
    name: "ASANI",
    company: "Moon Technolabs",
    summary:
      "A car rental platform with separate apps for the admin, car owners and drivers.",
    did: "Led frontend work on the admin and car owner web apps, and added Firebase chat across all three apps.",
    stack: ["React", "Redux", "Firebase"],
  },
];

export const moreProjects: Project[] = [
  {
    name: "QR video calling",
    company: "Moon Technolabs",
    summary: "Guests scan a QR code at a hotel kiosk and get a video call with the staff.",
    did: "",
    stack: ["WebRTC", "Socket.IO"],
  },
  {
    name: "Telemetry",
    company: "Moon Technolabs",
    summary: "Live dashboard for tracking kiosks and events.",
    did: "",
    stack: ["React", "Socket.IO"],
  },
  {
    name: "Find a Doc",
    company: "Seaflux",
    summary: "Search for doctors by specialty and availability, and book appointments.",
    did: "",
    stack: ["Next.js", "REST"],
  },
  {
    name: "Keyspan",
    company: "Seaflux",
    summary: "Find doctors near you on a map.",
    did: "",
    stack: ["Next.js", "Maps & Geocoding"],
  },
  {
    name: "My-Roommatik",
    company: "Moon Technolabs",
    summary: "Self-service hotel kiosk for booking rooms and checking in.",
    did: "",
    stack: ["React", "Redux"],
  },
  {
    name: "Seekrz",
    company: "Moon Technolabs",
    summary: "Website for a streetwear trading platform.",
    did: "",
    stack: ["React", "Redux"],
  },
  {
    name: "Zoom clone",
    company: "Moon Technolabs",
    summary: "A demo video calling app built on SignalWire.",
    did: "",
    stack: ["React", "SignalWire"],
  },
];

export const experience = [
  {
    company: "Simform",
    logo: "/logos/simform.svg",
    url: "https://www.simform.com",
    role: "Software Engineer",
    period: "May 2025 - Present",
    points: [
      "Working on voice AI products for healthcare, sales, hiring and e-commerce, on both the frontend (React) and the backend (FastAPI, LiveKit agents).",
      "Built multi-agent flows, document search with RAG, and real-time audio streaming.",
      "Also set up Keycloak login, file storage on Azure, background jobs and logging.",
    ],
  },
  {
    company: "Seaflux Technologies",
    logo: "/logos/seaflux.png",
    url: "https://www.seaflux.tech",
    role: "Software Engineer",
    period: "Jul 2023 - Apr 2025",
    points: [
      "Built web apps for automotive, logistics, travel and healthcare clients, from 3D frontends to GraphQL microservices.",
      "Worked closely with the product and design teams, and helped the junior developers on the team.",
    ],
  },
  {
    company: "Moon Technolabs",
    logo: "/logos/moon-technolabs.svg",
    url: "https://www.moontechnolabs.com",
    role: "React.js Developer",
    period: "Sep 2021 - Jun 2023",
    points: [
      "Built React apps for hotels and car rentals, including kiosks, live dashboards and WebRTC video calls.",
      "Led the frontend for a car rental platform made up of three connected apps.",
    ],
  },
];

export const skillGroups = [
  {
    label: "AI & real-time",
    items: ["OpenAI API", "LiveKit", "WebRTC", "Azure Speech", "Web Speech API", "AI Agents", "MCP", "RAG", "WebSockets", "Socket.IO"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Three.js"],
  },
  {
    label: "Backend",
    items: ["FastAPI", "Node.js", "NestJS", "Express", "GraphQL", "REST", "Prisma"],
  },
  {
    label: "Data & tools",
    items: ["PostgreSQL", "MongoDB", "Qdrant", "Firebase", "Docker", "Jest", "Cypress", "Git"],
  },
];

export const education = {
  degree: "B.E. Computer Engineering",
  school: "Gujarat Technological University",
  period: "2018 - 2022",
};

// Muhiq's own project, so unlike current-employer work it can be named and linked.
export const aafiyat = {
  name: "Aafiyat Foundation",
  url: "https://www.aafiyatfoundation.org",
  intro:
    "Aafiyat Foundation is a charity in Ahmedabad that has been helping families with ration, medical bills, education and small businesses since 2022. Alongside volunteering there, I built and run its tech.",
  products: [
    {
      name: "Admin app",
      tag: "Used daily by the team · Private",
      body: "Where volunteers track every case from first contact to delivery: leads, home verification visits, decisions, deliveries, donors, donation boxes, the team fund, meetings and SOPs. It installs on a phone like a native app.",
      highlights: [
        "AI voice notes that fill in verification forms",
        "Passkey login",
        "Push notifications and scheduled reminders",
        "Printable receipts and location maps",
      ],
      stack: ["React", "Redux", "Node.js", "Express", "PostgreSQL", "Groq", "WebAuthn", "Firebase"],
    },
    {
      name: "Public website",
      tag: "aafiyatfoundation.org",
      url: "https://www.aafiyatfoundation.org",
      body: "Publishes every fundraising case the foundation has run, 375+ so far, along with monthly summaries, so donors can see exactly where money goes. The case pages are generated by a script from the team's WhatsApp history. Families' names and photos are never shown.",
      highlights: [
        "Fully static, prerendered for search and link previews",
        "Case archive generated by a script",
        "Privacy rules built into the build",
      ],
      stack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Vercel"],
    },
  ],
  caseStudy: "/case-studies/voice-notes-to-verification-forms/",
};
