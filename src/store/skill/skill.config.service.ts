import apiAxios from '@/api/api.local.config';
import {APIRoutes} from '@/api/route';
import {SkillDto} from '@/store/skill/skill.model';

export class SkillConfigService {
  static async getSkills(): Promise<SkillDto[]> {
    const res = await apiAxios<SkillDto[]>(APIRoutes.getSkills());
    return res.data;
  }
}
