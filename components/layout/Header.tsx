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
    <header className="fixed w-full z-50 top-4 left-0 px-4">
      <div className="backdrop-blur-lg dark:bg-slate-900/50 rounded-2xl max-w-5xl mx-auto shadow-lg relative z-50">
        <div className="px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
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
              <ThemeSwitcher />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
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
        className={`lg:hidden fixed inset-0 top-20 backdrop-blur-lg bg-slate-100/30 dark:bg-slate-900/30 transform transition-all duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col justify-between p-4 h-[calc(100vh-5rem)] max-w-5xl mx-auto bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-md rounded-2xl shadow-lg">
          <div className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  pathname === item.href
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-indigo-50/50 dark:hover:bg-gray-800/50'
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}