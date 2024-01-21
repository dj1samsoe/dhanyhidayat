import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import InfiniteLoopSliders from '../InfiniteLoopSliders';

describe('Infinite Loop Sliders Component', () => {
  it('Should render infinite loop sliders component', () => {
    render(
      <InfiniteLoopSliders>
        <h1>Children</h1>
      </InfiniteLoopSliders>
    );
    const element = screen.getByTestId('infinite-loop-slider');
    expect(element).toBeTruthy();
  });
});
