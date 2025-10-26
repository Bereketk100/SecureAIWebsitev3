import React, { useEffect, useState } from 'react';
import { reviews } from './reviewsData';

const Stars = ({ count = 5 }) => (
  <div className="flex" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.379-2.454a1 1 0 00-1.175 0l-3.379 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.287-3.967z" />
      </svg>
    ))}
  </div>
);

// Simplified, cleaner hero: single highlighted review with soft gradient and minimal motion.
const ReviewHero = () => {
  const [index, setIndex] = useState(0);

  // Auto rotate every 8s, but simpler fade only.
  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % reviews.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  const active = reviews[index];

  return (
    <header className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Subtle radial accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-10 max-w-5xl mx-auto text-center">
        <img src="/logo.PNG" alt="SecureAI Logo" className="w-40 md:w-56 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">SECUREAI</span>
        </h1>
        <div className="flex items-center justify-center gap-3 mb-6">
          <Stars />
          <div className="text-left">
            <p className="text-xl font-semibold leading-tight">5.0</p>
            <p className="text-xs text-gray-400">Based on 3 client reviews</p>
          </div>
        </div>

        {/* Active review */}
        <figure className="mx-auto max-w-2xl relative">
          <blockquote className="text-gray-300 text-sm md:text-base leading-relaxed transition-opacity duration-700">
            “{active.text}”
          </blockquote>
          <figcaption className="mt-4 text-sm text-gray-400">
            — <span className="text-white font-medium">{active.author}</span>
            <span className="mx-2">•</span>
            <span className="text-gray-500">{active.date}</span>
          </figcaption>
          <div className="mt-4 flex items-center justify-center gap-2">
            {reviews.map((r, i) => (
              <button
                key={r.id}
                aria-label={`Show review ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition ${i === index ? 'bg-blue-500 scale-110' : 'bg-gray-600 hover:bg-gray-500'}`}
              />
            ))}
          </div>
        </figure>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#contact" className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-full font-medium shadow-lg transition">Get Started</a>
          <a href="#reviews" className="bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-full font-medium transition">See All Reviews</a>
        </div>
      </div>
    </header>
  );
};

export default ReviewHero;
