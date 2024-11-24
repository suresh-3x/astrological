'use client';
import React from 'react';
import Header from './Header';

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 sm:pt-28">
        {children}
      </main>

      <footer className="dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Astrological. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 