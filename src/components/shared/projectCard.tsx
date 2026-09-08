import {Calendar, Code, Github, RefreshCcw, SquareArrowOutUpRight} from 'lucide-react';

import {calculPercentLanguages} from '@/utils/calculPercentLangages.js';
import {changeDateFormat} from '@/utils/changeDateFormat.js';

import ProgressBarLanguage from '@/components/shared/languagesPercent/progressBarLanguage.jsx';
import ListLanguage from '@/components/shared/languagesPercent/listLanguagePercent.jsx';

import ParseTextWithBreaks from '@/components/shared/parseTextWithBreaks';
import {motion, useAnimation} from 'motion/react';
import useStoreWidthScreen from '@/storeWidthScreen';
import {GitHubProjectDto} from '@/store/github_projects/github_projects.model.js';
import {variants} from '@/components/home/section/projects/constants/animated.constant.js';
import {CardHoverWrapper} from '@/components/ui/animated/card-hover-wrapper.js';
import {ButtonLink} from '@/components/ui/button-link';

const variantsLink = {
  initial: {
    x: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
  right: {
    x: 10,
    scale: 1.2,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
  left: {
    x: -10,
    scale: 1.2,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

interface ProjectCardProps {
  gitHubProject?: GitHubProjectDto;
  [key: string]: any;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const project = props.gitHubProject || props;
  const {name, description, created_at, languages, homepage, updated_at, html_url} = project;
  const {widthScreen} = useStoreWidthScreen();
  let percentLanguages = null;
  if (languages) {
    percentLanguages = calculPercentLanguages(languages);
  }
  const location = window.location.pathname;

  const controls = useAnimation();
  const controlLinkWebSite = useAnimation();
  const controlLinkGitHub = useAnimation();

  return (
    <motion.article variants={variants} initial="hidden" whileInView="visible" viewport={{once: true}}>
      <CardHoverWrapper
        className={`flex flex-col justify-between card-secondary projectCard  min-h-[33rem] gap-2.5 md:max-w-[440px] margin-auto ${location === '/' && 'lg:w-[85%]'}`}>
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
            <ListLanguage ListLanguagesWithPercent={percentLanguages} />
            <ProgressBarLanguage ListLanguagesWithPercent={percentLanguages} />
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
            whileHover={{x: widthScreen > 370 ? -10 : 10, scale: 1.2}}
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
          {updated_at ? (
            <div className="flex gap-1 items-center">
              <RefreshCcw size={18} className="text-blue-primary" />
              <p className="hidden xs:inline lg:hidden xl:inline text-xs md:text-sm">Modifier le : </p>
              <p className="numeric text-xs md:text-sm">{changeDateFormat(updated_at, false, false)}</p>
            </div>
          ) : (
            ''
          )}
        </div>
      </CardHoverWrapper>
    </motion.article>
  );
};
