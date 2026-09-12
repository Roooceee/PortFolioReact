import {GitHubProjectApiConfigService} from '@/store/github_projects/github_projects.config.service';
import {useGitHubProjectStore} from '@/store/github_projects/github_projects.store';

export class GitHubProjectService {
  static async fetchAndStoreGitHubProject(): Promise<void> {
    try {
      useGitHubProjectStore.getState().resetError();
      useGitHubProjectStore.getState().setIsLoading(true);
      const response = await GitHubProjectApiConfigService.getProjects();
      if (!response) {
        useGitHubProjectStore.getState().setError('Erreur lors du chargement des projets');
        console.error('Failed to fetch GitHubProjects');
        return;
      }

      let allLanguages: string[] = [];

      const projectsWithLanuages = await Promise.all(
        response.map(async (r) => {
          const languagesRes = await GitHubProjectApiConfigService.getProjectLanguage(r.name);

          Object.keys(languagesRes).map((key) => (allLanguages = [...new Set([...allLanguages, key])]));

          return {
            ...r,
            languages: languagesRes ? languagesRes : undefined,
          };
        }),
      );
      const finalProjects = projectsWithLanuages.filter((project) => project.name !== 'Roooceee');
      useGitHubProjectStore.getState().setAllLanguages(allLanguages);
      useGitHubProjectStore.getState().setGitHubProjects(finalProjects);
    } catch (error) {
      useGitHubProjectStore.getState().setError('Erreur lors du chargement des projets');
      console.error('Failed to fetch GitHubProjects', error);
    } finally {
      useGitHubProjectStore.getState().setIsLoading(false);
    }
  }
}
