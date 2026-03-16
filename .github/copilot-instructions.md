# GitHub Copilot Instructions

This project is a **Next.js 15 App Router** boilerplate with React 19, TypeScript 5, and a feature-based architecture. Follow these rules strictly when suggesting code.

> Full guidelines: see `AGENTS.md` in the project root.

---

## Project Structure

```
src/
├── app/              # Next.js App Router only (routing files)
├── features/         # Feature modules — all domain logic goes here
│   └── [feature]/
│       ├── action/   # Server Actions (next-safe-action)
│       ├── component/# Feature-specific components
│       ├── query/    # TanStack Query options
│       └── schema/   # Zod schemas
├── layout/           # Global layout components
├── shared/           # Domain-agnostic reusable code
│   ├── components/ui/
│   ├── constants/    # STALE_TIME, MESSAGES
│   ├── lib/          # QueryClient, actionClient, apiFetch
│   ├── types/        # Shared TypeScript types
│   └── utils/        # cn(), createResponse()
└── env.ts            # Type-safe env vars (@t3-oss/env-nextjs)
```

---

## Critical Rules

### TypeScript

- Strict mode — no `any`; use `unknown` for truly unknown types
- `interface` for object shapes, `type` for unions/intersections
- Always use type imports: `import type { Foo } from '...'`
- Use `@/` alias for all internal imports — never `../../`

### Components

- **Server Components by default** — `'use client'` only for hooks/events/browser APIs
- `'use server'` only inside `features/[feature]/action/` files
- `next/image` for images, `next/link` for internal navigation

### Server Actions

Always use `next-safe-action` — never raw Server Actions:

```ts
// ✅
export const createUser = actionClient
  .inputSchema(userSchema)
  .action(async ({ parsedInput }) => {
    return createResponse(result, MESSAGES.SUCCESS.CREATE);
  });

// ❌
export async function createUser(formData: FormData) { ... }
```

### Forms

Use `useHookFormAction` from `@next-safe-action/adapter-react-hook-form/hooks`:

- Always show `action.result.serverError`
- Always disable submit when `action.isPending`

### Data Fetching

- TanStack Query for client-side — define options in `features/[feature]/query/`
- Use `apiFetch` (never raw `fetch`) for HTTP calls — it returns a Result type:

```ts
const result = await apiFetch<User>('/api/users/1', { schema: userSchema });
if (!result.ok) throw new Error(result.error);
return result.data;
```

### Response Shape

- Use `MESSAGES` constants — never string literals for errors/success
- Use `createResponse()` as the standard return from Server Actions:

```ts
return createResponse(data, MESSAGES.SUCCESS.CREATE);
```

### Styling

- Tailwind CSS 4 only — no inline styles, no CSS Modules
- `cn()` for conditional classes, `cva()` for variants
- `data-*` attributes for state-based styling (`data-active`, `data-invalid`)

### Environment Variables

- Never access `process.env` directly — import from `@/env`
- Add new variables to `src/env.ts` using `@t3-oss/env-nextjs`

---

## Do NOT

- Put feature-specific code in `src/shared/`
- Use raw `fetch` — use TanStack Query (client) or `apiFetch` (server)
- Use raw Server Actions — use `next-safe-action`
- Use `process.env` directly — use `@/env`
- Use `<img>` or `<a>` — use `next/image` and `next/link`
- Duplicate Zod schemas — define once in `schema/`, import everywhere
- Use string literals for messages — use `MESSAGES` constants
