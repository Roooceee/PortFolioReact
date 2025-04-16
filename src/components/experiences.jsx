import { forwardRef, useEffect, useState } from 'react';

import Experience from './experience';
import Carousel from "./carousel";

import {getDatas} from '../utils/getDatas.js'
import '../styles/experiences.css'

function Experiences(props,ref){

   const [experiences,setExperiences] = useState([])

   useEffect(()=>{

      const loadData = async () => {
         const result = await getDatas('/datas/experiences.json')
         setExperiences(result)
      }
      
      loadData()

   },[])

   return (

      <section id="experiences">
         <div className="contain-1440">
            
            <h2 ref={ref} className='title-section'>Mes Expériences Professionnelles</h2>

            <>
            {experiences.length > 0 ? 
            <>
            <Carousel items={experiences} ItemComponent={Experience}/>
            </>
            : <p>Chargement</p>}
            </>

         </div>
      </section>

   )
}

export default forwardRef(Experiences)