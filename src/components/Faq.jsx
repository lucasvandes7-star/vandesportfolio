import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SectionHeader } from './ui/primitives';

const faqs = [
  {
    q: 'Qual é o prazo de entrega?',
    a: 'Landing page e site institucional: de 7 a 14 dias úteis. CRM, dashboard e aplicações mais complexas: de 15 a 30 dias úteis. O prazo fecha junto com o escopo, por escrito, antes de começar.',
  },
  {
    q: 'Preciso pagar mensalidade?',
    a: 'Não pelo desenvolvimento. O código e o sistema ficam sendo da sua empresa, e não cobro por usuário. O que existe de custo recorrente é o que você já pagaria de qualquer forma: domínio e, dependendo do projeto, hospedagem. Manutenção contínua é opcional e combinada à parte.',
  },
  {
    q: 'Onde o site fica hospedado?',
    a: 'Normalmente na Vercel, que dá carregamento rápido, certificado SSL e boa estabilidade sem custo alto. Se a sua empresa já tem uma hospedagem ou precisa de outra por política interna, dá para adaptar.',
  },
  {
    q: 'Funciona bem no celular?',
    a: 'Sim, e é onde eu testo primeiro. A maior parte do acesso vem de telefone, então o projeto é construído mobile-first e testado em aparelho real antes de ir ao ar — não só no simulador do navegador.',
  },
  {
    q: 'E se eu já tiver um site?',
    a: 'Dá para partir do que existe. Às vezes o certo é refazer, às vezes é só corrigir performance e estrutura. Eu olho o que você tem hoje e digo qual dos dois faz sentido — inclusive quando a resposta é que não vale a pena mexer.',
  },
  {
    q: 'Como funciona a automação?',
    a: 'Primeiro eu mapeio a tarefa repetitiva que consome tempo da equipe: envio de mensagem, lembrete, relatório, atualização de cadastro. Depois construo o fluxo que faz isso sozinho e conecto às ferramentas que você já usa. O que roda em cada cliente é específico da operação dele.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader
          badge="Dúvidas"
          badgeIcon={HelpCircle}
          title={<>Perguntas que aparecem em toda primeira conversa.</>}
          align="center"
        />

        <ul className="mt-14 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <li key={faq.q} className="surface overflow-hidden rounded-card">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left sm:px-7"
                  >
                    <span className="text-[16px] font-semibold text-content-hi">{faq.q}</span>
                    <ChevronDown
                      className={`h-[18px] w-[18px] shrink-0 text-content-low transition-transform duration-400 ease-spring ${
                        isOpen ? 'rotate-180' : ''
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
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[15px] leading-[1.65] text-content-mid sm:px-7">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
