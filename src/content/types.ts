export type Locale = "ru" | "en";

export interface LocalizedString {
  ru: string;
  en: string;
}

export interface NavDictionary {
  about: string;
  education: string;
  projects: string;
  stack: string;
  contact: string;
  resume: string;
}

export interface HeroFact {
  value: string;
  label: string;
}

export interface HeroDictionary {
  greeting: string;
  name: string;
  role: string;
  pitch: string;
  ctaResume: string;
  ctaContact: string;
  avatarAlt: string;
  scrollHint: string;
}

export interface AboutDictionary {
  title: string;
  eyebrow: string;
  paragraphs: string[];
  hackathonTitle: string;
  hackathonSubtitle: string;
  expandLabel: string;
  collapseLabel: string;
  sourceLabel: string;
}

export interface HackathonPhotoFocus {
  /** Top-left X in % of frame width */
  x: number;
  /** Top-left Y in % of frame height */
  y: number;
  /** Width in % of frame width */
  w: number;
  /** Height in % of frame height */
  h: number;
}

export interface HackathonPhoto {
  src: string;
  alt: LocalizedString;
  focus?: HackathonPhotoFocus;
}

export interface HackathonEvent {
  id: string;
  date: LocalizedString;
  location: LocalizedString;
  stage: LocalizedString;
  client: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  result: LocalizedString;
  sourceUrl: string;
  photos: HackathonPhoto[];
}

export interface EducationDictionary {
  title: string;
  eyebrow: string;
  university: string;
  degree: string;
  year: string;
  city: string;
  thesisLabel: string;
  thesisTitle: string;
  thesisGrade: string;
  description: string;
  originStory: string;
  quote: string;
  quoteAuthor: string;
  linkToXologie: string;
  sourceLabel: string;
  sourceUrl: string;
}

export interface FlagshipStep {
  label: string;
  title: string;
  description: string;
}

export interface FlagshipDictionary {
  badge: string;
  title: string;
  subtitle: string;
  stack: string[];
  steps: FlagshipStep[];
  resultStats: HeroFact[];
  links: {
    label: string;
    href: string;
  }[];
}

export interface ProjectCard {
  id: string;
  title: LocalizedString;
  period: LocalizedString;
  description: LocalizedString;
  bullets: LocalizedString[];
  stack: string[];
  link?: {
    label: LocalizedString;
    href: string;
  };
  badge?: LocalizedString;
}

export interface ProjectsDictionary {
  title: string;
  eyebrow: string;
  flagship: FlagshipDictionary;
  gridTitle: string;
  gridSubtitle: string;
  noLinkLabel: string;
  githubWidget: {
    title: string;
    subtitle: string;
    loadingLabel: string;
    errorLabel: string;
    updatedLabel: string;
  };
}

export interface StackCategory {
  id: string;
  title: string;
  items: string[];
}

export interface StackDictionary {
  title: string;
  eyebrow: string;
  searchPlaceholder: string;
  searchAriaLabel: string;
  searchNoResults: string;
  searchResultsLabel: string;
  categories: StackCategory[];
  aiWorkflow: {
    title: string;
    description: string;
    points: string[];
  };
}

export interface ContactDictionary {
  title: string;
  eyebrow: string;
  description: string;
  email: string;
  telegramLabel: string;
  githubLabel: string;
  resumeLabel: string;
  footerNote: string;
  sourceLabel: string;
}

export interface Dictionary {
  locale: Locale;
  metaTitle: string;
  metaDescription: string;
  nav: NavDictionary;
  hero: HeroDictionary;
  about: AboutDictionary;
  education: EducationDictionary;
  projects: ProjectsDictionary;
  stack: StackDictionary;
  contact: ContactDictionary;
}
