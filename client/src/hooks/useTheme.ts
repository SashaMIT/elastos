import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  // Keep the toggleTheme function but make it do nothing
  const toggleTheme = () => {
    // Do nothing - always stay in dark mode
  };

  return { theme, toggleTheme };
}