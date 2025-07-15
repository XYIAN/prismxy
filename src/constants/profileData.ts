import { ProfileData } from "@/types";

export const PROFILE_DATA: ProfileData = {
  name: "Alex Chen",
  title: "Full-Stack Developer & Creative Technologist",
  bio: "Passionate about creating immersive digital experiences that blend cutting-edge technology with stunning visual design. Specializing in React, Next.js, and creative coding.",
  avatar: "/avatar.jpg",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/alexchen",
      icon: "pi pi-github",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/alexchen",
      icon: "pi pi-linkedin",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/alexchen",
      icon: "pi pi-twitter",
    },
    {
      platform: "Dribbble",
      url: "https://dribbble.com/alexchen",
      icon: "pi pi-dribbble",
    },
  ],
  stats: {
    profileViews: 15420,
    projectsCompleted: 47,
    yearsExperience: 6,
    clientsServed: 23,
  },
  favoriteQuotes: [
    "The best code is no code at all.",
    "Design is not just what it looks like and feels like. Design is how it works.",
    "Simplicity is the ultimate sophistication.",
  ],
  badges: [
    {
      id: "react",
      name: "React Expert",
      icon: "pi pi-star",
      color: "#61dafb",
      description: "Advanced React patterns and performance optimization",
    },
    {
      id: "nextjs",
      name: "Next.js Pro",
      icon: "pi pi-bolt",
      color: "#000000",
      description: "Full-stack development with Next.js",
    },
    {
      id: "creative",
      name: "Creative Coder",
      icon: "pi pi-palette",
      color: "#ff6b6b",
      description: "Interactive art and creative technology",
    },
  ],
};
