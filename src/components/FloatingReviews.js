import React, { useEffect, useState, useRef } from 'react';
import { reviews } from './reviewsData';

// Compact floating reviews badge that cycles through snippets.
// Expands on hover/focus to show more detail and a link to full reviews section.
const FloatingReviews = () => {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [autoHidden, setAutoHidden] = useState(false);
  const idleRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      if (mobile) {
        setExpanded(false);
        setCollapsed(true);
      } else {
        setExpanded(true);
        setCollapsed(false);
      }
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Auto-hide (collapse into tiny reopen button) after idle on mobile
  useEffect(() => {
    const startIdle = () => {
      clearTimeout(idleRef.current);
      if (!isMobile || dismissed) return;
      idleRef.current = setTimeout(() => {
        setAutoHidden(true);
      }, 15000); // 15s idle
    };
    startIdle();
    const resetEvents = ['touchstart', 'scroll'];
    const reset = () => {
      if (autoHidden) return; // remain hidden until user chooses
      startIdle();
    };
    resetEvents.forEach(ev => window.addEventListener(ev, reset));
    return () => {
      clearTimeout(idleRef.current);
      resetEvents.forEach(ev => window.removeEventListener(ev, reset));
    };
  }, [isMobile, dismissed, autoHidden]);

  const active = reviews[index];

  if (dismissed) return null;
  if (autoHidden) {
    return (
      <button
        aria-label="Show reviews widget"
        onClick={() => { setAutoHidden(false); setCollapsed(true); }}
        className="fixed bottom-6 right-4 z-50 bg-blue-600/80 backdrop-blur px-4 py-2 rounded-full text-white text-xs font-semibold shadow-lg hover:bg-blue-500 transition"
      >Reviews</button>
    );
  }
  return (
    <div
      className={`fixed ${isMobile ? 'bottom-6 right-4' : 'bottom-24 right-6'} z-50 group transition-all duration-500 ${collapsed ? 'w-40 h-12' : expanded ? (isMobile ? 'w-72' : 'w-80 h-48') : (isMobile ? 'w-60 h-24' : 'w-72 h-28')} text-sm`} 
      onMouseEnter={() => !isMobile && !collapsed && setExpanded(true)}
      onMouseLeave={() => !isMobile && !collapsed && setExpanded(false)}
      style={{ filter: 'drop-shadow(0 0 18px #60a5fa55)' }}
    >
      <div
        className={
          `relative bg-white/10 backdrop-blur-xl border-2 border-blue-400/30 rounded-3xl shadow-2xl p-5 overflow-hidden flex flex-col justify-between h-full glassy-float` +
          ` transition-all duration-500 ease-out ${expanded ? 'scale-105' : 'scale-100'} animate-floating`
        }
      >
        <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-br from-blue-500/20 via-transparent to-purple-600/20 animate-gradient-move" />
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss reviews"
          className="absolute top-2 right-3 text-blue-200 hover:text-white text-xs font-bold"
        >×</button>
        {collapsed ? (
          <button
            onClick={() => { setCollapsed(false); setExpanded(isMobile ? false : true); }}
            className="w-full h-full flex items-center justify-between px-4"
            aria-label="Expand review widget"
          >
            <span className="text-[11px] font-semibold text-blue-100 truncate max-w-[70%]">{active.author}</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.379-2.454a1 1 0 00-1.175 0l-3.379 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.287-3.967z" />
                </svg>
              ))}
            </div>
          </button>
        ) : (
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 pr-2">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-200 flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 01.894.553l1.382 2.8 3.09.45a1 1 0 01.554 1.707l-2.236 2.18.528 3.08a1 1 0 01-1.45 1.054L10 12.347l-2.768 1.457a1 1 0 01-1.45-1.054l.528-3.08-2.236-2.18a1 1 0 01.554-1.707l3.09-.45L9.106 2.553A1 1 0 0110 2z" /></svg>
              {active.author}
            </div>
            <p className={`text-blue-100 leading-snug text-xs mt-1 ${expanded ? '' : 'line-clamp-2'} transition-all`}>
              “{active.text}”
            </p>
            {isMobile && (
              <button
                onClick={() => setExpanded(e => !e)}
                className="mt-1 text-[10px] font-semibold text-blue-300 underline underline-offset-2"
                aria-expanded={expanded}
              >
                {expanded ? 'Hide' : 'Read'}
              </button>
            )}
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-yellow-400 drop-shadow" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.379-2.454a1 1 0 00-1.175 0l-3.379 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.287-3.967z" />
                </svg>
              ))}
            </div>
            <div className="flex gap-1">
              {reviews.map((r, i) => (
                <button
                  key={r.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Show review ${i + 1}`}
                  className={`w-2 h-2 rounded-full ${i === index ? 'bg-blue-400 scale-110' : 'bg-blue-900 hover:bg-blue-700'} transition`}
                />
              ))}
            </div>
          </div>
        </div> )}
        {!collapsed && (
          <div className="mt-2 flex items-center justify-end">
            <button
              onClick={() => setCollapsed(true)}
              className="text-blue-300 hover:text-blue-100 text-[11px] font-semibold underline underline-offset-2 transition-all"
              aria-label="Collapse reviews widget"
            >
              Collapse
            </button>
            <a href="#reviews" className="ml-4 text-blue-300 hover:text-blue-100 text-[11px] font-semibold underline underline-offset-2 transition-all" aria-label="See all reviews">
              All Reviews →
            </a>
          </div>
        )}
      </div>
      {/* Animations for glassy-float, animate-floating, animate-gradient-move, animate-star-glow will be in App.css */}
    </div>
  );
};

export default FloatingReviews;
