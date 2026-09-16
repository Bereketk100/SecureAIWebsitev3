import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SERVICE_LINKS = [
  { label: 'Security Officers', path: '/services/business' },
  { label: 'Mobile Patrol', path: '/services/mobile-patrol' },
  { label: 'Firewatch', path: '/services/firewatch' },
  { label: 'Residential & HOA', path: '/services/neighborhood' },
  { label: 'Event Security', path: '/services/event' },
  { label: 'Reporting Platform', path: '/services/additional' }
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = id => {
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
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.PNG" alt="" className="h-11 w-auto" />
              <span>
                <span className="block font-display font-extrabold text-lg tracking-tight">
                  SECUREAI
                </span>
                <span className="block text-[9px] font-display font-semibold uppercase tracking-eyebrow text-brand-200 mt-1">
                  Private Security Services
                </span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Uniformed security officers, mobile patrol and event protection for
              commercial, residential and industrial properties across the West
              Coast — every shift documented and verifiable.
            </p>
          </div>

          <div>
            <h3 className="font-display text-[11px] font-bold uppercase tracking-eyebrow text-brand-200 mb-5">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              {SERVICE_LINKS.map(s => (
                <li key={s.path}>
                  <Link to={s.path} className="text-white/75 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[11px] font-bold uppercase tracking-eyebrow text-brand-200 mb-5">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { id: 'about', label: 'About Us' },
                { id: 'approach', label: 'Our Approach' },
                { id: 'industries', label: 'Industries Served' },
                { id: 'reviews', label: 'Client Reviews' },
                { id: 'mission', label: 'Our Mission' },
                { id: 'contact', label: 'Contact Us' }
              ].map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => goTo(item.id)}
                    className="text-white/75 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[11px] font-bold uppercase tracking-eyebrow text-brand-200 mb-5">
              Get In Touch
            </h3>
            <p className="text-sm text-white/75 leading-relaxed">
              3031 Tisch Way
              <br />
              San Jose, CA 95128
              <br />
              United States
            </p>
            <button
              onClick={() => goTo('contact')}
              className="mt-6 inline-flex items-center bg-brand-600 hover:bg-brand-500 text-white font-display font-bold text-[11px] uppercase tracking-wider px-6 py-3.5 transition-colors"
            >
              Request a Quote
            </button>
            <a
              href="https://www.google.com/search?q=secureai+private+security+services"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2 text-sm text-white/75 hover:text-white transition-colors"
            >
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a1 1 0 01.894.553l1.382 2.8 3.09.45a1 1 0 01.554 1.707l-2.236 2.18.528 3.08a1 1 0 01-1.45 1.054L10 12.347l-2.768 1.457a1 1 0 01-1.45-1.054l.528-3.08-2.236-2.18a1 1 0 01.554-1.707l3.09-.45L9.106 2.553A1 1 0 0110 2z" />
                  </svg>
                ))}
              </span>
              Rated 5.0 by clients
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="font-display text-xs font-semibold uppercase tracking-eyebrow text-brand-200">
            Security you can verify.
          </p>
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} SecureAI Private Security Services.
            Licensed and insured. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
