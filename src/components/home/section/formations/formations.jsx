import { forwardRef, useEffect, useState } from "react";

import Carousel from "../../../shared/carousel.jsx";
import Formation from "./formation.jsx";

import { getDatas } from '../../../../utils/getDatas.js';
import Loading from "../../../shared/loading/loading.jsx";

function Formations(props,ref){

   const [formations,setFormations] = useState([])
   const [isReady,setIsReady] = useState(false)
   const [error,setError] = useState(false)

   useEffect(()=> {

      const loadData = async () => {

         const result = await getDatas('/datas/formations.json')
         if(result){
            setFormations(result)
            setIsReady(true)
         }
         else {
            console.warn('Erreur lors du chargement des formations')
            setError(true)
         }
      }
      
      loadData()

   },[])

   return (
   
      <section id="mes-etudes-et-formations" className="background-primary section">
         <div className="contain-1440 grid gap-8 margin-auto min-h-[570px]">
            <h2 ref={ref} className="title-section">Mes études et formations</h2>

               {!isReady && !error && (
                  <Loading textLoading={'Chargement des formations en cours'}/>
               )}

               {isReady && !error && (
                  <Carousel items={formations} ItemComponent={Formation}/>
               )}
               {!isReady && error && (
                  <div className="error">
                     <p>Erreur lors du chargement des formations</p>
                  </div>
               )}
         </div>
      </section>
   
   )
}


export default forwardRef(Formations)