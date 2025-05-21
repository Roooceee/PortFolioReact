import { forwardRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import '../../../../styles/home/section/projectsCard/projectsCard.css'

import { getDatas } from '../../../../utils/getDatas.js';

import ProjectCard from "../../../shared/projectCard.jsx";
import { Cpu } from "lucide-react";
import Loading from "../../../shared/loading.jsx";

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

   useEffect(()=>{

   const projectFilter = () => {

      if(projects > 0){
         projects.forEach((e)=>{
            console.log(e)
         })
      }

   }

   projectFilter()

   },[projects])



   return (
      <section id="projects" ref={ref}>
         <div className="contain-1440">
            <h2 className="title-section">Mes Derniers Projets</h2>

            {!isReady && !error && (
               <Loading textLoading={'Chargement des projets en cours'}/>
            )}
   
            { isReady && !error && (
               <div className="last-projects">
                  {projects.slice(0, 3).map((proj) => (
                     <ProjectCard
                        key={proj.name}
                        name={proj.name}
                        created={proj.created_at}
                        description={proj.description}
                        languages = {proj.languages}
                        homepage={proj.homepage}
                        update={proj.updated_at}
                        html_url={proj.html_url}
                     />
                  ))}
               </div>
            )}
   
            {!isReady && error && (
               <p className="error-loading">Erreur lors du chargement des projets</p>
               // Remplacer par le suite par un composant Error
            )}
   
            <Link to="/tous-mes-projets" className="button-blue">
               Voir tous mes Projets
            </Link>
         </div>
      </section>
   );

}

export default forwardRef(Projects)