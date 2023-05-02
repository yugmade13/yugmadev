import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemeContextProvider from '../../contexts/ThemeContext';
import GlobalStyles from '../../styles/Global';
import ContactMe from '../ContactMe';

describe('ContactMe test', () => {
  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <GlobalStyles />
        <ContactMe />
      </ThemeContextProvider>,
    );
  });

  it('should render Contact', async () => {
    const heading = await screen.getByRole('heading');
    const paragraph = await screen.getByLabelText('contact-paragraph');
    const form = await screen.getByRole('form', { name: 'contact-form' });

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(form).toBeInTheDocument();
  });
});
