import { CalendarCheck, CalendarClock, CalendarDays, CircleCheckBig, GraduationCap, MapPin, School } from 'lucide-react'

import { changeDateFormat } from '../../../../utils/changeDateFormat.js'
import '../../../../styles/home/section/formations/formation.css'
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

      <article className='formation card-secondary'>

      <div className='head_formation'>
         <div>
            <div>
               <p className='type badge'>{type}</p>
               {obtentionText ? <span className='obtention badge'>{obtentionLogo}{obtentionText}</span> : ''}
            </div>
            <h3><a href={lien} target='_blank'>{intitule}</a></h3>
            {option != null ? <p className='option'>Option {option}</p> : ''}
            {description && (
               <p className='description'>{<ParseTextWithBreaks text={description}/>}</p>
            )}
         </div>
      </div>

      <div className='formation-context'>
         <ul>
            <li className='etablissement'><School/>{etablissement}</li>
            <li className='lieu'><MapPin/>{lieu}</li>
            {(debut && fin) && (
               <li className='periode'><CalendarDays/>Du {changeDateFormat(debut,true,true)} au {changeDateFormat(fin,true,true)}</li>
            )}
         </ul>
      </div>

      {competences.length > 0 ? 

      <div className='competences'>
         <hr className='hr-grey' />
         <h4>Compétence{competences.length>1?'s':''}</h4>
            <ul>
               {
               competences.map((e,index)=> {
                  return <li key={index}><CircleCheckBig/>{e}</li>
               })
            }
            </ul>
      </div>
      
      : ''}

      </article>

   )

}

export default Formation