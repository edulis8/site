'use client';

// use client - this is going to have some client-side interactivity
// can use hooks, etc.
// can't use server-side stuff like fs, etc.

import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { Icons } from './icons';

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.Logo className="h-6 w-6" />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
      <Link
        href="/blog"
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-flex',
          pathname === '/blog' ? 'text-foreground' : 'text-foreground/60',
        )}
      >
        Blog
      </Link>
      <Link
        href="/about"
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-flex',
          pathname === '/about' ? 'text-foreground' : 'text-foreground/60',
        )}
      >
        About
      </Link>
    </nav>
  );
}
