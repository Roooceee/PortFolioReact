import '../styles/head_index.css'
import { motion } from "motion/react"

function Head_Index() {

   return (
      <div id="head_index">
         <div>
            <div>
               <motion.h2 whileInView={{ scale: 1.2 }} transition={0.1}>Sébastien LUCAS</motion.h2>
               <motion.h1 whileInView={{ scale: 1.2 }} transition={0.1}>Développeur d'application JavaScript React</motion.h1>
               <p>À la recherche d’une alternance</p>
            </div>
            <div>
               <motion.a whileHover={{scale : 1.2}} href="#projects" className="button-blue">Découvrir mon travail</motion.a>
               <motion.a whileHover={{scale : 1.2}} href="" className="button-blue">Me Contacter</motion.a>
            </div>
         </div>
      </div>
 )}
 
 export default Head_Index