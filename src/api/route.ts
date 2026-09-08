import {GitHubProjectApi} from '@/store/github_projects/github_projects.api';
import {SkillApi} from '@/store/skill/skill.api';

export const APIRoutes = {
  skills: SkillApi,
  github: GitHubProjectApi,
};
