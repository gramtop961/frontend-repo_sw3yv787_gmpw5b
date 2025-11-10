import React from 'react';
import { Sparkles, Layers, FileCode, Settings } from 'lucide-react';

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
    <section id="features" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Build UI 10x faster</h2>
          <p className="mt-3 text-white/70">From idea to on-screen in seconds. Skip boilerplate and focus on what matters.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5">
              <div className="w-10 h-10 rounded-lg grid place-items-center bg-white/10 border border-white/15">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
