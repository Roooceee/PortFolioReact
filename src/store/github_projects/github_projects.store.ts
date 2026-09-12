import {create} from 'zustand';
import {GithubLanguagesDto, GitHubProjectDto} from '@/store/github_projects/github_projects.model';

interface GitHubState {
  gitHubProjects: GitHubProjectDto[];
  setGitHubProjects: (gitHubProjects: GitHubProjectDto[]) => void;
  allLanguages: any[];
  setAllLanguages: (languages: any[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  error: string | null;
  setError: (error: string) => void;
  resetError: () => void;
}

export const useGitHubProjectStore = create<GitHubState>((set) => ({
  gitHubProjects: [],
  setGitHubProjects: (gitHubProjects) => set({gitHubProjects}),
  allLanguages: [],
  setAllLanguages: (allLanguages) => set({allLanguages}),
  isLoading: true,
  setIsLoading: (isLoading) => set({isLoading}),
  error: null,
  setError: (error) => ({error}),
  resetError: () => set({error: null}),
}));
