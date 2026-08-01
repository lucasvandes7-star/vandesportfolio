import React, { createContext, useContext, useState } from 'react';

const BudgetModalContext = createContext(null);

export function BudgetModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

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
