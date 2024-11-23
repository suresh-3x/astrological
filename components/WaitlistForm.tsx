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
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl lg:text-center">
          <h2 className="text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400">
            Join Waitlist
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Be the first to know when we launch
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          {isSubmitted ? (
            <div className="rounded-md bg-green-50 p-4 text-center">
              <p className="text-sm font-medium text-green-800">
                Thanks for joining! We&apos;ll notify you when we launch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <InputField label="Name" error={errors.name?.message}>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-100 dark:bg-gray-800 shadow-sm ring-1 ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                />
              </InputField>

              <InputField label="Phone Number" error={errors.phone?.message}>
                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={getValues('phone')}
                  onChange={(value) => setValue('phone', value || '')}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-100 dark:bg-gray-800 shadow-sm ring-1 ring-gray-300 dark:ring-gray-700"
                />
              </InputField>

              <InputField label="Interested Features">
                <div className="mt-2 space-y-2">
                  {FEATURE_OPTIONS.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <input
                        type="checkbox"
                        {...register('interestedFeatures')}
                        value={feature}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label className="ml-2 text-sm text-gray-900 dark:text-gray-100">
                        {feature}
                      </label>
                    </div>
                  ))}
                  {customFeatures.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={true}
                        disabled
                        className="h-4 w-4 rounded border-gray-300 text-gray-400 bg-gray-200"
                      />
                      <label className="ml-2 text-sm text-gray-500">
                        {feature}
                        <button
                          type="button"
                          onClick={() => handleCustomFeatureDelete(feature)}
                          className="ml-2 text-red-600 hover:text-red-800"
                        >
                          ×
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
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-100 dark:bg-gray-800 shadow-sm ring-1"
                  />
                  <button
                    type="button"
                    onClick={handleCustomFeatureAdd}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
                  >
                    Add
                  </button>
                </div>
              </InputField>

              <InputField label="Message (Optional)">
                <textarea
                  {...register('message')}
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-100 dark:bg-gray-800 shadow-sm ring-1"
                />
              </InputField>

              <button
                type="submit"
                disabled={isLoading}
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-500"
              >
                {isLoading ? 'Submitting...' : 'Join Waitlist'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}