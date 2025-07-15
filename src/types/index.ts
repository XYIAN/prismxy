// Barrel file for types

export interface Theme {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  socialLinks: SocialLink[];
  stats: ProfileStats;
  favoriteQuotes: string[];
  badges: Badge[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ProfileStats {
  profileViews: number;
  projectsCompleted: number;
  yearsExperience: number;
  clientsServed: number;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface AnimationConfig {
  duration: number;
  easing: string;
  delay?: number;
}

export interface PrismParticle {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
  velocity: { x: number; y: number };
}
