import {FormationConfigService} from '@/store/formation/formation.config.service';
import {useFormationStore} from '@/store/formation/formation.store';

export class FormationService {
  static async fetchAndStoreFormations(): Promise<void> {
    try {
      const response = await FormationConfigService.getFormations();
      useFormationStore.getState().setFormations(response);
    } catch (error) {
      console.error('Failed to fetch formations', error);
    }
  }
}
