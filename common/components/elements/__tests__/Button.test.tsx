import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Button from '../Button';

describe('Button Component', () => {
  const props = {
    className: 'mt-2'
  };
  it('Should render button element with props', () => {
    render(<Button className={props.className} />);
    const breakline = screen.getByTestId('btn');
    expect(breakline).toBeTruthy();
    expect(breakline.className).toBe(
      `flex gap-2 items-center bg-neutral-500 hover:bg-neutral-600 dark:bg-neutral-600 dark:hover:bg-neutral-700 text-neutral-50 py-2 px-4 rounded-lg transition-all duration-300 text-[15px] font-bricolage ${props.className}`
    );
  });
});
