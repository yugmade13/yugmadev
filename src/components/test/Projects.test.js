import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemeContextProvider from '../../contexts/ThemeContext';
import GlobalStyles from '../../styles/Global';
import Projects from '../Projects';

describe('Projects test', () => {
  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <GlobalStyles />
        <Projects />
      </ThemeContextProvider>,
    );
  });

  it('should render Projects', async () => {
    const heading2 = await screen.getByLabelText('project-heading2');
    const heading3 = await screen.getAllByLabelText('project-heading3');
    const paragraph = await screen.getAllByLabelText('project-paragraph');
    const links = await screen.getAllByLabelText('project-link');
    const images = await screen.getAllByLabelText('project-image');

    expect(heading2).toBeInTheDocument();
    expect(heading3).toHaveLength(3);
    expect(paragraph).toHaveLength(3);
    expect(links).toHaveLength(3);
    expect(images).toHaveLength(3);
  });
});
