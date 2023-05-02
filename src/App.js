import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import GlobalStyles from './styles/Global';
import ThemeContextProvider from './contexts/ThemeContext';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const TRACKING_ID = 'UA-266002182-1';
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </ThemeContextProvider>
  );
}

export default App;
