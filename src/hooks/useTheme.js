import { useEffect } from 'react';

export const useTheme = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.removeItem('theme');
  }, []);

  return { isDark: true };
};
