import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
  };

  const glow = useMemo(
    () => ({
      boxShadow:
        '0 0 30px rgba(0,229,255,0.25), 0 0 60px rgba(0,229,255,0.18), inset 0 0 40px rgba(0,229,255,0.15)'
    }),
    []
  );

  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* holographic gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 mix-blend-screen" />
      </div>

      {/* Arc reactor pulse behind content */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[52vmin] w-[52vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, rgba(0,229,255,0.35), rgba(0,229,255,0.12), rgba(0,229,255,0.02) 70%, transparent 72%)',
          filter: 'blur(2px)'
        }}
        animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-cyan-200 backdrop-blur"
          style={glow}
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" /> Live Interface • J.A.R.V.I.S. Mode
        </motion.div>

        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-br from-[#FFD700] via-white to-[#B71C1C] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl"
          style={{ textShadow: '0 0 20px rgba(255,215,0,0.15)' }}
        >
          Hello, I’m Your Name
        </motion.h1>

        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="mt-4 max-w-2xl text-balance text-base text-zinc-300 sm:text-lg"
        >
          A Creative Fullstack Developer crafting futuristic, high-performance experiences inspired by Iron Man’s holographic UI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-md border border-cyan-400/50 bg-cyan-400/10 px-6 py-3 text-cyan-100 shadow-lg backdrop-blur transition-transform hover:scale-105"
            style={glow}
          >
            <span className="relative z-10">View Projects</span>
            <span className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t from-cyan-400/30 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
          </a>
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-md border border-amber-300/60 bg-amber-300/10 px-6 py-3 text-amber-100 shadow-lg backdrop-blur transition-transform hover:scale-105"
            style={{ boxShadow: '0 0 30px rgba(255,215,0,0.25), inset 0 0 20px rgba(255,215,0,0.12)' }}
          >
            <span className="relative z-10">Contact Me</span>
            <span className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t from-amber-300/30 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
