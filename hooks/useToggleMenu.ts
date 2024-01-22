import { useLockBodyScroll, useMedia, useToggle } from 'react-use';

const IS_MOBILE = '(max-width: 767px)';
const IS_TABLET = '(min-width: 768px)';

export const useToggleMenu = () => {
  const [isMenuOpen, toggleMenu] = useToggle(false);
  const isMobile = useMedia(IS_MOBILE);
  const isTablet = useMedia(IS_TABLET);

  useLockBodyScroll(isMenuOpen);

  return { isMenuOpen, toggleMenu, isMobile, isTablet };
};
