import { Calendar, Github, Info, RefreshCcw} from "lucide-react"
import { useState } from "react"

import { calculPercentLanguages } from "../../utils/calculPercentLangages.js"
import { changeDateFormat } from "../../utils/changeDateFormat.js"

import ListLanguagePercent from "../shared/languagesPercent/listLanguagePercent.jsx"
import Modal from "../shared/modal.jsx"
import ProjectCard from "../shared/projectCard.jsx"

import '../../styles/allprojects/projectListItem.css'
import { text } from "motion/react-client"

function ProjectListItem({name , description , languages , homepage , html_url , created , update}){


   const [isModalOpen,setIsModalOpen] = useState(false)
   
   function openModal(e){
      e.preventDefault()
      setIsModalOpen(true)
   }

   function closeModal(){
      setIsModalOpen(false)
   }

   function sliceDescription(description){
      const maxLength = 80
      const regex = new RegExp(`^(.{0,${maxLength}})(\\s|$)`)
      const match = description.match(regex)
      if(description.length < maxLength){
         return description
      }
      else {
         return match ? match[1].trim()+'...' : text.slice(0,maxLength)+'...'
      }

   }

   return (

      <>
      <article className="card-principal projectListItem">
         <>
         <div>
            <h2>{name}</h2>
            {description && (
               <p className="description">{sliceDescription(description)}</p>
            )}
            <div className="languages">
               <ListLanguagePercent listLanguagesPercent={calculPercentLanguages(languages)}/>
            </div>
               <div className="dates">
               <div><Calendar size={18}/><p>Crée le : </p><p className="numeric">{changeDateFormat(created,false,false)}</p></div>
               {update ? 
               <div><RefreshCcw size={18}/><p>Modifier le : </p><p className="numeric">{changeDateFormat(update,false,false)}</p></div>
               : ''}
            </div>
         </div>

         <div className="links">
            <a href="#" aria-label="En savoir plus" title="En savoir plus" className="button-blue" onClick={(e)=> {openModal(e)}}><Info/><span>En savoir plus</span></a>
         </div>
         </>
         </article>

         <Modal 
         isOpen={isModalOpen}
         onClose={closeModal}
         title={<h2>Détail du projet </h2>}
         showButtonClose={true}>

            <div className="modal-project">
               <ProjectCard 
               name={name} 
               description={description} 
               languages={languages}
               homepage={homepage} 
               html_url={html_url} 
               update={update} 
               created={created}/>
            </div>

         </Modal>
      </>

   )
}

export default ProjectListItem