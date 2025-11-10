import React from 'react';
import { Sparkles, Layers, FileCode, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Sparkles,
    title: 'Natural language to UI',
    desc: 'Describe the screen you want. We translate your intent into clean, semantic code.'
  },
  {
    icon: Layers,
    title: 'Responsive by default',
    desc: 'Every component is built mobile-first and scales beautifully across breakpoints.'
  },
  {
    icon: FileCode,
    title: 'Production-ready code',
    desc: 'Get React components with Tailwind classes you can paste directly into your app.'
  },
  {
    icon: Settings,
    title: 'Editable & extensible',
    desc: 'Tweak prompts or adjust the code. Export to your design system in one click.'
  },
];

const Features = () => {
  return (
    <section id="features" className="py-28 bg-zinc-950 relative">
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(50%_50%_at_50%_0%,black,transparent)]">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Build UI 10x faster</h2>
          <p className="mt-3 text-white/70">From idea to on-screen in seconds. Skip boilerplate and focus on what matters.</p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              key={title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 relative overflow-hidden"
            >
              <div className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(168,85,247,0.15), transparent 40%)' }} />
              <div className="w-10 h-10 rounded-lg grid place-items-center bg-white/10 border border-white/15">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
