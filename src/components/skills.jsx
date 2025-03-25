import { useEffect, useState } from "react";
import '../styles/skills.css';
import Skill from "./skill";
import { motion } from "motion/react"


function Skills(){

const [skills,setSkills] = useState([])

useEffect(()=>{

   getSkills()

},[])
// lorsqu'on fais des requetes réseaux via fetch dans un useEffect il faut utiliser un tableau de dépendance vide [] pour que la requete ne s'envoie que a la création du component


async function getSkills(){
   
   try {         
      const req = await fetch('/datas/skills.json')
      const res = await req.json()
      setSkills(res)
   }
   catch(e){
      console.log('Erreur '+e)
   }
}

return (

   <div id='skills'>
      <motion.h2 whileInView={{ scale: 1.4 }}>Compétences</motion.h2>
      <div>

      {skills.map(element => {
         
         return <Skill key={element.title} title={element.title} list={element.skills_details}/>
         
         })}

      </div>
   </div>

)

}

export default Skills