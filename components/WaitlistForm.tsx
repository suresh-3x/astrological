'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

type FormData = {
  email: string;
  name: string;
  phone: string;
  message: string;
  interestedFeatures: string[];
  customFeature: string;
};

const FEATURE_OPTIONS = [
  "Horoscope Reading",
  "Compatibility Analysis",
  "Birth Chart",
  "Daily Predictions",
  "Personalized Reports",
];

const InputField = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <div>
    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
      {label}
    </label>
    {children}
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

export default function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [customFeatures, setCustomFeatures] = useState<string[]>([]);
  const [customFeature, setCustomFeature] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(new Set());
  const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      console.log(data); // Replace with API call
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCustomFeatureAdd = () => {
    const trimmedFeature = customFeature.trim();
    if (trimmedFeature && !customFeatures.includes(trimmedFeature)) {
      setCustomFeatures([...customFeatures, trimmedFeature]);
      setCustomFeature('');
      // Add to both selected features and form values
      setSelectedFeatures(new Set([...selectedFeatures, trimmedFeature]));
      const currentFeatures = getValues('interestedFeatures') || [];
      setValue('interestedFeatures', [...currentFeatures, trimmedFeature]);
    }
  };

  const handleCustomFeatureDelete = (feature: string) => {
    setCustomFeatures(customFeatures.filter((f) => f !== feature));
    // Remove from both selected features and form values
    const newSelected = new Set(selectedFeatures);
    newSelected.delete(feature);
    setSelectedFeatures(newSelected);
    setValue('interestedFeatures', getValues('interestedFeatures').filter((f) => f !== feature));
  };

  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            Early Access
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Join Our Waitlist
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Be among the first to experience our astrological insights platform
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          {isSubmitted ? (
            <div className="rounded-xl p-8 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-800">
                <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className="mt-4 text-lg font-medium text-green-800 dark:text-green-200">
                Thanks for joining our waitlist!
              </p>
              <p className="mt-2 text-sm text-green-700 dark:text-green-300">
                We&apos;ll notify you when we launch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-6 rounded-2xl">
                <InputField label="Name" error={errors.name?.message}>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm"
                  />
                </InputField>

                <InputField label="Phone Number" error={errors.phone?.message}>
                  <PhoneInput
                    international
                    defaultCountry="IN"
                    value={getValues('phone')}
                    onChange={(value) => setValue('phone', value || '')}
                    className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500"
                  />
                </InputField>

                <InputField label="Interested Features">
                  <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {FEATURE_OPTIONS.map((feature) => (
                      <div key={feature} className="relative flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            type="checkbox"
                            {...register('interestedFeatures')}
                            value={feature}
                            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label className="font-medium text-gray-900 dark:text-gray-200">{feature}</label>
                        </div>
                      </div>
                    ))}
                    {customFeatures.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={true}
                        disabled
                        className="h-4 w-4 rounded border-gray-300 text-gray-400 bg-gray-200 dark:bg-gray-700"
                      />
                      <label className="ml-3 text-sm text-gray-900 dark:text-gray-100 select-none flex items-center">
                        {feature}
                        <button
                          type="button"
                          onClick={() => handleCustomFeatureDelete(feature)}
                          className="ml-2 p-1 text-gray-400 hover:text-red-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                          aria-label="Remove feature"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </label>
                    </div>
                  ))}
                  </div>
                </InputField>

                <InputField label="Suggest New Features">
                  <div className="flex space-x-2">
                    <input
                      value={customFeature}
                      onChange={(e) => setCustomFeature(e.target.value)}
                      className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500"
                    />
                    <button
                      type="button"
                      onClick={handleCustomFeatureAdd}
                      className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Add
                    </button>
                  </div>
                </InputField>

                <InputField label="Message (Optional)">
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500"
                  />
                </InputField>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-lg bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Join Waitlist'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}