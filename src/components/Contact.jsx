import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative bg-black py-24 text-zinc-200">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(183,28,28,0.2),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <h2 className="bg-gradient-to-r from-[#FFD700] to-white bg-clip-text text-3xl font-semibold text-transparent">Contact</h2>
        <p className="mt-2 max-w-2xl text-zinc-400">Ping me through the HUD. I’ll get back faster than a repulsor blast.</p>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-xl border border-cyan-400/40 bg-zinc-900/60 p-6 backdrop-blur"
            style={{ boxShadow: '0 0 40px rgba(0,229,255,0.25), inset 0 0 20px rgba(0,229,255,0.12)' }}
          >
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="mb-1 block text-sm text-cyan-200">Name</label>
                <input required className="w-full rounded-md border border-cyan-400/40 bg-black/40 px-3 py-2 text-cyan-100 outline-none ring-0 placeholder:text-cyan-200/50" placeholder="Tony Stark" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-cyan-200">Email</label>
                <input required type="email" className="w-full rounded-md border border-cyan-400/40 bg-black/40 px-3 py-2 text-cyan-100 outline-none placeholder:text-cyan-200/50" placeholder="stark@starkindustries.com" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-cyan-200">Message</label>
                <textarea required rows={4} className="w-full rounded-md border border-cyan-400/40 bg-black/40 px-3 py-2 text-cyan-100 outline-none placeholder:text-cyan-200/50" placeholder="Let’s build something epic." />
              </div>
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-md border border-amber-300/50 bg-amber-300/10 px-5 py-2.5 text-amber-100"
                style={{ boxShadow: '0 0 30px rgba(255,215,0,0.25), inset 0 0 18px rgba(255,215,0,0.12)' }}
              >
                <span className="relative z-10">Send Transmission</span>
                <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-amber-300/30 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
              </motion.button>
              {sent && (
                <p className="text-emerald-300">Transmission sent. J.A.R.V.I.S. will confirm.</p>
              )}
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-zinc-700/60 bg-gradient-to-br from-zinc-950 to-zinc-900 p-6"
          >
            <h3 className="text-lg font-semibold text-white">Links</h3>
            <div className="mt-4 space-y-3">
              <a href="https://github.com" target="_blank" className="block rounded-md border border-cyan-400/30 bg-zinc-800/50 px-3 py-2 text-cyan-100 hover:bg-zinc-800/70">GitHub</a>
              <a href="https://linkedin.com" target="_blank" className="block rounded-md border border-cyan-400/30 bg-zinc-800/50 px-3 py-2 text-cyan-100 hover:bg-zinc-800/70">LinkedIn</a>
              <a href="mailto:you@example.com" className="block rounded-md border border-cyan-400/30 bg-zinc-800/50 px-3 py-2 text-cyan-100 hover:bg-zinc-800/70">Email</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
