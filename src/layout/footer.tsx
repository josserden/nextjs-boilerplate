import { Typography } from '@/shared/components/ui/typography';
import { siteConfig } from '@/shared/config/site';

export function Footer() {
  return (
    <footer className='border-border border-t py-2'>
      <div className='container text-center'>
        <Typography>
          {siteConfig.author.name} &copy; {new Date().getFullYear()}
        </Typography>
      </div>
    </footer>
  );
}
