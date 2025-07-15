import { Theme } from "@/types";

export const THEMES: Theme[] = [
  {
    id: "cyan",
    name: "Cyan Prism",
    primary: "#00d4ff",
    secondary: "#0099cc",
    accent: "#00ffff",
    background: "#0a0a0a",
    surface: "rgba(0, 212, 255, 0.1)",
    text: "#ffffff",
    textSecondary: "rgba(255, 255, 255, 0.7)",
  },
  {
    id: "teal",
    name: "Teal Glass",
    primary: "#20c997",
    secondary: "#17a2b8",
    accent: "#00ffcc",
    background: "#0d1117",
    surface: "rgba(32, 201, 151, 0.1)",
    text: "#ffffff",
    textSecondary: "rgba(255, 255, 255, 0.7)",
  },
  {
    id: "rainbow",
    name: "Soft Rainbow",
    primary: "#ff6b6b",
    secondary: "#4ecdc4",
    accent: "#45b7d1",
    background: "#1a1a2e",
    surface: "rgba(255, 107, 107, 0.1)",
    text: "#ffffff",
    textSecondary: "rgba(255, 255, 255, 0.7)",
  },
  {
    id: "dark-glass",
    name: "Dark Glass",
    primary: "#6366f1",
    secondary: "#8b5cf6",
    accent: "#a855f7",
    background: "#0f0f23",
    surface: "rgba(99, 102, 241, 0.1)",
    text: "#ffffff",
    textSecondary: "rgba(255, 255, 255, 0.7)",
  },
];

export const DEFAULT_THEME = THEMES[0];
