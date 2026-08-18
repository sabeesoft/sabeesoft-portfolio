export type ServiceId = "web" | "ai" | "mobile" | "cloud";

export type Dictionary = {
  metadata: {
    home: { title: string; description: string };
    legalNotice: { title: string; description: string };
    privacy: { title: string; description: string };
  };
  header: {
    nav: { services: string; work: string; process: string; contact: string };
    cta: string;
    menuLabel: string;
    languageLabel: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    paragraph: string;
    ctaPrimary: string;
    ctaSecondary: string;
    panel: {
      filename: string;
      deployStatus: string;
      stats: [string, string, string];
    };
  };
  sectionLabels: {
    services: string;
    work: string;
    process: string;
    contact: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { id: ServiceId; title: string; body: string }[];
  };
  work: {
    eyebrow: string;
    title: string;
    subtitleDesktop: string;
    subtitleMobile: string;
    cta: string;
    caseStudies: {
      sector: string;
      year: string;
      title: string;
      body: string;
      metric: string;
      metricLabel: string;
      tags: string[];
    }[];
    stats: { value: string; label: string }[];
    techStackLabel: string;
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stats: { label: string; value: string }[];
    steps: { number: string; title: string; body: string }[];
  };
  contact: {
    eyebrow: string;
    label: string;
    title: string;
    paragraph: string;
    trustItems: string[];
    location: string;
    form: {
      kindLabel: string;
      kinds: [string, string, string];
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      briefLabel: string;
      briefPlaceholder: string;
      submit: string;
      note: string;
      success: { title: string; body: string; reset: string };
    };
  };
  footer: {
    description: string;
    servicesHeading: string;
    studioHeading: string;
    studioLinks: {
      howWeWork: string;
      work: string;
      startAProject: string;
    };
    contactHeading: string;
    contactLinkLabel: string;
    location: string;
    hours: string;
    privacy: string;
    legalNotice: string;
    cookiePreferences: string;
  };
  common: {
    backToHome: string;
    lastUpdated: string;
  };
  cookieConsent: {
    message: string;
    accept: string;
    decline: string;
    privacyLink: string;
  };
  legalNotice: {
    eyebrow: string;
    title: string;
    updated: string;
    operator: { title: string; body: string };
    copyright: { title: string; body: string };
    trademarks: { title: string; body: string };
    noWarranty: { title: string; body: string };
    liability: { title: string; body: string };
    governingLaw: { title: string; body: string };
    contact: { title: string; suffix: string };
  };
  privacy: {
    eyebrow: string;
    title: string;
    updated: string;
    whoThisIs: { title: string; body: string };
    whatWeCollect: { title: string; body1: string; body2: string };
    whyWeCollect: { title: string; body: string };
    whatWeDontDo: { title: string; body: string };
    howLongWeKeep: { title: string; body: string };
    hosting: { title: string; body: string };
    yourRights: { title: string; before: string; after: string };
    changes: { title: string; body: string };
    contact: { title: string; before: string };
  };
};
