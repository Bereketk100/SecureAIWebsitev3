import { useNavigate } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';

const ServiceCard = ({ title, description, image, imagePosition = 'object-center', path }) => {
  const navigate = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Handle non-browser/testing environments (jsdom) where IntersectionObserver isn't available
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      el.classList.add('sr-visible');
      return; // Skip observer setup in tests
    }
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sr-visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => navigate(path)}
      className="service-card photo-card group text-left bg-white border border-mist-300 flex flex-col h-full opacity-0 translate-y-5 transition-all duration-700 hover:shadow-lift hover:border-brand-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
    >
      <div className="relative overflow-hidden aspect-[16/10] bg-navy-900">
        <img
          src={image}
          alt={`SecureAI ${title.toLowerCase()} services`}
          className={`w-full h-full object-cover ${imagePosition}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/5 to-transparent" />
      </div>

      <div className="p-7 flex flex-col flex-grow">
        <h3 className="font-display font-bold text-lg text-navy-800 group-hover:text-brand-600 transition-colors">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slateink flex-grow">{description}</p>
        <span className="arrow-link mt-6 inline-flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-wider text-brand-600">
          Explore {title}
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </button>
  );
};

export default ServiceCard;
