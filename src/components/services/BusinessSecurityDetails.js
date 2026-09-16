import React from 'react';
import ServiceDetailsLayout from './ServiceDetailsLayout';

const BusinessSecurityDetails = () => (
  <ServiceDetailsLayout
    path="/services/business"
    title="Security Officers for Business & Commercial Property"
    lede="Uniformed, state-licensed officers posted at your building — controlling access, deterring loss and handling incidents with the composure your tenants and employees expect."
    heroImage="/secure2.jpeg"
    heroAlt="SecureAI security officer standing post at a commercial property"
    intro={{
      heading: 'A Professional Presence, Not Just a Warm Body',
      body: [
        'An officer at the door changes how a property behaves. Ours arrive in full uniform, briefed on your site plan, your tenants and your escalation rules, and they are trained in de-escalation before they are trained in anything else. Posts can be armed or unarmed, staffed for business hours, overnight coverage or around the clock.',
        'What separates this from a typical guard contract is what happens after the shift. Access events, patrol rounds and incidents are logged as they occur and delivered to you as a report — so a question about Tuesday at 2 a.m. has an answer rather than a shrug.'
      ],
      image: '/secure1.jpeg',
      imageAlt: 'SecureAI officer coordinating by radio during an overnight commercial post'
    }}
    includes={{
      heading: 'What a Commercial Post Covers',
      items: [
        'Corporate and multi-tenant office security',
        'Retail and shopping-center coverage',
        'Warehouse and distribution-center posts',
        'Industrial facility safeguarding',
        'Access control and visitor management',
        'Lobby, reception and concierge posts',
        'Interior and exterior foot patrol',
        'Opening, closing and key control',
        'Alarm and emergency response',
        'Asset and equipment protection',
        'Employee escort and termination standby',
        'Written site-specific security planning'
      ]
    }}
    approach={{
      heading: 'How We Staff and Supervise Your Post',
      items: [
        {
          title: 'Vetted & Licensed',
          description:
            'Background-checked, state-licensed officers, trained on your property before their first independent shift.',
          icon: 'badge'
        },
        {
          title: 'Access Control',
          description:
            'Visitor screening, credential checks and key management handled to a written procedure you approve.',
          icon: 'lock'
        },
        {
          title: 'Local Supervision',
          description:
            'Field supervisors conduct in-person post checks and are reachable directly — no national call queue.',
          icon: 'phone'
        },
        {
          title: 'Reported Coverage',
          description:
            'Patrols and incidents documented on shift, with a report in your inbox rather than a filing cabinet.',
          icon: 'clipboard'
        }
      ]
    }}
    cta={{
      heading: 'Secure your building with officers you can account for',
      body: 'Send us the address, the hours you need staffed and any history with previous providers. We will put together a written coverage proposal.'
    }}
  />
);

export default BusinessSecurityDetails;
