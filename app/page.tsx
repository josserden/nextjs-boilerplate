import React from 'react';

import { Form } from '@/app/_shared/components/forms/form';

export default function Home() {
  return (
    <section className='py-20'>
      <div className='container space-y-10'>
        <div className='space-y-10 text-center'>
          <h1 className='text-3xl font-bold text-gray-700'>Next js starter</h1>
          <p className='text-base text-gray-800'>
            This is a starter for Next js with Typescript, ESLint, Prettier,
            <br />
            Tailwind CSS, React Hook Form, React Use and more.
          </p>
          <h2 className='text-2xl font-bold'>Simple Form template</h2>
        </div>

        <Form />
      </div>
    </section>
  );
}
