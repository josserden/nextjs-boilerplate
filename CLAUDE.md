# AI Agent Guidelines

This document defines rules and conventions for AI agents (Claude, Cursor, Copilot, etc.) working in this codebase.

---

## Project Stack

- **Next.js** (App Router) + **React 19** + **TypeScript 5**
- **Tailwind CSS 4** — utility-first styling
- **Radix UI** — headless component primitives
- **next-safe-action** — type-safe Server Actions
- **React Hook Form** + **Zod** — form handling and validation
- **nuqs** — type-safe URL search params state
- **@t3-oss/env-nextjs** — environment variable validation

---

## Project Structure

```
src/
├── app/                  # Next.js App Router only (routing files)
├── features/             # Feature-based modules (domain logic)
│   └── [feature]/
│       ├── action/         # Server Actions (next-safe-action)
│       ├── component/      # Feature-specific components
│       ├── schema/         # Zod schemas
│       └── search-params/  # nuqs parsers (URL state)
├── layout/               # Global layout components (Header, Footer, Navbar)
├── shared/               # Reusable, domain-agnostic code
│   ├── components/
│   │   ├── ui/           # UI primitives (Button, Input, Field, etc.)
│   │   └── utilities/    # Utility components (Show, List)
│   ├── config/           # Site-wide configuration (siteConfig)
│   ├── constants/        # Shared constants (messages)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Third-party client configs (actionClient, apiFetch)
│   ├── types/            # Shared TypeScript types
│   └── utils/            # Utility functions (cn, createResponse)
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

- Folder names: **singular**, lowercase (`action/`, `schema/`, `component/`, `search-params/`)
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
├── schema/
│   └── user.schema.ts           # Zod schema (shared between action and form)
└── search-params/
    └── user.search-params.ts    # nuqs parsers (shared between server and client)
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

- **Default: fetch data in Server Components** — direct `fetch`/`apiFetch` call, no client-side cache needed for initial render
- Use `apiFetch()` from `src/shared/lib/api-fetch.ts` for all HTTP calls inside Server Components and Server Actions — never use raw `fetch` directly:

  ```ts
  import { apiFetch } from '@/shared/lib/api-fetch';

  const result = await apiFetch<User>('/api/users/1', { schema: userSchema });

  if (!result.ok) {
    throw new Error(result.error); // result.status, result.errorData available
  }

  return result.data; // typed as User
  ```

- `apiFetch` returns a **Result type** — always check `result.ok` before accessing `result.data`
- Pass a `schema` (Zod) to validate and type the response automatically
- For mutations, use Server Actions + `revalidatePath`/`revalidateTag` — this re-renders Server Components (including ones outside the mutating form, e.g. a header) in the same round-trip, without a client-side cache
- For instant UI feedback while a Server Action is pending, use React's `useOptimistic` — not a client-side cache
- **Do not add TanStack Query (or any client-side data-fetching library) by default.** It's justified only when a concrete requirement needs one of: polling/interval refetching, refetch-on-window-focus, or client-driven fetches with race-condition-safe caching (search-as-you-type, infinite scroll) — add it to that specific feature when the requirement is real, not preemptively

---

## URL State (nuqs)

Use **nuqs** for any state that should live in the URL — filters, pagination, sort order, tabs, search queries. Never hand-roll `searchParams.get()`/`URLSearchParams` parsing.

- Define parsers once per feature in `features/[feature]/search-params/[feature].search-params.ts`, exported as a plain object (not wrapped in a hook) so the same parsers work in both Server Components and Client Components:

  ```ts
  import { createLoader, parseAsString, parseAsStringLiteral } from 'nuqs/server';

  const sortOptions = ['asc', 'desc'] as const;

  export const userSearchParamsParsers = {
    q: parseAsString.withDefault(''),
    sort: parseAsStringLiteral(sortOptions).withDefault('asc'),
  };

  export const loadUserSearchParams = createLoader(userSearchParamsParsers);
  ```

- **`createLoader`** — default choice. Use in the page's Server Component: `await loadUserSearchParams(searchParams)`
- **`createSearchParamsCache`** — only when a deeply nested Server Component (not the page itself) needs the values without prop drilling (works like React `cache()`; call `.parse()` once in the page, then `.get()`/`.all()` in descendants)
- In a Client Component, read/write the same values via `useQueryStates(someParsers)` (or `useQueryState` for a single key) from `nuqs` — import parsers from `nuqs/server` in shared files so they stay usable from Server Components
- The root layout renders `<Providers>`, which wraps `NuqsAdapter` (`nuqs/adapters/next/app`) — add any future global provider inside `src/app/providers.tsx`, do not wrap the tree again deeper down
- `NuqsAdapter` is configured with `defaultOptions={{ shallow: false }}` — every URL update re-syncs Server Components by default, matching this project's RSC-as-source-of-truth approach. Don't pass `shallow: false` per-call, it's redundant; only override to `shallow: true` for a specific hook if you deliberately want a client-only update that skips the server round-trip
- `NuqsAdapter` also sorts search params alphabetically on every update (`processUrlSearchParams`) — keeps URLs stable and diff-friendly, no action needed on your part
- Don't set `history: 'push'` globally on the adapter — it pollutes the Back button across the whole app. Opt into it per-hook only for navigation-like param changes (tabs, modals)
- Never duplicate parser definitions between a page and its client component — import the shared object from `search-params/`
- **nuqs parsers only coerce types — they don't validate business rules.** For anything beyond "is this a valid float/int/enum" (ranges, formats, cross-field rules), pipe the loaded values through a Zod schema from `schema/`, or pass `{ strict: true }` to the loader/cache's `parse()` call to throw on invalid raw values instead of silently falling back to the default

---

## Styling

- **Tailwind CSS 4** only — no inline styles, no CSS Modules
- Use `cn()` for conditional classes
- Use `cva()` for component variants (see `button.tsx` as reference)
- Use `data-*` attributes for state-based styling (e.g., `data-active`, `data-invalid`, `data-slot`)
- Dark mode is supported via `.dark` class and semantic tokens (`bg-primary`, `text-foreground`, `border-input`, etc.) defined in `globals.css` — they already invert automatically. **Never use `dark:` utility variants in components**; if a color needs a different dark-mode value, add/adjust the token in `globals.css` instead.
- **Group related classes into separate strings** inside `cn()` (or an array + `.join(' ')` for a `cva()` base) instead of one long single-line string — see `checkbox.tsx` for the reference pattern. Split by concern: layout/base, disabled state, focus-visible, aria-invalid, etc. Keep genuinely short class strings (a handful of classes) on one line — don't split for the sake of splitting.

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

Never access `process.env` directly in `src/` — always import from `@/env`.

> **Exception:** `next.config.ts` and other root-level config files may use `process.env` directly — they run at build time before `src/env.ts` is initialized.

---

## Response Utilities

### MESSAGES constants

Use `MESSAGES` from `src/shared/constants/messages.ts` for all user-facing strings — never use string literals:

```ts
import { MESSAGES } from '@/shared/constants/messages';

// ✅
throw new Error(MESSAGES.ERROR.NOT_FOUND);
return createResponse(data, MESSAGES.SUCCESS.CREATE);

// ❌
throw new Error('Data not found');
return { message: 'Successfully created' };
```

### createResponse

Use `createResponse()` from `src/shared/utils/create-response.ts` as the standard return shape from Server Actions:

```ts
import { createResponse } from '@/shared/utils/create-response';

return createResponse({ id: newUser.id }, MESSAGES.SUCCESS.CREATE);
// → { data: { id: '...' }, message: 'Successfully created' }
```

- Returns `ApiResponse<T>` (`{ data?: T; message?: string }`)
- Both `data` and `message` are optional — omit either if not needed

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
- Do not use raw `fetch` in Server Components or Server Actions — use `apiFetch` from `src/shared/lib/api-fetch.ts`
- Do not add TanStack Query (or similar) preemptively — see [Data Fetching](#data-fetching) for when it's justified
- Do not hand-roll `URLSearchParams`/`searchParams.get()` parsing — use nuqs, see [URL State](#url-state-nuqs)
- Do not use string literals for error/success messages — use `MESSAGES` constants
- Do not use raw Server Actions — use `next-safe-action`
- Do not access `process.env` directly — use `src/env.ts`
- Do not use `<img>` — use `next/image`
- Do not use `<a>` for internal links — use `next/link`
- Do not add `'use client'` to Server Action files
- Do not duplicate Zod schemas — define once in `schema/`, import everywhere
