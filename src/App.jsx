import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-zinc-800 bg-zinc-950/60 py-8 text-center text-sm text-zinc-400">
        <div className="mx-auto max-w-6xl px-6">
          <p>
            © {new Date().getFullYear()} Your Name — Crafted with React, Tailwind, Framer Motion & Spline.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
