import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('portfolio_theme');
      if (savedTheme === 'light') return 'light';
    } catch (e) {
      // ignore
    }
    return 'light'; // Vibrant Instagram theme default
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }

    try {
      localStorage.setItem('portfolio_theme', theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme, isDark: theme === 'dark' };
};
