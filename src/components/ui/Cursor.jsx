import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  // Motion values for exact position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring configurations for smooth trailing effect
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Derived motion values for the inner dot
  const dotX = useTransform(cursorX, (x) => x + 12);
  const dotY = useTransform(cursorY, (y) => y + 12);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16); // center the 32px circle
      cursorY.set(e.clientY - 16);
    };
    
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect if hovering over clickable elements
    const handleMouseOver = (e) => {
      const isClickable = e.target.closest('a, button, [role="button"], input, select, textarea, .cursor-pointer');
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    setIsVisible(true);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (typeof window === 'undefined') return null;

  return (
    <>
      {/* Estilos globais para ocultar o cursor padrão */}
      <style>{`
        body, a, button, .cursor-pointer {
          cursor: none !important;
        }
      `}</style>
      
      {/* The trailing outer circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-[9999] hidden md:block shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isVisible ? (isHovering ? 0.3 : 1) : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      
      {/* The exact center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999] hidden md:block shadow-[0_0_8px_rgba(255,255,255,1)]"
        animate={{
          scale: isHovering ? 0 : 1, // dot disappears when hovering links
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        style={{
          x: dotX,
          y: dotY,
        }}
      />
    </>
  );
}
