// Base types with proper inheritance
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BaseProfile extends BaseEntity {
  name: string;
  slug: string;
  isPublic: boolean;
  theme: string;
  font: string;
  customColors: {
    background: string;
    primary: string;
    secondary: string;
    accent: string;
  };
}

export interface Profile extends BaseProfile {
  sections: ProfileSection[];
  settings: ProfileSettings;
}

export interface ProfileSection extends BaseEntity {
  type: SectionType;
  order: number;
  isEnabled: boolean;
  content: SectionContent;
  styling: SectionStyling;
}

export interface SectionContent {
  [key: string]: unknown;
}

export interface SectionStyling {
  backgroundColor?: string;
  textColor?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
}

export interface ProfileSettings {
  allowComments: boolean;
  showAnalytics: boolean;
  seoOptimized: boolean;
  customDomain?: string;
}

// Section types
export type SectionType =
  | 'hero'
  | 'about'
  | 'skills'
  | 'portfolio'
  | 'experience'
  | 'education'
  | 'contact'
  | 'social'
  | 'testimonials'
  | 'blog'
  | 'custom';

// Font options
export interface FontOption {
  id: string;
  name: string;
  family: string;
  category: 'serif' | 'sans-serif' | 'display' | 'handwriting' | 'monospace';
  googleFont?: string;
}

// Theme system
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

// User management
export interface User extends BaseEntity {
  email: string;
  username: string;
  profiles: Profile[];
  preferences: UserPreferences;
}

export interface UserPreferences {
  defaultTheme: string;
  defaultFont: string;
  emailNotifications: boolean;
}

// API responses
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'select' | 'color' | 'number' | 'url';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    custom?: (value: unknown) => boolean | string;
  };
}

// Component props with generics
export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface ThemeableProps extends BaseComponentProps {
  theme?: Theme;
}

export interface EditableProps<T = unknown> extends ThemeableProps {
  value: T;
  onChange: (value: T) => void;
  isEditing?: boolean;
  onEdit?: () => void;
  onSave?: () => void;
  onCancel?: () => void;
}

// Wizard step types
export interface WizardStep {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  isRequired: boolean;
  component: React.ComponentType<Record<string, unknown>>;
}

export interface WizardState {
  currentStep: number;
  steps: WizardStep[];
  data: Partial<Profile>;
  isValid: boolean;
}

// Validation types
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

// Analytics types
export interface ProfileAnalytics extends BaseEntity {
  profileId: string;
  views: number;
  uniqueVisitors: number;
  lastViewed: Date;
  referrers: { [key: string]: number };
  popularSections: { [key: string]: number };
}

// Legacy types for backward compatibility
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
