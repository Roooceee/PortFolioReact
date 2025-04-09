import { useState } from 'react'
import '../styles/experience.css'
import {Calendar, CircleArrowDown, CircleArrowUp, CircleCheckBig } from 'lucide-react'



function Experience({title , company , period , responsibilities , description}){

   const [isVisible,setIsVisible] = useState(false)
   const [titleButton,setTitleButton] = useState('Afficher les missions')

   function changeVisibility(e){
      e.preventDefault()

      if(isVisible){
         setIsVisible(false)
         setTitleButton('Afficher les missions')
      }
      else {
         setIsVisible(true)
         setTitleButton('Masquer les missions')
      }
   }


   return (

      <article className='experience card-principal'>
         <div>
            <div>
               <h3>{title}</h3>
               <p className='company'>{company}</p>      
            </div>
            <p className='period'><Calendar/>{period}</p>
         </div>
            <p className='description-experience'>{description}</p>
            <div className='tasks'>
               <a className='button-blue' href="#" onClick={(e) => changeVisibility(e)}> {titleButton} {isVisible === false ? <CircleArrowDown/> : <CircleArrowUp/> } </a>
                  {isVisible === false ? 
                  '' 
                  : 
                  <ul>
                  {
                  responsibilities.map((element, index) => {
                     return <li key={element+'_'+index}> <CircleCheckBig /> {element}</li>
                  })}
                  </ul>   
                  }
            </div>
      </article>

   )
}

export default Experience