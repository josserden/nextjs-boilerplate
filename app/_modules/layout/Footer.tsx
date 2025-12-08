export function Footer() {
  return (
    <footer className='border-t py-2'>
      <div className='container'>{new Date().getFullYear()}</div>
    </footer>
  );
}
