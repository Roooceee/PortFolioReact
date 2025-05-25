import { Calendar, Code, Github, RefreshCcw, SquareArrowOutUpRight } from 'lucide-react'

import { calculPercentLanguages } from '../../utils/calculPercentLangages.js'
import { changeDateFormat } from '../../utils/changeDateFormat.js'

import ProgressBarLanguage from "./languagesPercent/progressBarLanguage.jsx";
import ListLanguage from "./languagesPercent/listLanguagePercent.jsx"

import '../../styles/shared/projectCard.css'
import Loading from "./loading.jsx";
import ParseTextWithBreaks from './parseTextWithBreaks.jsx'

function ProjectCard({name, description,created_at, languages, homepage, updated_at , html_url}){
   
   const percentLanguages = calculPercentLanguages(languages)

   return(
      <>
         <article className="card-secondary projectCard">
            <div className='head_project'>
               <h3>{name}</h3>
               {description && (
                  <p><ParseTextWithBreaks text={description}/></p>
               )}
            </div>
            
            <hr className='hr-grey' />

            <div className='languages'>
               <h4 className='language_title'>
                  <Code size={24} />
                  {Object.values(languages).length > 1 ? 'Languages' : 'Language' }
               </h4>
               <ProgressBarLanguage ListLanguagesPercent={percentLanguages}/>
               <ListLanguage listLanguagesPercent={percentLanguages}/>
            </div>
               
            <div className="links_project">
               {homepage ? 
               <a href={homepage} target="_blank" className="button-blue"><SquareArrowOutUpRight size={18} /> Visiter le site</a> : 
               ''}
               <a href={html_url} target="_blank" className="button-blue"><Github size={18} />Voir le code</a>
            </div>
            <hr className='hr-grey' />
            <div className='dates_project'>
               <div><Calendar size={18}/><p>Crée le : </p><p className='numeric'>{changeDateFormat(created_at,false,false)}</p></div> 
               {updated_at ? 
               <div><RefreshCcw size={18}/><p>Modifier le : </p><p className='numeric'>{changeDateFormat(updated_at,false,false)}</p></div> 
               : ''}
            </div>
         </article>
      </>
   )
}

export default ProjectCard