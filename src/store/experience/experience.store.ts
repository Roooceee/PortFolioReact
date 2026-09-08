import {create} from 'zustand';
import {ExperienceDto} from '@/store/experience/experience.model';

interface ExperienceState {
  experiences: ExperienceDto[];
  setExperiences: (skills: ExperienceDto[]) => void;
}

export const useExperienceStore = create<ExperienceState>((set) => ({
  experiences: [],
  setExperiences: (skills) => set({experiences: skills}),
}));
