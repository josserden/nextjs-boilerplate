# Next.js Boilerplate

![banner.png](public%2Fbanner.png)

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)

## Overview

Modern Next.js boilerplate built with the latest technologies and best practices. Perfect starting point for building scalable web applications with a focus on developer experience and production-ready features.

## Tech Stack

### Core

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - Latest React with concurrent features
- [TypeScript 5](https://www.typescriptlang.org/) - Type-safe JavaScript

### Styling

- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [Lucide React](https://lucide.dev/) - Beautiful icon library
- [class-variance-authority](https://cva.style/) - Component variants
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Merge Tailwind classes

### Data & Forms

- [TanStack Query](https://tanstack.com/query) - Powerful data fetching and state management
- [React Hook Form](https://react-hook-form.com/) - Performant form library
- [Zod](https://zod.dev/) - TypeScript-first schema validation
- [nuqs](https://nuqs.47ng.com/) - Type-safe URL state management

### Development Tools

- [ESLint 9](https://eslint.org/) - Linting with flat config
- [Prettier](https://prettier.io/) - Code formatting
- [TypeScript ESLint](https://typescript-eslint.io/) - TypeScript linting rules
- [React-use](https://github.com/streamich/react-use) - Essential React hooks

## Requirements

- [Node.js](https://nodejs.org/en/) (22.x or later)
- [npm](https://www.npmjs.com/) (10.x or later)

## Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:josserden/nextjs-boilerplate.git my-project
cd my-project
```

### 2. Remove git history (start fresh)

```bash
rm -rf .git
git init
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
nextjs-boilerplate/
├── app/
│   ├── _shared/              # Shared resources across the app
│   │   ├── actions/          # Server Actions
│   │   ├── components/
│   │   │   ├── forms/        # Form components (Form wrapper)
│   │   │   ├── layout/       # Layout components (Header, Footer, Navbar, MobileMenu)
│   │   │   ├── ui/           # UI primitives (Button, Input, Sheet, etc.)
│   │   │   └── utilities/    # Utility components (Show, List)
│   │   ├── config/           # App configuration
│   │   ├── constants/        # Constants (is-client, stale-time)
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # Third-party library configurations (TanStack Query)
│   │   ├── queries/          # TanStack Query queries
│   │   ├── schemas/          # Zod validation schemas
│   │   ├── styles/           # Global styles
│   │   ├── types/            # TypeScript type definitions
│   │   └── utils/            # Utility functions (cn)
│   ├── api/                  # API routes
│   │   └── health/           # Health check endpoint
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   ├── providers.tsx         # App providers (QueryClient)
│   ├── error.tsx             # Error boundary
│   ├── loading.tsx           # Loading state
│   └── not-found.tsx         # 404 page
├── public/                   # Static files
└── ...config files
```

### Key Features

#### Pre-built Components

**Layout Components:**

- `Header` - Responsive header with desktop/mobile navigation
- `Footer` - Site footer
- `Navbar` - Navigation links
- `MobileMenu` - Mobile slide-out menu with Sheet component

**UI Components (Radix UI based):**

- `Button` - Multiple variants and sizes
- `Input` / `Textarea` - Form inputs
- `Label` / `Field` - Form field wrappers
- `Checkbox` - Checkbox with label
- `Sheet` - Slide-out panel (used in mobile menu)
- `Separator` - Visual divider
- `NavLink` - Active link with highlighting

**Utility Components:**

- `Show` - Conditional rendering wrapper
- `List` - Array mapping helper
- `Form` - React Hook Form wrapper with Zod validation

#### Utilities

- `cn()` - Tailwind class merger using `clsx` and `tailwind-merge`
- TanStack Query client configuration with optimized defaults
- Type-safe constants for client detection and cache timing

### Best Practices

**Component Organization:**

```
✅ Good Structure
├── components/
    ├── layout/
        ├── header.tsx        # Simple components in single file
        └── navbar.tsx
    ├── ui/
        └── button.tsx        # Reusable UI primitives
```

**Server vs Client Components:**

- Keep components server-side by default
- Only add `'use client'` when necessary (hooks, event handlers)
- Current layout components are server-side for optimal performance

**Styling:**

- Use Tailwind utility classes
- Add global styles to `app/_shared/styles/globals.css`
- Use `cn()` utility for conditional classes

## Available Scripts

```bash
# Development
npm run dev              # Start development server

# Production
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Fix linting issues
npm run lint:check       # Check for linting issues (CI)
npm run typecheck        # Run TypeScript type checking
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting (CI)
npm run check            # Run all checks (lint + typecheck + format)
```
