import { forwardRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getDatas } from '../../../../utils/getDatas.js';

import ProjectCard from "../../../shared/projectCard.jsx";
import Loading from "../../../shared/loading/loading.jsx";
import Carousel from "../../../shared/carousel.jsx";

function Projects(props,ref){

   const [projects,setProjects] = useState([])
   const [isReady, setIsReady] = useState(false);
   const [error, setError] = useState(false);

   useEffect(()=>{

         const loadData = async () => {

            const token = import.meta.env.VITE_GITHUB_TOKEN;
            const result = await getDatas('https://api.github.com/users/Roooceee/repos?sort=created&direction=desc',token)
            if(result){

               const projectsWithLanuages = await Promise.all (
                  result.map(async(project)=>{
                        const languagesRes = await getDatas(`https://api.github.com/repos/Roooceee/${project.name}/languages`,token)

                        return {
                           ...project,
                           languages: languagesRes ? languagesRes : {},
                        };     
                        
                  })
               )
               projectsWithLanuages.map((e,index)=>{
                  if(e.name !== 'Roooceee'){
                     projectsWithLanuages[index] = e
                  }
               })
               setProjects(projectsWithLanuages)
               setIsReady(true)
            }
            else {
               console.warn('Aucun projet recupéré')
               setError(true)
            }
         }
         
         loadData()

   },[])

   return (
      <section id="mes-derniers-projets" ref={ref} className="section background-primary">
         <div className="contain-1440 margin-auto flex flex-col justify-between lg:justify-around flex-wrap min-h-[760px] gap-8 lg:px-8">
            <h2 className="title-section">Mes Derniers Projets</h2>

            {!isReady && !error && (
               <Loading textLoading={'Chargement des projets en cours'}/>
            )}
   
            { isReady && !error && (
               <>
                  <div className="hidden lg:flex justify-between margin-auto">
                        {projects.slice(0, 3).map((proj) => (
                           <ProjectCard
                              key={proj.name}
                              name={proj.name}
                              created_at={proj.created_at}
                              description={proj.description}
                              languages = {proj.languages}
                              homepage={proj.homepage}
                              updated_at={proj.updated_at}
                              html_url={proj.html_url}
                           />))}
                  </div>
                  <div className="flex justify-between margin-auto lg:hidden">
                     <Carousel items={projects.slice(0, 3)} ItemComponent={ProjectCard}/>
                  </div>
               </>
            )}
   
            {!isReady && error && (
               <p className="error-loading">Erreur lors du chargement des projets</p>
               // Remplacer par le suite par un composant Error
            )}
   
            <Link to="/tous-mes-projets" className="mx-auto button-blue lg:mr-0">
               Voir tous mes Projets
            </Link>
         </div>
      </section>
   );

}

export default forwardRef(Projects)