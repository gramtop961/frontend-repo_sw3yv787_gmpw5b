import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import PromptSection from './components/PromptSection.jsx';
import Features from './components/Features.jsx';
import Background3D from './components/Background3D.jsx';

function App() {
  return (
    <div className="min-h-screen text-white font-[Inter] relative">
      <Background3D />
      <Navbar />
      <main>
        <Hero />
        <PromptSection />
        <Features />
        <footer className="py-16 border-t border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-white/80">© {new Date().getFullYear()} VibeUI. All rights reserved.</p>
            <div className="text-sm text-white/80 flex items-center gap-6">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
