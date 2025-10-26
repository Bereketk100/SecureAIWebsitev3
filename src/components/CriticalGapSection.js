import React from 'react';

const CriticalGapSection = () => {
  return (
    <section className="py-24 bg-gray-900 reveal" id="critical-gap" aria-labelledby="critical-gap-heading">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <h2 id="critical-gap-heading" className="text-3xl font-semibold mb-4 inline-flex items-center gap-3">
            <span className="bg-red-600/20 text-red-300 px-3 py-1 rounded-full text-sm font-medium">The Critical Gap</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">In Traditional Security</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Most legacy security approaches rely heavily on manual patrol logs, delayed reporting, and fragmented communication. This creates blind spots—reduced accountability, slower response, and limited historical insight.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gray-800/60 backdrop-blur border border-gray-700/60 rounded-2xl p-8 shadow-lg flex flex-col gap-6">
            <h3 className="text-xl font-semibold">Where Traditional Methods Fall Short</h3>
            <ul className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <li className="flex items-start gap-3"><span className="text-red-400 mt-1">•</span><span>Paper / static logs make real-time validation nearly impossible.</span></li>
              <li className="flex items-start gap-3"><span className="text-red-400 mt-1">•</span><span>Incidents often documented after the fact—reactive vs proactive.</span></li>
              <li className="flex items-start gap-3"><span className="text-red-400 mt-1">•</span><span>No unified view of patterns across properties or time.</span></li>
              <li className="flex items-start gap-3"><span className="text-red-400 mt-1">•</span><span>Limited audit trail weakens compliance and trust.</span></li>
              <li className="flex items-start gap-3"><span className="text-red-400 mt-1">•</span><span>Communication silos slow escalation and coordinated response.</span></li>
            </ul>
          </div>
          <div className="bg-blue-900/40 border border-blue-800 rounded-2xl p-8 shadow-lg flex flex-col gap-6">
            <h3 className="text-xl font-semibold">How SecureAI Closes the Gap</h3>
            <ul className="space-y-4 text-blue-100 text-sm leading-relaxed">
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">✓</span><span>Live digital patrol logs with geo-verification and timestamp integrity.</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">✓</span><span>Predictive alerting model to surface anomalies early.</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">✓</span><span>Cross-location analytics to identify recurring vulnerabilities.</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">✓</span><span>Immutable event trail for transparency and audit-readiness.</span></li>
              <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">✓</span><span>Unified communication funnel for prioritized escalation.</span></li>
            </ul>
            <div className="mt-4 bg-black/30 border border-blue-700 rounded-xl p-5 text-sm text-blue-200 leading-relaxed">
              <p><strong className="text-white font-semibold">Result:</strong> Faster prevention, higher accountability, and actionable intelligence that compounds over time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CriticalGapSection;
