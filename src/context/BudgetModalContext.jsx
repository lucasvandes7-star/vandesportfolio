import React, { createContext, useContext, useState, useRef } from 'react';

const BudgetModalContext = createContext(null);

export function BudgetModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  // Guarda quem abriu o modal, para devolver o foco ao fechar
  const triggerRef = useRef(null);

  const openModal = () => {
    triggerRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    const trigger = triggerRef.current;
    if (trigger && document.contains(trigger)) {
      requestAnimationFrame(() => trigger.focus());
    }
    triggerRef.current = null;
  };

  return (
    <BudgetModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </BudgetModalContext.Provider>
  );
}

export function useBudgetModal() {
  const context = useContext(BudgetModalContext);
  if (!context) {
    throw new Error('useBudgetModal deve ser usado dentro de um BudgetModalProvider');
  }
  return context;
}
