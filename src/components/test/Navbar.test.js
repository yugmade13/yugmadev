import React from 'react';
import { render, screen, act } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import ThemeContextProvider from '../../contexts/ThemeContext';
import GlobalStyles from '../../styles/Global';
import Navbar from '../Navbar';

describe('Navbar testing', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ThemeContextProvider>
          <GlobalStyles />
          <Navbar />
        </ThemeContextProvider>
      </BrowserRouter>,
    );
  });

  it('should render Navbar', async () => {
    const logo = await screen.getByAltText('logo image');
    const button = await screen.getByRole('button');
    const github = await screen.getByTestId('github');
    const linkedin = await screen.getByTestId('linkedin');

    await act(async () => UserEvent.click(button));

    expect(logo).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(github).toBeInTheDocument();
    expect(linkedin).toBeInTheDocument();
    expect(screen.getByTestId('navbar')).toHaveStyle('background: rgb(35, 39, 47)');
  });
});
