import { forwardRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from 'framer-motion';

import { getDatas } from '../../../../utils/getDatas.js';

import ProjectCard from "../../../shared/projectCard.jsx";
import Loading from "../../../shared/loading/loading.jsx";
import Carousel from "../../../shared/carousel.jsx";
import useStoreWidthScreen from "../../../../storeWidthScreen.js";

const variants = {
  hidden: { y: 50, opacity: 0 , scale:0.5 },
  visible: {
    y: 0,
    opacity: 1,
    scale:1,
    transition: {
      duration: 0.5,
      ease: "easeIn"
    },
  }
}

const variantsLink = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    },
  },
   initial: { x:0 , scale:1 },
   left: {
      x: -10,
      scale: 1.2,
      transition: {
         duration: 0.2,
         ease: "easeIn"
      },
   },
   middle: {
      x: 0,
      scale: 1.2,
      transition: {
         duration: 0.2,
         ease: "easeIn"
      },
   },
}


function Projects(props,ref){

   const [projects,setProjects] = useState([])
   const [isReady, setIsReady] = useState(false);
   const [error, setError] = useState(false);

   const controlsLink = useAnimation()
   const {widthScreen} = useStoreWidthScreen()


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
               controlsLink.start('visible')
            }
            else {
               console.warn('Aucun projet recupéré')
               setError(true)
            }
         }

         setTimeout(()=>{
            loadData()
         },1000)
         
   },[])

   return (
      <section id="mes-derniers-projets" ref={ref} className="section background-primary">
         <div className="contain-1440 margin-auto flex flex-col justify-between flex-wrap min-h-[760px] gap-8 lg:px-8">
            <motion.h2 variants={variants}          
            initial='hidden'
            whileInView='visible' 
            viewport={{ once: true }}   
            className="title-section">Mes Derniers Projets</motion.h2>

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
   
            <motion.div variants={variantsLink}
            initial='hidden'
            whileInView='visible'
            animate={controlsLink}
            viewport={{ once: true }}   
            onHoverStart={() => widthScreen > 1024 ? controlsLink.start('left') : controlsLink.start('middle')}
            onHoverEnd={() => controlsLink.start('initial') } 
            className="mx-auto lg:mr-4">
               <Link
               to="/tous-mes-projets" className="mx-auto button-blue" title="Voir tous mes projets"> 
                  Voir tous mes Projets
               </Link>
            </motion.div>

         </div>
      </section>
   );

}

export default forwardRef(Projects)