import { useEffect } from 'react';

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

/**
 * Prende o Tab dentro do container enquanto `active` for verdadeiro e
 * devolve o foco para o elemento que abriu, ao fechar.
 */
export default function useFocusTrap(containerRef, active, { restoreFocus = true } = {}) {
  useEffect(() => {
    if (!active) return;

    const previouslyFocused = document.activeElement;

    const onKeyDown = (e) => {
      if (e.key !== 'Tab') return;
      const container = containerRef.current;
      if (!container) return;

      const items = Array.from(container.querySelectorAll(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null || el === document.activeElement
      );
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      // Espera a saída do elemento para não competir com o foco durante a animação
      if (
        restoreFocus &&
        previouslyFocused instanceof HTMLElement &&
        document.contains(previouslyFocused)
      ) {
        requestAnimationFrame(() => previouslyFocused.focus());
      }
    };
  }, [containerRef, active, restoreFocus]);
}
