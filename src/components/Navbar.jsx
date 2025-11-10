import React from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/80 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-md bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold tracking-tight">VibeUI</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm text-white/80">
          <a href="#generate" className="hover:text-white">Generate</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#examples" className="hover:text-white">Examples</a>
        </nav>
        <div className="flex items-center space-x-3">
          <button className="hidden sm:inline-flex px-3 py-1.5 rounded-md text-sm border border-white/15 hover:border-white/30 transition">Sign in</button>
          <button className="inline-flex px-4 py-2 rounded-md text-sm bg-white text-black font-medium hover:bg-white/90 transition">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
