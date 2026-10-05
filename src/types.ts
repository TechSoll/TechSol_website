// Shared TypeScript types for TechSol website

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  pastel: string;
  iconColor: string;
  icon: React.ReactNode;
}

export interface Project {
  id: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  title: string;
  desc: string;
  tech: string[];
  gradient: string;
  emoji: string;
}

export interface Feature {
  id: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  desc: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface ProcessStep {
  step: number;
  label: string;
}
