import { useEffect, useState } from 'react'
import '../styles/experience.css'
import { motion } from "motion/react"
import {Calendar, CircleArrowDown, CircleArrowUp } from 'lucide-react'


function Experience({title , company , period , responsibilities , description}){

   const [isVisible,setIsVisible] = useState(false)
   const [titleButton,setTitleButton] = useState('Afficher les missions')
   const [responsabilitesVisible, setResponsabilitesVisible] = useState([])

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


   useEffect(()=> {

      if(isVisible){

         responsibilities.forEach((element,index) => {
            
            setTimeout(()=>{
               setResponsabilitesVisible(prev => [...prev, element]) // ajoute un element
            },200*(index))

         });
      }
      else {
         responsibilities.forEach((e,index)=> {
            setTimeout(()=>{
               setResponsabilitesVisible(prev => prev.slice(0, prev.length - 1)); // Enlève le dernier élément
            },200*(index))
         })
      }

   },[isVisible])

   return (

      <article className='experience card-principal'>
         <div>
            <h3>{title}</h3>
            <p className='period'><Calendar/>{period}</p>
         </div>
            <p className='company'>{company}</p>      
            <p className='description-experience'>{description}</p>
            <div className='tasks'>
               <a className='button-blue' href="#" onClick={(e) => changeVisibility(e)}>{titleButton} {isVisible === false ? <CircleArrowDown/> : <CircleArrowUp/> } </a>
                  {isVisible === false ? '' : 
                  <ul>
                  {
                  responsabilitesVisible.map((element, index) => {
                     return <motion.li initial={{opacity : 0}} whileInView={{opacity:1}} key={element+'_'+index} className='task-card'>{element}</motion.li>
                  })}
                  </ul>   
                  }
            </div>
      </article>

   )
}

export default Experience