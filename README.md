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

- [Next.js](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - Latest React with Server Components and Actions
- [TypeScript 5](https://www.typescriptlang.org/) - Type-safe JavaScript
- [React Compiler](https://react.dev/learn/react-compiler) - Automatic memoization

### Styling

- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Accessible headless component primitives
- [Lucide React](https://lucide.dev/) - Icon library
- [class-variance-authority](https://cva.style/) - Component variants
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Tailwind class merging
- [tw-animate-css](https://www.npmjs.com/package/tw-animate-css) - Animation utilities

### Data & Forms

- [TanStack Query](https://tanstack.com/query) - Data fetching and caching
- [next-safe-action](https://next-safe-action.dev/) - Type-safe Server Actions with validation
- [React Hook Form](https://react-hook-form.com/) - Performant forms
- [Zod](https://zod.dev/) - Schema validation
- [@t3-oss/env-nextjs](https://env.t3.gg/) - Type-safe environment variables

### Testing

- [Vitest](https://vitest.dev/) - Unit testing framework
- [React Testing Library](https://testing-library.com/) - Component testing utilities

### Development Tools

- [ESLint 9](https://eslint.org/) - Linting with flat config
- [Prettier](https://prettier.io/) - Code formatting
- [TypeScript ESLint](https://typescript-eslint.io/) - TypeScript linting rules
- [eslint-plugin-perfectionist](https://perfectionist.dev/) - Import sorting
- [Lefthook](https://lefthook.dev/) - Git hooks (pre-commit)

## Requirements

- [Node.js](https://nodejs.org/en/) (22.x or later)
- [pnpm](https://pnpm.io/) (10.x or later)

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
pnpm install
```

### 4. Start development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
nextjs-boilerplate/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── api/
│   │   │   └── health/           # Health check endpoint
│   │   ├── globals.css           # Global styles (Tailwind CSS 4)
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Home page
│   │   ├── providers.tsx         # App providers (QueryClient)і мабуть буде актуально мати
│   │   ├── error.tsx             # Error boundary
│   │   ├── loading.tsx           # Loading state
│   │   └── not-found.tsx         # 404 page
│   ├── features/                 # Feature-based modules
│   │   └── example/              # Example feature
│   │       ├── action/           # Server Actions
│   │       ├── components/       # Feature components
│   │       ├── query/            # TanStack Query hooks
│   │       └── schema/           # Zod schemas
│   ├── layout/                   # Global layout components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── navbar.tsx
│   │   └── mobile-menu.tsx
│   ├── shared/                   # Shared across features
│   │   ├── components/
│   │   │   ├── ui/               # UI primitives (Button, Input, Field, etc.)
│   │   │   └── utilities/        # Utility components (Show, List)
│   │   ├── config/               # App configuration (siteConfig)
│   │   ├── constants/            # Shared constants
│   │   ├── hooks/                # Custom React hooks
│   │   ├── lib/                  # Third-party client configs
│   │   ├── types/                # TypeScript type definitions
│   │   └── utils/                # Utility functions (cn)
│   └── env.ts                    # Environment variables schema
│   └── __tests__/                # Unit tests
├── public/                       # Static files
└── ...config files
```

## Available Scripts

```bash
# Development
pnpm dev              # Start development server

# Production
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Fix linting issues
pnpm lint:check       # Check for linting issues (CI)
pnpm typecheck        # Run TypeScript type checking
pnpm format           # Format code with Prettier
pnpm format:check     # Check code formatting (CI)
pnpm check            # Run all checks (lint + typecheck + format)

# Testing
pnpm test             # Run tests in watch mode
pnpm test:run         # Run tests once (CI)
```
