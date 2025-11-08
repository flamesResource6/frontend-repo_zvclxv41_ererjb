import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Arc Reactor Dashboard',
    desc: 'Realtime telemetry and HUD overlays for IoT devices with holographic UI.',
    link: '#',
  },
  {
    title: 'HoloPortfolio',
    desc: '3D portfolio with Spline, motion choreography, and cinematic transitions.',
    link: '#',
  },
  {
    title: 'AI Jarvis Assistant',
    desc: 'Voice-driven coding assistant with contextual understanding.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-zinc-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="bg-gradient-to-r from-[#FFD700] to-white bg-clip-text text-3xl font-semibold text-transparent">Projects</h2>
        <p className="mt-2 max-w-2xl text-zinc-400">Each project is visualized as a holographic card. Hover to energize.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              whileHover={{ scale: 1.04 }}
              className="group relative overflow-hidden rounded-xl border border-cyan-400/30 bg-gradient-to-b from-zinc-900/70 to-zinc-900/30 p-5 text-zinc-200 backdrop-blur"
              style={{ boxShadow: '0 0 35px rgba(0,229,255,0.2), inset 0 0 25px rgba(0,229,255,0.08)' }}
            >
              <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-cyan-400/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <span className="rounded-full border border-amber-300/40 bg-amber-300/10 px-2 py-0.5 text-[10px] text-amber-100">HUD</span>
              </div>
              <p className="mt-2 text-sm text-zinc-400">{p.desc}</p>
              <div className="mt-6 flex items-center justify-between text-sm text-cyan-200">
                <span>Open hologram</span>
                <motion.span
                  aria-hidden
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.6 }}
                >
                  ➜
                </motion.span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
