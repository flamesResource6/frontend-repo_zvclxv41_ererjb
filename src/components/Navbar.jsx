import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <motion.a href="#home" className="text-lg font-bold tracking-wide text-white" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}>
          <span className="bg-gradient-to-r from-[#B71C1C] via-[#FFD700] to-[#00E5FF] bg-clip-text text-transparent">ARC.UI</span>
        </motion.a>
        <nav className="hidden gap-6 md:flex">
          {[
            { href: '#home', label: 'Home' },
            { href: '#about', label: 'About' },
            { href: '#projects', label: 'Projects' },
            { href: '#contact', label: 'Contact' },
          ].map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-zinc-300 transition-colors hover:text-cyan-200">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-md border border-cyan-400/40 bg-cyan-400/10 px-3 py-1.5 text-sm text-cyan-100 backdrop-blur md:block"
          style={{ boxShadow: '0 0 16px rgba(0,229,255,0.25), inset 0 0 12px rgba(0,229,255,0.12)' }}
        >
          Engage
        </a>
      </div>
    </header>
  );
};

export default Navbar;
