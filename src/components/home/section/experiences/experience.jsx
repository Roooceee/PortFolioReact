import {changeDateFormat} from '../../../../utils/changeDateFormat'
import { Building2, CalendarDays, ClipboardCheck, MapPin } from 'lucide-react'
import ParseTextWithBreaks from '../../../shared/parseTextWithBreaks'


function Experience({type , title , company , place , startDate , endDate 
   , responsibilities , description , technologies}){


   return (

      <article className='experience card-principal min-h-[650px] margin-auto flex flex-col justify-between gap-6'>
         <div className='head_experience grid gap-2 min-h-[125px]'>
            <p className='type badge'>{type}</p>
            <h3 className='text-blue-primary font-bold text-lg sm:text-xl'>{title}</h3>
            {description && (
               <p className='text-[var(--color-text)] pt-4 max-w-[90%] text-sm'>{<ParseTextWithBreaks text={description}/>}</p>
            )}
         </div>
         <div>
            <ul className='grid gap-1 text-[var(--color-text)]'>
               <li className='flex items-center gap-1 text-sm'><Building2 className='text-blue-primary'/>{company}</li>
               <li className='flex items-center gap-1 text-sm'> <MapPin className='text-blue-primary' /> {place}</li>
               <li className='flex items-center gap-1 text-sm'><CalendarDays className='text-blue-primary' /> De {changeDateFormat(startDate , true,false)} à {changeDateFormat(endDate , true,false)}</li>
            </ul>
         </div>
         <div className='grid gap-4'>
            <hr className='hr-grey' />
            <h4 className='text-blue-primary font-bold'>Missions principales</h4>
            <ul className='grid gap-1 text-[var(--color-text)]'>
               {responsibilities.map((e,index)=> {
                     return <li className='flex items-start sm:items-center gap-1 text-xs sm:text-sm' key={index}><ClipboardCheck className='text-success min-w-[20px] max-w-[20px]'/> {e}</li>
                  })}
            </ul>
         </div>
         <div className='grid gap-4'>
            <hr className='hr-grey' />
            <h4 className='text-blue-primary font-bold'>Technologies & Skills</h4>
            <ul className='flex flex-wrap gap-2'>
               {technologies.map((e,index)=> {
                  return <li className='badge text-xs sm:text-sm' key={index}>{e}</li>
               })}
            </ul>
         </div>
      </article>

   )
}

export default Experience