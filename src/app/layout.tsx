import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';

// PrimeReact imports
import 'primereact/resources/themes/lara-dark-teal/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// Tailwind CSS
import 'tailwindcss/tailwind.css';

import { PrimeReactProvider } from 'primereact/api';
import PrismBackground from '@/components/visuals/PrismBackground';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prismxy - Create Your Digital Identity',
  description:
    'Build stunning, customizable profile pages that showcase your skills, projects, and personality. Stand out in the digital world with Prismxy.',
  keywords: 'profile, portfolio, digital identity, personal branding, web development, design',
  authors: [{ name: 'Prismxy Team' }],
  creator: 'Prismxy',
  publisher: 'Prismxy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://prismxy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Prismxy - Create Your Digital Identity',
    description:
      'Build stunning, customizable profile pages that showcase your skills, projects, and personality.',
    url: 'https://prismxy.com',
    siteName: 'Prismxy',
    images: [
      {
        url: '/icon-lg.png',
        width: 1200,
        height: 630,
        alt: 'Prismxy - Digital Identity Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prismxy - Create Your Digital Identity',
    description:
      'Build stunning, customizable profile pages that showcase your skills, projects, and personality.',
    images: ['/icon-lg.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon1.png" />
        <link rel="apple-touch-icon" href="/icon-lg.png" />
        <meta name="theme-color" content="#00d4ff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        <PrimeReactProvider>
          <PrismBackground />
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
