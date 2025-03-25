import '../styles/apropos.css'
import { motion } from "motion/react"

function APropos() {

   return (
      <div id='apropos'>      
         <div>
               <img src="/img/image_profil_SL.png" alt="image de profil" />
            <div>
               <motion.h2 whileInView={{ scale: 1.4}}>A Propos</motion.h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatem corrupti eos voluptatibus eum fugit nam possimus adipisci sed eaque exercitationem et, fugiat excepturi expedita dicta aperiam delectus doloribus earum.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatem corrupti eos voluptatibus eum fugit nam possimus adipisci sed eaque exercitationem et, fugiat excepturi expedita dicta aperiam delectus doloribus earum.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatem corrupti eos voluptatibus eum fugit nam possimus adipisci sed eaque exercitationem et, fugiat excepturi expedita dicta aperiam delectus doloribus earum.</p>
            </div>
         </div>
      </div>
 )}
 
 export default APropos