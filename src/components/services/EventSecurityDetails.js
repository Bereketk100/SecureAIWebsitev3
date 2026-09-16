import React from 'react';
import ServiceDetailsLayout from './ServiceDetailsLayout';

const EventSecurityDetails = () => (
  <ServiceDetailsLayout
    path="/services/event"
    title="Event Security Services"
    lede="Entry screening, crowd management and VIP coverage for corporate functions, private events and public gatherings — planned in advance, staffed to the guest count."
    heroImage="/secure15.jpeg"
    heroAlt="SecureAI officers managing guest flow at an event entrance"
    intro={{
      heading: 'Planned Before the Doors Open',
      body: [
        'Event security is decided in the planning meeting, not at the gate. We walk the venue with you beforehand to set entry points, screening procedure, guest flow, restricted areas and the escalation path if something goes wrong, then staff the event to the guest count and the risk profile rather than to a round number.',
        'On the day, officers handle entry and credential checks, monitor crowd density at the pinch points, escort VIPs and coordinate by radio through a single point of contact. The goal is an event where guests notice the organization and not the security.'
      ],
      image: '/secure4.jpeg',
      imageAlt: 'SecureAI officer coordinating event coverage by radio'
    }}
    includes={{
      heading: 'What Event Coverage Includes',
      items: [
        'Pre-event venue walkthrough and planning',
        'Entry screening and access control',
        'Bag and ID verification',
        'Crowd flow and capacity management',
        'VIP and executive protection',
        'Perimeter and restricted-area security',
        'Roving interior and exterior patrols',
        'Emergency and evacuation planning',
        'Command post and radio communications',
        'CCTV and camera monitoring support',
        'Event staff and vendor coordination',
        'Incident documentation and follow-up'
      ]
    }}
    approach={{
      heading: 'How We Run an Event',
      items: [
        {
          title: 'Advance Planning',
          description:
            'A site walk and written security plan covering entries, capacity, restricted zones and emergency procedure.',
          icon: 'clipboard'
        },
        {
          title: 'Controlled Entry',
          description:
            'Screening, ticket and credential checks run to keep lines moving without letting the wrong guest through.',
          icon: 'ticket'
        },
        {
          title: 'Crowd Management',
          description:
            'Officers positioned at the pinch points, watching density and resolving friction before it becomes a scene.',
          icon: 'users'
        },
        {
          title: 'Single Point of Contact',
          description:
            'One supervisor on radio with your event lead, so decisions get made in seconds rather than escalated.',
          icon: 'phone'
        }
      ]
    }}
    cta={{
      heading: 'Staff your next event properly',
      body: 'Send us the venue, date and expected attendance. We will come back with a staffing plan and a flat quote for the event.'
    }}
  />
);

export default EventSecurityDetails;
