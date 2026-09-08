import localApiClient from '@/api/api.local.config';
import {APIRoutes} from '@/api/route';
import {FormationDto} from '@/store/formation/formation.model';

export class FormationConfigService {
  static async getFormations(): Promise<FormationDto[]> {
    const res = await localApiClient<FormationDto[]>(APIRoutes.formation.getFormations());
    return res.data;
  }
}
