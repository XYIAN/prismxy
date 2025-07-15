import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { PrimeReactProvider } from 'primereact/api';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prismxy | Futuristic Personal Profile Platform',
  description:
    'A next-gen, animated personal brand and portfolio platform. Glassmorphism, prism-inspired UI, and immersive visuals.',
  keywords: 'portfolio, personal brand, glassmorphism, animations, next.js, typescript',
  authors: [{ name: 'Prismxy Team' }],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Prismxy',
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#00d4ff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Prismxy" />
        <meta name="msapplication-TileColor" content="#00d4ff" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-lg.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <PrimeReactProvider>
          <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
            <Navbar />
            <main className="flex-1 pt-16 sm:pt-20">{children}</main>
            <Footer />
          </div>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
