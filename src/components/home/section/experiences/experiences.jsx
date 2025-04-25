import { forwardRef, useEffect, useState } from 'react';

import Carousel from "../../../shared/carousel.jsx";
import Experience from './experience.jsx'

import { getDatas } from '../../../../utils/getDatas.js';
import '../../../../styles/home/section/experiences/experiences.css'
import Loading from '../../../shared/loading.jsx';

function Experiences(props,ref){

   const [experiences,setExperiences] = useState([])
   const [isReady,setIsReady] = useState(false)
   const [error,setError] = useState(false)

   useEffect(()=>{

      const loadData = async () => {
         const result = await getDatas('/datas/experiences.json')
         if(result){
            setExperiences(result)
            setTimeout(()=>{
               setIsReady(true)
            },500)
         }
         else {
            setError(true)
            console.warn('Erreur lors du chargement des expériences professionnelles')
         }
         
      }

      loadData()

   },[])

   return (

      <section id="experiences">
         <div className="contain-1440">
            
            <h2 ref={ref} className='title-section'>Mes Expériences Professionnelles</h2>

            {!isReady && !error && (
               <Loading textLoading={'Chargements des expériences professionnelles en cours'}/>
            )}

            {isReady && !error && (
               <Carousel items={experiences} ItemComponent={Experience}/>
            )}

            {!isReady && error && (
               <div className='error'>
                  <p>Erreur lors du chargement des expériences professionnelles</p>
               </div>
            )}
         </div>
      </section>

   )
}

export default forwardRef(Experiences)