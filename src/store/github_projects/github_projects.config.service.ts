import githubApiClient from '@/api/github.config';
import {APIRoutes} from '@/api/route';
import {GitHubProjectDto, GitHubProjectLanguageDto} from '@/store/github_projects/github_projects.model';

export class GitHubProjectApiConfigService {
  static async getProjects(): Promise<GitHubProjectDto[]> {
    const res = await githubApiClient<GitHubProjectDto[]>(APIRoutes.github.getGitHubProject('created', 'desc'));
    return res.data;
  }

  static async getProjectLanguage(projectName: string): Promise<GitHubProjectLanguageDto> {
    const res = await githubApiClient<GitHubProjectLanguageDto>(APIRoutes.github.getGitHubProjectLanguage(projectName));
    return res.data;
  }
}
