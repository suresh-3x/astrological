'use client';

import Link from 'next/link';

const ComingSoon = () => {
  return (
    <div className="relative">
      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
          Coming
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            {' '}Soon
          </span>
        </h1>
        <p className="mb-8 max-w-md text-lg text-slate-600 dark:text-gray-300">
          We&apos;re working on something magical. Stay tuned for an extraordinary journey through the cosmos.
        </p>
        <Link
          href="/"
          className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
