import {AxiosRequestConfig} from 'axios';

export class ExperienceApi {
  static getExperiences = (): AxiosRequestConfig => ({
    method: 'GET',
    url: '/experiences.json',
  });
}
