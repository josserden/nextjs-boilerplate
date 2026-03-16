/**
 * Site configuration
 * Place your global site settings here
 */

export const siteConfig = {
  name: 'Next.js Boilerplate',
  description: 'Modern starter built with Next.js 16, React 19, and TypeScript',
  url: 'https://example.com',
  navLinks: [
    { label: 'Link 1', href: '#' },
    { label: 'Link 2', href: '#' },
    { label: 'Link 3', href: '#' },
  ],
  links: {
    github: 'https://github.com/josserden/nextjs-boilerplate',
    twitter: 'https://twitter.com',
  },
  author: {
    name: 'josserden',
    email: 'your.email@example.com',
  },
} as const;

export type SiteConfig = typeof siteConfig;
