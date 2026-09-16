import React from 'react';
import ServiceDetailsLayout from './ServiceDetailsLayout';

const AdditionalServicesDetails = () => (
  <ServiceDetailsLayout
    path="/services/additional"
    title="Reporting & Account Oversight"
    lede="Every patrol, checkpoint and incident recorded as it happens — so the coverage you are paying for is something you can see rather than something you have to trust."
    heroImage="/secure1.jpeg"
    heroAlt="SecureAI officer documenting a patrol round on site"
    intro={{
      heading: 'Coverage You Can Verify',
      body: [
        'The most common complaint about private security has nothing to do with the officers. It is that owners and managers have no way to confirm the guard was on site, walked the route or checked the doors. We built our reporting around that gap: officers scan physical checkpoints as they work, incidents are written up on shift with photos attached, and the record reaches you rather than sitting in a binder at a branch office.',
        'The result is an account you can audit. Nightly activity summaries, checkpoint completion, response times and incident history are all available to your team — the same information our supervisors use to manage the post, shared with the person paying for it.'
      ],
      image: '/secure10.png',
      imageAlt: 'SecureAI officer application showing checkpoint scanning and shift reporting',
      imageContain: true
    }}
    includes={{
      heading: 'What You Receive on Every Account',
      items: [
        'Nightly patrol and activity summaries',
        'Checkpoint scan verification at each stop',
        'On-shift officer location visibility',
        'Out-of-zone and missed-round alerts',
        'Written incident reports with photos',
        'Time-stamped arrival and departure logs',
        'Response-time tracking on call-outs',
        'Post orders documented and version-controlled',
        'Shift scheduling and coverage confirmation',
        'Monthly account performance review',
        'Board and insurer-ready report exports',
        'Direct line to your field supervisor'
      ]
    }}
    approach={{
      heading: 'How Oversight Works',
      items: [
        {
          title: 'Verified Checkpoints',
          description:
            'Officers scan checkpoints placed around the property, so a completed round is a record rather than a claim.',
          icon: 'pin'
        },
        {
          title: 'Reports on Shift',
          description:
            'Incidents are documented as they happen, with photos, times and locations — not reconstructed days later.',
          icon: 'clipboard'
        },
        {
          title: 'Supervisor Review',
          description:
            'Field supervisors review logs and conduct in-person post checks, correcting problems before you notice them.',
          icon: 'badge'
        },
        {
          title: 'Account Reviews',
          description:
            'A recurring review of coverage, incidents and trends, with adjustments to the post orders where the data calls for it.',
          icon: 'chart'
        }
      ]
    }}
    cta={{
      heading: 'See what your current coverage is actually delivering',
      body: 'Tell us about your property and what your existing provider reports back to you. We will show you what the record looks like on a SecureAI account.'
    }}
  />
);

export default AdditionalServicesDetails;
