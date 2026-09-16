import React from 'react';
import ServiceDetailsLayout from './ServiceDetailsLayout';

const MobilePatrolDetails = () => (
  <ServiceDetailsLayout
    path="/services/mobile-patrol"
    title="Mobile Patrol Services"
    lede="Marked vehicle patrols on randomized schedules, with documented checkpoints at every stop — cost-effective coverage for properties that do not need a full-time post."
    heroImage="/secure4.jpeg"
    heroAlt="SecureAI marked patrol vehicle and officer beginning a mobile patrol route"
    intro={{
      heading: 'Visible Deterrence Across Multiple Properties',
      body: [
        'A marked vehicle arriving at unpredictable intervals is one of the most effective deterrents in private security, and one of the most affordable. Officers complete a defined route at each stop — perimeter check, lighting and door checks, parking areas, trash enclosures and any trouble spots you identify — then move on to the next property.',
        'Patrol times are deliberately randomized so a pattern cannot be learned, and each checkpoint is scanned on arrival. That produces a log you can read the next morning showing exactly when your property was covered and what the officer found.'
      ],
      image: '/secure3.jpeg',
      imageAlt: 'SecureAI officer conducting a night exterior patrol check'
    }}
    includes={{
      heading: 'What Each Patrol Stop Includes',
      items: [
        'Randomized patrol timing by contract',
        'Marked vehicle and uniformed officer',
        'Perimeter and entry-point checks',
        'Parking lot and garage sweeps',
        'Lighting and door-security verification',
        'Checkpoint scanning at each stop',
        'Alarm and after-hours call response',
        'Trespass and loitering intervention',
        'Vacant and seasonal property checks',
        'Photo documentation of findings',
        'Nightly activity reporting',
        'Escalation to local law enforcement'
      ]
    }}
    approach={{
      heading: 'How Mobile Patrol Is Delivered',
      items: [
        {
          title: 'Unpredictable Timing',
          description:
            'Routes and arrival windows vary each night, so the schedule cannot be learned and worked around.',
          icon: 'clock'
        },
        {
          title: 'Verified Checkpoints',
          description:
            'Officers scan physical checkpoints on arrival, confirming the stop actually happened and how long it took.',
          icon: 'pin'
        },
        {
          title: 'Alarm Response',
          description:
            'Patrol units respond to after-hours alarms and calls, meeting law enforcement or your staff on site.',
          icon: 'siren'
        },
        {
          title: 'Morning Reporting',
          description:
            'A nightly log with times, locations and photos lands with you before the property opens.',
          icon: 'clipboard'
        }
      ]
    }}
    cta={{
      heading: 'Add patrol coverage to your properties',
      body: 'Share the addresses and how many stops per night you want. We will map a route and quote it — single site or full portfolio.'
    }}
  />
);

export default MobilePatrolDetails;
