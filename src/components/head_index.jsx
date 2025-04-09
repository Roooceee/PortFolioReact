import '../styles/head_index.css'
import { useState } from 'react'
import { useEffect } from 'react'

function Head_Index() {

   const [isTypingDoneH1 , setIsTypingDoneH1] = useState(false)
   const [isTypingDoneP , setIsTypingDoneP] = useState(false)
   const [currentText , setCurrentText] = useState('h1')


   useEffect(()=> {
      

      if(currentText === 'h1'){
            setIsTypingDoneH1(true)
            setCurrentText('p')
      }
      if(currentText === 'p'){
         setTimeout(()=> {
            setIsTypingDoneP(true)
         },3500)
      }

   },[currentText])

   return (
      <section id="head_index">
         <div>
            <div>
               <h2>Sébastien LUCAS</h2>
               <h1 className={`typing-text typing-text ${isTypingDoneH1 ? "active" : ""}`}>Développeur d'application JavaScript React</h1>
               <p className={`typing-text typing-text ${isTypingDoneP ? "active" : ""}`}>Actuellement à la recherche d’une alternance</p>
            </div>
            <div>
               <a href="#projects" className="button-blue">Découvrir mon travail</a>
               <a href="" className="button-blue">Me Contacter</a>
            </div>
         </div>
      </section>
 )}
 
 export default Head_Index