import React, { useMemo } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const Hero = () => {
  // Mouse-parallax motion values
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.8 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.8 });

  // Map to subtle translations for different depths
  const depth1X = useTransform(sx, [ -1, 1 ], [ 18, -18 ]);
  const depth1Y = useTransform(sy, [ -1, 1 ], [ 12, -12 ]);
  const depth2X = useTransform(sx, [ -1, 1 ], [ 10, -10 ]);
  const depth2Y = useTransform(sy, [ -1, 1 ], [ 8, -8 ]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0..1
    const y = (e.clientY - rect.top) / rect.height; // 0..1
    // normalize to -1..1
    mx.set(x * 2 - 1);
    my.set(y * 2 - 1);
  };

  const noiseGradient = useMemo(() => ({
    background:
      'radial-gradient(60rem 40rem at 10% 90%, rgba(168,85,247,0.12), transparent 60%), ' +
      'radial-gradient(50rem 30rem at 90% 10%, rgba(56,189,248,0.12), transparent 55%)',
  }), []);

  return (
    <section onMouseMove={handleMouseMove} className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Animated ambient overlays with parallax */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={noiseGradient}
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-x-40 bottom-0 h-96 blur-3xl opacity-70"
        style={{ x: depth2X, y: depth2Y }}
      >
        <motion.div
          className="absolute left-1/4 w-80 h-80 bg-fuchsia-500/30 rounded-full mix-blend-screen"
          animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-1/3 w-80 h-80 bg-cyan-400/30 rounded-full mix-blend-screen"
          style={{ x: depth1X, y: depth1Y }}
          animate={{ y: [0, 14, 0], x: [0, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Foreground content */}
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

      {/* Top and bottom gradient wash to keep text readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
    </section>
  );
};

export default Hero;
