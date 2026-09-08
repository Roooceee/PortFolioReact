import {create} from 'zustand';
import {GitHubProjectDto} from '@/store/github_projects/github_projects.model';

interface GitHubState {
  gitHubProjects: GitHubProjectDto[];
  setGitHubProjects: (gitHubProjects: GitHubProjectDto[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  error: string | null;
  setError: (error: string) => void;
  resetError: () => void;
}

export const useGitHubProjectStore = create<GitHubState>((set) => ({
  gitHubProjects: [],
  setGitHubProjects: (gitHubProjects) => set({gitHubProjects}),
  isLoading: true,
  setIsLoading: (isLoading) => set({isLoading}),
  error: null,
  setError: (error) => ({error}),
  resetError: () => set({error: null}),
}));
