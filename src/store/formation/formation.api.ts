import {AxiosRequestConfig} from 'axios';

export class FormationApi {
  static getFormations = (): AxiosRequestConfig => ({
    method: 'GET',
    url: '/formations.json',
  });
}
