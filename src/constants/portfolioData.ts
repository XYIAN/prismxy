import { PortfolioItem } from "@/types";

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "prismxy",
    title: "Prismxy Platform",
    description:
      "A next-gen personal profile platform with glassmorphism design and immersive animations.",
    image: "/projects/prismxy.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Anime.js",
      "PrimeReact",
    ],
    liveUrl: "https://prismxy.com",
    githubUrl: "https://github.com/alexchen/prismxy",
    featured: true,
  },
  {
    id: "neural-art",
    title: "Neural Art Generator",
    description:
      "AI-powered art generation tool using deep learning and creative algorithms.",
    image: "/projects/neural-art.jpg",
    technologies: ["Python", "TensorFlow", "React", "Canvas API", "WebGL"],
    liveUrl: "https://neural-art.demo",
    githubUrl: "https://github.com/alexchen/neural-art",
    featured: true,
  },
  {
    id: "crypto-dashboard",
    title: "Crypto Analytics Dashboard",
    description:
      "Real-time cryptocurrency tracking with advanced charts and portfolio management.",
    image: "/projects/crypto-dashboard.jpg",
    technologies: ["React", "Chart.js", "WebSocket", "Node.js", "MongoDB"],
    liveUrl: "https://crypto-dashboard.demo",
    githubUrl: "https://github.com/alexchen/crypto-dashboard",
    featured: false,
  },
  {
    id: "eco-tracker",
    title: "Eco Tracker App",
    description:
      "Environmental impact tracking app with gamification and social features.",
    image: "/projects/eco-tracker.jpg",
    technologies: [
      "React Native",
      "Firebase",
      "Redux",
      "Maps API",
      "Push Notifications",
    ],
    liveUrl: "https://eco-tracker.app",
    githubUrl: "https://github.com/alexchen/eco-tracker",
    featured: false,
  },
  {
    id: "virtual-gallery",
    title: "Virtual Art Gallery",
    description:
      "3D virtual gallery space for showcasing digital art with VR support.",
    image: "/projects/virtual-gallery.jpg",
    technologies: ["Three.js", "WebXR", "React", "WebGL", "3D Modeling"],
    liveUrl: "https://virtual-gallery.demo",
    githubUrl: "https://github.com/alexchen/virtual-gallery",
    featured: true,
  },
  {
    id: "smart-home",
    title: "Smart Home Hub",
    description:
      "IoT home automation system with voice control and machine learning.",
    image: "/projects/smart-home.jpg",
    technologies: ["Node.js", "MQTT", "React", "TensorFlow.js", "WebRTC"],
    liveUrl: "https://smart-home.demo",
    githubUrl: "https://github.com/alexchen/smart-home",
    featured: false,
  },
];
