import { Navbar } from '@/app/_modules/layout/Navbar';

export function Header() {
  return (
    <header className='relative border-b py-6'>
      <div className='container flex items-center justify-between'>
        <Navbar className='flex items-center gap-x-3' />
      </div>
    </header>
  );
}
