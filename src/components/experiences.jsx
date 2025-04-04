import { motion } from "motion/react";
import { forwardRef, useEffect, useState } from 'react';
import '../styles/experiences.css'
import Experience from './experience';
import Carousel from "./carousel";
import { p } from "motion/react-client";

function Experiences(props,ref){

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
            console.log('Erreur chargement experiences '+e)
      }
   }



   return (

      <div id="experiences">
         <div className="contain-1440">
            
            <h2 ref={ref}>Mes Expériences Professionnelles</h2>

            <>
            {experiences.length > 0 ? 
            <>
            <Carousel items={experiences} ItemComponent={Experience}/>
            </>
            : <p>Chargement</p>}
            </>

         </div>
      </div>

   )
}

export default forwardRef(Experiences)