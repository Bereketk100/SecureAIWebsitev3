import React from 'react';
import ServiceDetailsLayout from './ServiceDetailsLayout';

const NeighborhoodSecurityDetails = () => (
  <ServiceDetailsLayout
    path="/services/neighborhood"
    title="Residential, Apartment & HOA Security"
    lede="Standing posts and nightly patrol for apartment communities, HOAs and gated neighborhoods — with reporting clear enough to share with your board or your residents."
    heroImage="/secure12.jpeg"
    heroAlt="SecureAI security officer patrolling an apartment community during the day"
    intro={{
      heading: 'Coverage Residents Notice and Boards Can Justify',
      body: [
        'Residential security lives or dies on consistency. Officers who know the property, recognize the residents and appear at the same trouble spots night after night change what happens in a parking structure at 1 a.m. We staff communities with officers assigned to your site rather than rotated through it, and we brief them on the specific issues your management team is dealing with.',
        'Because residential accounts answer to boards, owners and tenants, documentation matters as much as presence. You receive nightly reports with times, locations and photos — the kind of record that settles a question at a board meeting or supports a police report instead of complicating it.'
      ],
      image: '/secure2.jpeg',
      imageAlt: 'SecureAI officer on an evening residential security shift'
    }}
    includes={{
      heading: 'What Residential Coverage Includes',
      items: [
        'Apartment and multi-family communities',
        'HOA and gated-neighborhood patrol',
        'Standing courtesy-officer posts',
        'Parking structure and carport sweeps',
        'Pool, gym and common-area enforcement',
        'Entry gate and access-point monitoring',
        'Noise and nuisance response',
        'Trespass and loitering intervention',
        'Package and mailroom area checks',
        'Vacant unit and turnover checks',
        'Resident incident documentation',
        'Property-manager reporting access'
      ]
    }}
    approach={{
      heading: 'How We Work With Property Managers',
      items: [
        {
          title: 'Dedicated Officers',
          description:
            'Officers are assigned to your community so they learn the property, the residents and the problem hours.',
          icon: 'users'
        },
        {
          title: 'Defined Patrol Routes',
          description:
            'Routes are built around your actual trouble spots and adjusted as incident patterns change.',
          icon: 'pin'
        },
        {
          title: 'Board-Ready Reporting',
          description:
            'Nightly logs and incident write-ups you can forward to owners, boards or law enforcement without editing.',
          icon: 'clipboard'
        },
        {
          title: 'Resident De-escalation',
          description:
            'Officers trained to resolve disputes and nuisance calls calmly — protecting the community and your liability.',
          icon: 'shield'
        }
      ]
    }}
    cta={{
      heading: 'Give your community coverage it can count on',
      body: 'Tell us the size of the property, the hours that cause the most complaints, and what the last provider got wrong.'
    }}
  />
);

export default NeighborhoodSecurityDetails;
