import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { light, dark, base } from '../styles/Theme';
import useAnalyticsEventTracker from '../hooks/useAnalyticsEventTracker';

export const ThemeContext = createContext('');

const themesMap = {
  light,
  dark,
};

function ThemeContextProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') || 'light');
  const gaEventTracker = useAnalyticsEventTracker('Toggle Light and Dark');

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      gaEventTracker(newTheme);

      return prevTheme === 'light' ? 'dark' : 'light';
    });
  };

  const themeContextValue = useMemo(() => ({
    currentTheme,
    toggleTheme,
  }), [currentTheme]);

  const theme = { ...base, colors: themesMap[currentTheme] };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

ThemeContextProvider.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ThemeContextProvider;
