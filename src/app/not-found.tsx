import Link from 'next/link';

import { buttonVariants } from '@/shared/components/ui/button';
import { Typography } from '@/shared/components/ui/typography';

export default function NotFound() {
  return (
    <section className='py-20'>
      <div className='container'>
        <div className='space-y-5 text-center'>
          <Typography variant='h1'>Not Found</Typography>

          <Typography>Could not find requested resource</Typography>

          <Link href='/' className={buttonVariants({ variant: 'link' })}>
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}
