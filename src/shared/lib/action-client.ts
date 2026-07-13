import { createSafeActionClient } from 'next-safe-action';

import { MESSAGES } from '@/shared/constants/messages';
import { ActionError } from '@/shared/lib/action-error';

export const actionClient = createSafeActionClient({
  handleServerError(error) {
    // eslint-disable-next-line no-console -- last-resort visibility for unhandled Server Action errors
    console.error(error);

    if (error instanceof ActionError) {
      return error.message;
    }

    return MESSAGES.ERROR.INTERNAL;
  },
});
