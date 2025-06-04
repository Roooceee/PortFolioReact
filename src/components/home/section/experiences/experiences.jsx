import { forwardRef, useEffect, useState } from 'react';

import Carousel from "../../../shared/carousel.jsx";
import Experience from './experience.jsx'

import { getDatas } from '../../../../utils/getDatas.js';
import Loading from '../../../shared/loading/loading.jsx';

function Experiences(props,ref){

   const [experiences,setExperiences] = useState([])
   const [isReady,setIsReady] = useState(false)
   const [error,setError] = useState(false)

   useEffect(()=>{

      const loadData = async () => {
         const result = await getDatas('/datas/experiences.json')
         if(result){
            setExperiences(result)
            setIsReady(true)
         }
         else {
            setError(true)
            console.warn('Erreur lors du chargement des expériences professionnelles')
         }
         
      }

      loadData()

   },[])

   return (

      <section id="mes-experiences-professionnelles" className='background-secondary section'>
         <div className="contain-1440 grid gap-8 margin-auto min-h-[740px]">
            
            <h2 ref={ref} className='title-section max-h-fit'>Mes Expériences Professionnelles</h2>

            {!isReady && !error && (
               <Loading textLoading={'Chargements des expériences en cours'}/>
            )}

            {isReady && !error && (
               <Carousel items={experiences} ItemComponent={Experience}/>
            )}

            {!isReady && error && (
               <div className='error'>
                  <p>Erreur lors du chargement des expériences</p>
               </div>
            )}
         </div>
      </section>

   )
}

export default forwardRef(Experiences)