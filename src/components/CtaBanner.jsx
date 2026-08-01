import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useBudgetModal } from '../context/BudgetModalContext';
import { WHATSAPP_NUMBER } from './BudgetFormModal';
import { PrimaryAction, SecondaryAction } from './ui/primitives';

export default function CtaBanner() {
  const { openModal } = useBudgetModal();

  return (
    <section id="contato" className="px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-[28px] border border-[var(--line-soft)] bg-ink-800 px-7 py-16 text-center sm:px-14 sm:py-20"
      >
        {/* Halo contido dentro do painel */}
        <div
          className="pointer-events-none absolute inset-x-0 -top-24 h-64 opacity-70"
          style={{
            background:
              'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(124,58,237,0.30), transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative">
          <h2 className="mx-auto max-w-[20ch] text-[clamp(1.9rem,4.4vw,2.75rem)] leading-[1.08]">
            Me conta o que a sua empresa precisa.
          </h2>

          <p className="mx-auto mt-5 max-w-[56ch] text-[16.5px] leading-[1.65] text-content-mid">
            Você explica a situação, eu digo o que dá para fazer, em quanto tempo e por quanto.
            Se não fizer sentido contratar agora, eu falo isso também.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <PrimaryAction as="button" type="button" onClick={openModal}>
              Fazer orçamento
            </PrimaryAction>
            <SecondaryAction
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Oi! Vim pelo site e quero falar sobre um projeto.')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </SecondaryAction>
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-[14px] text-content-low">
            <MessageCircle className="h-4 w-4 text-violet-500" aria-hidden="true" />
            Resposta em até um dia útil.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
