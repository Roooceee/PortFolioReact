import {Calendar, Code, Github, RefreshCcw, SquareArrowOutUpRight} from 'lucide-react';

import {calculPercentLanguages} from '@/_utils/calculPercentLangages.js';
import {changeDateFormat} from '@/_utils/changeDateFormat';

import ProgressBarLanguage from '@/components/ui/languagesPercent/progressBarLanguage.js';

import ParseTextWithBreaks from '@/components/ui/parseTextWithBreaks';
import {motion} from 'motion/react';
import {GitHubProjectDto} from '@/store/github_projects/github_projects.model.js';
import {CardHoverWrapper} from '@/components/ui/animated/card-hover-wrapper.js';
import {ButtonLink} from '@/components/ui/button-link';
import {ListLanguagePercent} from '@/components/ui/languagesPercent/listLanguagePercent';
import {variants} from '@/constants/animation.constants';

interface ProjectCardProps {
  gitHubProject?: GitHubProjectDto;
  [key: string]: any;
  isAnimated?: boolean;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const {isAnimated = false} = props;
  const project = props.gitHubProject || props;
  const {name, description, created_at, languages, homepage, updated_at, html_url} = project;
  let percentLanguages = null;
  if (languages) {
    percentLanguages = calculPercentLanguages(languages);
  }
  const location = window.location.pathname;

  const projectCard = (
    <>
      <div className="min-h-0 head_project flex flex-col gap-8 lg:min-h-[260px]">
        <h3 className="text-blue-primary font-bold text-lg md:text-xl">{name}</h3>
        {description && (
          <p>
            <ParseTextWithBreaks text={description} />
          </p>
        )}
      </div>

      <hr className="hr-grey" />

      {languages && (
        <div className="languages">
          <h4 className="language_title text-[var(--color-text)] flex gap-1 items-center pb-5">
            <Code size={24} className="text-blue-primary" />
            {Object.values(languages).length > 1 ? 'Languages' : 'Language'}
          </h4>
          {percentLanguages && (
            <>
              <ListLanguagePercent listLanguagesWithPercent={percentLanguages} />
              <ProgressBarLanguage listLanguagesWithPercent={percentLanguages} />
            </>
          )}
        </div>
      )}

      <div className="flex-wrap justify-between gap-4 links_project flex items-center">
        {homepage && (
          <ButtonLink
            href={homepage}
            isAnimated={true}
            whileHover={{x: 10, scale: 1.2}}
            whileTap={{scale: 0.95}}
            target="_blank"
            className="flex items-center gap-1 text-sm">
            <SquareArrowOutUpRight size={18} /> Visiter le site
          </ButtonLink>
        )}
        <ButtonLink
          href={html_url}
          isAnimated={true}
          whileHover={{x: 10, scale: 1.2}}
          whileTap={{scale: 0.95}}
          target="_blank"
          className="flex items-center gap-1 text-sm">
          <Github size={18} />
          Voir le code
        </ButtonLink>
      </div>
      <hr className="hr-grey" />
      <div className="dates_project flex justify-between">
        <div className="flex gap-1 items-center">
          <Calendar size={18} className="text-blue-primary" />
          <p className="hidden xs:inline lg:hidden xl:inline text-xs md:text-sm">Crée le : </p>
          <p className="numeric text-xs md:text-sm">{changeDateFormat(created_at, false, false)}</p>
        </div>
        {updated_at && (
          <div className="flex gap-1 items-center">
            <RefreshCcw size={18} className="text-blue-primary" />
            <p className="hidden xs:inline lg:hidden xl:inline text-xs md:text-sm">Modifier le : </p>
            <p className="numeric text-xs md:text-sm">{changeDateFormat(updated_at, false, false)}</p>
          </div>
        )}
      </div>
    </>
  );

  if (isAnimated)
    return (
      <motion.article variants={variants} initial="hidden" whileInView="visible" viewport={{once: true}}>
        <CardHoverWrapper
          className={`flex flex-col justify-between card-secondary projectCard  min-h-[33rem] gap-2.5 md:max-w-[440px] margin-auto ${location === '/' && 'lg:w-[85%]'}`}>
          {projectCard}
        </CardHoverWrapper>
      </motion.article>
    );

  return (
    <article>
      <div
        className={`flex flex-col justify-between card-secondary projectCard  min-h-[33rem] gap-2.5 md:max-w-[440px] margin-auto ${location === '/' && 'lg:w-[85%]'}`}>
        {projectCard}
      </div>
    </article>
  );
};
