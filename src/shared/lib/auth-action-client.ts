import { MESSAGES } from '@/shared/constants/messages';
import { actionClient } from '@/shared/lib/action-client';
import { getSession } from '@/shared/lib/session';

/**
 * actionClient variant for Server Actions that require an authenticated user.
 * Extends the base client with auth middleware instead of checking session
 * state inside individual actions, per the "no auth logic inside the action" rule.
 */
export const authActionClient = actionClient.use(async ({ next }) => {
  const session = await getSession();

  if (!session) {
    throw new Error(MESSAGES.ERROR.UNAUTHORIZED);
  }

  return next({ ctx: { session } });
});
