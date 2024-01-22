import { useEffect, useState } from 'react';

export const useBrowser = () => {
  const [isBrowser, setIsBrowser] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsBrowser(true);
    }
  }, []);

  return { isBrowser };
};
