import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/site-header';
import { Providers } from '@/components/providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Eric Broberg',
  description: 'the web page of eric broberg, software developer',
  icons: {
    icon: [
      {
        url: 'https://fav.farm/👓',
        href: 'https://fav.farm/👓',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // wraps everything in app. spot for header and footer. uses app router file-based routing.
  // you can have a layout.tsx in each folder
  return (
    <html lang="en">
      {/* antialiased means font looks good on certain devices */}
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
        )}
      >
        <Providers>
          {/* min-h-screen vs min-h-dvh (displayed viewport height). need dvh for pages exact height of screen */}
          <div className="relative flex min-h-dvh flex-col bg-background">
            {/* flex-1: main content grows to fill space of page */}
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
