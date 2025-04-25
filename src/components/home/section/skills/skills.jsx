import { forwardRef, useEffect, useState } from "react";
import '../../../../styles/home/section/skills/skills.css'
import Skill from "./skill.jsx";
import {getDatas} from '../../../../utils/getDatas.js'
import Loading from "../../../shared/loading.jsx";


function Skills(props , ref){

const [skills,setSkills] = useState([])
const [isReady,setIsReady] = useState(false)
const [error,setError] = useState(false)

useEffect( ()=>{

   const loadData = async () => {

      const result = await getDatas('/datas/skills.json')
      if(result){
         setSkills(result)
         setTimeout(()=> {
            setIsReady(true)
         },500)
      }
      else {
         console.warn('Erreur lors du chargement des compétences')
         setError(true)
      }
   }
   
   loadData()

},[])


return (

   <section  id='skills'>
      <div className="contain-1440">
         <h2 ref={ref} className="title-section">Compétences</h2>
            {!isReady && !error && (
               <Loading textLoading={'Chargement des compétences en cours'}/>
            )}
            {isReady && !error && (
               <div className="skill-items">
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