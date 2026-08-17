export type NavItem = { label: string; href: string };

export type Stat = { value: string; label: string };

export type Tech = {
  title: string;
  subtitle: string;
  desc: string;
  metrics: { value: string; label: string }[];
  points: string[];
};

export type Capability = {
  title: string;
  desc: string;
  tags: string[];
  moq?: string;
  img?: string;
};

export type Step = { title: string; desc: string };

export type NewsItem = { date: string; title: string; desc: string; img?: string };

export type Product = {
  name: string;
  category: string;
  desc: string;
  points: string[];
  price?: string;
  img?: string;
};

export type Ingredient = {
  name: string;
  latin: string;
  desc: string;
  benefit: string;
};

export type Theme = {
  brand: string;
  brandDeep: string;
  brandSoft: string;
  ink: string;
  paper: string;
  accent: string;
  sans: string;
  display?: string;
};

export type SiteConfig = {
  key: string;
  domain: string;
  name: string;
  tagline: string;
  role: string;
  desc: string;
  theme: Theme;
  nav: NavItem[];
  announcement: string;
  hero: {
    badge: string;
    title: string[];
    subtitle: string;
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
    visual: string;
  };
  stats: Stat[];
  leadForm: {
    title: string;
    desc: string;
    selectLabel: string;
    selectOptions: string[];
    cta: string;
    note: string;
  };
  footer: {
    intro: string;
    contact: { label: string; value: string }[];
    linksTitle: string;
    extraLinks: NavItem[];
    note: string;
    copyright: string;
  };
};
