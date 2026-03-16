import { siteConfig } from '@/shared/config/site';

export function Footer() {
  return (
    <footer className='border-t border-slate-200 py-2'>
      <div className='container text-center'>
        {siteConfig.author.name} &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
}
