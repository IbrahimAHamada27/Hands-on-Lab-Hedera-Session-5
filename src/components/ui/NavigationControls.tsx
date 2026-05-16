import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';

export function NavigationControls() {
  const { currentSection, totalSections, nextSection, prevSection } = useAppStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextSection();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSection();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSection, prevSection]);

  return (
    <div className="fixed right-6 bottom-6 flex items-center space-x-4 z-50 pointer-events-auto bg-black/30 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-2xl">
      <button 
        onClick={prevSection}
        disabled={currentSection === 0}
        className="p-1.5 rounded-full bg-hedera-navy/50 text-white hover:bg-hedera-blue hover:shadow-glow-blue disabled:opacity-30 disabled:hover:bg-hedera-navy/50 transition-all duration-300"
      >
        <ChevronLeft size={20} />
      </button>
      
      <div className="flex items-center space-x-2 text-sm font-medium text-hedera-silver">
        <span>Slide {currentSection + 1}</span>
        <span className="opacity-50">/</span>
        <span>{totalSections}</span>
      </div>

      <button 
        onClick={nextSection}
        disabled={currentSection === totalSections - 1}
        className="p-1.5 rounded-full bg-hedera-navy/50 text-white hover:bg-hedera-blue hover:shadow-glow-blue disabled:opacity-30 disabled:hover:bg-hedera-navy/50 transition-all duration-300"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
