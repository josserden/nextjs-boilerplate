import { createSafeActionClient } from 'next-safe-action';

import { MESSAGES } from '@/shared/constants/messages';

export const actionClient = createSafeActionClient({
  handleServerError(error) {
    // eslint-disable-next-line no-console -- last-resort visibility for unhandled Server Action errors
    console.error(error);

    return MESSAGES.ERROR.INTERNAL;
  },
});
