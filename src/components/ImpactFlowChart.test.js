import React from 'react';
import { render, screen } from '@testing-library/react';
import ImpactFlowChart from './ImpactFlowChart';

describe('ImpactFlowChart', () => {
  test('renders heading and year nodes', () => {
    render(<ImpactFlowChart />);
    expect(screen.getByText(/Growth & Coverage/i)).toBeInTheDocument();
    // Check a couple of year labels
  expect(screen.getAllByText(/2019/i)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/2024/i)[0]).toBeInTheDocument();
  });
});
