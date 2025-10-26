import React from 'react';
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

const GoogleReviews = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black" id="reviews" aria-labelledby="reviews-heading">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12 flex flex-col items-center text-center gap-5">
          <h2 id="reviews-heading" className="text-3xl font-semibold flex items-center gap-3 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-transparent bg-clip-text drop-shadow-[0_0_6px_rgba(234,179,8,0.35)]">
            <span>What Clients Say</span>
          </h2>
          <div className="flex items-center gap-4 bg-gray-800/60 backdrop-blur px-6 py-4 rounded-2xl border border-gray-700/60 shadow-lg">
            <Stars />
            <div>
              <p className="text-3xl font-bold leading-tight bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text">5.0</p>
              <p className="text-xs text-gray-400 tracking-wide">Rating</p>
            </div>
          </div>
          <p className="text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed">Trusted across West Coast properties, events, and residential communities. Below are a few highlighted testimonials. For the continuously updated list you can visit Google.</p>
          <a
            href="https://www.google.com/search?q=secureai+services#lrd=0x808fcb7126c045b5:0x9ae8c6309121f8d8,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm font-medium underline decoration-yellow-500/40 hover:decoration-yellow-300 transition"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 01.894.553l1.382 2.8 3.09.45a1 1 0 01.554 1.707l-2.236 2.18.528 3.08a1 1 0 01-1.45 1.054L10 12.347l-2.768 1.457a1 1 0 01-1.45-1.054l.528-3.08-2.236-2.18a1 1 0 01.554-1.707l3.09-.45L9.106 2.553A1 1 0 0110 2z"/></svg>
            See reviews on Google →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map(r => (
            <article key={r.id} className="bg-gray-800/70 backdrop-blur p-7 rounded-2xl flex flex-col shadow-lg border border-gray-700/50 hover:border-blue-600/50 transition" aria-label={`Review by ${r.author}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-white text-base">{r.author}</h3>
                  <p className="text-[11px] text-gray-400">{r.meta}</p>
                </div>
                <Stars count={5} />
              </div>
              <p className="text-[11px] text-gray-500 mb-3">{r.date}</p>
              <p className="text-gray-200 text-sm leading-relaxed flex-grow">{r.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-blue-900/40 border border-blue-800 rounded-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl font-semibold mb-2">Ready to experience this level of reliability?</h3>
            <p className="text-gray-300 text-sm">Reach out now for a custom security assessment. We'll respond promptly.</p>
          </div>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-lg font-medium text-white text-center shadow-lg transition">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
