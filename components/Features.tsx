'use client';

import { StarIcon, SparklesIcon, HeartIcon } from '@heroicons/react/24/solid';

const features = [
  {
    name: 'Daily Horoscopes',
    description: 'Get personalized daily insights based on your birth chart.',
    icon: StarIcon,
  },
  {
    name: 'Compatibility Analysis',
    description: 'Discover how your stars align with others.',
    icon: HeartIcon,
  },
  {
    name: 'AI-Powered Insights',
    description: 'Advanced astrological predictions using artificial intelligence.',
    icon: SparklesIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need in your cosmic journey
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}