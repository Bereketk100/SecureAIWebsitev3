import React, { useEffect, useRef, useState } from 'react';
import { reviews } from './reviewsData';

const Stars = () => (
  <div className="flex gap-0.5" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className="w-3 h-3 text-gold" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.379-2.454a1 1 0 00-1.175 0l-3.379 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.287-3.967z" />
      </svg>
    ))}
  </div>
);

// Compact floating testimonial that cycles through recent client reviews.
// Collapses to a small pill, and can be dismissed for the session.
const FloatingReviews = () => {
  const [index, setIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const idleRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Start collapsed on small screens, and collapse again after a quiet spell
  useEffect(() => {
    const check = () => {
      if (typeof window !== 'undefined' && window.innerWidth < 640) setCollapsed(true);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (collapsed || dismissed) return;
    clearTimeout(idleRef.current);
    idleRef.current = setTimeout(() => setCollapsed(true), 20000);
    return () => clearTimeout(idleRef.current);
  }, [collapsed, dismissed, index]);

  const active = reviews[index];

  if (dismissed) return null;

  if (collapsed) {
    return (
      <button
        onClick={() => setCollapsed(false)}
        aria-label="Show recent client reviews"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 bg-white border border-mist-300 shadow-lift px-4 py-3 hover:border-brand-200 transition-colors"
      >
        <Stars />
        <span className="font-display text-[11px] font-bold uppercase tracking-wider text-navy-800">
          5.0 Reviews
        </span>
        <span className="sr-only">{active.author}</span>
      </button>
    );
  }

  return (
    <aside
      className="fixed bottom-5 right-5 z-40 w-[20rem] max-w-[calc(100vw-2.5rem)] bg-white border border-mist-300 border-t-4 border-t-brand-600 shadow-lift"
      aria-label="Recent client review"
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Stars />
            <p className="mt-2 font-display font-bold text-sm text-navy-800">{active.author}</p>
            <p className="text-[11px] text-slateink-500">{active.date}</p>
          </div>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss reviews"
            className="text-slateink-500 hover:text-navy-800 transition-colors -mt-1 p-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="review-snippet clamped mt-4 text-xs leading-relaxed text-slateink">
          &ldquo;{active.text}&rdquo;
        </p>

        <div className="mt-4 pt-3 border-t border-mist-200 flex items-center justify-between">
          <div className="flex gap-1.5">
            {reviews.map((r, i) => (
              <button
                key={r.id}
                onClick={() => setIndex(i)}
                aria-label={`Show review ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === index ? 'bg-brand-600' : 'bg-mist-300 hover:bg-slateink-500'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCollapsed(true)}
              className="font-display text-[10px] font-bold uppercase tracking-wider text-slateink-500 hover:text-navy-800 transition-colors"
            >
              Hide
            </button>
            <a
              href="#reviews"
              className="font-display text-[10px] font-bold uppercase tracking-wider text-brand-600 hover:text-navy-800 transition-colors"
            >
              All Reviews
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FloatingReviews;
