import {AxiosRequestConfig} from 'axios';

export class SkillApi {
  static getSkills = (): AxiosRequestConfig => ({
    method: 'GET',
    url: '/skills.json',
  });
}
