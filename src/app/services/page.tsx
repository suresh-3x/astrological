'use client';

import { HiSparkles, HiStar, HiChartBar, HiHeart } from 'react-icons/hi';

const Services = () => {
  const services = [
    {
      title: 'Birth Chart Analysis',
      description: 'Get a detailed analysis of your natal chart and life path.',
      icon: HiStar,
      price: '$49.99'
    },
    {
      title: 'Relationship Compatibility',
      description: 'Discover your romantic and friendship compatibility.',
      icon: HiHeart,
      price: '$39.99'
    },
    {
      title: 'Career Guidance',
      description: 'Astrological insights for your professional journey.',
      icon: HiChartBar,
      price: '$44.99'
    },
    {
      title: 'Personal Consultation',
      description: 'One-on-one session with experienced astrologers.',
      icon: HiSparkles,
      price: '$99.99'
    }
  ];

  return (
    <div className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            Our
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              {' '}Services
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-gray-300 max-w-xl mx-auto">
            Explore our range of astrological services designed to guide you on your spiritual journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <service.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-slate-600 dark:text-gray-300">
                    {service.description}
                  </p>
                  <p className="mt-2 text-lg font-bold text-indigo-600 dark:text-indigo-400">
                    {service.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 