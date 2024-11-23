'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const ComingSoon = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Star properties
    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
    }> = [];

    // Initialize stars
    const initStars = () => {
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          alpha: Math.random(),
        });
      }
    };

    initStars();

    // Animation
    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'; // Dark blue background with trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Update position
        star.x += star.vx;
        star.y += star.vy;
        star.alpha += (Math.random() - 0.5) * 0.05;

        // Keep alpha in bounds
        if (star.alpha <= 0) star.alpha = 0;
        if (star.alpha >= 1) star.alpha = 1;

        // Wrap around screen
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${star.alpha})`; // Indigo color
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10"
      />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
          Coming
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            {' '}Soon
          </span>
        </h1>
        <p className="max-w-md text-lg text-gray-300 mb-8">
          We&apos;re working on something magical. Stay tuned for an extraordinary journey through the cosmos.
        </p>
        <Link
          href="/"
          className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
