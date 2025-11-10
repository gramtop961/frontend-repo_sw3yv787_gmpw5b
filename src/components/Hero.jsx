import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs text-white/80 bg-white/10 border border-white/15 rounded-full px-3 py-1 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>AI-powered UI generator</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
            Turn plain words into beautiful, production-ready interfaces.
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Describe the screen you want and watch it come to life. Generate React components, Tailwind styles, and responsive layouts in seconds.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#generate" className="px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">Try the demo</a>
            <a href="#features" className="px-5 py-3 rounded-md border border-white/20 hover:border-white/40 transition">Learn more</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
    </section>
  );
};

export default Hero;
