import {create} from 'zustand';
import {SkillDto} from './skill.model';

interface SkillState {
  skills: SkillDto[];
  setSkills: (skills: SkillDto[]) => void;
}

export const useSkillStore = create<SkillState>((set) => ({
  skills: [],
  setSkills: (skills) => set({skills}),
}));
