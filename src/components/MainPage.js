import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleReviews from './GoogleReviews';
import ServiceCard from './ServiceCard';
import ContactForm from './ContactForm';
import FloatingReviews from './FloatingReviews';
import ImpactFlowChart from './ImpactFlowChart';
import MissionStats from './MissionStats';
import CriticalGapSection from './CriticalGapSection';
import Header from './Header';
import Footer from './Footer';
import { SERVICES } from './servicesData';

const pillars = [
  {
    title: 'Trained Professionals',
    copy:
      'Officers are vetted, state-licensed and trained on your property before their first shift — not sent in cold.',
    target: 'about',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M12 3l7.5 3v5.25c0 4.5-3.15 8.4-7.5 9.75-4.35-1.35-7.5-5.25-7.5-9.75V6L12 3z"
      />
    )
  },
  {
    title: 'Local Execution',
    copy:
      'Supervisors live and work in the markets they cover, so escalation is a phone call away — never a national queue.',
    target: 'industries',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11zm0-8.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
      />
    )
  },
  {
    title: 'Verified Accountability',
    copy:
      'Time-stamped, location-verified patrol records give you proof of coverage for every hour you are billed.',
    target: 'approach',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M9 12.75l2.25 2.25L15.75 9M7.5 4.5h9a2.25 2.25 0 012.25 2.25v12.75l-3-2.25-3 2.25-3-2.25-3 2.25V6.75A2.25 2.25 0 017.5 4.5z"
      />
    )
  }
];

const industries = [
  {
    name: 'Commercial & Office',
    copy: 'Lobby posts, badge control and after-hours coverage for business parks and office towers.'
  },
  {
    name: 'Residential & HOA',
    copy: 'Apartment communities, gated neighborhoods and property-management portfolios.'
  },
  {
    name: 'Retail & Shopping Centers',
    copy: 'Loss-prevention presence, opening and closing coverage, parking-lot patrol.'
  },
  {
    name: 'Construction & Industrial',
    copy: 'Equipment and material protection, gate control, firewatch during active work.'
  },
  {
    name: 'Events & Venues',
    copy: 'Stadium, festival and private-event staffing with crowd and access management.'
  },
  {
    name: 'Healthcare & Education',
    copy: 'Calm, de-escalation-trained officers for clinics, campuses and student housing.'
  }
];

const expertise = [
  {
    eyebrow: 'On the Ground',
    title: 'A Presence That Deters, Not Just Reacts',
    copy:
      'Visible, professional officers change behavior before an incident starts. Posts are briefed on your property, your people and your escalation rules, and supervisors verify coverage in person — not from a spreadsheet three states away.',
    image: '/secure1.jpeg',
    alt: 'SecureAI security officer on radio during a night shift at an industrial site',
    link: { label: 'Explore security officers', path: '/services/business' }
  },
  {
    eyebrow: 'Coverage You Can Confirm',
    title: 'Every Patrol Documented and Time-Stamped',
    copy:
      'Officers check in at defined points throughout each shift. You receive nightly reports with times, locations and photos, so questions about whether the property was covered are answered by the record rather than by argument.',
    image: '/secure9.png',
    alt: 'SecureAI reporting dashboard showing shift schedules and incident logging',
    contain: true,
    link: { label: 'Explore reporting and oversight', path: '/services/additional' }
  },
  {
    eyebrow: 'Built For Scale',
    title: 'One Team Across Every Property You Own',
    copy:
      'Whether it is a single building or a portfolio spread across a metro area, patrol routes, staffing levels and reporting stay consistent — and patterns spotted at one site inform how we protect the next.',
    image: '/secure4.jpeg',
    alt: 'SecureAI marked patrol vehicle with an officer beginning a mobile patrol route',
    link: { label: 'Explore mobile patrol', path: '/services/mobile-patrol' }
  }
];

const leadership = [
  {
    name: 'Dagmawi Bekele',
    role: 'Founder & Chief Executive Officer',
    photo: '/dagmawi-bekele.jpg',
    bio:
      'Dagmawi has spent more than a decade in the private security industry, including corporate experience at Allied Universal, where he worked across staffing, operations and client accounts at national scale. He founded SecureAI to bring that operational discipline to property owners who were tired of guards who could not be accounted for, and he still personally reviews the accounts the company takes on.',
    credentials: ['10+ years in private security', 'Allied Universal corporate background'],
    linkedin: null
  },
  {
    name: 'Bereket Kibret',
    role: 'Head of Technology',
    initials: 'BK',
    bio:
      'A University of Southern California graduate with three years of field security experience before moving into software engineering at Microsoft. He builds the reporting and verification tools our officers use in the field, keeping them fast enough to actually get used on a shift.',
    credentials: ['USC graduate', 'Software engineer at Microsoft'],
    logos: [
      { src: '/microsoft-logo.png', alt: 'Microsoft', className: 'h-9' },
      { src: '/usc-logo.png', alt: 'University of Southern California', className: 'h-6' }
    ],
    linkedin: 'https://www.linkedin.com/in/bereketkibret'
  },
  {
    name: 'Maher Dedgeba',
    role: 'Operations & Analytics',
    initials: 'MD',
    bio:
      'A San Jose State graduate and former security operations manager of five years, now a data analyst at Target headquarters. He turns shift and incident data into staffing and patrol decisions, which is how coverage gets tightened before a problem repeats.',
    credentials: ['5 years security operations management', 'Data analyst at Target HQ'],
    logos: [
      { src: '/target-logo.png', alt: 'Target', className: 'h-9' },
      { src: '/sjsu-logo.png', alt: 'San Jose State University', className: 'h-9' }
    ],
    linkedin: 'https://www.linkedin.com/in/maher-dedgeba-18893a2bb/'
  }
];

const LinkedInIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const MainPage = () => {
  const navigate = useNavigate();

  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Scroll reveal effect for sections
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('reveal-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-navy-900">
      <Header />

      <main className="pt-[72px] md:pt-[108px]">
        {/* ---------------------------------------------------------------- Hero */}
        <section id="home" className="relative overflow-hidden bg-navy-900">
          <div className="absolute inset-0">
            <img
              src="/secure12.jpeg"
              alt="SecureAI security officer patrolling a residential property"
              className="hero-media w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-navy-900/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-navy-900/40" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28 md:pt-32 md:pb-36">
            <div className="max-w-2xl text-white">
              <p className="eyebrow text-brand-200">Private Security Services</p>
              <h1 className="mt-6 font-display font-extrabold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-[3.5rem]">
                Security Officers and Patrol
                <span className="block mt-3 text-brand-200 text-2xl sm:text-3xl lg:text-4xl font-bold">
                  Local Execution | Verified Accountability
                </span>
              </h1>
              <p className="mt-7 text-base md:text-lg leading-relaxed text-white/85 max-w-xl">
                Trained, licensed officers protecting commercial, residential,
                industrial and event properties across the West Coast — with
                time-stamped patrol records you can check at any hour of the night.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo('contact')}
                  className="bg-brand-600 hover:bg-brand-500 text-white font-display font-bold text-xs uppercase tracking-wider px-9 py-4 transition-colors"
                >
                  Request a Quote
                </button>
                <button
                  onClick={() => scrollTo('services')}
                  className="border-2 border-white/70 hover:bg-white hover:text-navy-900 text-white font-display font-bold text-xs uppercase tracking-wider px-9 py-4 transition-colors"
                >
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ Pillars */}
        <section className="bg-mist border-b border-mist-300">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-mist-300">
              {pillars.map(p => (
                <div key={p.title} className="py-12 md:px-10 first:md:pl-0 last:md:pr-0">
                  <svg
                    className="w-10 h-10 text-brand-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    {p.icon}
                  </svg>
                  <h2 className="mt-5 font-display font-bold text-xl text-navy-800">{p.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slateink">{p.copy}</p>
                  <button
                    onClick={() => scrollTo(p.target)}
                    className="arrow-link mt-5 inline-flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-wider text-brand-600 hover:text-navy-800 transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------- Services */}
        <section id="services" className="py-24 bg-white reveal">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="eyebrow text-brand-600">What We Do</p>
              <h2 className="mt-5 font-display font-extrabold text-3xl md:text-[2.5rem] leading-tight tracking-tight rule-accent">
                Scalable, End-to-End Security Solutions
              </h2>
              <p className="mt-7 text-base leading-relaxed text-slateink">
                Staff a single post or cover an entire portfolio. Every service
                below is delivered by our own licensed officers and reported
                through one system, so standards do not change from site to site.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map(service => (
                <ServiceCard key={service.path} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------- Stats */}
        <MissionStats />

        {/* --------------------------------------------------------- Industries */}
        <section id="industries" className="py-24 bg-mist reveal">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-[1fr_1.15fr] gap-14 items-start">
              <div className="lg:sticky lg:top-32">
                <p className="eyebrow text-brand-600">Industries</p>
                <h2 className="mt-5 font-display font-extrabold text-3xl md:text-[2.5rem] leading-tight tracking-tight rule-accent">
                  The Most Local Security Partner You Will Work With
                </h2>
                <p className="mt-7 text-base leading-relaxed text-slateink">
                  We staff the properties around us, which means our supervisors
                  know the neighborhoods, the response times and the people. That
                  local footing is what makes the difference between a guard
                  standing at a door and a security program that actually reduces
                  incidents.
                </p>
                <button
                  onClick={() => scrollTo('contact')}
                  className="mt-9 inline-flex items-center bg-navy-800 hover:bg-brand-600 text-white font-display font-bold text-xs uppercase tracking-wider px-8 py-4 transition-colors"
                >
                  Talk To Our Team
                </button>
              </div>

              <div className="grid sm:grid-cols-2 gap-px bg-mist-300 border border-mist-300">
                {industries.map(ind => (
                  <div key={ind.name} className="bg-white p-8 lift hover:shadow-card">
                    <h3 className="font-display font-bold text-base text-navy-800">{ind.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slateink">{ind.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------- Approach */}
        <section id="approach" className="py-24 bg-white reveal">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="eyebrow text-brand-600">Our Approach</p>
              <h2 className="mt-5 font-display font-extrabold text-3xl md:text-[2.5rem] leading-tight tracking-tight rule-accent">
                Expertise That Makes a Difference
              </h2>
            </div>

            <div className="mt-16 space-y-20">
              {expertise.map((item, i) => (
                <div
                  key={item.title}
                  className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                >
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    {item.contain ? (
                      <div className="bg-mist-200 border border-mist-300 flex items-center justify-center p-8 h-[360px] lg:h-[460px]">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="max-h-full w-auto object-contain shadow-lift"
                        />
                      </div>
                    ) : (
                      <div className="relative">
                        <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-[10px] border-mist-200 -z-10 hidden lg:block" />
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-full h-[320px] lg:h-[420px] object-cover object-center shadow-card"
                        />
                      </div>
                    )}
                  </div>
                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <p className="eyebrow text-brand-600">{item.eyebrow}</p>
                    <h3 className="mt-5 font-display font-extrabold text-2xl md:text-3xl leading-tight tracking-tight text-navy-800">
                      {item.title}
                    </h3>
                    <p className="mt-6 text-base leading-relaxed text-slateink">{item.copy}</p>
                    <button
                      onClick={() => navigate(item.link.path)}
                      className="arrow-link mt-8 inline-flex items-center gap-2 font-display text-[12px] font-bold uppercase tracking-wider text-brand-600 hover:text-navy-800 transition-colors"
                    >
                      {item.link.label}
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------- Accountability contrast */}
        <CriticalGapSection />

        {/* ------------------------------------------------------------- Growth */}
        <ImpactFlowChart />

        {/* --------------------------------------------------------- Leadership */}
        <section id="about" className="py-24 bg-mist reveal">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="eyebrow text-brand-600">About Us</p>
              <h2 className="mt-5 font-display font-extrabold text-3xl md:text-[2.5rem] leading-tight tracking-tight rule-accent">
                Built by People Who Have Worked the Post
              </h2>
              <p className="mt-7 text-base leading-relaxed text-slateink">
                SecureAI was founded out of a decade of frontline and corporate
                security experience. We saw the same failures repeat across the
                industry — guards who could not be accounted for, reports written
                after the fact, clients paying for coverage nobody could verify —
                and built a company where the record is the product.
              </p>
            </div>

            {/* Founder */}
            <div className="mt-14 bg-white shadow-card border-t-4 border-brand-600">
              <div className="grid md:grid-cols-[320px_1fr]">
                <div className="relative bg-navy-900">
                  <img
                    src={leadership[0].photo}
                    alt={`${leadership[0].name}, ${leadership[0].role} of SecureAI`}
                    className="w-full h-full min-h-[340px] object-cover object-top"
                  />
                </div>
                <div className="p-9 lg:p-12">
                  <p className="eyebrow text-brand-600">Founder</p>
                  <h3 className="mt-5 font-display font-extrabold text-2xl md:text-3xl tracking-tight text-navy-800">
                    {leadership[0].name}
                  </h3>
                  <p className="mt-2 font-display font-semibold text-sm uppercase tracking-wider text-slateink-500">
                    {leadership[0].role}
                  </p>
                  <p className="mt-6 text-base leading-relaxed text-slateink">
                    {leadership[0].bio}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {leadership[0].credentials.map(c => (
                      <span
                        key={c}
                        className="bg-mist-200 text-navy-800 font-display font-semibold text-[11px] uppercase tracking-wider px-4 py-2"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting leadership */}
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              {leadership.slice(1).map(person => (
                <div
                  key={person.name}
                  className="bg-white shadow-card p-9 flex flex-col lift hover:shadow-lift"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 shrink-0 bg-navy-800 text-white font-display font-bold text-lg flex items-center justify-center">
                      {person.initials}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-display font-bold text-lg text-navy-800">
                            {person.name}
                          </h3>
                          <p className="mt-1 font-display font-semibold text-[11px] uppercase tracking-wider text-slateink-500">
                            {person.role}
                          </p>
                        </div>
                        {person.linkedin && (
                          <a
                            href={person.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slateink-500 hover:text-brand-600 transition-colors"
                            aria-label={`${person.name} on LinkedIn`}
                          >
                            <LinkedInIcon />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-slateink flex-grow">
                    {person.bio}
                  </p>
                  <div className="mt-7 pt-6 border-t border-mist-300 flex items-center justify-between gap-6">
                    {person.logos.map(logo => (
                      <img
                        key={logo.alt}
                        src={logo.src}
                        alt={logo.alt}
                        className={`${logo.className} w-auto object-contain`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-12 max-w-3xl text-base leading-relaxed text-slateink">
              By pairing a professional on-site presence with straightforward
              reporting, SecureAI holds itself to a standard the industry has been
              slow to adopt: if it was not documented, it did not happen.
            </p>
          </div>
        </section>

        {/* ------------------------------------------------------------ Reviews */}
        <GoogleReviews />

        {/* ------------------------------------------------------------ Mission */}
        <section id="mission" className="py-24 bg-white reveal">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-14 items-center">
              <div>
                <p className="eyebrow text-brand-600">Our Mission</p>
                <h2 className="mt-5 font-display font-extrabold text-3xl md:text-[2.5rem] leading-tight tracking-tight rule-accent">
                  Let&apos;s Work Together to Secure the Promise of Tomorrow
                </h2>
                <p className="mt-7 text-base leading-relaxed text-slateink">
                  Our mission is to raise the standard of private security by
                  pairing a professional, well-trained presence with honest
                  reporting. Protection should never be a black box — it should be
                  something a property owner can see, check and trust.
                </p>
                <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-6">
                  {[
                    { t: 'Accountability', d: 'Verified officer actions and location integrity on every shift.' },
                    { t: 'Professionalism', d: 'Uniformed, vetted, de-escalation-trained officers.' },
                    { t: 'Responsiveness', d: 'Local supervisors and a clear escalation path, day or night.' },
                    { t: 'Transparency', d: 'A complete event trail available to you on request.' }
                  ].map(v => (
                    <div key={v.t} className="border-l-2 border-brand-600 pl-5">
                      <h3 className="font-display font-bold text-base text-navy-800">{v.t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slateink">{v.d}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="/secure15.jpeg"
                  alt="SecureAI officers managing entry at a large public event"
                  className="w-full h-[380px] lg:h-[560px] object-cover object-center shadow-card"
                />
                <div className="absolute -bottom-6 -left-6 bg-navy-900 text-white p-8 max-w-xs hidden lg:block">
                  <p className="font-display font-bold text-lg leading-snug">
                    &ldquo;Security without accountability isn&apos;t security at all.&rdquo;
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-eyebrow font-display font-semibold text-brand-200">
                    Dagmawi Bekele, Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ Contact */}
        <section id="contact" className="bg-navy-900 text-white">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid lg:grid-cols-2 gap-14">
              <div>
                <p className="eyebrow text-brand-200">Contact Us</p>
                <h2 className="mt-5 font-display font-extrabold text-3xl md:text-[2.5rem] leading-tight tracking-tight">
                  Request a Security Assessment
                </h2>
                <p className="mt-7 text-base leading-relaxed text-white/80 max-w-lg">
                  Tell us about the property, the hours you need covered and what
                  has not worked before. Our team reviews every request and
                  responds — usually the same business day.
                </p>

                <div className="mt-10 space-y-6 max-w-lg">
                  <div className="flex items-start gap-4 border-t border-white/15 pt-6">
                    <svg className="w-5 h-5 text-brand-200 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11zm0-8.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    </svg>
                    <div>
                      <p className="font-display font-bold text-[11px] uppercase tracking-eyebrow text-brand-200">Office</p>
                      <p className="mt-2 text-sm text-white/85">
                        3031 Tisch Way, San Jose, CA 95128, United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 border-t border-white/15 pt-6">
                    <svg className="w-5 h-5 text-brand-200 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-display font-bold text-[11px] uppercase tracking-eyebrow text-brand-200">Urgent Coverage</p>
                      <p className="mt-2 text-sm text-white/85">
                        Begin your message with &ldquo;URGENT&rdquo; and it is routed
                        straight to an operations supervisor.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 border-t border-white/15 pt-6">
                    <svg className="w-5 h-5 text-brand-200 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v4" />
                    </svg>
                    <div>
                      <p className="font-display font-bold text-[11px] uppercase tracking-eyebrow text-brand-200">Confidential</p>
                      <p className="mt-2 text-sm text-white/85">
                        Property details you share stay between you and our
                        operations team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white text-navy-900 p-8 lg:p-10 shadow-lift">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingReviews />
    </div>
  );
};

export default MainPage;
