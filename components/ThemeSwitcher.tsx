'use client';

import { useState, useEffect } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<string>('');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-xl p-2 text-gray-700 dark:text-gray-300 hover:bg-[#bbbaab] dark:hover:bg-gray-800/50"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <HiMoon className="h-5 w-5" />
      ) : (
        <HiSun className="h-5 w-5" />
      )}
    </button>
  );
} 