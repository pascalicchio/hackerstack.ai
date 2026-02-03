import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: 'HackerStack.dev - Best AI Tools for Indie Hackers',
    template: '%s | HackerStack.dev',
  },
  description: 'Discover the best AI tools for building, growing, and scaling your indie hacker business. Curated reviews, comparisons, and guides.',
  keywords: ['AI tools', 'indie hacker', 'SaaS tools', 'AI software', 'developer tools', 'AI directory'],
  authors: [{ name: 'HackerStack' }],
  openGraph: {
    title: 'HackerStack.dev - Best AI Tools for Indie Hackers',
    description: 'Discover the best AI tools for building, growing, and scaling your indie hacker business.',
    type: 'website',
    locale: 'en_US',
    siteName: 'HackerStack.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HackerStack.dev - Best AI Tools for Indie Hackers',
    description: 'Discover the best AI tools for building, growing, and scaling your indie hacker business.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0a0a0a] text-[#fafafa]`}>
        {children}
      </body>
    </html>
  );
}
