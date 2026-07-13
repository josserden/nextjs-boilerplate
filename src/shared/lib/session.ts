import { cookies } from 'next/headers';

export interface Session {
  readonly userId: string;
}

/**
 * Stub session reader — swap the body for your real auth provider
 * (NextAuth, Clerk, Lucia, custom JWT, etc.). `authActionClient` is the
 * only consumer, so this is the single place a real integration plugs in.
 */
export async function getSession(): Promise<Session | null> {
  const cookieStore = await cookies();
  const userId = cookieStore.get('session_user_id')?.value;

  if (!userId) return null;

  return { userId };
}
