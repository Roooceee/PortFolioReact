import { motion } from "motion/react"
import '../styles/project.css'

function Project({name, description,created, language, homepage, update , html_url}){

   function changeDateFormat(pDate){

      let date = new Date(pDate)

      let dateMonth = date.getMonth()+1
      let dateDate = date.getDate()
      
      dateMonth = dateMonth >= 10 ? dateMonth : '0'+dateMonth
      dateDate = dateDate >= 10 ? dateDate : '0'+dateDate

      let dateFormatFR = `${dateDate}/${dateMonth}/${date.getFullYear()}`

      return dateFormatFR
   }


   return(
      <article className="card project">
         <div>
            <h3>{name}</h3>
            <p className='description_title_project'>Description :</p>
            <p className="description_project">{description}</p>
         </div>

         <div>
            <p className="language_project">Langage le plus utilisé : {language}</p>
            
            <div className="dates">
                  <p className="date_created_project">Crée le : {changeDateFormat(created)}</p>
                  <p className="date_update_project">Mis à jour le : {changeDateFormat(update)}</p>
            </div>
            
            <div className='links'>
               <motion.a whileHover={{scale:1.1}} href={homepage} className="button-blue">Voir la Démo</motion.a>
               <motion.a whileHover={{scale:1.1}} href={html_url} className="button-blue">Lien vers le Repo</motion.a>
            </div>
         </div>
      </article>
   )
}

export default Project