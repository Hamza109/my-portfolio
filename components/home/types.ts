import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Capability {
  title: string;
  text: string;
  icon: LucideIcon;
}

export interface StackTech {
  name: string;
  icon: string;
}

export interface FloatingChipLayout {
  left: number;
  top: number;
  driftX: number;
  driftY: number;
  duration: number;
  delay: number;
}

export interface PortfolioContact {
  phone: string;
  email: string;
  portfolio: string;
  github: string;
  linkedin: string;
}

export interface PortfolioStat {
  label: string;
  value: string;
}

export interface PortfolioProject {
  title: string;
  summary: string;
  stack: string[];
  outcome: string;
}

export interface PortfolioExperience {
  title: string;
  company: string;
  period: string;
  points: string[];
}

export interface PortfolioData {
  name: string;
  tagline: string;
  location: string;
  availability: string;
  intro: string;
  cta: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  stats: PortfolioStat[];
  projects: PortfolioProject[];
  experience: PortfolioExperience[];
  contact: PortfolioContact;
}
