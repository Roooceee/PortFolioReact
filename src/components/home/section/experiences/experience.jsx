import '../../../../styles/home/section/experiences/experience.css'
import {changeDateFormat} from '../../../../utils/changeDateFormat'
import { Building2, CalendarDays, ClipboardCheck, MapPin } from 'lucide-react'
import ParseTextWithBreaks from '../../../shared/parseTextWithBreaks'


function Experience({type , title , company , place , startDate , endDate 
   , responsibilities , description , technologies}){


   return (

      <article className='experience card-principal'>
         <div className='head_experience'>
            <p className='type badge'>{type}</p>
            <h3 className='title'>{title}</h3>
            {description && (
               <p className='description'>{<ParseTextWithBreaks text={description}/>}</p>
            )}
         </div>
         <div className='experience_context'>
            <ul>
               <li className='company'><Building2/>{company}</li>
               <li className='place'> <MapPin/> {place}</li>
               <li className='date'><CalendarDays/> De {changeDateFormat(startDate , true,false)} à {changeDateFormat(endDate , true,false)}</li>
            </ul>
         </div>
         <div className='responsibilities'>
            <hr className='hr-grey' />
            <h4>Missions principales</h4>
            <ul>
               {responsibilities.map((e,index)=> {
                     return <li key={index}><ClipboardCheck/> {e}</li>
                  })}
            </ul>
         </div>
         <div className='technologies'>
            <hr className='hr-grey' />
            <h4>Technologies & Skills</h4>
            <ul>
               {technologies.map((e,index)=> {
                  return <li className='badge' key={index}>{e}</li>
               })}
            </ul>
         </div>
      </article>

   )
}

export default Experience