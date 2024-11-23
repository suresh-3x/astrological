'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "How accurate are the astrological predictions?",
    answer: "Our predictions are based on precise astronomical calculations and traditional astrological principles, combined with modern AI technology for enhanced accuracy."
  },
  {
    question: "What information do I need for a birth chart reading?",
    answer: "You'll need your birth date, exact time of birth, and location (city/country) for an accurate birth chart reading."
  },
  {
    question: "How often are horoscopes updated?",
    answer: "Daily horoscopes are updated every morning, while transit forecasts are updated in real-time based on current planetary positions."
  },
  {
    question: "Can I get relationship compatibility reports?",
    answer: "Yes! You can generate detailed compatibility reports by providing birth information for both individuals."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400">
            FAQ
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Frequently Asked Questions
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="py-6">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-start justify-between text-left"
                >
                  <span className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <ChevronDownIcon
                      className={`h-6 w-6 transform transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </span>
                </button>
                {openIndex === index && (
                  <div className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}