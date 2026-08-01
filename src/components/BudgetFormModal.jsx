import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { useBudgetModal } from '../context/BudgetModalContext';
import useFocusTrap from '../lib/useFocusTrap';

export const WHATSAPP_NUMBER = '5551984114248';

export default function BudgetFormModal() {
  const { isOpen, closeModal } = useBudgetModal();
  const [name, setName] = useState('');
  const [need, setNeed] = useState('');
  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);

  // O contexto devolve o foco ao gatilho; aqui só prendemos o Tab
  useFocusTrap(dialogRef, isOpen, { restoreFocus: false });

  // Fecha com Escape e trava o scroll de fundo
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    firstFieldRef.current?.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${name}. Gostaria de solicitar um orçamento.\n\nNecessidade: ${need}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setName('');
    setNeed('');
    closeModal();
  };

  const fieldClass =
    'w-full rounded-[14px] border border-[var(--line-soft)] bg-ink-900 px-4 py-3 text-[15px] text-content-hi placeholder:text-content-low transition-colors duration-300 focus:border-violet-500 focus:outline-none';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-orcamento"
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-[24px] border border-[var(--line-soft)] bg-ink-800 p-7 shadow-[0_24px_70px_-20px_rgba(0,0,0,0.9)] sm:p-9"
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Fechar"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-pill text-content-low transition-colors duration-300 hover:bg-white/[0.06] hover:text-content-hi"
            >
              <X className="h-[18px] w-[18px]" aria-hidden="true" />
            </button>

            <span className="kicker">Orçamento</span>
            <h2 id="titulo-orcamento" className="mt-3 text-[26px] leading-tight">
              Me conta sobre o seu projeto
            </h2>
            <p className="mt-3 text-[15px] leading-[1.6] text-content-mid">
              Duas informações e eu já consigo te responder com algo útil.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-[13.5px] font-medium text-content-hi">
                  Seu nome
                </label>
                <input
                  ref={firstFieldRef}
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como posso te chamar?"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="need" className="mb-2 block text-[13.5px] font-medium text-content-hi">
                  O que você precisa?
                </label>
                <textarea
                  id="need"
                  required
                  rows={4}
                  value={need}
                  onChange={(e) => setNeed(e.target.value)}
                  placeholder="Ex: um site para minha clínica, um CRM para a equipe de vendas, automatizar o envio de lembretes…"
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="group mt-1 flex w-full items-center justify-center gap-2.5 rounded-pill bg-violet-600 py-3.5 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-violet-500"
              >
                <span>Enviar pelo WhatsApp</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-400 ease-spring group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
