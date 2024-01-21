import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import SectionHeading from '../SectionHeading';

describe('Section Heading Component', () => {
  it('Should render section heading component', () => {
    render(<SectionHeading title="Test title" icon="mood" />);
    expect(screen.getByTestId('section-heading')).toBeTruthy();
  });
  it('Should render title element', () => {
    render(<SectionHeading title="Test title" icon="mood" />);
    expect(screen.getAllByText('Test title')).toBeTruthy();
  });
});
