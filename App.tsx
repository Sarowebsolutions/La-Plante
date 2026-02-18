import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Coach from './components/Coach.tsx';
import Programs from './components/Programs.tsx';
import Testimonials from './components/Testimonials.tsx';
import Results from './components/Results.tsx';
import FAQ from './components/FAQ.tsx';
import Location from './components/Location.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-obsidian text-white overflow-x-hidden selection:bg-lime selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Coach />
        <Programs />
        <Testimonials />
        <Results />
        <FAQ />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default App;