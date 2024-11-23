'use client';

import { useState, useEffect } from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Hero() {
  const [stars, setStars] = useState<Array<{
    top: string;
    left: string;
    delay: string;
  }>>([]);

  useEffect(() => {
    const newStars = Array(20).fill(null).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="relative min-h-[80vh] overflow-hidden bg-slate-900">
      {/* Animated stars background */}
      <div className="absolute inset-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/50 to-slate-900/90"></div>

      {/* Main content */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-8 py-16 sm:py-20">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <Link href="/horoscope" className="group">
                <span className="inline-flex items-center gap-x-2 rounded-full bg-indigo-400/10 px-3 py-1 text-xs font-semibold leading-5 text-indigo-300 ring-1 ring-inset ring-indigo-400/20">
                  <SparklesIcon className="h-4 w-4" />
                  Get Your Daily Horoscope
                  <span aria-hidden="true" className="text-indigo-300/70 group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </span>
              </Link>
            </div>
            
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Unlock the Secrets <br />
              <span className="text-indigo-400">Written in the Stars</span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-300 max-w-xl mx-auto lg:mx-0">
              Journey through the cosmos with personalized astrological guidance. 
              Discover love compatibility, career insights, and daily wisdom aligned 
              with your celestial path.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/signup"
                className="rounded-md bg-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-400 transition-all duration-200 hover:scale-105"
              >
                Begin Your Journey
              </Link>
              <Link
                href="/services"
                className="rounded-md bg-white/10 backdrop-blur-sm px-6 py-3 text-base font-semibold text-white shadow-sm ring-1 ring-inset ring-white/20 hover:bg-white/20 transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1 mt-12 lg:mt-0 flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-3xl"></div>
              <div className="celestial-scene relative w-full h-full">
                {/* Moon */}
                <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 shadow-lg animate-float">
                  {/* Moon craters */}
                  <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-gray-400/30"></div>
                  <div className="absolute top-12 left-8 w-4 h-4 rounded-full bg-gray-400/30"></div>
                  <div className="absolute top-8 left-12 w-2 h-2 rounded-full bg-gray-400/30"></div>
                </div>
                
                {/* Planets */}
                <div className="planet planet-1 absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-red-400 animate-orbit-1"></div>
                <div className="planet planet-2 absolute bottom-1/4 right-1/3 w-12 h-12 rounded-full bg-orange-300 animate-orbit-2"></div>
                <div className="planet planet-3 absolute top-1/2 left-1/3 w-6 h-6 rounded-full bg-purple-400 animate-orbit-3"></div>
                
                {/* Modified stars section */}
                <div className="absolute inset-0">
                  {stars.map((star, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                      style={{
                        top: star.top,
                        left: star.left,
                        animationDelay: star.delay
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 