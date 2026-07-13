'use client';

import { useAction } from 'next-safe-action/hooks';

import { getProfileAction } from '@/features/example/action/get-profile.action';
import { Button } from '@/shared/components/ui/button';
import { Typography } from '@/shared/components/ui/typography';

/**
 * Demonstrates authActionClient: calling this without a `session_user_id`
 * cookie set surfaces action.result.serverError === MESSAGES.ERROR.UNAUTHORIZED.
 */
export function ProfileExample() {
  const { execute, result, isPending } = useAction(getProfileAction);

  return (
    <div className='mx-auto max-w-xl space-y-2 text-center'>
      <Button type='button' variant='outline' onClick={() => execute()} disabled={isPending}>
        {isPending ? 'Loading...' : 'Get Profile (protected action)'}
      </Button>

      {result.data?.data && (
        <Typography className='text-muted-foreground'>userId: {result.data.data.userId}</Typography>
      )}
      {result.serverError && <Typography className='text-destructive'>{result.serverError}</Typography>}
    </div>
  );
}
