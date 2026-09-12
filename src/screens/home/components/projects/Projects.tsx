import {useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';

import {ProjectCard} from '@/components/shared/projectCard.jsx';
import {Loading} from '@/components/ui/loading/loading.js';
import {useGitHubProjectStore} from '@/store/github_projects/github_projects.store.js';
import {GitHubProjectService} from '@/store/github_projects/github_projects.service.js';
import {ScrollDownArrow} from '@/components/ui/animated/scroll-down-arrow';
import {HomeSection} from '@/constants/home-section.constants';
import {ButtonLink} from '@/components/ui/button-link';
import Carousel from '@/components/ui/animated/carousel';
import {GitHubProjectDto} from '@/store/github_projects/github_projects.model';
import {variants, variantsLink} from '@/constants/animation.constants';

interface ProjectsProps {
  sectionId: string;
}

export const Projects = (props: ProjectsProps) => {
  const {sectionId} = props;

  const {gitHubProjects, isLoading, error} = useGitHubProjectStore();
  const controlsLink = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      GitHubProjectService.fetchAndStoreGitHubProject();
    }, 2000);
  }, []);

  return (
    <section id={sectionId} className="section background-primary min-h-[800px]">
      <div className="relative contain-1440 margin-auto flex flex-1 flex-col min-h-[800px] justify-between gap-8 lg:px-8">
        <motion.h2
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          className="title-section">
          Mes Derniers Projets
        </motion.h2>

        {gitHubProjects.length === 0 && isLoading && <Loading txt={'Chargement des projets en cours'} />}

        {error !== null && <p className="error-loading">{error}</p>}

        {gitHubProjects.length > 0 && (
          <>
            <div className="hidden lg:flex justify-between margin-auto">
              {gitHubProjects.slice(0, 3).map((proj) => (
                <ProjectCard key={proj.id} gitHubProject={proj} isAnimated={true} />
              ))}
            </div>

            <div className="flex justify-between margin-auto lg:hidden">
              <Carousel<GitHubProjectDto>
                items={gitHubProjects.slice(0, 3)}
                renderItem={(gitHubProjects) => <ProjectCard gitHubProject={gitHubProjects} />}
              />
            </div>
          </>
        )}

        <motion.div
          variants={variantsLink}
          initial="hidden"
          whileInView="visible"
          animate={controlsLink}
          viewport={{once: true}}
          onHoverStart={() => controlsLink.start('middle')}
          onHoverEnd={() => controlsLink.start('initial')}
          className="absolute mx-auto lg:mr-4 bottom-0 right-0">
          <ButtonLink to="/tous-mes-projets" isAnimated={false} className="mx-auto" title="Voir tous mes projets">
            Voir tous mes Projets
          </ButtonLink>
        </motion.div>
        <ScrollDownArrow href={HomeSection.MY_PROFESSIONNAL_EXPERIENCES} />
      </div>
    </section>
  );
};
