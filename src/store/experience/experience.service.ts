import {ExperienceConfigService} from '@/store/experience/experience.config.service';
import {useExperienceStore} from '@/store/experience/experience.store';

export class ExperienceService {
  static async fetchAndStoreExperience(): Promise<void> {
    try {
      const response = await ExperienceConfigService.getExperiences();
      useExperienceStore.getState().setExperiences(response);
    } catch (error) {
      console.error('Failed to fetch experiences', error);
    }
  }
}
