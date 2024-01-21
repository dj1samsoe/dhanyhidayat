import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import SectionSubHeading from '../SectionSubHeading';

describe('Section Sub Heading Component', () => {
  it('Should render section sub heading component', () => {
    render(<SectionSubHeading>Test children</SectionSubHeading>);
    expect(screen.getByTestId('section-sub-heading')).toBeTruthy();
  });
});
