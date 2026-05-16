import { create } from 'zustand';

interface AppState {
  currentSection: number;
  totalSections: number;
  setTotalSections: (total: number) => void;
  setCurrentSection: (section: number) => void;
  nextSection: () => void;
  prevSection: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentSection: 0,
  totalSections: 36,
  setTotalSections: (total) => set({ totalSections: total }),
  setCurrentSection: (section) => set({ currentSection: section }),
  nextSection: () => set((state) => ({ 
    currentSection: Math.min(state.currentSection + 1, state.totalSections - 1) 
  })),
  prevSection: () => set((state) => ({ 
    currentSection: Math.max(state.currentSection - 1, 0) 
  })),
}));
