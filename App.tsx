
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Coach from './components/Coach';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';
import Results from './components/Results';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-obsidian text-white overflow-x-hidden selection:bg-lime selection:text-black">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="philosophy">
          <Coach />
        </section>
        <section id="programs">
          <Programs />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="results">
          <Results />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="location">
          <Location />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
