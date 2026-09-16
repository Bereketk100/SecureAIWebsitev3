import React, { useEffect, useState } from 'react';

// Cumulative reach by year (internal estimates — replace with live metrics)
const growthData = [
  { year: 2019, clients: 2, cities: 2 },
  { year: 2020, clients: 10, cities: 4 },
  { year: 2021, clients: 35, cities: 6 },
  { year: 2022, clients: 65, cities: 8 },
  { year: 2023, clients: 95, cities: 10 },
  { year: 2024, clients: 120, cities: 11 }
];

// Chart geometry
const VB_W = 760;
const VB_H = 300;
const X0 = 62;
const X1 = 716;
const Y_TOP = 46;
const Y_BASE = 238;
const Y_MAX = 130;

const xFor = i => X0 + (i * (X1 - X0)) / (growthData.length - 1);
const yFor = clients => Y_BASE - (clients / Y_MAX) * (Y_BASE - Y_TOP);

const linePath = growthData
  .map((g, i) => `${i === 0 ? 'M' : 'L'}${xFor(i).toFixed(1)},${yFor(g.clients).toFixed(1)}`)
  .join(' ');
const areaPath = `${linePath} L${X1},${Y_BASE} L${X0},${Y_BASE} Z`;
const yTicks = [0, 30, 60, 90, 120];

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
    <section id="impact" className="py-24 bg-white reveal" aria-labelledby="impact-heading">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
          <div>
            <p className="eyebrow text-brand-600">Growth &amp; Coverage</p>
            <h2
              id="impact-heading"
              className="mt-5 font-display font-extrabold text-3xl md:text-[2.5rem] leading-tight tracking-tight rule-accent"
            >
              Stability That Inspires Confidence
            </h2>
            <p className="mt-7 text-base leading-relaxed text-slateink">
              Since 2019 our footprint has grown steadily across the West Coast —
              added one account at a time, in residential, commercial, industrial
              and event settings. Most of that growth came from referrals by
              property managers who had already replaced another provider.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-px bg-mist-300 border border-mist-300">
              <div className="bg-mist-100 px-6 py-7">
                <p className="font-display font-extrabold text-4xl tabular-nums text-navy-800">
                  {animatedCities}
                </p>
                <p className="mt-2 font-display text-[11px] font-bold uppercase tracking-eyebrow text-slateink-500">
                  Cities Covered
                </p>
              </div>
              <div className="bg-mist-100 px-6 py-7">
                <p className="font-display font-extrabold text-4xl tabular-nums text-navy-800">
                  {animatedClients}
                </p>
                <p className="mt-2 font-display text-[11px] font-bold uppercase tracking-eyebrow text-slateink-500">
                  Clients Served
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="border border-mist-300 bg-white p-6 md:p-8">
              <p className="font-display text-[11px] font-bold uppercase tracking-eyebrow text-slateink-500">
                Cumulative Clients Served By Year
              </p>
              <svg
                viewBox={`0 0 ${VB_W} ${VB_H}`}
                className="mt-6 w-full"
                role="img"
                aria-labelledby="flow-title"
                aria-describedby="flow-caption"
              >
                <title id="flow-title">
                  SecureAI cumulative clients served and cities covered, 2019 to 2024
                </title>
                <defs>
                  <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0057B8" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#0057B8" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Horizontal gridlines and value axis */}
                {yTicks.map(t => (
                  <g key={t}>
                    <line
                      x1={X0}
                      x2={X1}
                      y1={yFor(t)}
                      y2={yFor(t)}
                      stroke="#E1E8EF"
                      strokeWidth="1"
                    />
                    <text
                      x={X0 - 14}
                      y={yFor(t) + 4}
                      textAnchor="end"
                      fill="#647C99"
                      fontSize="12"
                    >
                      {t}
                    </text>
                  </g>
                ))}

                {/* Baseline */}
                <line x1={X0} x2={X1} y1={Y_BASE} y2={Y_BASE} stroke="#0F4C91" strokeWidth="1.5" />

                {/* Area + trend line */}
                <path d={areaPath} fill="url(#areaFill)" />
                <path
                  d={linePath}
                  className="flow-path"
                  fill="none"
                  stroke="#0057B8"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data points */}
                <g>
                  {growthData.map((g, i) => (
                    <g key={g.year} className="flow-node">
                      <title>{`${g.year}: ${g.clients} clients, ${g.cities} cities`}</title>
                      <circle
                        cx={xFor(i)}
                        cy={yFor(g.clients)}
                        r="6"
                        fill="#FFFFFF"
                        stroke="#002B5C"
                        strokeWidth="2.5"
                      />
                      <text
                        x={xFor(i)}
                        y={yFor(g.clients) - 16}
                        textAnchor="middle"
                        fill="#002B5C"
                        fontSize="13"
                        fontWeight="700"
                      >
                        {g.clients}
                      </text>
                      <text
                        x={xFor(i)}
                        y={Y_BASE + 26}
                        textAnchor="middle"
                        fill="#3F5670"
                        fontSize="12.5"
                        fontWeight="600"
                      >
                        {g.year}
                      </text>
                      <text
                        x={xFor(i)}
                        y={Y_BASE + 46}
                        textAnchor="middle"
                        fill="#647C99"
                        fontSize="11"
                      >
                        {g.cities} cities
                      </text>
                    </g>
                  ))}
                </g>
              </svg>
              <div className="sr-only">
                {growthData.map(g => (
                  <p key={g.year}>
                    {g.year}: {g.cities} cities, {g.clients} clients.
                  </p>
                ))}
              </div>
              <p
                id="flow-caption"
                className="mt-5 pt-5 border-t border-mist-300 text-xs leading-relaxed text-slateink-500"
              >
                Each point is the cumulative number of clients under contract at
                year end, with the number of cities covered noted beneath. Figures
                are internal estimates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactFlowChart;
