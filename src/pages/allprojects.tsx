import {useEffect, useState} from 'react';

import ProjectListItem from '@/components/allprojects/projectListItem.js';
import Header from '@/components/shared/header.jsx';
import Footer from '@/components/shared/footer.jsx';

import Loading from '@/components/shared/loading/loading';
import {ArrowDownWideNarrow, ArrowUpNarrowWide, FunnelPlus, FunnelX} from 'lucide-react';
import {useGitHubProjectStore} from '@/store/github_projects/github_projects.store.js';
import {GitHubProjectService} from '@/store/github_projects/github_projects.service.js';
import {GitHubProjectDto} from '@/store/github_projects/github_projects.model.js';

type CriteriaSort = 'name' | 'date_created' | 'date_updated';

export const AllProjects = () => {
  const {gitHubProjects, allLanguages, isLoading, error} = useGitHubProjectStore();
  const [projectstoShow, setProjectsToShow] = useState<GitHubProjectDto[]>();

  const [activeLanguagesFilter, setActiveLanguagesFilter] = useState<string[]>([]);
  const [order, setOrder] = useState<'desc' | 'asc'>('asc');
  const [CriteriaSort, setCriteraSort] = useState<CriteriaSort>('name');

  useEffect(() => {
    window.scrollTo(-200, 0);
    setTimeout(() => {
      GitHubProjectService.fetchAndStoreGitHubProject();
    }, 2000);
  }, []);

  useEffect(() => {
    handleSort(CriteriaSort, 'asc');
  }, [gitHubProjects]);

  const handleSort = (pCriteria: CriteriaSort, pOrder: 'asc' | 'desc') => {
    let sorted = [...gitHubProjects].sort((a, b) => {
      const getValue = (item: GitHubProjectDto) => {
        switch (pCriteria) {
          case 'date_created':
            return item.created_at;
          case 'date_updated':
            return item.updated_at;
          default:
            return item.name;
        }
      };

      switch (pOrder) {
        case 'asc':
          return getValue(a).localeCompare(getValue(b));
        case 'desc':
          return getValue(b)?.localeCompare(getValue(a));
      }
    });
    setProjectsToShow(sorted);
  };

  return (
    <>
      <Header />

      <main>
        <section id="allprojects" className="background-secondary min-h-[calc(99svh-215px)] pt-20">
          <div className="contain-1440 mx-auto section min-h-[400px] flex flex-col">
            <h1 className="title-section pb-10 text-2xl sm:text-3xl font-bold">Tous Mes Projets</h1>

            {allLanguages.length > 0 && (
              <div className="flex flex-col gap-2.5 max-w-fit md:max-w-full md:flex-row-reverse md:justify-between px-5 pb-5 lg:px-10">
                <div>
                  <ul className="flex flex-row flex-wrap gap-2.5 items-start max-w-full">
                    {allLanguages.map((languageFilter, i) => {
                      const isActive = activeLanguagesFilter.includes(languageFilter);
                      return (
                        <li key={i}>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveLanguagesFilter((prev) =>
                                isActive ? prev.filter((l) => l !== languageFilter) : [...prev, languageFilter],
                              );
                            }}
                            className={`flex items-center rounded-3xl px-2 py-1 text-white max-w-fit 
                                                text-xxs sm:text-xs lg:text-sm 
                                                ${isActive ? 'bg-purple-primary' : 'bg-blue-primary hover:bg-blue-secondary'}`}>
                            {isActive ? (
                              <FunnelX className="max-w-[16px] sm:max-w-[20px] md:max-w-[24px]" />
                            ) : (
                              <FunnelPlus className="max-w-[16px] sm:max-w-[20px] md:max-w-[24px]" />
                            )}
                            {languageFilter}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="flex lg:flex-row gap-2 items-start justify-start">
                  <select
                    className="input-form w-[100%] lg:w-[355px]"
                    onChange={(e) => {
                      const newCriteraSort = e.target.value as CriteriaSort;
                      setCriteraSort(newCriteraSort);
                      handleSort(newCriteraSort, order);
                    }}>
                    <option value="" disabled>
                      ---Séléctionner un tri---
                    </option>
                    <option value="name">{order === 'asc' ? 'Nom (A à Z)' : 'Nom (Z à A)'}</option>
                    <option value="date_created">
                      {order === 'asc'
                        ? 'Date de création (plus ancien → au plus récent)'
                        : 'Date de création (plus récent → au plus ancien)'}
                    </option>
                    <option value="date_updated">
                      {order === 'asc'
                        ? 'Date de modification (plus ancien → au plus récent)'
                        : 'Date de modification (plus récent → au plus ancien)'}
                    </option>
                  </select>

                  <a
                    className="text-blue-primary hover:text-blue-secondary cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      const newOrder = order === 'desc' ? 'asc' : 'desc';
                      setOrder(newOrder);
                      handleSort(CriteriaSort as CriteriaSort, newOrder);
                    }}>
                    {order === 'desc' ? <ArrowDownWideNarrow /> : <ArrowUpNarrowWide />}
                  </a>
                </div>
              </div>
            )}

            <div className={`px-5 lg:px-10 grid gap-5 lg:gap-10 ${gitHubProjects.length === 0 && 'margin-auto'}`}>
              {gitHubProjects.length === 0 && isLoading && <Loading textLoading={'Chargement des projets'} />}

              {projectstoShow && projectstoShow.length > 0 && (
                <>
                  {projectstoShow
                    .filter((project) => {
                      if (activeLanguagesFilter.length === 0) return true;
                      const projectLangs = Object.keys(project.languages || {});
                      return activeLanguagesFilter.every((lang) => projectLangs.includes(lang));
                    })
                    .map((e) => {
                      return <ProjectListItem key={e.name} gitHubProject={e} />;
                    })}
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      {error && <p className="error-loading">{error}</p>}

      <Footer />
    </>
  );
};
