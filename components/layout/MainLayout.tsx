'use client';

import Header from './Header';

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-200">
      <Header />
      <main className="flex-1 pt-24 sm:pt-28 ">
        {children}
      </main>

      <footer className="bg-gray-50 dark:bg-gray-800 mt-auto">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} AstroGuide. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 