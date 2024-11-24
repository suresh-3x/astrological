'use client';

import { HiCalendar, HiUser } from 'react-icons/hi';

const Blog = () => {
  const posts = [
    {
      title: 'Understanding Your Birth Chart',
      excerpt: 'Learn the basics of reading and interpreting your natal chart...',
      author: 'Sarah Johnson',
      date: 'April 15, 2024',
      category: 'Education'
    },
    {
      title: 'Mercury Retrograde: Myth vs Reality',
      excerpt: 'Discover the truth about Mercury retrograde and its effects...',
      author: 'Michael Chen',
      date: 'April 12, 2024',
      category: 'Planetary Movements'
    },
    {
      title: 'Love Compatibility Between Signs',
      excerpt: 'A comprehensive guide to zodiac sign compatibility in relationships...',
      author: 'Elena Rodriguez',
      date: 'April 10, 2024',
      category: 'Relationships'
    },
    {
      title: 'Full Moon Rituals',
      excerpt: 'Harness the power of the full moon with these ancient practices...',
      author: 'David Smith',
      date: 'April 8, 2024',
      category: 'Rituals'
    }
  ];

  return (
    <div className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            Astrology
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              {' '}Blog
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-gray-300 max-w-xl mx-auto">
            Explore our collection of articles about astrology, spirituality, and cosmic wisdom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="p-6 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-all duration-200"
            >
              <div className="flex flex-col gap-4">
                <div>
                  <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                    {post.category}
                  </span>
                  <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-slate-600 dark:text-gray-300">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <HiUser className="h-4 w-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <HiCalendar className="h-4 w-4" />
                    {post.date}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog; 