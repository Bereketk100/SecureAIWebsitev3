import React from 'react';
import { reviews } from './reviewsData';

const Stars = ({ count = 5, className = 'w-4 h-4' }) => (
  <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className={`${className} text-gold`} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.379-2.454a1 1 0 00-1.175 0l-3.379 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.287-3.967z" />
      </svg>
    ))}
  </div>
);

const GoogleReviews = () => {
  return (
    <section
      className="py-24 bg-mist border-y border-mist-300"
      id="reviews"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-600">Client Feedback</p>
            <h2
              id="reviews-heading"
              className="mt-5 font-display font-extrabold text-3xl md:text-[2.5rem] leading-tight tracking-tight rule-accent"
            >
              What Clients Say
            </h2>
            <p className="mt-7 text-base leading-relaxed text-slateink">
              Property managers, event organizers and residential communities
              across the West Coast. A few highlights are below — the full and
              continuously updated list lives on Google.
            </p>
          </div>

          <div className="bg-white border border-mist-300 px-8 py-7 shadow-card shrink-0">
            <div className="flex items-center gap-5">
              <p className="font-display font-extrabold text-5xl leading-none text-navy-800">
                5.0
              </p>
              <div>
                <Stars className="w-5 h-5" />
                <p className="mt-2 font-display text-[10px] font-bold uppercase tracking-eyebrow text-slateink-500">
                  Average Client Rating
                </p>
              </div>
            </div>
            <a
              href="https://www.google.com/search?q=secureai+services#lrd=0x808fcb7126c045b5:0x9ae8c6309121f8d8,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-link mt-5 inline-flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-wider text-brand-600 hover:text-navy-800 transition-colors"
            >
              Read reviews on Google
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {reviews.map(r => (
            <article
              key={r.id}
              className="bg-white border border-mist-300 border-t-4 border-t-brand-600 p-8 flex flex-col lift hover:shadow-card"
              aria-label={`Review by ${r.author}`}
            >
              <Stars />
              <p className="mt-5 text-sm leading-relaxed text-slateink flex-grow">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-7 pt-5 border-t border-mist-300">
                <h3 className="font-display font-bold text-sm text-navy-800">{r.author}</h3>
                <p className="mt-1 text-xs text-slateink-500">
                  {r.meta} &middot; {r.date}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-navy-900 text-white p-9 lg:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-7">
          <div className="max-w-xl">
            <h3 className="font-display font-bold text-xl lg:text-2xl">
              Ready for security you can actually verify?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              Request a walkthrough of your property and a written coverage
              proposal. No obligation, no pressure.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center justify-center bg-brand-600 hover:bg-brand-500 text-white font-display font-bold text-xs uppercase tracking-wider px-9 py-4 transition-colors"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
