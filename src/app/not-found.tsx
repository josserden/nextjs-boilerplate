import Link from 'next/link';

import { Button } from '@/shared/components/ui/button';
import { Typography } from '@/shared/components/ui/typography';

export default function NotFound() {
  return (
    <section className='py-20'>
      <div className='container'>
        <div className='space-y-5 text-center'>
          <Typography variant='h1'>Not Found</Typography>

          <Typography>Could not find requested resource</Typography>

          <Button asChild variant='link'>
            <Link href='/'>Return Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
