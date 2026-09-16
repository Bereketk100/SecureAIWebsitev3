import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'industries', label: 'Industries' },
  { id: 'approach', label: 'Our Approach' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact Us' }
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently in view (home page only)
  useEffect(() => {
    if (location.pathname !== '/') {
      setActive('');
      return;
    }
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      entries => {
        entries
          .filter(e => e.isIntersecting)
          .forEach(e => setActive(e.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    NAV_ITEMS.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [location.pathname]);

  const goTo = id => {
    setIsMenuOpen(false);
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    if (location.pathname === '/') {
      scroll();
    } else {
      navigate('/');
      setTimeout(scroll, 150);
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Utility strip */}
      <div className="hidden md:block bg-navy-900 text-white/80">
        <div className="mx-auto max-w-7xl px-6 h-9 flex items-center justify-between text-[11px] tracking-wide">
          <p className="uppercase tracking-eyebrow font-display font-semibold text-white/70">
            Licensed &amp; Insured Private Security
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => goTo('reviews')}
              className="hover:text-white transition-colors"
            >
              Client Reviews
            </button>
            <button
              onClick={() => goTo('contact')}
              className="hover:text-white transition-colors"
            >
              Contact Us
            </button>
            <a
              href="https://www.google.com/search?q=secureai+private+security+services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a1 1 0 01.894.553l1.382 2.8 3.09.45a1 1 0 01.554 1.707l-2.236 2.18.528 3.08a1 1 0 01-1.45 1.054L10 12.347l-2.768 1.457a1 1 0 01-1.45-1.054l.528-3.08-2.236-2.18a1 1 0 01.554-1.707l3.09-.45L9.106 2.553A1 1 0 0110 2z" />
              </svg>
              5.0 on Google
            </a>
          </div>
        </div>
      </div>

      {/* Primary bar */}
      <div
        className={`bg-white transition-shadow duration-300 border-b border-mist-300 ${
          scrolled ? 'shadow-card' : ''
        }`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-[72px] flex items-center justify-between gap-6">
            <button
              onClick={() => goTo('home')}
              className="flex items-center gap-3 shrink-0"
              aria-label="SecureAI home"
            >
              <img src="/logo.PNG" alt="" className="h-10 w-auto" />
              <span className="leading-none text-left">
                <span className="block font-display font-extrabold text-xl tracking-tight text-navy-800">
                  SECUREAI
                </span>
                <span className="block text-[9px] font-display font-semibold uppercase tracking-eyebrow text-slateink-500 mt-1">
                  Private Security Services
                </span>
              </span>
            </button>

            <nav className="hidden lg:flex items-center gap-7">
              {NAV_ITEMS.map(item => (
                <button
                  key={item.id}
                  onClick={() => goTo(item.id)}
                  className={`relative font-display text-[13px] font-semibold uppercase tracking-wider py-2 transition-colors ${
                    active === item.id
                      ? 'text-brand-600'
                      : 'text-navy-800 hover:text-brand-600'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 right-0 -bottom-0.5 h-0.5 bg-brand-600 transition-transform origin-left ${
                      active === item.id ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => goTo('contact')}
                className="hidden sm:inline-flex items-center bg-brand-600 hover:bg-navy-800 text-white font-display font-bold text-[12px] uppercase tracking-wider px-6 py-3.5 transition-colors"
              >
                Request a Quote
              </button>
              <button
                onClick={() => setIsMenuOpen(o => !o)}
                className="lg:hidden text-navy-800 p-2"
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-mist-300 bg-white shadow-card">
            <div className="px-6 py-4 space-y-1">
              {NAV_ITEMS.map(item => (
                <button
                  key={item.id}
                  onClick={() => goTo(item.id)}
                  className="block w-full text-left font-display font-semibold text-sm uppercase tracking-wider text-navy-800 py-3 border-b border-mist-200 last:border-0"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => goTo('contact')}
                className="mt-4 w-full bg-brand-600 text-white font-display font-bold text-xs uppercase tracking-wider px-6 py-4"
              >
                Request a Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
