import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 text-xs text-white/80 bg-white/10 border border-white/15 rounded-full px-3 py-1 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>AI-powered UI generator</span>
          </motion.div>
          <motion.h1
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight"
          >
            Turn plain words into beautiful, production-ready interfaces.
          </motion.h1>
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-lg text-white/80 max-w-2xl"
          >
            Describe the screen you want and watch it come to life. Generate React components, Tailwind styles, and responsive layouts in seconds.
          </motion.p>
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#generate" className="px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition-colors">Try the demo</a>
            <a href="#features" className="px-5 py-3 rounded-md border border-white/20 hover:border-white/40 transition-colors">Learn more</a>
          </motion.div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -inset-x-40 bottom-0 h-96 blur-3xl opacity-60">
        <div className="absolute left-1/4 w-80 h-80 bg-fuchsia-500/30 rounded-full mix-blend-screen" />
        <div className="absolute right-1/3 w-80 h-80 bg-cyan-400/30 rounded-full mix-blend-screen" />
      </div>
    </section>
  );
};

export default Hero;
