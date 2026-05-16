import React, { useEffect } from 'react';
import { BackgroundCanvas } from './components/canvas/BackgroundCanvas';
import { NavigationControls } from './components/ui/NavigationControls';
import { SectionWrapper } from './components/ui/SectionWrapper';
import { SlideRenderer } from './components/ui/SlideRenderer';
import { slides } from './data/slides';
import { useAppStore } from './store/useAppStore';

function App() {
  const setTotalSections = useAppStore(state => state.setTotalSections);

  useEffect(() => {
    // Dynamically set the total number of sections based on data
    if (setTotalSections) {
      setTotalSections(slides.length);
    }
  }, [setTotalSections]);

  return (
    <div className="w-screen h-screen relative bg-hedera-black text-white overflow-hidden font-sans">
      <BackgroundCanvas />
      <NavigationControls />

      {/* UI Overlay */}
      <div className="relative z-10 w-full h-full pointer-events-none">
        {slides.map((slide, index) => (
          <SectionWrapper key={`section-${slide.id}`} index={index}>
            <SlideRenderer slide={slide} />
          </SectionWrapper>
        ))}
      </div>
    </div>
  );
}

export default App;
