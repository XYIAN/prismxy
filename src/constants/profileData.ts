import { Profile } from '@/types';

export const PROFILE_DATA: Profile = {
  id: 'profile-1',
  name: 'Alex Chen',
  slug: 'alex-chen',
  isPublic: true,
  theme: 'cyan',
  font: 'inter',
  customColors: {
    background: '#0a0a0a',
    primary: '#00d4ff',
    secondary: '#0099cc',
    accent: '#00ffff',
  },
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-12-19'),
  sections: [
    {
      id: 'hero-1',
      type: 'hero',
      order: 0,
      isEnabled: true,
      content: {
        title: 'Full-Stack Developer & Creative Technologist',
        name: 'Alex Chen',
        bio: 'Passionate about creating immersive digital experiences that blend cutting-edge technology with stunning visual design. Specializing in React, Next.js, and creative coding.',
        avatar: '/avatar.jpg',
        stats: {
          profileViews: 15420,
          projectsCompleted: 47,
          yearsExperience: 6,
          clientsServed: 23,
        },
        socialLinks: [
          {
            platform: 'GitHub',
            url: 'https://github.com/alexchen',
            icon: 'pi pi-github',
          },
          {
            platform: 'LinkedIn',
            url: 'https://linkedin.com/in/alexchen',
            icon: 'pi pi-linkedin',
          },
          {
            platform: 'Twitter',
            url: 'https://twitter.com/alexchen',
            icon: 'pi pi-twitter',
          },
          {
            platform: 'Dribbble',
            url: 'https://dribbble.com/alexchen',
            icon: 'pi pi-dribbble',
          },
        ],
        favoriteQuotes: [
          'The best code is no code at all.',
          'Design is not just what it looks like and feels like. Design is how it works.',
          'Simplicity is the ultimate sophistication.',
        ],
      },
      styling: {},
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date('2024-12-19'),
    },
    {
      id: 'badges-1',
      type: 'skills',
      order: 1,
      isEnabled: true,
      content: {
        badges: [
          {
            id: 'react',
            name: 'React Expert',
            icon: 'pi pi-star',
            color: '#61dafb',
            description: 'Advanced React patterns and performance optimization',
          },
          {
            id: 'nextjs',
            name: 'Next.js Pro',
            icon: 'pi pi-bolt',
            color: '#000000',
            description: 'Full-stack development with Next.js',
          },
          {
            id: 'creative',
            name: 'Creative Coder',
            icon: 'pi pi-palette',
            color: '#ff6b6b',
            description: 'Interactive art and creative technology',
          },
        ],
      },
      styling: {},
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date('2024-12-19'),
    },
  ],
  settings: {
    allowComments: true,
    showAnalytics: true,
    seoOptimized: true,
  },
};
