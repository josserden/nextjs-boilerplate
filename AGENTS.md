# AI Agent Guidelines

This document defines rules and conventions for AI agents (Claude, Cursor, Copilot, etc.) working in this codebase.

---

## Project Stack

- **Next.js** (App Router) + **React 19** + **TypeScript 5**
- **Tailwind CSS 4** — utility-first styling
- **Radix UI** — headless component primitives
- **TanStack Query** — data fetching and caching
- **next-safe-action** — type-safe Server Actions
- **React Hook Form** + **Zod** — form handling and validation
- **@t3-oss/env-nextjs** — environment variable validation

---

## Project Structure

```
src/
├── app/                  # Next.js App Router only (routing files)
├── features/             # Feature-based modules (domain logic)
│   └── [feature]/
│       ├── action/       # Server Actions (next-safe-action)
│       ├── component/    # Feature-specific components
│       ├── query/        # TanStack Query options
│       └── schema/       # Zod schemas
├── layout/               # Global layout components (Header, Footer, Navbar)
├── shared/               # Reusable, domain-agnostic code
│   ├── components/
│   │   ├── ui/           # UI primitives (Button, Input, Field, etc.)
│   │   └── utilities/    # Utility components (Show, List)
│   ├── config/           # Site-wide configuration (siteConfig)
│   ├── constants/        # Shared constants
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Third-party client configs (QueryClient, actionClient)
│   ├── types/            # Shared TypeScript types
│   └── utils/            # Utility functions (cn)
└── env.ts                # Type-safe environment variables
```

---

## Core Rules

### Components

- Use **Server Components by default** — add `'use client'` only when required (hooks, event handlers, browser APIs)
- Use **`'use server'`** only in Server Action files inside `features/[feature]/action/`
- Use `next/image` for all images — never `<img>`
- Use `next/link` for all navigation — never `<a>` for internal links
- Use the `Typography` component for all text rendering
- Use `cn()` utility for all conditional className merging

### File & Folder Naming

- Folder names: **singular**, lowercase (`action/`, `schema/`, `component/`, `query/`)
- Component files: `kebab-case.tsx`
- All non-routing code lives in `src/` — never in the root

### TypeScript

- **Strict mode** is enabled — no `any` without explicit justification; use `unknown` for truly unknown types
- Prefer `interface` over `type` for object shapes; use `type` for unions, intersections, and mapped types
- Use `as const` for static config objects (e.g., `siteConfig`)
- Always use type imports: `import type { Foo } from '...'`
- Use `readonly` for properties that shouldn't change

### Naming Conventions

- Boolean variables: prefix with `is`, `has`, `can`, `should` — e.g., `isLoading`, `hasError`, `canDelete`
- Functions: start with a verb — e.g., `getUser`, `createOrder`, `validateInput`
- Avoid magic numbers — define named constants:
  ```ts
  // ✅
  const MAX_RETRY_ATTEMPTS = 3;
  // ❌
  if (attempts > 3) { ... }
  ```

### Functions

- Use **early returns** to reduce nesting:
  ```ts
  // ✅
  if (!id) return null;
  // ❌ nested if/else chains
  ```
- Keep functions short — aim for under 20-30 lines
- Single responsibility — each function does one thing
- Prefer `async/await` over raw Promises

### Comments

- Avoid obvious comments that narrate the code
- Use comments to explain **why**, not **what**
- JSDoc only for non-obvious logic or public API surfaces

### Imports

- Use `@/` alias for all internal imports — never relative paths like `../../`
- Import order is enforced by ESLint (perfectionist) — do not reorder manually

---

## Feature Module Rules

When adding a new feature, create it under `src/features/[feature]/`:

```
src/features/user/
├── action/
│   └── create-user.action.ts    # Server Action
├── component/
│   └── create-user-form.tsx     # Client Component
├── query/
│   └── user.query.ts            # TanStack Query options
└── schema/
    └── user.schema.ts           # Zod schema (shared between action and form)
```

- **Schema is defined once** in `schema/` and imported in both the action and the form
- **Never put domain logic** (schemas, actions, queries) in `src/shared/`
- `src/shared/` is for code that has no knowledge of any specific feature

---

## Server Actions

Always use `next-safe-action` — never raw Server Actions:

```ts
// ✅ Correct
export const createUser = actionClient
  .inputSchema(userSchema)
  .action(async ({ parsedInput }) => {
    return { success: true };
  });

// ❌ Wrong
export async function createUser(formData: FormData) { ... }
```

- Action files must have `'use server'` at the top
- Input is always validated via a Zod schema from the feature's `schema/` folder
- For protected actions, extend `actionClient` with auth middleware — do not add auth logic inside the action itself

---

## Forms

Use `useHookFormAction` from `@next-safe-action/adapter-react-hook-form/hooks`:

```ts
const { form, action, handleSubmitWithAction } = useHookFormAction(
  createUser,
  zodResolver(userSchema),
  { ... }
);
```

- Always show `action.result.serverError` in the UI
- Always disable submit button when `action.isPending`
- Use `Field`, `FieldLabel`, `FieldError` from `src/shared/components/ui/field.tsx`

---

## Data Fetching

- Use **TanStack Query** for all client-side data fetching
- Define query options in `features/[feature]/query/` using `queryOptions()`
- Use `getQueryClient()` from `src/shared/lib/tanstack/get-query-client.ts` in Server Components
- Use `STALE_TIME` constants from `src/shared/constants/stale-time.ts`

---

## Styling

- **Tailwind CSS 4** only — no inline styles, no CSS Modules
- Use `cn()` for conditional classes
- Use `cva()` for component variants (see `button.tsx` as reference)
- Use `data-*` attributes for state-based styling (e.g., `data-active`, `data-invalid`, `data-slot`)
- Dark mode is supported via `.dark` class

---

## Environment Variables

Always add new env variables to `src/env.ts`:

```ts
server: {
  DATABASE_URL: z.string().url(),
},
runtimeEnv: {
  DATABASE_URL: process.env.DATABASE_URL,
},
```

Never access `process.env` directly — always import from `@/env`.

---

## Testing

- Tests live in `src/__tests__/`
- Use **Vitest** + **React Testing Library** + **jest-dom**
- Test utility functions and shared components — not pages or feature forms
- Use `toBeInTheDocument()`, `toHaveClass()` etc. from jest-dom
- Follow **AAA pattern** — Arrange, Act, Assert:

  ```ts
  it('does something', () => {
    // Arrange
    const inputValue = 'hello';
    const expectedResult = 'HELLO';

    // Act
    const actualResult = toUpperCase(inputValue);

    // Assert
    expect(actualResult).toBe(expectedResult);
  });
  ```

- Variable naming in tests: `input*`, `mock*`, `actual*`, `expected*`
- Group related tests with `describe()`, use `it()` with descriptive names

---

## Performance

- **Minimize `'use client'`** — default to Server Components, add `'use client'` only when necessary
- **Minimize `useEffect` and `useState`** — prefer server-side data fetching and RSC
- Wrap Client Components that are non-critical in `Suspense` with a fallback
- Use `next/dynamic` for heavy or non-critical Client Components:
  ```ts
  const HeavyComponent = dynamic(() => import('@/features/foo/component/heavy'), {
    loading: () => <Skeleton />,
  });
  ```
- Images: use `avif`/`webp` (configured in `next.config.ts`), always provide `width` and `height`, use `priority` only for above-the-fold images
- Never use `loading="lazy"` on above-the-fold images — use `priority` instead

---

## What NOT to Do

- Do not create files in the project root (except config files)
- Do not put feature-specific code in `src/shared/`
- Do not use raw `fetch` in Client Components — use TanStack Query
- Do not use raw Server Actions — use `next-safe-action`
- Do not access `process.env` directly — use `src/env.ts`
- Do not use `<img>` — use `next/image`
- Do not use `<a>` for internal links — use `next/link`
- Do not add `'use client'` to Server Action files
- Do not duplicate Zod schemas — define once in `schema/`, import everywhere
