import { Form } from '@/shared/components/forms/form';

export default function Home() {
  return (
    <section className='py-20'>
      <div className='container space-y-10'>
        <div className='space-y-10 text-center'>
          <h1 className='text-3xl font-bold text-gray-700'>Next.js Boilerplate</h1>
          <p className='text-base text-gray-800'>
            Modern starter built with Next.js 16, React 19, TypeScript, Tailwind CSS 4,
            <br />
            TanStack Query, React Hook Form, Radix UI, and more.
          </p>
          <h2 className='text-2xl font-bold'>Example Form</h2>
        </div>

        <Form />
      </div>
    </section>
  );
}
