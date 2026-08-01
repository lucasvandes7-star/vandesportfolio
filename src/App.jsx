import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Cases from './components/Cases';
import Process from './components/Process';
import Faq from './components/Faq';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-900 text-content-mid selection:bg-violet-600 selection:text-white">
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Marquee />
        <Benefits />
        <Services />
        <Cases />
        <Process />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
