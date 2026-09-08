export type GithubLanguagesDto = Record<string, number>;

export interface GitHubProjectDto {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  description: string;
  homepage: string;
  html_url: string;
  languages?: GitHubProjectLanguageDto;
}

export interface GitHubProjectLanguageDto {
  languages: GithubLanguagesDto;
}
