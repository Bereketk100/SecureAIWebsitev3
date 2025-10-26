import { useNavigate } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';

const ServiceCard = ({ title, description, icon, path }) => {
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
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="service-card bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800 flex flex-col h-full opacity-0 translate-y-6 transition-all duration-700 will-change-transform hover:shadow-blue-600/30 hover:border-blue-600/60 group"
    >
      <div>
        <div className="relative w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/40 to-purple-500/40 opacity-0 group-hover:opacity-100 transition" />
          {icon}
        </div>
        <h3 className="text-2xl font-semibold mb-3">
          <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-400 transition-colors">{title}</span>
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="mt-auto pt-6">
        <button
          onClick={() => navigate(path)}
          className="relative text-blue-400 font-medium flex items-center gap-1 hover:text-white transition-colors"
        >
          <span>Learn More</span>
          <svg className="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <style>{`
        .service-card.sr-visible { opacity:1; transform:translateY(0); }
      `}</style>
    </div>
  );
};

export default ServiceCard;
