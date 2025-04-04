import { CircleCheckBig } from 'lucide-react'
import '../styles/formation.css'
import { useState } from 'react'

function Formation({intitule , option , etablissement , debut , fin , obtention , competences} ){
   
   
   const [isVisible,setIsVisible] = useState(false)
   const [titleButton,setTitleButton] = useState('Afficher les compétences')


   function changeVisibility(e){
      e.preventDefault()
      if(isVisible){
         setIsVisible(false)
         setTitleButton('Afficher les compétences')
      }
      else {
         setIsVisible(true)
         setTitleButton('Masquer les compétences')
      }
   }

   return(

      <article className='formation card'>
         <h3>{intitule}</h3>
         {option != null ? <p>{option}</p> : ''}
         <p>{etablissement}</p>
         <hr />
         <p>{debut} - {fin}</p>
         {obtention != null ? <p>Diplome obtenue</p> : ''}
         <a href="" className='button-blue' onClick={(e) => changeVisibility(e)}>{titleButton}</a>
         {competences != null && isVisible == true? 
            <>
            <div className='competences'>
               <p>Compétences Acquise : </p>
               <hr />
               <ul>
                  {competences.map(element => {
                     return <li key={element}> <CircleCheckBig /> {element}</li>
                  })}
               </ul>
            </div>
            </>
         : ''}
      </article>

   )

}

export default Formation