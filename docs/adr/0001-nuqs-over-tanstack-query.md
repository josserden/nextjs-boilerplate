# ADR-0001: Use nuqs for URL state, drop TanStack Query as a default dependency

- **Status:** Accepted
- **Date:** 2026-07-13

## Context

The starter shipped with TanStack Query as the default client-side data layer. In practice, with an App Router + Server Components architecture, most of what TanStack Query is used for is already covered natively:

- Initial data fetching belongs in Server Components (direct `fetch`/`apiFetch`, no client cache needed)
- Mutations go through Server Actions + `revalidatePath`/`revalidateTag`, which re-renders affected Server Components in the same round-trip
- Instant UI feedback during a pending mutation is covered by React 19's `useOptimistic`

Carrying TanStack Query as a default meant every new feature had to choose between two competing data-fetching mental models, and the common case (RSC + Server Actions) never needed it.
Separately, URL-driven state (filters, pagination, sort, tabs) had no standard convention and was at risk of being hand-rolled with `URLSearchParams` per feature.

## Decision

Remove TanStack Query as a default dependency. Adopt [nuqs](https://nuqs.dev/) as the standard library for any state that should live in the URL, with `createLoader`/`useQueryStates` as the default pattern (see the "URL State (nuqs)" section in `CLAUDE.md`).

TanStack Query is not banned — it can still be added to a specific feature when a concrete requirement needs one of: polling/interval refetching, refetch-on-window-focus, or client-driven fetches with race-condition-safe caching (search-as-you-type, infinite scroll).
It should not be added preemptively as a project-wide default again.

## Alternatives Considered

- **Keep TanStack Query as the default, add nuqs alongside it** — rejected: two competing patterns for the common case adds cognitive overhead with no corresponding benefit for an RSC-first app.
- **Hand-roll `URLSearchParams` parsing per feature** — rejected: no type safety, no shared convention, error-prone across Server/Client Component boundaries.

## Consequences

- New features default to Server Components + Server Actions for data; no client-side query cache to reason about by default.
- URL state has one documented convention (`search-params/` folder per feature, shared between server and client) instead of being reinvented per feature.
- Adding TanStack Query back to a specific feature is still possible and sometimes correct — this ADR only removes it as the default, it doesn't forbid it.
