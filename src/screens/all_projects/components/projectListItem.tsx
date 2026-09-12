import {Calendar, Info, RefreshCcw} from 'lucide-react';
import {useState} from 'react';

import {calculPercentLanguages} from '@/_utils/calculPercentLangages';
import {changeDateFormat} from '@/_utils/changeDateFormat';

import {ProjectCard} from '@/components/shared/projectCard.js';
import {GitHubProjectDto} from '@/store/github_projects/github_projects.model.js';
import {sliceTxt} from '@/_utils/slideTxt.js';
import {ListLanguagePercent} from '@/components/ui/languagesPercent/listLanguagePercent.js';
import {Modal} from '@/components/ui/modal';

interface ProjectListItemProps {
  gitHubProject: GitHubProjectDto;
}

export const ProjectListItem = (props: ProjectListItemProps) => {
  const {gitHubProject} = props;
  const {name, description, created_at, languages, homepage, updated_at, html_url} = gitHubProject;

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <article className="card-principal flex justify-between items-center gap-10 !p-2.5 max-h-[50px] min-h-fit md:min-h-[150px]">
        <>
          <div className="grid gap-2.5">
            <h3 className="text-blue-primary text-base sm:text-lg lg:text-xl font-bold">{name}</h3>
            {description && <p className="text-xxs sm:text-sm">{sliceTxt(description, 80)}</p>}
            <div className="hidden md:inline">
              {languages && <ListLanguagePercent listLanguagesWithPercent={calculPercentLanguages(languages)} />}
            </div>
            <div className="hidden md:grid">
              <div className="flex items-center gap-1">
                <Calendar className="text-blue-primary" size={18} />
                <p>Crée le : </p>
                <p className="numeric">{changeDateFormat(created_at, false, false)}</p>
              </div>
              {updated_at ? (
                <div className="flex items-center gap-1">
                  <RefreshCcw className="text-blue-primary" size={18} />
                  <p>Modifier le : </p>
                  <p className="numeric">{changeDateFormat(updated_at, false, false)}</p>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>

          <div>
            <a
              href="#"
              aria-label="En savoir plus"
              title="En savoir plus"
              className="button-blue flex items-center justify-center md:gap-1 !py-[1px] !px-[5px] md:!py-[10px] md:!px-[15px] rounded-[10px]"
              onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(true);
              }}>
              <Info className="max-w-[16px] md:max-w-[36px]" />
              <span className="hidden md:inline">En savoir plus</span>
            </a>
          </div>
        </>
      </article>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={
          <h2 className="text-sm sm:text-base lg:text-lg font-primary font-normal text-[var(--color-text)]">
            Détail du projet
          </h2>
        }
        showButtonClose={true}>
        <ProjectCard
          name={name}
          description={description}
          languages={languages}
          homepage={homepage}
          html_url={html_url}
          updated_at={updated_at}
          created_at={created_at}
        />
      </Modal>
    </>
  );
};
