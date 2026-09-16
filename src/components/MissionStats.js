import React, { useEffect, useState } from 'react';

const counters = [
  { label: 'Properties Protected', target: 48, suffix: '' },
  { label: 'Incidents Prevented', target: 320, suffix: '+' },
  { label: 'Patrol Events Logged', target: 12840, suffix: '' },
  { label: 'Years Of Industry Experience', target: 10, suffix: '+' }
];

// Custom hook for count-up animation
const useCountUp = (end, duration = 1600) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let startTime;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setVal(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration]);
  return val;
};

// Child component so hooks aren't invoked inside a loop in parent
const StatsCard = ({ label, target, suffix, index }) => {
  const value = useCountUp(target);
  return (
    <div
      className={`px-6 py-10 lg:py-14 text-center lg:text-left border-white/15 ${
        index % 2 === 1 ? 'border-l' : ''
      } ${index < 2 ? 'border-b lg:border-b-0' : ''} ${
        index > 0 ? 'lg:border-l' : 'lg:border-l-0'
      }`}
    >
      <p className="font-display font-extrabold text-4xl lg:text-5xl tracking-tight tabular-nums text-white">
        {value.toLocaleString()}
        <span className="text-brand-200">{suffix}</span>
      </p>
      <p className="mt-3 font-display text-[11px] font-bold uppercase tracking-eyebrow text-brand-200">
        {label}
      </p>
    </div>
  );
};

const MissionStats = () => (
  <section className="bg-navy-800" aria-label="SecureAI by the numbers">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {counters.map((c, i) => (
          <StatsCard key={c.label} {...c} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default MissionStats;
