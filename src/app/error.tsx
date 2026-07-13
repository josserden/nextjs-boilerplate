'use client';

import { useEffect } from 'react';

import { Button } from '@/shared/components/ui/button';
import { Typography } from '@/shared/components/ui/typography';

interface ErrorPage {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPage) {
  useEffect(() => {
    // eslint-disable-next-line no-console -- last-resort visibility for unhandled render errors
    console.error(error);
  }, [error]);

  return (
    <section className='py-20'>
      <div className='container'>
        <div className='space-y-5 text-center'>
          <Typography variant='h1'>An error occurred: {error.message}</Typography>

          <Button onClick={reset}>Try again</Button>
        </div>
      </div>
    </section>
  );
}
