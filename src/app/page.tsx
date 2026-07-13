import { Form } from '@/features/example/component/form';
import { ProfileExample } from '@/features/example/component/profile-example';
import { SearchExample } from '@/features/example/component/search-example';
import { loadExampleSearchParams } from '@/features/example/search-params/example.search-params';
import { Typography } from '@/shared/components/ui/typography';

import type { SearchParams } from 'nuqs/server';

interface HomeProps {
  searchParams: Promise<SearchParams>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { q, sort } = await loadExampleSearchParams(searchParams, { strict: true });

  return (
    <section className='py-20'>
      <div className='container space-y-10'>
        <div className='space-y-10 text-center'>
          <Typography variant='h1'>Next.js Boilerplate</Typography>

          <Typography className='text-muted-foreground'>
            Modern starter built with Next.js, React 19, TypeScript, Tailwind CSS 4,
            <br />
            Next Safe Action, Nuqs, React Hook Form, and Shadcn.
          </Typography>

          <Typography variant='h2'>Example Search Params</Typography>
          <Typography className='text-muted-foreground'>
            Server-read values: q=&quot;{q}&quot;, sort=&quot;{sort}&quot;
          </Typography>
        </div>

        <SearchExample />

        <Typography variant='h2' className='text-center'>
          Example Action Form
        </Typography>

        <Form />

        <Typography variant='h2' className='text-center'>
          Example Protected Action
        </Typography>

        <ProfileExample />
      </div>
    </section>
  );
}
