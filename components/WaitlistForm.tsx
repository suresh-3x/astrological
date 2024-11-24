'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface WaitlistFormData {
  email: string;
  name: string;
  phone: string;
  message?: string;
  interestedFeatures: string[];
  customFeatures?: string[];
}

const featureOptions = [
  'Daily Horoscopes',
  'Birth Chart Analysis',
  'Compatibility Reports',
  'Transit Forecasts',
  'AI Predictions',
  'Mobile App',
];

export default function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [customFeatures, setCustomFeatures] = useState<string[]>([]);
  const [newFeature, setNewFeature] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WaitlistFormData>();

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const submissionData = {
      ...data,
      customFeatures: customFeatures
    };

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit');
      }

      setSubmitStatus('success');
      reset(); // Clear form on success
      setCustomFeatures([]); // Clear custom features
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddCustomFeature = (e: React.FormEvent) => {
    e.preventDefault();
    if (newFeature.trim() && !customFeatures.includes(newFeature.trim())) {
      setCustomFeatures([...customFeatures, newFeature.trim()]);
      setNewFeature('');
    }
  };

  const handleRemoveCustomFeature = (feature: string) => {
    setCustomFeatures(customFeatures.filter(f => f !== feature));
  };

  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {submitStatus === 'success' ? (
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Thank You for Joining!
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              We&apos;ll keep you updated on our progress and let you know when we launch.
            </p>
          </div>
        ) : (
          <>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Join the Waitlist
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Be among the first to experience our astrological platform
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-12 max-w-xl">
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                {/* Name Field */}
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-600 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 dark:bg-slate-800"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-600 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 dark:bg-slate-800"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-600 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 dark:bg-slate-800"
                  />
                </div>

                {/* Interested Features */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Interested Features
                  </label>
                  <div className="mt-2 space-y-2">
                    {featureOptions.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <input
                          type="checkbox"
                          {...register('interestedFeatures')}
                          value={feature}
                          className="h-4 w-4 text-indigo-600 dark:text-indigo-400 border-slate-300 dark:border-slate-600"
                        />
                        <label className="ml-2 text-sm text-slate-600 dark:text-slate-400">{feature}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Custom Features */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Custom Features
                  </label>
                  
                  {/* Add new feature form */}
                  <div className="flex gap-2 mt-1">
                    <input
                      type="text"
                      value={newFeature}
                      onChange={(e) => setNewFeature(e.target.value)}
                      className="block flex-1 rounded-md border border-slate-300 dark:border-slate-600 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 dark:bg-slate-800"
                      placeholder="Suggest a feature"
                    />
                    <button
                      onClick={handleAddCustomFeature}
                      type="button"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
                    >
                      Add
                    </button>
                  </div>

                  {/* Custom features list */}
                  <div className="mt-2 space-y-2">
                    {customFeatures.map((feature) => (
                      <div key={feature} className="flex items-center justify-between p-2 rounded-md bg-slate-50 dark:bg-slate-800/50">
                        <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveCustomFeature(feature)}
                          className="text-red-600 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Additional Comments
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-600 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 dark:bg-slate-800"
                  />
                </div>
              </div>

              {/* Update the error message display */}
              {submitStatus === 'error' && (
                <div className="mt-6 p-4 rounded-md bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <div className="mt-6 sm:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}