import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemeContextProvider from '../../contexts/ThemeContext';
import GlobalStyles from '../../styles/Global';
import Technologies from '../Technologies';

describe('Technologies test', () => {
  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <GlobalStyles />
        <Technologies />
      </ThemeContextProvider>,
    );
  });

  it('should be render Technologies', async () => {
    const heading = await screen.getByRole('heading');
    const paragraph = await screen.getByText(/tools/i);
    const list = await screen.getByRole('list');
    const items = within(list).getAllByRole('listitem');
    const spans = await screen.getAllByLabelText('hover');

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(items.length).toBe(18);
    expect(spans.length).toBe(18);
  });
});
