'use client';

import { StarIcon, SparklesIcon, HeartIcon } from '@heroicons/react/24/solid';

const features = [
  {
    name: 'Daily Horoscopes',
    description: 'Get personalized daily insights based on your birth chart.',
    icon: StarIcon,
  },
  {
    name: 'AI-Powered Insights',
    description: 'Advanced astrological predictions using artificial intelligence.',
    icon: SparklesIcon,
  },
  {
    name: 'Compatibility Analysis',
    description: 'Discover how your stars align with others.',
    icon: HeartIcon,
  },
  {
    name: 'Birth Chart Analysis',
    description: 'Detailed exploration of your natal chart with planetary positions and aspects.',
    icon: StarIcon,
  },
  {
    name: 'Transit Forecasts',
    description: 'Track how current planetary movements affect your personal astrology.',
    icon: SparklesIcon,
  },
  {
    name: 'Personalized Reports',
    description: 'In-depth PDF reports covering career, love, and personal growth.',
    icon: HeartIcon,
  },
  {
    name: 'Moon Phase Tracker',
    description: 'Follow lunar cycles and plan activities according to moon phases.',
    icon: StarIcon,
  },
  {
    name: 'Meditation Timer',
    description: 'Guided meditation sessions aligned with astrological energies.',
    icon: SparklesIcon,
  },
  {
    name: 'Community Forums',
    description: 'Connect with fellow astrology enthusiasts and share experiences.',
    icon: HeartIcon,
  },
];

export default function Features() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400">
            Features
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Everything you need in your cosmic journey
          </p>
        </div>
        <div className="mx-auto mt-12 sm:mt-16 max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-sm font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" />
                  {feature.name}
                </dt>
                <dd className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  <p>{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}