import React from 'react';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="group flex items-center space-x-2">
          <div className="p-2 rounded-md bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 shadow-[0_0_0_0_rgba(0,0,0,0)] group-hover:shadow-[0_8px_40px_-8px_rgba(139,92,246,0.6)] transition-shadow">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold tracking-tight">VibeUI</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8 text-sm text-white/80">
          <a href="#generate" className="hover:text-white transition-colors">Generate</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#examples" className="hover:text-white transition-colors">Examples</a>
        </nav>
        <div className="flex items-center space-x-3">
          <button className="hidden sm:inline-flex px-3 py-1.5 rounded-md text-sm border border-white/15 hover:border-white/30 transition-colors">Sign in</button>
          <button className="inline-flex px-4 py-2 rounded-md text-sm bg-white text-black font-medium shadow-[0_10px_40px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_16px_50px_-12px_rgba(255,255,255,0.6)] transition-shadow">Get Started</button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
