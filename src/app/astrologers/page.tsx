'use client';

import { HiStar } from 'react-icons/hi';

const Astrologers = () => {
  const astrologers = [
    {
      name: 'Sarah Johnson',
      specialty: 'Vedic Astrology',
      experience: '15 years',
      rating: 4.9,
      availability: 'Available',
    },
    {
      name: 'Michael Chen',
      specialty: 'Western Astrology',
      experience: '12 years',
      rating: 4.8,
      availability: 'Available',
    },
    {
      name: 'Elena Rodriguez',
      specialty: 'Chinese Astrology',
      experience: '20 years',
      rating: 5.0,
      availability: 'Busy',
    },
    {
      name: 'David Smith',
      specialty: 'Natal Charts',
      experience: '8 years',
      rating: 4.7,
      availability: 'Available',
    }
  ];

  return (
    <div className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            Our
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              {' '}Astrologers
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-gray-300 max-w-xl mx-auto">
            Connect with our experienced astrologers for personalized guidance and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {astrologers.map((astrologer) => (
            <div
              key={astrologer.name}
              className="p-6 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-all duration-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-indigo-100 dark:bg-indigo-900/20 mb-4 flex items-center justify-center">
                  <HiStar className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {astrologer.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-gray-300 mt-1">
                  {astrologer.specialty}
                </p>
                <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">
                  {astrologer.experience} experience
                </p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-sm text-slate-600 dark:text-gray-300">
                    {astrologer.rating}
                  </span>
                </div>
                <span className={`mt-2 px-2 py-1 text-xs rounded-full ${
                  astrologer.availability === 'Available' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                }`}>
                  {astrologer.availability}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Astrologers; 