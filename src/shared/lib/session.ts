import { cookies } from 'next/headers';
import { cache } from 'react';

export interface Session {
  readonly userId: string;
}

/**
 * Stub session reader — NOT real auth. It trusts a raw, unsigned cookie value
 * as an identity with no verification, so it must be replaced before this
 * touches anything real. Swap the body for your actual auth provider
 * (NextAuth, Clerk, Lucia, custom JWT, etc.) — `authActionClient` is the only
 * consumer, so this is the single place a real integration plugs in.
 *
 * Wrapped in React's `cache()` so repeated calls within one request (e.g. the
 * middleware plus a direct call from a Server Component) dedupe instead of
 * re-running the lookup — keep that once this reads from a DB/JWT instead of
 * a cookie.
 */
export const getSession = cache(async (): Promise<Session | null> => {
  const cookieStore = await cookies();
  const userId = cookieStore.get('session_user_id')?.value;

  if (!userId) return null;

  return { userId };
});
