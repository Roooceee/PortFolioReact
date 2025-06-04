import { Calendar, Code, Github, RefreshCcw, SquareArrowOutUpRight } from 'lucide-react'

import { calculPercentLanguages } from '../../utils/calculPercentLangages.js'
import { changeDateFormat } from '../../utils/changeDateFormat.js'

import useStoreDevice from '../../storeDevice.js';

import ProgressBarLanguage from "./languagesPercent/progressBarLanguage.jsx";
import ListLanguage from "./languagesPercent/listLanguagePercent.jsx"

import ParseTextWithBreaks from './parseTextWithBreaks.jsx'

function ProjectCard({name, description,created_at, languages, homepage, updated_at , html_url}){
   
   const percentLanguages = calculPercentLanguages(languages)

   const {device,widthScreen} = useStoreDevice()

   return(
      <>
         <article className='card-secondary projectCard flex flex-col justify-between min-h-[30rem] gap-2.5 md:max-w-[440px] margin-auto lg:max-w-[28%] '>
            <div className='min-h-0 head_project flex flex-col gap-8 lg:min-h-[260px]'>
               <h3 className='text-blue-primary font-bold text-lg md:text-xl'>{name}</h3>
               {description && (
                  <p><ParseTextWithBreaks text={description}/></p>
               )}
            </div>
            
            <hr className='hr-grey'/>

            <div className='languages'>
               <h4 className='language_title text-[var(--color-text)] flex gap-1 items-center'>
                  <Code size={24} className='text-blue-primary' />
                  {Object.values(languages).length > 1 ? 'Languages' : 'Language' }
               </h4>
               <ProgressBarLanguage ListLanguagesWithPercent={percentLanguages}/>
               <ListLanguage ListLanguagesWithPercent={percentLanguages}/>
            </div>
               
            <div className="flex-wrap gap-4 links_project flex items-center md:flex-nowrap md:gap-8">
               {homepage ? 
               <a href={homepage} target="_blank" className="button-blue flex items-center gap-1 text-sm"><SquareArrowOutUpRight size={18} /> Visiter le site</a> : 
               ''}
               <a href={html_url} target="_blank" className="button-blue flex items-center gap-1 text-sm"><Github size={18} />Voir le code</a>
            </div>
            <hr className='hr-grey' />
            <div className='dates_project flex justify-between'>

               <div className='flex gap-1 items-center'><Calendar size={18} className='text-blue-primary'/>{((widthScreen >= 1300 && widthScreen >= 1024) || (widthScreen >= 520 && widthScreen <= 1024)) && (<p className='text-xs md:text-sm'>Crée le : </p>)}<p className='numeric text-xs md:text-sm'>{changeDateFormat(created_at,false,false)}</p></div> 
               {updated_at ? 
               <div className='flex gap-1 items-center'><RefreshCcw size={18} className='text-blue-primary'/>{((widthScreen >= 1300 && widthScreen >= 1024) || (widthScreen >= 520 && widthScreen <= 1024)) && (<p className='text-xs md:text-sm'>Modifier le : </p>)}<p className='numeric text-xs md:text-sm'>{changeDateFormat(updated_at,false,false)}</p></div> 
               : ''}

            </div>
         </article>
      </>
   )
}

export default ProjectCard