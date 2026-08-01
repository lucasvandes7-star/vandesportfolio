import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'Qual é o prazo médio de entrega de um site ou CRM?',
      a: 'Para Landing Pages e sites institucionais, o prazo médio é de 7 a 14 dias úteis. Para sistemas CRM e ecossistemas web complexos, o desenvolvimento leva entre 15 a 30 dias úteis.'
    },
    {
      q: 'O site fica hospedado na Vercel?',
      a: 'Sim! Utilizamos a infraestrutura global da Vercel para garantir tempo de carregamento ultrarrápido, certificado SSL gratuito e altíssima estabilidade sem custos desnecessários.'
    },
    {
      q: 'Preciso pagar mensalidade pelo CRM ou site?',
      a: 'Não cobramos mensalidades recorrentes pelo desenvolvimento. O código e o sistema pertencem 100% à sua empresa. Caso deseje manutenção contínua, oferecemos como opcional.'
    },
    {
      q: 'O site será otimizado para celulares e tablets?',
      a: 'Absolutamente. Todos os nossos projetos são desenvolvidos com metodologia Mobile-First. Garantimos fluidez perfeita em smartphones, tablets e monitores 4K.'
    }
  ];

  return (
    <section id="faq" className="py-32 bg-[#121212] text-[#EAE3D2] relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-[#EAE3D2]/60">DÚVIDAS FREQUENTES</span>
          <h2 className="font-bebas text-5xl sm:text-7xl uppercase tracking-tight text-[#EAE3D2] mt-2 text-stroke-hover cursor-pointer">
            PERGUNTAS & RESPOSTAS.
          </h2>
          <p className="mt-3 text-sm text-[#EAE3D2]/70 font-sans max-w-md mx-auto">
            Tudo o que você precisa saber antes de iniciar o seu projeto conosco.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="cream-card rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 sm:p-8 text-left flex items-center justify-between gap-4 font-bebas text-2xl tracking-wide text-[#EAE3D2] hover:text-outline-cream transition-all"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#EAE3D2] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 sm:px-8 pb-6 text-[#EAE3D2]/80 text-xs sm:text-sm font-sans leading-relaxed border-t border-[#EAE3D2]/15 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
