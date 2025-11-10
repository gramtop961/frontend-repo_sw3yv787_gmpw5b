import React, { useState } from 'react';

const examplePrompts = [
  'A modern login page with a left image panel and right form, glassmorphism, brand color violet',
  'A pricing table with three tiers, highlighted middle card, gradient accents, dark theme',
  'A dashboard header with search, notifications bell, user avatar, and quick actions',
];

const PromptSection = () => {
  const [prompt, setPrompt] = useState('Design a sleek landing hero with headline, subtext, CTA buttons, and a subtle gradient background');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleGenerate = async () => {
    setLoading(true);
    // For this landing page we mock the generation result locally.
    // In a full app, this would call your backend using import.meta.env.VITE_BACKEND_URL
    await new Promise((r) => setTimeout(r, 900));
    setResult({
      preview: (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">Generated UI Preview</h3>
              <p className="text-white/70 text-sm">A hero with headline, subtext and two CTAs using Tailwind</p>
            </div>
            <span className="text-xs px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">React + Tailwind</span>
          </div>
          <div className="mt-6 rounded-lg bg-gradient-to-br from-violet-600/30 via-fuchsia-500/30 to-cyan-400/30 p-8">
            <h2 className="text-3xl font-bold">Build faster with AI</h2>
            <p className="mt-2 text-white/80 max-w-prose">Beautiful components generated from natural language prompts. Tweak and export instantly.</p>
            <div className="mt-4 flex gap-3">
              <button className="px-4 py-2 rounded-md bg-white text-black text-sm font-medium">Primary</button>
              <button className="px-4 py-2 rounded-md border border-white/20 text-sm">Secondary</button>
            </div>
          </div>
        </div>
      ),
      code: `export default function Hero() {\n  return (\n    <section className=\"px-6 py-12 bg-gradient-to-b from-zinc-950 to-zinc-900 text-white\">\n      <div className=\"max-w-5xl mx-auto\">\n        <h1 className=\"text-4xl font-bold\">Build faster with AI\"</h1>\n        <p className=\"mt-2 text-white/80\">Beautiful components generated from natural language prompts.\n        </p>\n        <div className=\"mt-6 flex gap-3\">\n          <button className=\"px-4 py-2 rounded-md bg-white text-black text-sm font-medium\">Primary</button>\n          <button className=\"px-4 py-2 rounded-md border border-white/20 text-sm\">Secondary</button>\n        </div>\n      </div>\n    </section>\n  )\n}`,
    });
    setLoading(false);
  };

  return (
    <section id="generate" className="relative py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Describe the UI you need</h2>
            <p className="mt-3 text-white/75">Type a prompt and generate a working React + Tailwind component. Copy the code or export it into your project.</p>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-2">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full h-36 bg-transparent resize-none outline-none p-3 rounded-lg text-white placeholder-white/50"
                placeholder="e.g. A responsive navbar with logo, links, and a CTA button"
              />
              <div className="flex items-center justify-between p-2">
                <div className="flex gap-2 overflow-x-auto">
                  {examplePrompts.map((ex, idx) => (
                    <button key={idx} onClick={() => setPrompt(ex)} className="px-3 py-1.5 text-xs rounded-full bg-white/10 hover:bg-white/15 border border-white/15 whitespace-nowrap">
                      {ex}
                    </button>
                  ))}
                </div>
                <button onClick={handleGenerate} disabled={loading} className="px-4 py-2 rounded-md bg-white text-black font-medium disabled:opacity-60">
                  {loading ? 'Generating…' : 'Generate UI'}
                </button>
              </div>
            </div>
          </div>

          <div>
            {result ? (
              <div className="space-y-4">
                {result.preview}
                <div className="rounded-xl border border-white/10 bg-black/60">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 text-xs text-white/70">
                    <span>Code</span>
                    <button
                      className="px-2 py-1 rounded bg-white/10 hover:bg-white/15"
                      onClick={() => {
                        navigator.clipboard.writeText(result.code);
                      }}
                    >Copy</button>
                  </div>
                  <pre className="p-4 overflow-x-auto text-sm"><code>{result.code}</code></pre>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[360px] rounded-xl border border-dashed border-white/15 grid place-items-center text-white/60">
                Your generated preview will appear here.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptSection;
