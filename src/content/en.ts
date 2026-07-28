import type { Dictionary } from "./types";

export const en: Dictionary = {
  locale: "en",
  metaTitle: "Alexander Holuenko · Frontend / Fullstack Developer",
  metaDescription:
    "Portfolio of Alexander Holuenko: a frontend/fullstack developer who takes on troubled, complex systems and drives them to results. React, Vue, Angular, TypeScript.",
  nav: {
    about: "About",
    education: "Education",
    projects: "Projects",
    stack: "Stack",
    contact: "Contact",
    resume: "Resume",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Alexander Holuenko",
    role: "Frontend / Fullstack Developer",
    pitch:
      "I take on troubled, complex systems and drive them to results, not just close tickets.",
    ctaResume: "Download resume",
    ctaContact: "Get in touch",
    avatarAlt: "Alexander Holuenko, frontend/fullstack developer",
    scrollHint: "scroll --down",
  },
  about: {
    eyebrow: "01 / About",
    title: "About me",
    paragraphs: [
      "I'm a frontend developer with 3+ years of experience, including work on high-load government systems, among them GIS EPD, a federal system that becomes mandatory for the entire freight industry starting September 2026.",
      "I specialize in rescuing troubled projects: places where tests are nearly non-existent, pull requests conflict over formatting, and business requirements shift mid-flight. I bring these products to delivery on time, even if it means a month without days off.",
      "Alongside corporate work, I run my own technical experiments, like a custom offline cache for GraphQL that became my thesis topic. I've also won the \"Digital Era of Transport\" IT championship four times, a competition that taught me to design architecture fast under a hard deadline.",
      "I deliberately use AI tools as part of my workflow, not to replace engineering judgment, but to speed up routine work: mock generation, boilerplate Redux slices, repetitive code. On typical modules this gave roughly a 4x speed-up.",
    ],
    hackathonTitle: "\"Digital Era of Transport\": 4 wins",
    hackathonSubtitle:
      "Four-time winner of the IT championship among ~12–14 teams. Each case: a real transport-industry problem solved in 2 days of development.",
    expandLabel: "Expand",
    collapseLabel: "Collapse",
    sourceLabel: "INRTU news",
  },
  education: {
    eyebrow: "04 / Education",
    title: "Education",
    university: "INRTU (Irkutsk National Research Technical University)",
    degree: "\"Computers, Systems and Networks\", Engineer degree",
    year: "2026",
    city: "Irkutsk",
    thesisLabel: "Thesis topic",
    thesisTitle:
      "\"Development of a PWA for field engineering tasks with offline mode and subsequent data synchronization\"",
    thesisGrade: "Defended with the highest grade (5/5)",
    description:
      "The thesis is built on a real production case, XOLOGIE: an offline-first PWA on top of a GraphQL API used by field engineers without a stable connection.",
    originStory:
      "The case was born at Stage I of the IT championship in Ulan-Ude (March 2025): I won with an offline-first PWA for ITS maintenance tasks. XOLOGIE then invited me to bring it to production, and the topic became my thesis under the \"Startup as Diploma\" program.",
    quote:
      "There is no stable server access on site, operations may not persist when the connection drops. We needed a reliable mobile workflow without a constant online connection.",
    quoteAuthor: "Alexander Holuenko, on the problem the thesis addressed",
    linkToXologie: "More on the technical implementation in the Projects section below.",
    sourceLabel: "INRTU news on the thesis defense",
    sourceUrl: "https://www.istu.edu/novosti/pub/88693",
  },
  projects: {
    eyebrow: "03 / Projects",
    title: "Projects",
    gridTitle: "Other projects",
    gridSubtitle:
      "Federal-scale corporate systems, no screenshots or details beyond resume-level (NDA), but with concrete results.",
    noLinkLabel: "Private corporate project",
    flagship: {
      badge: "Interesting case",
      title: "XOLOGIE: offline-first PWA on top of GraphQL",
      subtitle:
        "Vue 3 (Composition API, Pinia) · PWA for field engineering tasks without a stable connection",
      stack: ["Vue 3", "Pinia", "GraphQL", "Service Worker", "PWA"],
      steps: [
        {
          label: "Problem",
          title: "GraphQL doesn't play well with offline caching",
          description:
            "Field engineers work where the network is unstable or absent, and offline mode has to be built on top of a GraphQL API. Standard HTTP caches target GET requests, while GraphQL almost always uses only POST, and there were no ready-made solutions for this combination.",
        },
        {
          label: "Solution",
          title: "A custom request interceptor inside the Service Worker",
          description:
            "I implemented request interception via fetch and event.respondWith: rebuilding the request/response, caching the relevant data, and running an internal polling loop that automatically resent accumulated changes once the network came back.",
        },
        {
          label: "Result",
          title: "A reusable architecture and a top-grade thesis",
          description:
            "The solution became the foundation of my thesis (defended with the highest grade) and made building the company's second PWA product (built from scratch) 2x faster by reusing the caching architecture.",
        },
      ],
      resultStats: [
        { value: "×2", label: "faster build of the second PWA product" },
        { value: "8 mo", label: "first version development time" },
        { value: "5", label: "thesis defense grade" },
      ],
      links: [],
    },
    githubWidget: {
      title: "GitHub activity",
      subtitle: "Pet projects",
      loadingLabel: "Loading GitHub data…",
      errorLabel: "Couldn't load GitHub data. Check the profile directly instead.",
      updatedLabel: "updated",
    },
  },
  stack: {
    eyebrow: "02 / Stack",
    title: "Stack & tools",
    searchPlaceholder: "Search stack…",
    searchAriaLabel: "Search stack and tools",
    searchNoResults: "Nothing found",
    searchResultsLabel: "{count} matches",
    categories: [
      {
        id: "languages",
        title: "Languages & frameworks",
        items: ["TypeScript", "JavaScript", "Vue 2/3", "Nuxt", "React 18", "Angular"],
      },
      {
        id: "state",
        title: "State management",
        items: ["Redux (async-thunk)", "Pinia", "Vuex"],
      },
      {
        id: "ui",
        title: "UI libraries",
        items: ["Material UI", "Ant Design", "ng-zorro"],
      },
      {
        id: "backend",
        title: "Backend & data",
        items: ["Node.js", ".NET ASP", "PostgreSQL", "GraphQL", "REST API"],
      },
      {
        id: "realtime",
        title: "Real-time & offline",
        items: ["WebSocket", "RxJS", "Service Worker", "PWA", "Polling"],
      },
      {
        id: "testing",
        title: "Testing",
        items: ["Jest", "Playwright"],
      },
      {
        id: "tools",
        title: "Tools & practices",
        items: [
          "Git",
          "Gitflow",
          "ESLint",
          "Prettier",
          "Husky",
          "Code Review",
          "Planning Poker",
          "Jira",
        ],
      },
    ],
    aiWorkflow: {
      title: "AI workflow",
      description:
        "I use AI tools as part of my workflow, deliberately and under control, not as a replacement for engineering judgment.",
      points: [
        "Auto-generating API mocks while the backend isn't ready yet, saving hours of waiting",
        "Scaffolding boilerplate Redux slices and repetitive code by analogy",
        "Roughly a 4x speed-up when building out a typical transport segment",
        "The final decision and architecture always stay with the engineer: AI speeds up routine work, it doesn't design",
      ],
    },
  },
  contact: {
    eyebrow: "05 / Contact",
    title: "Contact",
    description:
      "Open to remote Frontend / Fullstack Developer roles (Middle+). I respond fastest on Telegram.",
    email: "zerogormy@mail.ru",
    telegramLabel: "Message on Telegram",
    githubLabel: "GitHub",
    resumeLabel: "Download resume (PDF)",
    footerNote: "Alexander Holuenko. Built with Next.js and Tailwind CSS.",
    sourceLabel: "Site source code",
  },
};
