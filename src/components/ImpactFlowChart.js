import React, { useEffect, useState } from 'react';

// Assumed growth data (adjust with real numbers later)
// Each node: year, clients cumulative, cities cumulative
const growthData = [
  { year: 2019, clients: 2, cities: 2 },
  { year: 2020, clients: 10, cities: 4 },
  { year: 2021, clients: 35, cities: 6 },
  { year: 2022, clients: 65, cities: 8 },
  { year: 2023, clients: 95, cities: 10 },
  { year: 2024, clients: 120, cities: 11 }
];

// Simple counter hook for animated number increase
const useCountUp = (target, duration = 1200) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = Math.floor(eased * target);
      if (current !== start) {
        setValue(current);
        start = current;
      }
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return value;
};

const ImpactFlowChart = () => {
  const totalClients = growthData[growthData.length - 1].clients;
  const totalCities = growthData[growthData.length - 1].cities;
  const animatedClients = useCountUp(totalClients, 1600);
  const animatedCities = useCountUp(totalCities, 1600);

  return (
    <section id="impact" className="py-24 bg-black reveal" aria-labelledby="impact-heading">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-16">
          <div className="max-w-xl">
            <h2 id="impact-heading" className="text-3xl font-semibold mb-4 flex items-center gap-3">
              <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">Growth & Coverage</span>
              <span>Since 2019</span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              SecureAI's footprint has steadily expanded across the West Coast—adding cities and partnering with diverse clients in residential, commercial, and event spaces. This visualization highlights cumulative expansion. (Placeholder estimates; replace with live metrics later.)
            </p>
            <div className="mt-6 flex flex-wrap gap-6">
              <div className="bg-gray-800/60 rounded-xl px-6 py-4 border border-gray-700/50 shadow flex flex-col items-start">
                <span className="text-xs uppercase tracking-wider text-gray-400">Cities Covered</span>
                <span className="text-3xl font-bold text-blue-400 tabular-nums">{animatedCities}</span>
              </div>
              <div className="bg-gray-800/60 rounded-xl px-6 py-4 border border-gray-700/50 shadow flex flex-col items-start">
                <span className="text-xs uppercase tracking-wider text-gray-400">Clients Served</span>
                <span className="text-3xl font-bold text-purple-400 tabular-nums">{animatedClients}</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <svg
              viewBox="0 0 820 280"
              className="w-full max-w-full"
              role="img"
              aria-labelledby="flow-title"
              aria-describedby="flow-caption"
            >
              <title id="flow-title">SecureAI annual expansion: cumulative cities and clients</title>
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="65%" stopColor="#93c5fd" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </radialGradient>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M40 0H0V40" fill="none" stroke="#1f2937" strokeWidth="1" />
                </pattern>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Background grid for readability */}
              <rect x="0" y="0" width="820" height="280" fill="url(#grid)" opacity="0.18" />
              {/* Legend */}
              <g transform="translate(600,20)" aria-hidden="true">
                <rect x="0" y="0" width="200" height="70" rx="10" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                <text x="14" y="22" className="fill-white text-[12px] font-semibold" >Legend</text>
                <circle cx="20" cy="40" r="9" fill="url(#nodeGrad)" stroke="#3b82f6" strokeWidth="1" />
                <text x="36" y="44" className="fill-blue-100 text-[11px]">Cumulative cities / clients</text>
                <path d="M120 58 l40 0" stroke="url(#lineGrad)" strokeWidth="6" strokeLinecap="round" filter="url(#glow)" />
                <text x="14" y="62" className="fill-blue-200 text-[11px]">Growth trajectory</text>
              </g>
              {/* Animated path connecting nodes */}
              <path
                d="M80 200 L210 160 L340 140 L470 120 L600 110 L730 100"
                stroke="url(#lineGrad)"
                strokeWidth="7"
                fill="none"
                strokeLinecap="round"
                className="flow-path"
                filter="url(#glow)"
              />
              {growthData.map((g, idx) => {
                const x = 80 + idx * 130;
                const y = [200,160,140,120,110,100][idx];
                return (
                  <g key={g.year} className="flow-node">
                    <circle cx={x} cy={y} r="30" fill="url(#nodeGrad)" className="node-circle" />
                    <circle cx={x} cy={y} r="38" stroke="#3b82f6" strokeWidth="1.5" fill="none" className="node-ring" />
                    <title>{`${g.year}: ${g.cities} cities, ${g.clients} clients`}</title>
                    <text x={x} y={y - 42} textAnchor="middle" className="fill-blue-200 text-[12px] font-semibold tracking-wide drop-shadow">
                      {g.year}
                    </text>
                    <text x={x} y={y - 4} textAnchor="middle" className="fill-white font-bold text-[12px]">
                      {g.cities} cities
                    </text>
                    <text x={x} y={y + 16} textAnchor="middle" className="fill-blue-100 text-[12px]">
                      {g.clients} clients
                    </text>
                  </g>
                );
              })}
            </svg>
            <div className="sr-only">
              {growthData.map(g => (
                <p key={g.year}>{g.year}: {g.cities} cities, {g.clients} clients.</p>
              ))}
            </div>
            <p id="flow-caption" className="mt-6 text-xs text-gray-400 leading-relaxed">
              Each circle shows cumulative expansion by year: inside the circle you see total <span className="text-blue-300 font-medium">cities</span> covered (middle) and <span className="text-blue-200 font-medium">clients</span> served (bottom). The glowing line traces the overall growth trajectory from 2019 to present.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactFlowChart;
