import { motion } from "motion/react"
import { useEffect, useState } from 'react'
import '../styles/experience.css'

function Experience({title , company , period , responsibilities , description}){

   const [isVisible,setIsVisible] = useState(false)
   const [titleButton,setTitleButton] = useState('Voir les tâches')
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

      <motion.article initial={{ scale: 0.7 , opacity:0}} whileInView={{ scale: 1 ,opacity:1}} transition={{duration:0.5}} className='experience card'>
            <h3>{title}</h3>
            <p className='company'>{company}</p>      
            <p className='period'>{period}</p>
            <p className='description-experience'>{description}</p>
            <motion.a whileHover={{scale:1.2}} className='button-blue' href="#" onClick={(e) => changeVisibility(e)}>{titleButton}</motion.a>
               <ul>
               {
               responsabilitesVisible.map((element, index) => {
                  return <motion.li initial={{opacity : 0}} whileInView={{opacity:1}} key={element+'_'+index} className='task-card'>{element}</motion.li>
               })}
               </ul>   
      </motion.article>

   )
}

export default Experience