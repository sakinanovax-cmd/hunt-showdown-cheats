export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureCard {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  publishedAt: string;
  readTime: string;
  image: string;
  content: string[];
  sections: BlogSection[];
  relatedSlugs: string[];
  /** Three cheat landing pages linked from every guide (internal SEO). */
  relatedCheatSlugs: string[];
}

export interface InfoSection {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
}

export interface PricingPlan {
  name: string;
  duration: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface CheatProduct {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  eyebrow: string;
  description: string;
  highlights: string[];
  perks: string[];
  image: string;
  imageAlt: string;
  accent: string;
  buyHook: string;
  relatedSlugs: string[];
}
