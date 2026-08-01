import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useBudgetModal } from '../context/BudgetModalContext';

export default function Hero() {
  const { openModal } = useBudgetModal();
  const titleWords = ["O", "CRESCIMENTO", "DA", "SUA", "EMPRESA", "COMEÇA", "AQUI."];

  return (
    <section id="hero" className="relative h-screen min-h-[700px] w-full bg-[#121212] text-[#EAE3D2] flex flex-col justify-between p-6 sm:p-12 overflow-hidden">
      
      {/* Full-Screen Background Image (User Portrait filling the entire layout) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img 
          src="/hero-person.jpg" 
          alt="Lucas Vandes" 
          className="w-full h-full object-cover object-center filter contrast-110 brightness-[0.8]"
        />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/70" />
      </div>

      {/* Top Header Bar */}
      <div className="relative z-20 flex items-center justify-between text-xs sm:text-sm tracking-widest font-mono uppercase text-[#EAE3D2] border-b border-[#EAE3D2]/20 pb-4 backdrop-blur-xs">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EAE3D2] animate-pulse"></span>
          <span className="font-bold">LUCAS VANDES · WEB & CRM SPECIALIST</span>
        </div>

        <a 
          href="#cases" 
          className="flex items-center gap-2 text-[#EAE3D2] hover:opacity-75 transition-opacity font-semibold"
        >
          <span>PORTFÓLIO DE CASES</span>
          <ArrowUpRight className="w-4 h-4 text-[#EAE3D2]" />
        </a>
      </div>

      {/* Center Stack: Massive Overlapping Typography */}
      <div className="relative z-20 my-auto flex flex-col items-center justify-center text-center px-4">
        
        {/* Main Headline OVER the User Photo */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto select-none"
        >
          <h1 className="font-bebas text-5xl sm:text-7xl md:text-8xl lg:text-[115px] xl:text-[135px] leading-[0.85] tracking-tight uppercase">
            {titleWords.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-[0.25em] whitespace-nowrap" style={{ outline: 'none', boxShadow: 'none' }}>
                {word.split('').map((char, charIndex) => (
                  <span 
                    key={charIndex} 
                    className="inline-block transition-colors duration-200 cursor-default"
                    style={{ 
                      color: 'transparent',
                      WebkitTextStroke: '1.5px rgba(234, 227, 210, 0.8)',
                      outline: 'none',
                      boxShadow: 'none',
                      textShadow: 'none',
                      border: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#EAE3D2';
                      e.currentTarget.style.WebkitTextStroke = '0px transparent';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'transparent';
                      e.currentTarget.style.WebkitTextStroke = '1.5px rgba(234, 227, 210, 0.8)';
                    }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>
        </motion.div>

        {/* Subheadline & CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-center max-w-2xl mx-auto"
        >
          <p className="text-xs sm:text-base text-[#EAE3D2]/90 font-sans font-medium leading-relaxed drop-shadow-md">
            Desenvolvimento de websites ultra-performáticos e ecossistemas CRM personalizados para acelerar o crescimento do seu negócio.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={openModal}
              className="px-8 py-3.5 rounded-full bg-[#EAE3D2] text-[#121212] font-bold text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-2xl flex items-center gap-2 group"
            >
              <span>Fazer Orçamento</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a 
              href="#servicos" 
              className="px-8 py-3.5 rounded-full border border-[#EAE3D2]/40 bg-[#121212]/40 backdrop-blur-md text-[#EAE3D2] font-semibold text-xs uppercase tracking-widest hover:border-[#EAE3D2] hover:bg-[#EAE3D2]/10 transition-all duration-300"
            >
              Conhecer Soluções
            </a>
          </div>
        </motion.div>

      </div>

      {/* Bottom Footer Metadata Bar */}
      <div className="relative z-20 flex items-center justify-between text-xs tracking-widest font-mono uppercase text-[#EAE3D2]/80 border-t border-[#EAE3D2]/20 pt-4 backdrop-blur-xs">
        <span className="font-bold">LUCAS VANDES</span>
        <span className="hidden sm:inline font-light">CRIAÇÃO DE SITES & CRMs</span>
        <span className="font-bold">WWW.VANDESPORTFOLIO.COM.BR</span>
      </div>

    </section>
  );
}
