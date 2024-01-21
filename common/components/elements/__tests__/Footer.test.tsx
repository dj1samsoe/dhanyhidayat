import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import Footer from '../Footer';

describe('Footer Component', () => {
  const currentYear = new Date().getFullYear();
  it('Should render footer element', () => {
    render(<Footer />);
    const element = screen.getByTestId('footer');
    expect(element).toBeTruthy();
  });
  it('Should render copyright logo', () => {
    render(<Footer />);
    const element = screen.getAllByText('©');
    expect(element).toBeTruthy();
  });
  it('Should render copyright year', () => {
    render(<Footer />);
    const element = screen.getAllByText(currentYear).at(0);
    expect(element).toBeTruthy();
  });
  it('Should render text element', () => {
    render(<Footer />);
    const element = screen.getAllByText('by Dhany Hidayat');
    expect(element).toBeTruthy();
  });
});
