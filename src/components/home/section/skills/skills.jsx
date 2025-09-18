import { forwardRef, useEffect, useState } from "react";
import Skill from "./skill.jsx";
import {getDatas} from '../../../../utils/getDatas.js'
import Loading from "../../../shared/loading/loading.jsx";
import { motion } from 'framer-motion';


const containerVariants  = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, 
    },
  },
};

const variants = {
  hidden: { y: 50, opacity: 0 , scale:0.5 },
  visible: {
    y: 0,
    opacity: 1,
    scale:1,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    },
  }
}

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

   <section id='mes-competences' className="section background-secondary">
      <motion.div variants={containerVariants}
      initial='hidden'
      whileInView='visible' 
      viewport={{ once: true }}  
      className="contain-1440 margin-auto grid gap-8 pb-10 min-h-[1060px] md:min-h-[670px] xl:min-h-[400px]">
         <motion.h2 variants={variants} 
         ref={ref} className="title-section">Compétences</motion.h2>
            {!isReady && !error && (
               <Loading textLoading={'Chargement des compétences en cours'}/>
            )}
            {isReady && !error && (
               <div 
               className="flex flex-col gap-5 md:grid md:grid-cols-2 xl:flex xl:flex-row mx-auto">
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
      </motion.div>
   </section>

)

}

export default forwardRef(Skills)