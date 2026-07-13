'use client';

interface ErrorPage {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPage) {
  return (
    <section className='py-20'>
      <div className='container'>
        <h2>An error occurred: {error.message}</h2>
        <button onClick={reset}>Try again</button>
      </div>
    </section>
  );
}
