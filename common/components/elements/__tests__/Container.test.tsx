import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import Container from '../Container';

describe('Container Component', () => {
  it('Should render container element', () => {
    render(
      <Container>
        <h1>Children</h1>
      </Container>
    );
    const element = screen.getByTestId('container');
    expect(element).toBeTruthy();
  });
});
