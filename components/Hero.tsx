'use client';

import { useEffect, useRef, useState } from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
    setMounted(true);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setTheme(isDark ? 'dark' : 'light');
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Add canvas resize handling
    const setCanvasSize = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    };

    // Initial size setup
    setCanvasSize();
    
    // Add resize listener
    window.addEventListener('resize', setCanvasSize);

    // Rest of the star animation code remains the same
    const STAR_COUNT = 200;
    const MIN_RADIUS = 1;
    const MAX_RADIUS = 2.5;
    const SPEED = 0.15;

    interface Star {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
    }

    const stars: Star[] = [];

    const initStars = () => {
      stars.length = 0; // Clear existing stars
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: MIN_RADIUS + Math.random() * (MAX_RADIUS - MIN_RADIUS),
          vx: (Math.random() - 0.5) * SPEED,
          vy: (Math.random() - 0.5) * SPEED,
          alpha: 0.5 + Math.random() * 0.5,
        });
      }
    };

    initStars();

    // Improved animation with better visibility
    const animate = () => {
      // Use solid background colors matching the theme
      ctx.fillStyle = theme === 'dark' 
        ? 'rgb(15, 23, 42)' // Solid slate-900 for dark mode
        : 'rgb(239, 237, 216)'; // Solid slate-50 for light mode
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Update position with improved movement
        star.x += star.vx;
        star.y += star.vy;
        star.alpha = 0.5 + Math.sin(Date.now() * 0.001 + star.x) * 0.5; // Smoother alpha transition

        // Wrap around screen
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Draw star with increased visibility
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = theme === 'dark'
          ? `rgba(167, 139, 250, ${star.alpha * 0.8})` // Brighter purple in dark mode
          : `rgba(67, 56, 202, ${star.alpha * 0.6})`; // Slightly dimmer blue in light mode
        ctx.fill();

        // Add glow effect  
        ctx.shadowBlur = 20;
        ctx.shadowColor = theme === 'dark' 
          ? 'rgba(167, 139, 250, 0.8)' 
          : 'rgba(67, 56, 202, 0.6)';
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [theme]);

  return (
    <div className="relative min-h-[80vh] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10">
        <div className="absolute inset-0"></div>


        {/* Main content */}
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-8 py-16 sm:py-20">
            {/* Left content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <Link href="/horoscope" className="group">
                  <span className="inline-flex items-center gap-x-2 rounded-full bg-indigo-400/10 dark:bg-indigo-400/10 px-3 py-1 text-xs font-semibold leading-5 text-indigo-700 dark:text-indigo-300 ring-1 ring-inset ring-indigo-400/20">
                    <SparklesIcon className="h-4 w-4" />
                    Get Your Daily Horoscope
                    <span aria-hidden="true" className="text-indigo-700/70 dark:text-indigo-300/70 group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </span>
                </Link>
              </div>
              
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-5xl lg:text-5xl">
                Unlock the Secrets <br />
                <span className="text-indigo-700 dark:text-indigo-400">Written in the Stars</span>
              </h1>
              
              <p className="mt-6 text-lg sm:text-xl leading-8 text-slate-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
                Journey through the cosmos with personalized astrological guidance. 
                Discover love compatibility, career insights, and daily wisdom aligned 
                with your celestial path.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/signup"
                  className="rounded-md bg-indigo-600 dark:bg-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 dark:hover:bg-indigo-400 transition-all duration-200 hover:scale-105"
                >
                  Begin Your Journey
                </Link>
                <Link
                  href="/services"
                  className="rounded-md bg-white/50 dark:bg-white/10 backdrop-blur-sm px-6 py-3 text-base font-semibold text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-200 dark:ring-white/20 hover:bg-white/80 dark:hover:bg-white/20 transition-all duration-200"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right content */}
            <div className="flex-1 mt-12 lg:mt-0 flex justify-center items-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 blur-3xl"></div>
                {mounted && (
                  <div className="celestial-scene relative w-full h-full">
                    {theme === 'dark' ? (
                      // Moon for dark mode
                      <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 shadow-xl animate-float">
                        <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-gray-300/40"></div>
                        <div className="absolute top-12 left-8 w-4 h-4 rounded-full bg-gray-300/40"></div>
                        <div className="absolute top-8 left-12 w-2 h-2 rounded-full bg-gray-300/40"></div>
                      </div>
                    ) : (
                      // Sun and planets for light mode
                      <>
                        <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 shadow-xl animate-float">
                          {/* Sun rays */}
                          <div className="absolute inset-0 animate-pulse">
                            {[...Array(8)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-full h-1 bg-yellow-300/50"
                                style={{
                                  transform: `rotate(${i * 45}deg)`,
                                  transformOrigin: 'center',
                                }}
                              />
                            ))}
                          </div>
                        </div>
                        {/* Orbiting planets */}
                        <div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2">
                          <div className="absolute w-4 h-4 rounded-full bg-blue-400 animate-orbit-1" />
                          <div className="absolute w-6 h-6 rounded-full bg-red-400 animate-orbit-2" />
                          <div className="absolute w-3 h-3 rounded-full bg-green-400 animate-orbit-3" />
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}