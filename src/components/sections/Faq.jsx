import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import Section from '../layout/Section';
import SectionIntro from '../ui/SectionIntro';
import { faqData } from '../../data/faq';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq">
      <SectionIntro title="Perguntas que aparecem em toda primeira conversa" />

      <ul className="mt-14 flex flex-col">
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
                  className="grid w-full grid-cols-[1fr_auto] items-start gap-x-8 py-7 text-left lg:grid-cols-12"
                >
                  <span className="flex items-start justify-between gap-6 text-[clamp(1.05rem,1.7vw,1.25rem)] font-light text-ink-hi lg:col-span-10">
                    {faq.q}
                  </span>
                  <Plus
                    className={`mt-1 h-[18px] w-[18px] shrink-0 justify-self-end text-ink-low transition-transform duration-500 ease-out lg:col-span-2 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                  />
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
                    <div className="grid grid-cols-1 gap-x-8 pb-8 lg:grid-cols-12">
                      <p className="max-w-[46rem] text-[15px] leading-[1.75] text-ink-mid lg:col-span-7 lg:col-start-4">
                        {faq.a}
                      </p>
                    </div>
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
