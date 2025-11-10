import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import PromptSection from './components/PromptSection.jsx';
import Features from './components/Features.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <PromptSection />
        <Features />
      </main>
    </div>
  );
}

export default App;
