import { forwardRef, useEffect, useRef, useState } from "react";
import '../styles/skills.css';
import Skill from "./skill";
import {getDatas} from '../utils/getDatas.js'


function Skills(props , ref){

const [skills,setSkills] = useState([])

useEffect( ()=>{

   const loadData = async () => {

      const result = await getDatas('/datas/skills.json')
      setSkills(result)
   }
   
   loadData()

},[])


return (

   <section  id='skills'>
      <h2 ref={ref}>Compétences</h2>
      <div>
      {skills.map(element => {

         return <Skill key={element.title} logo={element.logo} title={element.title} list={element.skills_details}/>
         
         })}

      </div>
   </section>

)

}

export default forwardRef(Skills)