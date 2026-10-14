import type { Dictionary } from "@/lib/i18n/types";

const en = {
  metadata: {
    home: {
      title: "Sabeesoft",
      description:
        "Sabeesoft is a custom software studio designing and building web and mobile products on a modern stack — clean code, fast delivery, nothing you didn't ask for.",
    },
    legalNotice: {
      title: "Legal Notice — Sabeesoft",
      description: "Operator, copyright and terms of use for sabeesoft.com.",
    },
    privacy: {
      title: "Privacy Policy — Sabeesoft",
      description:
        "How Sabeesoft collects, uses and protects the information submitted through this site.",
    },
    loglens: {
      title: "Log Lens — a private log viewer for VS Code",
      description:
        "Log Lens is an open-source log viewer for JSON, NDJSON and CSV — a VS Code extension, web app and PWA. Private by design: your logs never leave your machine.",
    },
  },
  header: {
    nav: {
      services: "Services",
      work: "Work",
      products: "Products",
      process: "Process",
      contact: "Contact",
    },
    cta: "Get a quote",
    menuLabel: "Menu",
    languageLabel: "Language",
  },
  hero: {
    badge: "Custom software studio",
    titleLine1: "Minimal code.",
    titleLine2: "Maximum output.",
    paragraph:
      "We design and build web and mobile products on a modern stack — clean code, fast delivery, nothing you didn't ask for.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See what we build",
    panel: {
      filename: "ship.ts",
      deployStatus: "deploy ✓ 42s",
      stats: ["0 legacy", "2-week sprints", "100% own code"],
    },
  },
  sectionLabels: {
    services: "Services",
    work: "Selected work",
    products: "Our products",
    process: "How we work",
    contact: "Start a project",
  },
  services: {
    eyebrow: "01",
    title: "Services",
    subtitle: "Four things, done properly.",
    items: [
      {
        id: "web",
        title: "Web applications",
        body: "React, TypeScript, micro-frontends where teams share a surface.",
      },
      {
        id: "ai",
        title: "AI engineering",
        body: "LLM workflows on your own data, evaluated and cost-capped.",
      },
      {
        id: "mobile",
        title: "Mobile apps",
        body: "iOS and Android from one codebase, offline-first.",
      },
      {
        id: "cloud",
        title: "Services & cloud",
        body: "Java, Quarkus and NestJS microservices on infra as code.",
      },
    ],
  },
  work: {
    eyebrow: "02",
    title: "Selected work",
    subtitleDesktop:
      "Three recent builds, described by the problem they solved. Client names on request — we don't publish logos we haven't been asked to publish.",
    subtitleMobile:
      "Three recent builds, described by the problem they solved. Client names on request.",
    cta: "Ask for the full case studies",
    caseStudies: [
      {
        sector: "Logistics",
        year: "2026",
        title: "A 14-year-old monolith split into services without a freeze",
        body: "Strangler-fig migration behind a stable API. Order handling moved to Quarkus services while the old system kept serving traffic.",
        metric: "-64%",
        metricLabel: "peak order latency",
        tags: ["Java", "Quarkus", "Kafka"],
      },
      {
        sector: "Fintech",
        year: "2025",
        title:
          "Document review handed to an LLM workflow, with a human in the loop",
        body: "Retrieval over the client's own archive, confidence thresholds, and an audit trail on every automated decision.",
        metric: "9 days",
        metricLabel: "of manual review saved monthly",
        tags: ["Python", "NestJS", "PostgreSQL"],
      },
      {
        sector: "Field service",
        year: "2025",
        title: "One offline-first app replacing paper for 400 technicians",
        body: "Jobs, photos and signatures captured without signal, synced conflict-free on reconnect. iOS and Android from one codebase.",
        metric: "11 weeks",
        metricLabel: "from kickoff to store release",
        tags: ["Flutter", "TypeScript", "AWS"],
      },
    ],
    stats: [
      { value: "≥ 95", label: "Lighthouse, enforced in CI" },
      { value: "< 15 min", label: "Commit to production" },
      { value: "2nd pair", label: "of eyes on every merge" },
      { value: "0", label: "proprietary layers, no lock-in" },
    ],
    techStackLabel: "Typically:",
  },
  products: {
    eyebrow: "03",
    title: "Products",
    subtitle: "What we build for ourselves, open for everyone.",
    item: {
      name: "Log Lens",
      tagline: "Private by design.",
      body: "An open-source log viewer for JSON, NDJSON and CSV — one engine across a VS Code extension, a web app and an installable PWA. Search, query and find the spike without your logs ever leaving your machine.",
      tags: ["VS Code", "Open source", "Apache-2.0"],
      cta: "Explore Log Lens",
    },
  },
  process: {
    eyebrow: "04",
    title: "How we work",
    subtitle:
      "Three steps, no discovery theatre. You own the code from the first commit.",
    stats: [
      { label: "Discovery to first release", value: "6 weeks" },
      { label: "Test coverage at handover", value: "≥ 80%" },
      { label: "Fixed-price sprints", value: "always" },
    ],
    steps: [
      {
        number: "01",
        title: "One week of discovery",
        body: "Scope, user flows, architecture — closing with a fixed price and a dated plan.",
      },
      {
        number: "02",
        title: "Shipping every two weeks",
        body: "Every sprint ends in production. A working product, not a demo build.",
      },
      {
        number: "03",
        title: "Documented handover",
        body: "Code, pipeline and knowledge transfer. No vendor lock-in, ever.",
      },
    ],
  },
  contact: {
    eyebrow: "05",
    label: "Start a project",
    title: "Bring us the hard part.",
    paragraph:
      "A few lines about the product is enough to start. You get a named engineer, a scoped plan and a fixed price — not a sales sequence.",
    trustItems: [
      "Reply within 2 working days",
      "NDA signed before the first call",
      "Your repo, your account, from day one",
    ],
    location: "Budapest · remote-first",
    form: {
      kindLabel: "What are you building",
      kinds: ["New product", "Existing product", "Team extension"],
      nameLabel: "Name",
      namePlaceholder: "Jane Doe",
      emailLabel: "Work email",
      emailPlaceholder: "jane@company.com",
      briefLabel: "The brief",
      briefPlaceholder:
        "What should it do, who is it for, and what is the deadline?",
      consent: {
        before: "I agree that Sabeesoft may process the details above to reply to my inquiry. See the ",
        linkLabel: "Privacy Policy",
        after: ".",
      },
      submit: "Send the brief",
      submitting: "Sending…",
      note: "No newsletter. No CRM drip.",
      errors: {
        name: "Please enter your name.",
        email: "Please enter a valid email address.",
        brief: "Tell us a little about the project.",
        consent: "Please accept the privacy notice to continue.",
        generic: "Something went wrong. Please try again or email us directly.",
      },
      success: {
        title: "Brief received.",
        body: "We read every one ourselves. Expect a reply from a developer, not a form letter, within two working days.",
        reset: "Send another",
      },
      confirmationEmail: {
        subject: "We received your message",
        body: "Hi {name},\n\nThanks for reaching out. We read every brief ourselves and will get back to you within two working days.\n\nBest,\nSabeesoft",
      },
    },
  },
  footer: {
    description:
      "A small studio building web and mobile products on a modern stack. Clean code, fast delivery, no lock-in.",
    servicesHeading: "Services",
    studioHeading: "Studio",
    studioLinks: {
      howWeWork: "How we work",
      work: "Work",
      startAProject: "Start a project",
    },
    contactHeading: "Contact",
    contactLinkLabel: "Contact",
    location: "Budapest, Hungary",
    hours: "Remote-first, CET hours",
    privacy: "Privacy",
    legalNotice: "Legal notice",
    cookiePreferences: "Cookie preferences",
    productsHeading: "Products",
    loglensLabel: "Log Lens",
  },
  common: {
    backToHome: "Back to sabeesoft.com",
    lastUpdated: "Last updated",
  },
  cookieConsent: {
    message:
      "We use a functional cookie to remember your language, and — only if you accept — Google Analytics to see how people find and use this site.",
    accept: "Accept",
    decline: "Decline",
    privacyLink: "Privacy Policy",
  },
  legalNotice: {
    eyebrow: "Legal",
    title: "Legal Notice",
    updated: "18 August 2026",
    operator: {
      title: "Operator",
      body: "This site is published by Sabeesoft, based in Budapest, Hungary. Sabeesoft is not yet a registered legal entity — formal company registration details (registered name, seat, company registration number, tax number) will be published here once incorporation is complete.",
    },
    copyright: {
      title: "Copyright",
      body: "Unless otherwise noted, the design, code, text and case study descriptions on this site are © 2026 Sabeesoft. Client names are withheld unless we've been asked to publish them; the metrics we describe are representative of real engagements.",
    },
    trademarks: {
      title: "Trademarks",
      body: "The Sabeesoft name and logo are marks of Sabeesoft. Third-party names, logos and trademarks mentioned on this site — programming languages, frameworks, cloud providers and the like — belong to their respective owners and are used here for identification only.",
    },
    noWarranty: {
      title: "No warranty",
      body: "This site and its content are provided as-is, without warranties of any kind. We make a good-faith effort to keep it accurate and up to date, but we don't guarantee it.",
    },
    liability: {
      title: "Liability",
      body: "To the extent permitted by law, Sabeesoft is not liable for damages arising from the use of, or inability to use, this site.",
    },
    governingLaw: {
      title: "Governing law",
      body: "These terms are governed by the laws of Hungary.",
    },
    contact: {
      title: "Contact",
      suffix: " — Budapest, Hungary.",
    },
  },
  loglens: {
    eyebrow: "Open source · VS Code extension",
    title: "Log Lens",
    tagline: "Private by design.",
    subtitle:
      "A lightweight log viewer for reading and querying JSON, NDJSON and CSV logs. One engine powers three surfaces — a VS Code extension, a web app and an installable PWA — and your logs never leave your machine.",
    ctaMarketplace: "Open in Marketplace",
    ctaGithub: "View on GitHub",
    screenshotAlt:
      "Log Lens open in VS Code: a query bar, a level-stacked volume histogram and a log table with search matches highlighted.",
    screenshotCaption:
      "Query mode with the volume histogram and live search highlighting.",
    surfacesLabel: "One engine, three surfaces",
    surfacesTitle: "Use it where you already work",
    surfaces: [
      {
        name: "VS Code extension",
        body: "Open from the Activity Bar, the Explorer context menu or the Command Palette. A status bar item shows match count, parse errors and the detected format, and it follows your color theme — dark, light and high contrast.",
      },
      {
        name: "Web app",
        body: "Drag and drop, pick a file, paste from the clipboard or reopen a recent file. Merge several files into one view, with no install required.",
      },
      {
        name: "Installable PWA",
        body: "Install it in Chromium browsers. It works offline and opens .json, .ndjson, .log and .csv files straight from your machine.",
      },
    ],
    featuresLabel: "Features",
    featuresTitle: "Find the one line that matters",
    features: [
      {
        title: "Search",
        body: "One input matches the message and every field, including nested values. Level chips filter by level and understand numeric Pino and Bunyan levels.",
      },
      {
        title: "Query mode",
        body: "A CloudWatch Logs Insights-style pipeline with fields, filter, sort and limit — plus error locations, quick fixes and autocomplete.",
      },
      {
        title: "Volume histogram",
        body: "A level-stacked timeline of log volume, so error spikes show up at a glance.",
      },
      {
        title: "Log table",
        body: "Non-wrapping rows and color-coded level columns, with a details panel offering Raw, Pretty and Tree views.",
      },
      {
        title: "Filters panel",
        body: "Structured filters combined with AND/OR, custom ordering, visible-field toggles and nesting-depth control.",
      },
      {
        title: "Distributed traces",
        body: "A service map that detects trace and span fields, including inside containers like @message.",
      },
    ],
    installation: {
      label: "Install",
      title: "Up and running in seconds",
      steps: [
        {
          title: "From the Marketplace",
          body: "Open the Extensions view in VS Code, search for “Log Lens” and click Install — or use the Open in Marketplace button above.",
        },
        {
          title: "Or from Quick Open",
          body: "Press Ctrl/Cmd+P and run: ext install sabeesoft.log-lens",
        },
        {
          title: "Open your logs",
          body: "Right-click a .json, .ndjson, .log or .csv file and choose “Open with Log Lens”, or open it from the Activity Bar or the Command Palette.",
        },
      ],
    },
    screenshots: {
      label: "Screenshots",
      title: "A look inside",
      items: [
        { caption: "Search with level filters and a volume histogram." },
        { caption: "Query mode: filter and sort with a pipeline." },
        { caption: "Inspect any record in the details panel." },
      ],
    },
    privacy: {
      label: "Privacy",
      title: "Your logs never leave your machine",
      body: "Log files are full of production secrets — tokens, emails, customer records. Log Lens parses and queries everything locally, so there is nothing to upload and nothing to leak.",
      points: [
        "No uploads, no servers, no telemetry",
        "The web app sets connect-src 'none', so the browser blocks every network request",
        "A CI check (check:no-network) fails the build if network APIs appear in the source",
        "No accounts, cookies, analytics or third-party resources",
      ],
    },
    closing: {
      title: "Open source, Apache-2.0",
      body: "Read the code, file an issue or ship a fix. Log Lens is free and open on GitHub.",
    },
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Privacy Policy",
    updated: "18 August 2026",
    whoThisIs: {
      title: "Who this is",
      body: "Sabeesoft (“we”, “us”) operates this site at sabeesoft.com. This policy explains what happens to information you give us through it — nothing more.",
    },
    whatWeCollect: {
      title: "What we collect",
      body1:
        "We use one functional cookie to remember your language choice. If you accept it in the banner, we also use Google Analytics to understand traffic — you can change that choice anytime via \"Cookie preferences\" in the footer. We don't run ads or any other tracking.",
      body2:
        "The only data we collect is what you type into the contact form: your name, your work email, what you're building, and your brief. That's it.",
    },
    whyWeCollect: {
      title: "Why we collect it",
      body: "To reply to your inquiry. We read every brief ourselves and get back to you, usually within two working days.",
    },
    whatWeDontDo: {
      title: "What we don't do with it",
      body: "No newsletter. No CRM drip. We don't sell, rent or share your details with third parties, and we don't use your brief for anything beyond the conversation you started.",
    },
    howLongWeKeep: {
      title: "How long we keep it",
      body: "We keep your message for as long as it takes to have that conversation, and delete it once the inquiry is closed and we no longer need it for reference — normally within 12 months, sooner on request.",
    },
    hosting: {
      title: "Hosting & infrastructure",
      body: "The site is served by our hosting provider, which may log standard connection data (IP address, browser type, request time) for security and reliability. We don't use these logs for marketing or profiling.",
    },
    yourRights: {
      title: "Your rights",
      before:
        "You can ask us what we hold about you, ask us to correct it, or ask us to delete it, at any time. Email ",
      after: " and we'll sort it out — no forms, no friction.",
    },
    changes: {
      title: "Changes",
      body: "If this policy changes, we'll update the date at the top. We won't quietly change what we do with your data.",
    },
    contact: {
      title: "Contact",
      before: "Questions about this policy? ",
    },
  },
} satisfies Dictionary;

export default en;
