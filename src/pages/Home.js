import React from 'react';
import Hero from '../components/Hero';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';

function Home() {
  return (
    <section>
      <Hero />
      <Technologies />
      <Projects />
      <ContactMe />
    </section>
  );
}

export default Home;
