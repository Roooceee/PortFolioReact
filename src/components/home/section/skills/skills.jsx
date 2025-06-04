import { forwardRef, useEffect, useState } from "react";
import Skill from "./skill.jsx";
import {getDatas} from '../../../../utils/getDatas.js'
import Loading from "../../../shared/loading/loading.jsx";


function Skills(props , ref){

const [skills,setSkills] = useState([])
const [isReady,setIsReady] = useState(false)
const [error,setError] = useState(false)

useEffect( ()=>{

   const loadData = async () => {

      const result = await getDatas('/datas/skills.json')
      if(result){
         setSkills(result)
         setIsReady(true)
      }
      else {
         console.warn('Erreur lors du chargement des compétences')
         setError(true)
      }
   }
   
   loadData()

},[])


return (

   <section  id='mes-competences' className="section background-secondary">
      <div className="contain-1440 margin-auto grid gap-8 min-h-[500px]">
         <h2 ref={ref} className="title-section">Compétences</h2>
            {!isReady && !error && (
               <Loading textLoading={'Chargement des compétences en cours'}/>
            )}
            {isReady && !error && (
               <div className="flex flex-col md:grid grid-cols-2 gap-8 margin-auto">
                  {
                     skills.map(element => {
                        
                        return <Skill key={element.title} logo={element.logo} title={element.title} list={element.skills_details}/>
                        
                     })
                  }
               </div>
            )}
            {!isReady && error && (
               <div className="error">
                  <p>Erreur lors du chargement des compétences</p>
               </div>
            )}
      </div>
   </section>

)

}

export default forwardRef(Skills)