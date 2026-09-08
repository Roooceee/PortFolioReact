import {AxiosRequestConfig} from 'axios';

export class GitHubProjectApi {
  static getGitHubProject = (sort: string, direction: string): AxiosRequestConfig => ({
    method: 'GET',
    url: '/users/Roooceee/repos',
    params: {sort, direction},
  });

  static getGitHubProjectLanguage = (projectName: string): AxiosRequestConfig => ({
    method: 'GET',
    url: `/repos/Roooceee/${projectName}/languages`,
  });
}
