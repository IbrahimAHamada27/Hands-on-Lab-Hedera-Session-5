import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '../../store/useAppStore';

interface SectionWrapperProps {
  index: number;
  children: React.ReactNode;
}

export function SectionWrapper({ index, children }: SectionWrapperProps) {
  const currentSection = useAppStore((state) => state.currentSection);
  const nextSection = useAppStore((state) => state.nextSection);
  const prevSection = useAppStore((state) => state.prevSection);

  const isActive = currentSection === index;

  // Handle Wheel Scroll for navigation
  useEffect(() => {
    if (!isActive) return;

    let timeout: NodeJS.Timeout;
    const handleWheel = (e: WheelEvent) => {
      // Debounce scroll to avoid rapid jumping
      if (timeout) return;
      
      if (e.deltaY > 50) {
        nextSection();
        timeout = setTimeout(() => {}, 1000);
      } else if (e.deltaY < -50) {
        prevSection();
        timeout = setTimeout(() => {}, 1000);
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(timeout);
    };
  }, [isActive, nextSection, prevSection]);

  if (!isActive) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`section-${index}`}
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center p-8 pointer-events-auto"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
