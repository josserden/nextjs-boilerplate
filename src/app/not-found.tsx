import Link from 'next/link';

export default function NotFound() {
  return (
    <section className='py-20'>
      <div className='container'>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href='/'>Return Home</Link>
      </div>
    </section>
  );
}
