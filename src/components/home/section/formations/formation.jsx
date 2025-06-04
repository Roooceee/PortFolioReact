import { CalendarCheck, CalendarClock, CalendarDays, CircleCheckBig, GraduationCap, MapPin, School } from 'lucide-react'

import { changeDateFormat } from '../../../../utils/changeDateFormat.js'
import ParseTextWithBreaks from '../../../shared/parseTextWithBreaks.jsx'

function Formation({type , intitule , lien ,  option , description , etablissement , lieu ,  
   debut , fin , obtention , competences} ){

   

   let obtentionText = null
   let obtentionLogo = null

   if((new Date(debut) > new Date) || debut === null ){
      obtentionText = 'A Venir'
      obtentionLogo = <CalendarClock/>
   }
   else {
      if(new Date(debut) < new Date() && new Date(fin) < new Date()){
         if(obtention === true){
            obtentionText = 'Obtenu'
            obtentionLogo = <GraduationCap/>
         }
         else {
            obtentionText = 'Terminé'
            obtentionLogo = <CalendarCheck/>
         }
      }
      else {
         obtentionText = 'En cours'
         obtentionLogo = <CalendarDays/>
      }
   }
   
   return(

      <article className='card-secondary margin-auto grid gap-6'>

      <div className='grid gap-1'>
         <div className='flex flex-col-reverse gap-2.5 items-start md:flex-row justify-between md:items-center'>
            <p className='badge'>{type}</p>
            {obtentionText ? <span className='badge'>{obtentionLogo}{obtentionText}</span> : ''}
         </div>
         <h3 className='text-blue-primary hover:text-blue-secondary font-bold text-lg sm:text-xl underline'><a href={lien} target='_blank'>{intitule}</a></h3>
         {option != null ? <p className='text-primary text-md md:text-lg'>Option {option}</p> : ''}
         {description && (
            <p className='pt-5 max-w-[90%] text-sm'>{<ParseTextWithBreaks text={description}/>}</p>
         )}
      </div>

      <div className='formation-context'>
         <ul className='grid gap-1 text-[var(--color-text)]'>
            <li className='flex items-center gap-1 text-sm'><School className='text-blue-primary'/>{etablissement}</li>
            <li className='flex items-center gap-1 text-sm'><MapPin className='text-blue-primary'/>{lieu}</li>
            {(debut && fin) && (
               <li className='flex items-center gap-1 text-sm'><CalendarDays className='text-blue-primary'/>Du {changeDateFormat(debut,true,true)} au {changeDateFormat(fin,true,true)}</li>
            )}
         </ul>
      </div>

      {competences.length > 0 ? 

      <div className='grid gap-5'>
         <hr className='hr-grey' />
         <h4 className='text-blue-primary font-bold'>Compétence{competences.length>1?'s':''}</h4>
            <ul className='grid grid-cols-1 gap-2.5 lg:grid-cols-[auto_auto] lg:gap-0 text-[var(--color-text)]'>
               {
               competences.map((e,index)=> {
                  return <li className='flex gap-1 text-xs sm:text-sm' key={index}><CircleCheckBig className='text-success items-start lg:items:center min-w-[20px] max-w-[20px]'/>{e}</li>
               })
            }
            </ul>
      </div>
      
      : ''}

      </article>

   )

}

export default Formation