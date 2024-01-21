import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import Copyright from '../Copyright';

describe('Copyright Component', () => {
  const currentYear = new Date().getFullYear();

  beforeEach(() => {
    render(<Copyright />);
  });

  it('Should render copyright icon element', () => {
    const element = screen.getByText('©');
    expect(element).toBeTruthy();
  });

  it('Should render current year element', () => {
    const element = screen.getAllByText(currentYear).at(0);
    expect(element).toBeTruthy();
  });

  it('Should render with text element', () => {
    const element = screen.getAllByText('with').at(0);
    expect(element).toBeTruthy();
  });

  it('Should render love icon element', () => {
    const element = screen.getAllByText('❤').at(0);
    expect(element).toBeTruthy();
    expect(element?.className).toBe('text-red-500 animate-pulse');
  });

  it('Should render by text element', () => {
    const element = screen.getAllByText('by').at(0);
    expect(element).toBeTruthy();
  });

  it('Should render dhanhid text element', () => {
    const element = screen.getAllByText('dhanhid').at(0);
    expect(element).toBeTruthy();
    expect(element?.className).toBe('hover:dark:text-neutral-400');
  });
});
