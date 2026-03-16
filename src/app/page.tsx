import { Form } from '@/features/example/components/form';
import { Typography } from '@/shared/components/ui/typography';

export default function Home() {
  return (
    <section className='py-20'>
      <div className='container space-y-10'>
        <div className='space-y-10 text-center'>
          <Typography className='text-gray-700' variant='h1' as='h1'>
            Next.js Boilerplate
          </Typography>

          <Typography className='text-gray-800'>
            Modern starter built with Next.js, React 19, TypeScript, Tailwind CSS 4,
            <br />
            next-safe-action, TanStack Query, React Hook Form, and Radix UI.
          </Typography>

          <Typography variant='h2' as='h2'>
            Example Action Form
          </Typography>
        </div>

        <Form />
      </div>
    </section>
  );
}
