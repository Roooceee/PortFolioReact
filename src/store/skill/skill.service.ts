import {SkillConfigService} from '@/store/skill/skill.config.service';
import {useSkillStore} from '@/store/skill/skill.store';

export class SkillService {
  static async fetchAndStoreSkills(): Promise<void> {
    try {
      const response = await SkillConfigService.getSkills();
      useSkillStore.getState().setSkills(response);
    } catch (error) {
      console.error('Failed to fetch skills', error);
    }
  }
}
