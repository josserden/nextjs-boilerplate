'use server';

import { MESSAGES } from '@/shared/constants/messages';
import { authActionClient } from '@/shared/lib/auth-action-client';
import { createResponse } from '@/shared/utils/create-response';

/**
 * Example protected Server Action: demonstrates authActionClient usage.
 * ctx.session is guaranteed present — the middleware throws before the
 * action body runs otherwise, so no auth check is needed here.
 */
export const getProfileAction = authActionClient.action(async ({ ctx }) => {
  return createResponse({ userId: ctx.session.userId }, MESSAGES.SUCCESS.FETCH);
});
