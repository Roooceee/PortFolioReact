import { motion } from "motion/react";
import { forwardRef, useEffect, useState } from "react"
import Formation from "./formation"
import '../styles/formations.css'
import Carousel from "./carousel";

function Formations(props,ref){

   const [formations,setFormations] = useState([])

   useEffect(()=> {

      getFormations()

   },[])

   // Récupère les formations depuis le fichier JSON
   // Du plus récent [0] au plus ancien [2]
   async function getFormations(){

      try {
         const req = await fetch('/datas/formations.json')
         const res = await req.json()
         setFormations(res)
      }
      catch(e){
         console.log('Erreur chargement formations '+e)
      }
   }

   return (
   
      <section id="formations">
         <div className="contain-1440">
            <h2 ref={ref}>Mes études et formations</h2>
               {formations.length > 0 ?
                  <>
                     <Carousel items={formations} ItemComponent={Formation}/>
                  </>
               : <p>Chargement</p>}
         </div>
      </section>
   
   )
}


export default forwardRef(Formations)