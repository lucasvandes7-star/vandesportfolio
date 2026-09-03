import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../layout/Section';
import Reveal from '../ui/Reveal';
import { faqData } from '../../data/faq';

/**
 * Acordeão em medida estreita, com numeração no lugar do ícone de "+".
 * O indicador de aberto é o próprio número mudando de opacidade.
 */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Section id="faq" containerClassName="shell-narrow">
      <Reveal as="h2" className="max-w-[22ch] text-section text-balance">
        Perguntas que aparecem em toda primeira conversa
      </Reveal>

      <ul className="mt-14">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;

          return (
            <li key={faq.q} className="border-t border-hair last:border-b">
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-baseline gap-5 py-6 text-left"
                >
                  <span
                    className={`label shrink-0 transition-opacity duration-300 ${
                      isOpen ? 'text-ink-hi opacity-100' : 'text-ink-low opacity-60'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-[clamp(1.05rem,1.7vw,1.3rem)] leading-tight tracking-[-0.02em] text-ink-hi">
                    {faq.q}
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-[62ch] pb-7 pl-[calc(2ch+1.25rem)] text-[15px] leading-[1.75] text-ink-mid">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
