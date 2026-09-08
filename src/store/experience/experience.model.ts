export type GithubLanguagesDto = Record<string, number>;

export interface ExperienceDto {
  type: string;
  name: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  missions: string[];
  description: string;
  skills: string[];
}
