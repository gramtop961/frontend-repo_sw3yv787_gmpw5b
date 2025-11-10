import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Live 3D scene */}
      <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />

      {/* Soft atmospheric overlays (no solid black) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 800px at 10% 90%, rgba(168,85,247,0.10), transparent 60%), ' +
            'radial-gradient(1000px 700px at 90% 10%, rgba(56,189,248,0.10), transparent 55%)',
        }}
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />

      {/* Gentle vignette for readability without a black slab */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]" />
    </div>
  );
};

export default Background3D;
