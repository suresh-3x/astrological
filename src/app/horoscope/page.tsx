'use client';

import { HiStar } from 'react-icons/hi';

const Horoscope = () => {
  const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer',
    'Leo', 'Virgo', 'Libra', 'Scorpio',
    'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  return (
    <div className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            Daily
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              {' '}Horoscope
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-gray-300 max-w-xl mx-auto">
            Discover what the stars have in store for you today. Select your zodiac sign for your daily horoscope reading.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {zodiacSigns.map((sign) => (
            <button
              key={sign}
              className="p-6 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-all duration-200"
            >
              <div className="flex flex-col items-center gap-2">
                <HiStar className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                <span className="text-slate-900 dark:text-white font-medium">
                  {sign}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Horoscope; 