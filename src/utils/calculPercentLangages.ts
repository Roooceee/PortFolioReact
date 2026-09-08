import {GithubLanguagesDto} from '@/store/github_projects/github_projects.model';

export interface LanguagePercent {
  language: string;
  percent: number;
}

export function calculPercentLanguages(listLanguages: GithubLanguagesDto): LanguagePercent[] {
  let totalLanguages = 0;
  const listLanguagesWithPercent: LanguagePercent[] = [];

  if (!listLanguages) {
    return listLanguagesWithPercent;
  }

  Object.values(listLanguages).forEach((languageValue) => {
    totalLanguages += languageValue;
  });

  if (totalLanguages === 0) {
    return listLanguagesWithPercent;
  }

  Object.keys(listLanguages).forEach((language, index) => {
    const percent = Math.round((Object.values(listLanguages)[index] / totalLanguages) * 100);
    listLanguagesWithPercent.push({language, percent});
  });

  return listLanguagesWithPercent;
}
