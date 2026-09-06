import { Calendar, Code, Github, RefreshCcw, SquareArrowOutUpRight } from 'lucide-react'

import { calculPercentLanguages } from '../../utils/calculPercentLangages.js'
import { changeDateFormat } from '../../utils/changeDateFormat.js'

import ProgressBarLanguage from "./languagesPercent/progressBarLanguage.jsx";
import ListLanguage from "./languagesPercent/listLanguagePercent.jsx"

import ParseTextWithBreaks from './parseTextWithBreaks.jsx'
import { motion , useAnimation } from 'motion/react';
import useStoreWidthScreen from '../../storeWidthScreen.js';


const variantsLink = {
   initial: { 
      x:0,
      scale:1,
      transition: {
         duration: 0.2,
         ease: "easeIn"
      },
   },
   right: {
      x: 10,
      scale: 1.2,
      transition: {
         duration: 0.2,
         ease: "easeIn"
      },
   },
   left: {
      x: -10,
      scale: 1.2,
      transition: {
         duration: 0.2,
         ease: "easeIn"
      }
   }
}


function ProjectCard({name, description,created_at, languages, homepage, updated_at , html_url , variants}){

   const {widthScreen} = useStoreWidthScreen()
   
   const percentLanguages = calculPercentLanguages(languages)
   const location = window.location.pathname

   const controls = useAnimation()
   const controlLinkWebSite = useAnimation();
   const controlLinkGitHub = useAnimation();


   return(
         <motion.article variants={variants}
         initial='hidden'
         whileInView='visible'
         viewport={{ once: true }}
         animate={controls}
         onHoverStart={() => location !== '/tous-mes-projets' && controls.start('hover')}
         onHoverEnd={() => controls.start('initial')}  
         className={`card-secondary projectCard flex flex-col justify-between
          border-[1px] border-neutral-500 hover:border-blue-primary  
          min-h-[33rem] gap-2.5 md:max-w-[440px] margin-auto ${location ==='/' && 'lg:max-w-[28%]'}`}>
            <div className='min-h-0 head_project flex flex-col gap-8 lg:min-h-[260px]'>
               <h3 className='text-blue-primary font-bold text-lg md:text-xl'>{name}</h3>
               {description && (
                  <p><ParseTextWithBreaks text={description}/></p>
               )}
            </div>
            
            <hr className='hr-grey'/>

            <div className='languages'>
               <h4 className='language_title text-[var(--color-text)] flex gap-1 items-center pb-5'>
                  <Code size={24} className='text-blue-primary' />
                  {Object.values(languages).length > 1 ? 'Languages' : 'Language' }
               </h4>
               <ListLanguage ListLanguagesWithPercent={percentLanguages}/>
               <ProgressBarLanguage ListLanguagesWithPercent={percentLanguages}/>
            </div>
               
            <div className="flex-wrap justify-between gap-4 links_project flex items-center">
               {homepage ? 
               <motion.a variants={variantsLink}
               animate={controlLinkWebSite}
               onHoverStart={() => controlLinkWebSite.start('right')}
               onHoverEnd={() => controlLinkWebSite.start('initial') }   
               whileTap={{ scale: 0.95 }} href={homepage} target="_blank" className="button-blue flex items-center gap-1 text-sm"><SquareArrowOutUpRight size={18} /> Visiter le site</motion.a> : 
               ''}
               <motion.a  
               variants={variantsLink} 
               animate={controlLinkGitHub} 
               onHoverStart={() => widthScreen > 370 ? controlLinkGitHub.start('left') : controlLinkGitHub.start('right')  }  
               onHoverEnd={() => controlLinkGitHub.start('initial') }  
               whileTap={{ scale: 0.95 }} href={html_url} 
               target="_blank" className="button-blue flex items-center gap-1 text-sm"><Github size={18} />Voir le code</motion.a>
            </div>
            <hr className='hr-grey' />
            <div className='dates_project flex justify-between'>

               <div className='flex gap-1 items-center'><Calendar size={18} className='text-blue-primary'/><p className='hidden xs:inline lg:hidden xl:inline text-xs md:text-sm'>Crée le : </p><p className='numeric text-xs md:text-sm'>{changeDateFormat(created_at,false,false)}</p></div> 
               {updated_at ? 
               <div className='flex gap-1 items-center'><RefreshCcw size={18} className='text-blue-primary'/><p className='hidden xs:inline lg:hidden xl:inline text-xs md:text-sm'>Modifier le : </p><p className='numeric text-xs md:text-sm'>{changeDateFormat(updated_at,false,false)}</p></div> 
               : ''}

            </div>
         </motion.article>
   )
}

export default ProjectCard