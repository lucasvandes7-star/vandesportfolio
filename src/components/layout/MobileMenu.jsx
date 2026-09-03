import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { NAV } from '../../data/site';
import { whatsappLink, EMAIL, WHATSAPP_DISPLAY } from '../../data/contact';
import useFocusTrap from '../../lib/useFocusTrap';

/** Menu fullscreen. Prende o foco, trava o scroll e fecha com Esc. */
export default function MobileMenu({ open, onClose }) {
  const panelRef = useRef(null);
  useFocusTrap(panelRef, open);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[70] flex flex-col bg-bg lg:hidden"
        >
          <div className="shell flex h-[72px] shrink-0 items-center justify-end">
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar menu"
              className="-mr-2 flex h-11 w-11 items-center justify-center text-ink-hi"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Principal" className="shell flex flex-1 flex-col justify-center">
            <ul className="flex flex-col gap-1">
              {NAV.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="block py-3 text-[clamp(2rem,9vw,2.75rem)] font-light leading-tight tracking-tight text-ink-hi"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="shell shrink-0 border-t border-hair py-8">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="text-[16px] text-ink-hi underline decoration-hair-strong decoration-1 underline-offset-[6px]"
            >
              Vamos conversar
            </a>
            <div className="mt-6 flex flex-col gap-1.5 text-[14px] text-ink-mid">
              <a href={`mailto:${EMAIL}`} className="break-all">{EMAIL}</a>
              <span>{WHATSAPP_DISPLAY}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
