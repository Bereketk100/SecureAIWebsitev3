import React from 'react';
import ServiceDetailsLayout from './ServiceDetailsLayout';

const FirewatchDetails = () => (
  <ServiceDetailsLayout
    path="/services/firewatch"
    title="Firewatch Services"
    lede="Certified fire-safety coverage for the hours your detection and suppression systems cannot provide it — documented shift by shift for your inspector, insurer and property owner."
    heroImage="/secure3.jpeg"
    heroAlt="SecureAI firewatch officer inspecting an industrial site at night"
    intro={{
      heading: 'Coverage When Your Systems Are Down',
      body: [
        'When an alarm panel is offline, a sprinkler loop is drained or hot work is underway, most jurisdictions require a dedicated human watch. SecureAI supplies officers trained specifically for that role: continuous rounds of the affected area, hazard identification, extinguisher and exit verification, and immediate notification of the fire department when something is wrong.',
        'Every round is logged with a time stamp and location, which gives you a clean record to hand to a fire marshal or insurance adjuster. Our supervisors coordinate directly with your general contractor or facilities lead so the watch starts the hour your system goes down — not the next business day.'
      ],
      image: '/secure1.jpeg',
      imageAlt: 'SecureAI officer reporting by radio during a firewatch shift'
    }}
    includes={{
      heading: 'When Property Owners Call Us',
      items: [
        'Fire alarm systems offline or under maintenance',
        'Sprinkler systems drained or being serviced',
        'Active construction and renovation phases',
        'Hot work: welding, cutting and grinding',
        'Temporary shutdown of automatic detection',
        'Backup and standby system testing',
        'Power outages affecting life-safety systems',
        'Post-incident monitoring of a damaged structure',
        'High-risk seasonal periods',
        'Facility system upgrades and cutovers',
        'Large gatherings in older structures',
        'Extended fire-prevention coverage by contract'
      ]
    }}
    approach={{
      heading: 'How Our Firewatch Shifts Run',
      items: [
        {
          title: 'Continuous Rounds',
          description:
            'Officers walk the affected area on a defined interval for the full duration of the impairment — never from a fixed chair.',
          icon: 'clock'
        },
        {
          title: 'Hazard Identification',
          description:
            'Blocked exits, accumulated combustibles, unattended hot work and disabled equipment are flagged and escalated immediately.',
          icon: 'flame'
        },
        {
          title: 'Documented Patrols',
          description:
            'Each round is time-stamped and location-verified, producing the written log inspectors and insurers ask for.',
          icon: 'clipboard'
        },
        {
          title: 'Emergency Coordination',
          description:
            'Clear escalation to the fire department and your on-call contacts, with a supervisor reachable throughout the shift.',
          icon: 'siren'
        }
      ]
    }}
    cta={{
      heading: "Need a firewatch on site tonight?",
      body: 'Tell us the impairment, the area involved and the hours to be covered. We will confirm staffing and the reporting you will receive.'
    }}
  />
);

export default FirewatchDetails;
