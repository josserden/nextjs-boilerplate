export const MESSAGES = {
  ERROR: {
    NOT_FOUND: 'Data not found',
    ALREADY_EXISTS: 'Data already exists',
    BAD_REQUEST: 'Bad request',
    UNAUTHORIZED: 'Unauthorized',
    FORBIDDEN: 'Forbidden',
    INTERNAL: 'Something went wrong',
    INVALID_RESPONSE: 'Invalid response shape',
    NETWORK: 'Network error',
  },
  SUCCESS: {
    FETCH: 'Successfully fetched',
    CREATE: 'Successfully created',
    UPDATE: 'Successfully updated',
    DELETE: 'Successfully deleted',
  },
} as const;
