import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { useBudgetModal } from '../context/BudgetModalContext';

const WHATSAPP_NUMBER = '5551984114248';

export default function BudgetFormModal() {
  const { isOpen, closeModal } = useBudgetModal();
  const [name, setName] = useState('');
  const [need, setNeed] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Olá! Meu nome é ${name}. Gostaria de solicitar um orçamento.\n\nNecessidade: ${need}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank', 'noopener,noreferrer');

    setName('');
    setNeed('');
    closeModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-[#121212] border border-[#EAE3D2]/20 rounded-3xl p-8 sm:p-10 relative shadow-2xl"
          >
            <button
              onClick={closeModal}
              aria-label="Fechar"
              className="absolute top-5 right-5 text-[#EAE3D2]/60 hover:text-[#EAE3D2] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono uppercase tracking-widest text-[#EAE3D2]/60 mb-3 block">
              Solicitar Orçamento
            </span>
            <h3 className="font-bebas text-3xl sm:text-4xl uppercase tracking-tight text-[#EAE3D2] mb-6">
              Conte um pouco sobre o seu projeto
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[11px] font-mono uppercase tracking-widest text-[#EAE3D2]/70 mb-2">
                  Seu nome
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como podemos te chamar?"
                  className="w-full px-4 py-3 rounded-xl bg-[#0d0d0d] border border-[#EAE3D2]/20 text-[#EAE3D2] placeholder:text-[#EAE3D2]/30 text-sm focus:outline-none focus:border-[#EAE3D2]/60 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="need" className="block text-[11px] font-mono uppercase tracking-widest text-[#EAE3D2]/70 mb-2">
                  O que você precisa?
                </label>
                <textarea
                  id="need"
                  required
                  rows={4}
                  value={need}
                  onChange={(e) => setNeed(e.target.value)}
                  placeholder="Ex: preciso de um site institucional, um CRM para minha equipe de vendas..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0d0d0d] border border-[#EAE3D2]/20 text-[#EAE3D2] placeholder:text-[#EAE3D2]/30 text-sm focus:outline-none focus:border-[#EAE3D2]/60 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3.5 rounded-full bg-[#EAE3D2] text-[#121212] font-bold text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group"
              >
                <span>Enviar para o WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
