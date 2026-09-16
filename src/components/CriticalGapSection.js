import React from 'react';

const shortfalls = [
  'No practical way to confirm an officer was on site, or for how long.',
  'Incidents written up hours later, from memory, after the fact.',
  'Patrol logs kept on paper that clients never actually see.',
  'No view of patterns across properties, shifts or seasons.',
  'Escalation that stalls in a call center instead of reaching a supervisor.'
];

const standards = [
  'Check-ins are time-stamped and location-verified at defined points.',
  'Incidents are logged on shift, with photos attached where relevant.',
  'Nightly reports go to you — not into a filing cabinet.',
  'Recurring issues are flagged so patrol routes get adjusted.',
  'Local supervisors answer escalation directly, day or night.'
];

const CriticalGapSection = () => {
  return (
    <section
      className="py-24 bg-mist-100 border-y border-mist-300 reveal"
      id="critical-gap"
      aria-labelledby="critical-gap-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="eyebrow text-brand-600">The Difference</p>
          <h2
            id="critical-gap-heading"
            className="mt-5 font-display font-extrabold text-3xl md:text-[2.5rem] leading-tight tracking-tight rule-accent"
          >
            Because Accountability Is the Service
          </h2>
          <p className="mt-7 text-base leading-relaxed text-slateink">
            Most security contracts are sold on presence alone. The gap between a
            guard being scheduled and a property actually being covered is where
            loss, liability and frustration live — and closing it is the whole
            reason this company exists.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          <div className="bg-white border border-mist-300 p-9 lg:p-10">
            <h3 className="font-display font-bold text-xl text-slateink-600">
              How the Industry Usually Works
            </h3>
            <ul className="mt-7 space-y-5">
              {shortfalls.map(item => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-2 w-4 h-px bg-slateink-500 shrink-0" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-slateink">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-navy-900 text-white p-9 lg:p-10">
            <h3 className="font-display font-bold text-xl">How SecureAI Works</h3>
            <ul className="mt-7 space-y-5">
              {standards.map(item => (
                <li key={item} className="flex items-start gap-4">
                  <svg
                    className="w-5 h-5 text-brand-200 mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm leading-relaxed text-white/85">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-9 pt-7 border-t border-white/15 text-sm leading-relaxed text-white/80">
              <strong className="font-display font-bold text-white">The result:</strong>{' '}
              fewer incidents, cleaner documentation when something does happen,
              and a property owner who never has to wonder what they paid for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CriticalGapSection;
