import {create} from 'zustand';
import {FormationDto} from '@/store/formation/formation.model';

interface FormationState {
  formations: FormationDto[];
  setFormations: (formations: FormationDto[]) => void;
}

export const useFormationStore = create<FormationState>((set) => ({
  formations: [],
  setFormations: (formations) => set({formations}),
}));
