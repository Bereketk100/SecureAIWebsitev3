import React, { useEffect, useState } from 'react';
import { reviews } from './reviewsData';

const Stars = ({ count = 5 }) => (
  <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-5 h-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.379-2.454a1 1 0 00-1.175 0l-3.379 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.287-3.967z" />
      </svg>
    ))}
  </div>
);

// Testimonial-led hero: one highlighted client review over a navy field.
const ReviewHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % reviews.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  const active = reviews[index];

  return (
    <header className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0">
        <img
          src="/secure2.jpeg"
          alt=""
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/60" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="flex items-center gap-3">
          <img src="/logo.PNG" alt="" className="h-11 w-auto" />
          <span>
            <span className="block font-display font-extrabold text-xl tracking-tight">
              SECUREAI
            </span>
            <span className="block text-[9px] font-display font-semibold uppercase tracking-eyebrow text-brand-200 mt-1">
              Private Security Services
            </span>
          </span>
        </div>

        <div className="mt-10 flex items-center gap-5">
          <Stars />
          <p className="font-display font-extrabold text-3xl leading-none">5.0</p>
          <p className="text-xs uppercase tracking-eyebrow font-display font-semibold text-brand-200">
            Based on {reviews.length} client reviews
          </p>
        </div>

        <figure className="mt-10 max-w-3xl">
          <blockquote className="font-display font-bold text-xl md:text-3xl leading-snug tracking-tight">
            &ldquo;{active.text}&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-sm text-white/75">
            <span className="font-semibold text-white">{active.author}</span>
            <span className="mx-2 text-white/40">|</span>
            <span>{active.date}</span>
          </figcaption>
        </figure>

        <div className="mt-8 flex items-center gap-2">
          {reviews.map((r, i) => (
            <button
              key={r.id}
              aria-label={`Show review ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1 transition-all ${
                i === index ? 'w-10 bg-brand-400' : 'w-5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-brand-600 hover:bg-brand-500 font-display font-bold text-xs uppercase tracking-wider px-9 py-4 transition-colors"
          >
            Request a Quote
          </a>
          <a
            href="#reviews"
            className="border-2 border-white/70 hover:bg-white hover:text-navy-900 font-display font-bold text-xs uppercase tracking-wider px-9 py-4 transition-colors"
          >
            See All Reviews
          </a>
        </div>
      </div>
    </header>
  );
};

export default ReviewHero;
