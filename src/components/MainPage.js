import React, { useState, useRef, useEffect } from 'react';
import GoogleReviews from './GoogleReviews';
import ServiceCard from './ServiceCard';
import ContactForm from './ContactForm';
import FloatingReviews from './FloatingReviews';
import ImpactFlowChart from './ImpactFlowChart';
import MissionStats from './MissionStats';

const MainPage = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const reviewsRef = useRef(null);
  const missionRef = useRef(null);

  const scrollToSection = (ref, tabName) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(tabName);
  };
  const services = [
    {
      title: "Firewatch",
      description: "Comprehensive fire monitoring and prevention services to keep your property safe.",
      path: "/services/firewatch",
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    },
    {
      title: "Business Security",
      description: "Enterprise-grade solutions designed to protect your business assets seamlessly.",
      path: "/services/business",
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    },
    {
      title: "Mobile Patrol",
      description: "On-the-go security services to ensure safety and surveillance across various locations.",
      path: "/services/mobile-patrol",
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    },
    {
      title: "Apartment/Neighborhood Security",
      description: "Tailored security solutions for residential communities and apartment complexes.",
      path: "/services/neighborhood",
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    },
    {
      title: "Event Security",
      description: "Professional security services for events, ensuring safety and smooth operations.",
      path: "/services/event",
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    },
    {
      title: "SecureAI Platform",
      description: "Revolutionary security management software for complete control and visibility of your security operations.",
      path: "/services/additional",
      icon: <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    }
  ];

  // Scroll reveal effect for sections
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('reveal-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Banner */}
      <nav className="fixed top-0 w-full bg-gray-900 shadow-lg z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src="/logo.PNG" alt="SecureAI Logo" className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold">SECUREAI</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection(homeRef, 'home')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'home' ? 'text-blue-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection(servicesRef, 'services')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'services' ? 'text-blue-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection(reviewsRef, 'reviews')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'reviews' ? 'text-blue-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection(aboutRef, 'about')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'about' ? 'text-blue-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection(contactRef, 'contact')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'contact' ? 'text-blue-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                Contact Us
              </button>
              <button 
                onClick={() => scrollToSection(missionRef, 'mission')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'mission' ? 'text-blue-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                Our Mission
              </button>
            </div>
          </div>

          {/* Mobile navigation menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
                <button
                  onClick={() => {
                    scrollToSection(homeRef, 'home');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    scrollToSection(servicesRef, 'services');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    scrollToSection(reviewsRef, 'reviews');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  Reviews
                </button>
                <button
                  onClick={() => {
                    scrollToSection(aboutRef, 'about');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  About Us
                </button>
                <button
                  onClick={() => {
                    scrollToSection(contactRef, 'contact');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => {
                    scrollToSection(missionRef, 'mission');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                >
                  Our Mission
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="pt-16">
        {/* Hero Section (restored simpler version) */}
        <section ref={homeRef} className="relative w-full h-screen flex items-center justify-center text-center px-6">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <img
              src="/logo.PNG"
              alt="SecureAI Logo"
              className="mx-auto mb-6 w-44 md:w-72 lg:w-80"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              SECUREAI
            </h1>
            <p className="text-lg md:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Intelligent protection for what matters most, designed with you in mind!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={() => scrollToSection(servicesRef, 'services')}
                className="bg-blue-600 hover:bg-blue-500 py-4 px-10 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
              >
                Get Started
              </button>
              <button
                onClick={() => scrollToSection(contactRef, 'contact')}
                className="bg-transparent hover:bg-blue-600/10 py-4 px-10 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-blue-600 hover:border-blue-500"
              >
                Contact Us
              </button>
              <button
                onClick={() => scrollToSection(reviewsRef, 'reviews')}
                className="bg-blue-600 hover:bg-blue-500 py-4 px-10 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 glow-border animate-hero-pulse"
              >
                <span className="inline-flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-300 animate-star-glow" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 01.894.553l1.382 2.8 3.09.45a1 1 0 01.554 1.707l-2.236 2.18.528 3.08a1 1 0 01-1.45 1.054L10 12.347l-2.768 1.457a1 1 0 01-1.45-1.054l.528-3.08-2.236-2.18a1 1 0 01.554-1.707l3.09-.45L9.106 2.553A1 1 0 0110 2z" /></svg>
                  Our Reviews
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Original Critical Gap in Traditional Security Section (restored) */}
        <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black reveal" id="critical-gap">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-red-500">The Critical Gap in Traditional Security</h2>
                <p className="text-xl text-gray-300 mb-8">Most security companies operate in the dark, leaving you exposed to unnecessary risks.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur">
                  <h3 className="text-2xl font-semibold mb-4 text-white">The Real Problem</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-red-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span className="text-gray-300">No system to verify if guards are on-site or performing their duties</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-red-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span className="text-gray-300">Guards disappearing for hours during shifts—unnoticed until incidents occur</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-red-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span className="text-gray-300">Billions lost annually in damages, theft, and legal liability</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-900/50 p-8 rounded-xl backdrop-blur">
                  <h3 className="text-2xl font-semibold mb-4 text-white">The SecureAI Solution</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-400 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="text-blue-400 font-semibold">Live Activity Tracking</span>
                        <p className="text-gray-300">Real-time monitoring of guard locations, activities, and checkpoint compliance</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-400 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="text-blue-400 font-semibold">Transparent Guard Logs</span>
                        <p className="text-gray-300">Time-stamped, verified records of all security activities</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-blue-400 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="text-blue-400 font-semibold">Instant Alert System</span>
                        <p className="text-gray-300">Immediate notifications for any security protocol breaches</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold text-white mb-8">Because security without accountability isn't security at all.</p>
                <button
                  onClick={() => scrollToSection(contactRef, 'contact')}
                  className="bg-blue-600 hover:bg-blue-500 py-4 px-10 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
                >
                  Secure Your Business Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Growth Flow Chart */}
        <ImpactFlowChart />

        {/* Services Section */}
        <section ref={servicesRef} className="py-24 bg-black reveal">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-16">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
  <section ref={aboutRef} className="py-24 bg-gray-900 reveal">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-16">About Us</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                SecureAI was founded by two security professionals who saw gaps in the industry and set out to redefine private security. With years of hands-on experience, they combined their expertise in AI technology, data analysis, and security operations to create a smarter, more reliable solution.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-800 p-8 rounded-xl flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">Bereket Kibret</h3>
                    <a 
                      href="https://www.linkedin.com/in/bereketkibret" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-300 font-medium">Microsoft Software Engineer</p>
                  <p className="text-gray-400 mt-4 leading-relaxed flex-grow">
                    A graduate of the University of Southern California with three years of hands-on security experience. Currently at Microsoft as a software engineer, he combines his security operations background with technical expertise to develop innovative security solutions. His dual experience helps bridge the gap between practical security needs and technological advancement.
                  </p>
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-700">
                    <img src="/microsoft-logo.png" alt="Microsoft" className="h-11" />
                    <img src="/usc-logo.png" alt="USC" className="h-8" />
                  </div>
                </div>

                <div className="bg-gray-800 p-8 rounded-xl flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">Samuel Tigistu</h3>
                    <a 
                      href="https://www.linkedin.com/in/samuel-tigistu-3060971a3/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-300 font-medium">Microsoft Software Engineer</p>
                  <p className="text-gray-400 mt-4 leading-relaxed flex-grow">
                    A Yale University graduate specializing in security system architecture. At Microsoft, he leads the development of enterprise security solutions, bringing technical innovation to our platform. His expertise in both software engineering and security infrastructure helps strengthen our AI-powered security systems.
                  </p>
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-700">
                    <img src="/microsoft-logo.png" alt="Microsoft" className="h-12" />
                    <img src="/yale-logo.png" alt="Yale" className="h-14" />
                  </div>
                </div>

                <div className="bg-gray-800 p-8 rounded-xl flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">Maher Dedgeba</h3>
                    <a 
                      href="https://www.linkedin.com/in/maher-dedgeba-18893a2bb/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-300">Target HQ Data Analyst</p>
                  <p className="text-gray-400 mt-4 leading-relaxed flex-grow">
                    A San Jose State graduate with extensive experience in security operations. Having served as a Securities Operational Manager for 5 years, he brings valuable insights to our data analytics and operational efficiency. His combination of hands-on security management experience and data analysis skills helps ensure seamless operations and data-driven solutions for our clients.
                  </p>
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-700">
                    <img src="/target-logo.png" alt="Target" className="h-12" />
                    <img src="/sjsu-logo.png" alt="San Jose State University" className="h-12" />
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                By merging technology with in-person security, SecureAI is setting a new standard in safety and transparency—because security should evolve with the world around it. Our platform provides real-time monitoring, enhanced accountability, and faster response times, delivering a comprehensive security solution for the modern era.
              </p>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <div ref={reviewsRef} className="reveal">
          <GoogleReviews />
        </div>

        {/* Contact Us Section */}
  <section ref={contactRef} id="contact" className="py-24 bg-black reveal">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-16">Contact Us</h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold mb-2">Fast Contact</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Share a few details and our team will respond promptly—usually within the same business day.</p>
                  <div className="mt-4 text-sm space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243" /></svg>
                      <p className="text-gray-400">Address:<br /><span className="text-white">3031 Tisch Way, San Jose, CA 95128, United States</span></p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18" /></svg>
                      <p className="text-gray-400">For general inquiries use the form. For urgent matters, start your message with "URGENT".</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v7h6v-7c0-1.657-1.343-3-3-3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 21h14" /></svg>
                      <p className="text-gray-400">All messages are monitored securely—your information is confidential.</p>
                    </div>
                  </div>
                  <a href="#reviews" className="inline-block mt-6 text-blue-400 hover:text-blue-300 text-sm underline decoration-blue-600/40">See client feedback →</a>
                </div>
                <div className="bg-blue-900/40 p-6 rounded-xl border border-blue-800">
                  <h3 className="text-lg font-semibold mb-2">Why choose SecureAI?</h3>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li className="flex items-start gap-2"><span className="text-blue-400">•</span> Real-time accountability</li>
                    <li className="flex items-start gap-2"><span className="text-blue-400">•</span> Faster incident prevention</li>
                    <li className="flex items-start gap-2"><span className="text-blue-400">•</span> Transparent reporting</li>
                  </ul>
                </div>
              </div>
              <div className="max-w-lg mx-auto w-full">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section - Enhanced */}
        <section ref={missionRef} className="py-28 bg-gradient-to-b from-gray-900 via-black to-gray-900 reveal">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Our Mission</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">Elevating private security by fusing professional on-site presence with intelligent, adaptive technology—bringing accountability, foresight, and speed together.</p>
            </div>
            <MissionStats />
            <div className="grid md:grid-cols-5 gap-6 mb-16">
              {[
                { title: 'Accountability', desc: 'Verified guard actions & location integrity.', icon: 'M5 13l4 4L19 7' },
                { title: 'Intelligence', desc: 'Data-driven patterns & predictive insights.', icon: 'M12 8v4l3 3' },
                { title: 'Speed', desc: 'Instant alerts & rapid escalation pipeline.', icon: 'M3 13h18' },
                { title: 'Transparency', desc: 'Immutable event trail & live reporting.', icon: 'M5 17h14' },
                { title: 'Reliability', desc: 'Layered tech + trained personnel synergy.', icon: 'M9 7h1m4 0h1' }
              ].map(p => (
                <div key={p.title} className="bg-gray-800/60 backdrop-blur rounded-2xl p-6 border border-gray-700/50 flex flex-col gap-3 hover:border-blue-600/50 transition">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={p.icon} /></svg>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-10 mb-20">
              <div className="bg-blue-900/30 rounded-2xl border border-blue-700/50 p-8 flex flex-col gap-4">
                <h3 className="text-xl font-semibold">Why It Matters</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Reactive security is costly. A proactive, instrumented layer reduces loss, liability, and downtime while increasing trust and retention.</p>
              </div>
              <div className="bg-purple-900/30 rounded-2xl border border-purple-700/50 p-8 flex flex-col gap-4">
                <h3 className="text-xl font-semibold">How It Scales</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Insights compound across properties—pattern detection improves systemic coverage and informs staffing & patrol strategy.</p>
              </div>
              <div className="bg-pink-900/30 rounded-2xl border border-pink-700/50 p-8 flex flex-col gap-4">
                <h3 className="text-xl font-semibold">Human + AI</h3>
                <p className="text-gray-300 text-sm leading-relaxed">We enhance teams—not replace them—augmenting judgment with telemetry, context, and automated escalation.</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-200 font-medium mb-6">Security shouldn’t be a black box—it should be a source of live truth.</p>
              <button onClick={() => scrollToSection(contactRef, 'contact')} className="bg-blue-600 hover:bg-blue-500 py-4 px-10 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50">
                Start a SecureAI Assessment
              </button>
            </div>
          </div>
        </section>
      </div>
      {/* Floating Contact Button */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-full shadow-lg text-sm font-medium transition transform hover:scale-105"
        aria-label="Quick contact shortcut"
      >
        Contact Us
      </a>
      <FloatingReviews />
    </div>
  );
};

export default MainPage;
