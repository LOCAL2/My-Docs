import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: 'Documentation Site',
    template: '%s | Documentation Site'
  },
  description: 'A beautiful documentation website built with Next.js',
  keywords: ['documentation', 'next.js', 'react', 'markdown', 'mdx'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Documentation Site',
    description: 'A beautiful documentation website built with Next.js',
    siteName: 'Documentation Site',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Documentation Site',
    description: 'A beautiful documentation website built with Next.js',
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full antialiased`}>
        {children}
      </body>
    </html>
  );
}
