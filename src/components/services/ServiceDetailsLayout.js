import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { SERVICES } from '../servicesData';

// Line icons used by the "Our Approach" cards on every service page.
export const ICONS = {
  shield: 'M12 3l7.5 3v5.25c0 4.5-3.15 8.4-7.5 9.75-4.35-1.35-7.5-5.25-7.5-9.75V6L12 3z',
  clock: 'M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z',
  eye: 'M2.25 12S5.25 5.25 12 5.25 21.75 12 21.75 12 18.75 18.75 12 18.75 2.25 12 2.25 12zm9.75 2.625a2.625 2.625 0 100-5.25 2.625 2.625 0 000 5.25z',
  lock: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v4',
  clipboard:
    'M9 4.5h6M9 4.5a1.5 1.5 0 00-1.5 1.5H6A1.5 1.5 0 004.5 7.5v12A1.5 1.5 0 006 21h12a1.5 1.5 0 001.5-1.5v-12A1.5 1.5 0 0018 6h-1.5A1.5 1.5 0 0015 4.5M9 12h6m-6 4h6',
  pin: 'M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11zm0-8.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
  users:
    'M15 19.5v-1.5a3 3 0 00-3-3H6a3 3 0 00-3 3v1.5M9 11.25a3 3 0 100-6 3 3 0 000 6zm12 8.25v-1.5a3 3 0 00-2.25-2.9M16.5 5.55a3 3 0 010 5.4',
  flame:
    'M12 3s4.5 3.75 4.5 8.25a4.5 4.5 0 01-9 0C7.5 9 9 7.5 9 7.5s.75 1.5 1.5 1.5S12 6 12 3zM7.5 15a4.5 4.5 0 009 0',
  siren: 'M12 9v3m0 3h.01M5.07 19h13.86a2 2 0 001.73-3L13.73 4a2 2 0 00-3.46 0L3.34 16a2 2 0 001.73 3z',
  chart: 'M4.5 19.5h15M7.5 16.5v-6m4.5 6v-10.5m4.5 10.5v-4.5',
  badge:
    'M9 12.75l2.25 2.25L15.75 9M7.5 4.5h9a2.25 2.25 0 012.25 2.25v12.75l-3-2.25-3 2.25-3-2.25-3 2.25V6.75A2.25 2.25 0 017.5 4.5z',
  ticket:
    'M4.5 7.5h15v2.25a2.25 2.25 0 000 4.5V16.5h-15v-2.25a2.25 2.25 0 000-4.5V7.5zm6 0v9',
  phone:
    'M2.25 6.75A2.25 2.25 0 014.5 4.5h1.6c.9 0 1.68.6 1.92 1.47l.63 2.3a2 2 0 01-.55 1.96l-.96.96a12 12 0 005.7 5.7l.96-.96a2 2 0 011.96-.55l2.3.63A2 2 0 0121 17.9v1.6a2.25 2.25 0 01-2.25 2.25h-.4A16.2 16.2 0 012.25 7.15v-.4z',
  building:
    'M4.5 21V5.25A1.5 1.5 0 016 3.75h7.5a1.5 1.5 0 011.5 1.5V21m0-10.5h3a1.5 1.5 0 011.5 1.5V21M3 21h18M8.25 7.5h3m-3 3.75h3m-3 3.75h3'
};

const ArrowIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

/**
 * Shared layout for every service detail page.
 *
 * Props:
 *  - title, lede, heroImage, heroAlt
 *  - intro: { heading, body: string[] , image, imageAlt }
 *  - includes: { heading, items: string[] }
 *  - approach: { heading, items: [{ title, description, icon }] }
 *  - cta: { heading, body }
 *  - path: current route, used to exclude this service from "related"
 */
const ServiceDetailsLayout = ({
  title,
  lede,
  heroImage,
  heroAlt,
  intro,
  includes,
  approach,
  cta,
  path
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goToContact = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  };

  const related = SERVICES.filter(s => s.path !== path).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-navy-900">
      <Header />

      <main className="pt-[72px] md:pt-[108px]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy-900">
          <div className="absolute inset-0">
            <img src={heroImage} alt={heroAlt} className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-navy-900/40" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 text-white">
            <nav aria-label="Breadcrumb" className="text-[11px] font-display font-semibold uppercase tracking-eyebrow text-brand-200">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-3 text-white/40">/</span>
              <span className="text-white/70">Services</span>
              <span className="mx-3 text-white/40">/</span>
              <span className="text-white">{title}</span>
            </nav>
            <h1 className="mt-7 font-display font-extrabold text-4xl md:text-[3.25rem] leading-[1.05] tracking-tight max-w-3xl">
              {title}
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/85 max-w-2xl">{lede}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={goToContact}
                className="bg-brand-600 hover:bg-brand-500 font-display font-bold text-xs uppercase tracking-wider px-9 py-4 transition-colors"
              >
                Request a Quote
              </button>
              <Link
                to="/"
                className="border-2 border-white/70 hover:bg-white hover:text-navy-900 font-display font-bold text-xs uppercase tracking-wider px-9 py-4 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>

        {/* Overview + what's included */}
        <section className="py-20 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="eyebrow text-brand-600">Overview</p>
              <h2 className="mt-5 font-display font-extrabold text-3xl md:text-[2.25rem] leading-tight tracking-tight rule-accent">
                {intro.heading}
              </h2>
              {intro.body.map(para => (
                <p key={para.slice(0, 32)} className="mt-6 text-base leading-relaxed text-slateink">
                  {para}
                </p>
              ))}
              <img
                src={intro.image}
                alt={intro.imageAlt}
                className={
                  intro.imageContain
                    ? 'mt-10 w-full h-[380px] md:h-[460px] object-contain bg-mist-200 border border-mist-300 p-6'
                    : 'mt-10 w-full h-[300px] md:h-[380px] object-cover object-center shadow-card'
                }
              />
            </div>

            <div className="lg:sticky lg:top-32 bg-mist-100 border border-mist-300 p-8 md:p-10">
              <h3 className="font-display font-extrabold text-xl text-navy-800">{includes.heading}</h3>
              <ul className="mt-7 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {includes.items.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 text-brand-600 mt-1 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm leading-relaxed text-slateink">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={goToContact}
                className="mt-9 w-full bg-navy-800 hover:bg-brand-600 text-white font-display font-bold text-xs uppercase tracking-wider py-4 transition-colors"
              >
                Talk To Our Team
              </button>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-20 md:py-24 bg-mist border-y border-mist-300">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="eyebrow text-brand-600">How We Deliver</p>
              <h2 className="mt-5 font-display font-extrabold text-3xl md:text-[2.25rem] leading-tight tracking-tight rule-accent">
                {approach.heading}
              </h2>
            </div>
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-mist-300 border border-mist-300">
              {approach.items.map(item => (
                <div key={item.title} className="bg-white p-8">
                  <svg
                    className="w-9 h-9 text-brand-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.6}
                      d={ICONS[item.icon] || ICONS.shield}
                    />
                  </svg>
                  <h3 className="mt-5 font-display font-bold text-base text-navy-800">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slateink">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy-900 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display font-extrabold text-2xl md:text-[2rem] leading-tight tracking-tight">
                {cta.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/80">{cta.body}</p>
            </div>
            <button
              onClick={goToContact}
              className="shrink-0 bg-brand-600 hover:bg-brand-500 font-display font-bold text-xs uppercase tracking-wider px-10 py-5 transition-colors"
            >
              Request a Quote
            </button>
          </div>
        </section>

        {/* Related services */}
        <section className="py-20 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <p className="eyebrow text-brand-600">Also Available</p>
            <h2 className="mt-5 font-display font-extrabold text-2xl md:text-3xl tracking-tight">
              Other Security Services
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {related.map(s => (
                <Link
                  key={s.path}
                  to={s.path}
                  className="photo-card group bg-white border border-mist-300 flex flex-col hover:shadow-lift hover:border-brand-200 transition-all"
                >
                  <div className="relative overflow-hidden aspect-[16/10] bg-navy-900">
                    <img
                      src={s.image}
                      alt={`SecureAI ${s.title.toLowerCase()} services`}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/5 to-transparent" />
                  </div>
                  <div className="p-7 flex flex-col flex-grow">
                    <h3 className="font-display font-bold text-lg text-navy-800 group-hover:text-brand-600 transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slateink flex-grow">{s.description}</p>
                    <span className="arrow-link mt-6 inline-flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-wider text-brand-600">
                      Explore {s.title}
                      <ArrowIcon />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetailsLayout;
