import {create} from 'zustand';

interface SectionVisibleState {
  activeSection: string | null;
  setActiveSection: (id: string) => void;
  resetActiveSection: () => void;
}

const useStoreSectionVisible = create<SectionVisibleState>((set) => ({
  activeSection: null,
  setActiveSection: (id) => set({activeSection: id}),
  resetActiveSection: () => set({activeSection: null}),
}));

export default useStoreSectionVisible;
