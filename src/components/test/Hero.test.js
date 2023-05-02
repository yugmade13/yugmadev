import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemeContextProvider from '../../contexts/ThemeContext';
import GlobalStyles from '../../styles/Global';
import Hero from '../Hero';

describe('Hero testing', () => {
  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <GlobalStyles />
        <Hero />
      </ThemeContextProvider>,
    );
  });

  it('should render Hero', async () => {
    const heading = await screen.getByRole('heading');
    const paragraph = await screen.getByText(
      'Saya adalah seorang Front-End Web Developer yang berpengalaman mengembangkan website yang menarik dan fungsional. Saya tertarik pada penulisan kode yang baik, rapi, terstruktur serta mudah dibaca karena saya peduli.',
    );

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Hai SayaYugma Dewangga 👋');
    expect(paragraph).toBeInTheDocument();
  });
});
