import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, ArrowRight } from 'lucide-react';
import { useBudgetModal } from '../context/BudgetModalContext';

export default function CtaBanner() {
  const { openModal } = useBudgetModal();
  return (
    <section className="py-32 bg-[#0d0d0d] text-[#EAE3D2] relative border-t border-[#EAE3D2]/15 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cream-card p-10 sm:p-20 rounded-3xl relative overflow-hidden"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#EAE3D2]/60 mb-6 block">
            PRONTO PARA TRANSFORMAR SEU NEGÓCIO?
          </span>

          <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-[#EAE3D2] leading-none mb-6 text-stroke-hover cursor-pointer">
            VAMOS CRIAR SEU PRÓXIMO PROJETO.
          </h2>

          <p className="text-xs sm:text-base text-[#EAE3D2]/80 font-sans max-w-xl mx-auto leading-relaxed mb-10">
            Entre em contato hoje mesmo. Apresentaremos uma proposta comercial sob medida para digitalizar seus processos e aumentar seu faturamento.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={openModal}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#EAE3D2] text-[#121212] font-mono text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-xl flex items-center justify-center gap-3 group"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="mailto:corretor.edsonlunkes@gmail.com"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#EAE3D2]/40 text-[#EAE3D2] font-mono text-xs font-semibold uppercase tracking-widest hover:border-[#EAE3D2] hover:bg-[#EAE3D2]/10 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Mail className="w-4 h-4" />
              <span>Enviar E-mail</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
