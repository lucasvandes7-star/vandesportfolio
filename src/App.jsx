import React from 'react';
import { MotionConfig } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import About from './components/sections/About';
import FeaturedWork from './components/sections/FeaturedWork';
import Metrics from './components/sections/Metrics';
import Services from './components/sections/Services';
import CrmWork from './components/sections/CrmWork';
import Process from './components/sections/Process';
import Stack from './components/sections/Stack';
import Principles from './components/sections/Principles';
import Faq from './components/sections/Faq';
import FinalCta from './components/sections/FinalCta';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-bg text-ink-mid">
        <Header />
        <main id="conteudo">
          <Hero />
          <Marquee />
          <About />
          <FeaturedWork />
          <Metrics />
          <Services />
          <CrmWork />
          <Process />
          <Stack />
          <Principles />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
