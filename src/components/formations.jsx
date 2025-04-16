import { forwardRef, useEffect, useState } from "react"

import Formation from "./formation"
import Carousel from "./carousel";

import '../styles/formations.css'
import {getDatas} from '../utils/getDatas.js'

function Formations(props,ref){

   const [formations,setFormations] = useState([])

   useEffect(()=> {

      const loadData = async () => {

         const result = await getDatas('/datas/formations.json')
         setFormations(result)
      }
      
      loadData()

   },[])

   return (
   
      <section id="formations">
         <div className="contain-1440">
            <h2 ref={ref} className="title-section">Mes études et formations</h2>
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