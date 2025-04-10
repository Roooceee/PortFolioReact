import '../styles/experience.css'
import {changeDateFormat} from '../utils/changeDateFormat.js'
import { Building2, CalendarDays, ClipboardCheck, MapPin } from 'lucide-react'


function Experience({type , title , company , place , startDate , endDate 
   , responsibilities , description , technologies}){


   return (

      <article className='experience card-principal'>
         <div className='head_experience'>
            <p className='type'>{type}</p>
            <h3 className='title'>{title}</h3>
            <p className='description'>{description}</p>
         </div>
         <div className='experience_context'>
            <ul>
               <li className='company'><Building2/>{company}</li>
               <li className='place'> <MapPin/> {place}</li>
               <li className='date'><CalendarDays/> {changeDateFormat(startDate , true)} au {changeDateFormat(endDate , true)}</li>
            </ul>
         </div>
         <div className='responsibilities'>
            <hr />
            <h4>Missions principales</h4>
            <ul>
               {responsibilities.map(e=> {
                     return <li><ClipboardCheck/> {e}</li>
                  })}
            </ul>
         </div>
         <div className='technologies'>
            <hr />
            <h4>Technologies & Skills</h4>
            <ul>
               {technologies.map(e=> {
                  return <li>{e}</li>
               })}
            </ul>
         </div>
      </article>

   )
}

export default Experience