import { render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import Status from '../Status';

describe('Status Component', () => {
  beforeEach(() => {
    render(<Status />);
  });

  it('Should render status container element', () => {
    const element = screen.getByTestId('available-collabs-container');
    expect(element).toBeTruthy();
    expect(element.className).toBe('h-2 w-2 rounded-full bg-green-400');
  });
  it('Should render status element', () => {
    const element = screen.getAllByText('Available for collabs');
    expect(element).toBeTruthy();
  });
});
