'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiStar, HiSparkles, HiUsers, HiNewspaper } from 'react-icons/hi';
import ThemeSwitcher from '../ThemeSwitcher';

const navigation = [
  { name: 'Horoscope', href: '/horoscope', icon: HiStar },
  { name: 'Services', href: '/services', icon: HiSparkles },
  { name: 'Astrologers', href: '/astrologers', icon: HiUsers },
  { name: 'Blog', href: '/blog', icon: HiNewspaper },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 mt-4">
      <div className="max-w-7xl mx-auto backdrop-blur-lg bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-gray-200 dark:border-gray-800">
        <div className="px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent"
            >
              Astrological
            </Link>

            <nav className="flex items-center gap-4 max-md:hidden">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105 ${
                    pathname === item.href
                      ? 'text-indigo-600 dark:text-indigo-400 bg-[#d2d2d0] dark:bg-indigo-900/20'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-[#dbdad0] dark:hover:bg-gray-800/50'
                  }`}
                >
                  <item.icon className="h-4 w-4" /> 
                  {item.name}
                </Link>
              ))}
              <Link
                href="/login"
                className="ml-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:scale-105"
              >
                Sign In
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <div onClick={() => setIsMobileMenuOpen(false)}>
                <ThemeSwitcher />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`w-full h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`w-full h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden fixed left-4 right-4 top-[100px] max-w-7xl mx-auto backdrop-blur-lg bg-white/50 dark:bg-slate-900/50 rounded-2xl transform transition-all duration-200 border border-gray-200 dark:border-gray-800 shadow-lg ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className="py-4 px-2">
          <div className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105 ${
                  pathname === item.href
                    ? 'text-indigo-600 dark:text-indigo-400 bg-[#d2d2d0] dark:bg-indigo-900/20'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-[#dbdad0] dark:hover:bg-gray-800/50'
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:scale-105"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}