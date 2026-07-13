/**
 * Throw this from a Server Action or middleware for expected, user-facing
 * failures (e.g. unauthorized, not found). `actionClient`'s handleServerError
 * passes its message through to the client instead of masking it as
 * MESSAGES.ERROR.INTERNAL — reserve plain `Error` for unexpected failures
 * that should stay generic.
 */
export class ActionError extends Error {}
