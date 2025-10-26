import React, { useEffect, useState } from 'react';

const counters = [
  { label: 'Properties Protected', target: 48, accent: 'from-blue-500 to-blue-300' },
  { label: 'Incidents Prevented', target: 320, accent: 'from-purple-500 to-pink-400' },
  { label: 'Guard Events Logged', target: 12840, accent: 'from-teal-400 to-cyan-300' }
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
const StatsCard = ({ label, target, accent }) => {
  const value = useCountUp(target);
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gray-800/70 backdrop-blur border border-gray-700/50 p-6 flex flex-col gap-2 shadow-lg">
      <div className={`absolute inset-0 opacity-30 bg-gradient-to-br ${accent}`}></div>
      <div className="relative">
        <p className="text-3xl md:text-4xl font-bold tracking-tight tabular-nums bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">{value.toLocaleString()}</p>
        <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">{label}</p>
      </div>
    </div>
  );
};

const MissionStats = () => (
  <div className="grid md:grid-cols-3 gap-6 mb-14">
    {counters.map(c => (
      <StatsCard key={c.label} {...c} />
    ))}
  </div>
);

export default MissionStats;
