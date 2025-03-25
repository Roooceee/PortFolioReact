import { useEffect, useState } from 'react';
import '../styles/experiences.css'
import Experience from './experience';

function Experiences(){

   const [experiences,setExperiences] = useState([])

   useEffect(()=>{

   getExperiences()

   },[])
   // lorsqu'on fais des requetes réseaux via fetch dans un useEffect il faut utiliser un tableau de dépendance vide [] pour que la requete ne s'envoie que a la création du component


   async function getExperiences(){
   
      try {         
            const req = await fetch('/datas/experiences.json')
            const res = await req.json()
            setExperiences(res)
      }
      catch(e){
            console.log('Erreur '+e)
      }
   }



   return (

      <div id="experiences">
         <div className="contain-1440">
            
            <h2>Expériences</h2>

            <div>
                  {experiences.map(element => {
               
                     return <Experience key={element.title} title = {element.title} company = {element.company} period = {element.period} description={element.description} responsibilities = {element.responsibilities}/>
                     
                  })}       
            </div>

         </div>
      </div>

   )
}

export default Experiences