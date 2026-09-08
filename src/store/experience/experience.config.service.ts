import localApiClient from '@/api/api.local.config';
import {APIRoutes} from '@/api/route';
import {ExperienceDto} from '@/store/experience/experience.model';

export class ExperienceConfigService {
  static async getExperiences(): Promise<ExperienceDto[]> {
    const res = await localApiClient<ExperienceDto[]>(APIRoutes.experience.getExperiences());
    return res.data;
  }
}
