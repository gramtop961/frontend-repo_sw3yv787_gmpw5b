import React, { useState } from 'react';
import { Sparkles, Layers, FileCode, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Sparkles,
    title: 'Natural language to UI',
    desc: 'Describe the screen you want. We translate your intent into clean, semantic code.',
    demo: 'tabs'
  },
  {
    icon: Layers,
    title: 'Responsive by default',
    desc: 'Every component is built mobile-first and scales beautifully across breakpoints.',
    demo: 'preview'
  },
  {
    icon: FileCode,
    title: 'Production-ready code',
    desc: 'Get React components with Tailwind classes you can paste directly into your app.',
    demo: 'code'
  },
  {
    icon: Settings,
    title: 'Editable & extensible',
    desc: 'Tweak prompts or adjust the code. Export to your design system in one click.',
    demo: 'toggle'
  },
];

const ToggleDemo = () => {
  const [on, setOn] = useState(true);
  return (
    <button
      onClick={() => setOn(v => !v)}
      className={`relative h-8 w-14 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 border border-white/10 ${on ? 'bg-violet-600/70' : 'bg-white/10'}`}
      aria-pressed={on}
    >
      <span
        className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow transition-transform duration-300 ${on ? 'translate-x-6' : ''}`}
      />
    </button>
  );
};

const TabsDemo = () => {
  const tabs = ['Components', 'Layouts', 'Tokens'];
  const [active, setActive] = useState('Components');
  return (
    <div className="w-full">
      <div className="flex gap-2 p-1 rounded-lg bg-white/5 border border-white/10">
        {tabs.map(t => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`relative px-3 py-1.5 text-sm rounded-md transition ${active === t ? 'text-white' : 'text-white/70 hover:text-white'}`}
          >
            {active === t && (
              <motion.span
                layoutId="pill"
                className="absolute inset-0 rounded-md bg-white/10"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">{t}</span>
          </button>
        ))}
      </div>
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-3 text-sm text-white/80"
      >
        {active === 'Components' && 'Buttons, inputs, modals and more — all accessible by default.'}
        {active === 'Layouts' && 'Dashboard shells, auth screens, onboarding flows in one click.'}
        {active === 'Tokens' && 'Color, spacing, typography scales tailored to your brand.'}
      </motion.div>
    </div>
  );
};

const PreviewDemo = () => {
  const [hue, setHue] = useState(265);
  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        {[265, 200, 140, 15].map(h => (
          <button
            key={h}
            onClick={() => setHue(h)}
            aria-label={`Set hue ${h}`}
            className="h-6 w-6 rounded-full border border-white/20"
            style={{ background: `hsl(${h} 90% 55%)` }}
          />
        ))}
      </div>
      <div className="mt-3 p-3 rounded-xl bg-white/5 border border-white/10">
        <div className="h-24 rounded-lg flex items-center justify-center text-sm text-white/90"
          style={{
            background:
              `linear-gradient(135deg, hsl(${hue} 90% 60% / .9), hsl(${hue + 40} 90% 55% / .9))`,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,.2)'
          }}
        >
          Live preview
        </div>
      </div>
    </div>
  );
};

const CodeDemo = () => {
  const sample = `button: {
  background: 'bg-violet-600 hover:bg-violet-500',
  size: 'px-4 py-2 rounded-lg',
}`;
  return (
    <pre className="text-xs leading-relaxed p-3 rounded-lg bg-black/40 border border-white/10 overflow-x-auto">
      <code>
        {sample}
      </code>
    </pre>
  );
};

const FeatureCard = ({ icon: Icon, title, desc, demo, index }) => {
  const [pos, setPos] = useState({ x: '50%', y: '50%' });
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setPos({ x: `${x}%`, y: `${y}%` });
      }}
      className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 relative overflow-hidden"
      style={{ ['--x']: pos.x, ['--y']: pos.y }}
    >
      <div className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(168,85,247,0.15), transparent 40%)' }} />
      <div className="w-10 h-10 rounded-lg grid place-items-center bg-white/10 border border-white/15">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="mt-4 text-lg font-medium">{title}</h3>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
      <div className="mt-4">
        {demo === 'toggle' && <ToggleDemo />}
        {demo === 'tabs' && <TabsDemo />}
        {demo === 'preview' && <PreviewDemo />}
        {demo === 'code' && <CodeDemo />}
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-28 relative">
      {/* subtle top gradient wash */}
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
          {features.map(({ icon, title, desc, demo }, i) => (
            <FeatureCard key={title} icon={icon} title={title} desc={desc} demo={demo} index={i} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
