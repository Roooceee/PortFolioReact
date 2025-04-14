import { CalendarCheck, CalendarDays,CircleCheckBig, GraduationCap, MapPin, School } from 'lucide-react'

import '../styles/formation.css'
import {changeDateFormat} from '../utils/changeDateFormat.js'

function Formation({type , intitule , option , description , etablissement , lieu ,  
   debut , fin , obtention , competences} ){

   

   let obtentionText = null
   let obtentionLogo = null

   if(new Date(debut) > new Date){
      obtentionText = 'A Venir'
      obtentionLogo = <CalendarClock />
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

      <article className='formation card'>

      <div className='head_formation'>
         <div>
            <p className='type'>{type}</p>
            <h3>{intitule}</h3>
            {option != null ? <p className='option'>Option {option}</p> : ''}
            <p className='description'>{description}</p>
         </div>
         {obtentionText ? <span className='obtention'>{obtentionLogo}{obtentionText}</span> : ''}
      </div>

      <div className='formation-context'>
         <ul>
            <li className='etablissement'><School/>{etablissement}</li>
            <li className='lieu'><MapPin/>{lieu}</li>
            <li className='periode'><CalendarDays/>Du {changeDateFormat(debut,true,true)} au {changeDateFormat(fin,true,true)}</li>
         </ul>
      </div>

      {competences.length > 0 ? 

      <div className='competences'>
         <hr />
         <h4>Compétences :</h4>
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