import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-zinc-200">
      {/* subtle circuits background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(0,229,255,0.08) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(183,28,28,0.25) 0, transparent 45%)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-cyan-400/30 bg-zinc-900/60 p-6 backdrop-blur"
          style={{ boxShadow: '0 0 40px rgba(0,229,255,0.2), inset 0 0 20px rgba(0,229,255,0.1)' }}
        >
          <div className="mb-4 h-40 w-40 overflow-hidden rounded-lg border border-cyan-300/40">
            <img
              alt="Profile"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop"
            />
          </div>
          <h2 className="bg-gradient-to-r from-[#FFD700] to-white bg-clip-text text-2xl font-semibold text-transparent">About Me</h2>
          <p className="mt-3 text-zinc-300">
            I’m a multidisciplinary developer focused on creating cinematic, interactive web experiences. I blend
            performance, accessibility, and visual storytelling to deliver products that feel alive.
          </p>
          <div className="mt-6">
            <span className="rounded-full border border-emerald-300/40 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
              Digital Signature: VERIFIED
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-xl border border-zinc-700/60 bg-gradient-to-br from-zinc-950 to-zinc-900 p-6"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full" style={{
            background:
              'radial-gradient(circle, rgba(0,229,255,0.28), rgba(0,229,255,0.08) 60%, transparent 70%)',
            filter: 'blur(6px)'
          }} />

          <h3 className="text-xl font-semibold text-zinc-100">Capabilities</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {['React', 'TypeScript', 'Three.js', 'Node.js', 'FastAPI', 'MongoDB'].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.04 }}
                className="rounded-md border border-cyan-400/30 bg-zinc-800/50 px-3 py-2 text-sm text-cyan-100"
              >
                {skill}
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <h4 className="text-sm uppercase tracking-wider text-zinc-400">Power Levels</h4>
            <div className="mt-3 space-y-3">
              {[
                { label: 'Frontend', value: 92 },
                { label: 'Backend', value: 86 },
                { label: '3D & Motion', value: 80 },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-zinc-300">{label}</span>
                    <span className="text-cyan-300">{value}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-zinc-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="h-2 rounded-full bg-gradient-to-r from-[#B71C1C] via-[#FFD700] to-[#00E5FF]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
