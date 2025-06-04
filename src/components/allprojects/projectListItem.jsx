import { Calendar, Github, Info, RefreshCcw} from "lucide-react"
import { useState } from "react"

import { calculPercentLanguages } from "../../utils/calculPercentLangages.js"
import { changeDateFormat } from "../../utils/changeDateFormat.js"

import ListLanguagePercent from "../shared/languagesPercent/listLanguagePercent.jsx"
import Modal from "../shared/modal.jsx"
import ProjectCard from "../shared/projectCard.jsx"

import useStoreDevice from "../../storeDevice.js"

import { text } from "motion/react-client"

function ProjectListItem({name , description , languages , homepage , html_url , created_at , updated_at}){


   const [isModalOpen,setIsModalOpen] = useState(false)
   const {device} = useStoreDevice()
   
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
      <article className="card-principal flex justify-between items-center gap-10 !p-2.5 max-h-[50px] min-h-fit md:min-h-[150px]">
         <>
         <div className="grid gap-2.5">
            <h3 className="text-blue-primary text-base sm:text-lg lg:text-xl font-bold">{name}</h3>
            {description && (
               <p className="text-xxs sm:text-sm">{sliceDescription(description)}</p>
            )}
            {(device === 'desktop' || device === 'tablet')  && (
               <>
                  <div>
                     <ListLanguagePercent ListLanguagesWithPercent={calculPercentLanguages(languages)}/>
                  </div>
                  <div className="grid">
                     <div className="flex items-center gap-1"><Calendar className="text-blue-primary" size={18}/><p>Crée le : </p><p className="numeric">{changeDateFormat(created_at,false,false)}</p></div>
                     {updated_at ? 
                     <div className="flex items-center gap-1"><RefreshCcw className="text-blue-primary" size={18}/><p>Modifier le : </p><p className="numeric">{changeDateFormat(updated_at,false,false)}</p></div>
                     : ''}
                  </div>
               </>
            )}
         </div>

         <div>
            <a href="#" aria-label="En savoir plus" title="En savoir plus" 
            className="button-blue flex items-center gap-1 !py-[1px] !px-[5px] md:!py-[10px] md:!px-[15px] rounded-[5px]" 
            onClick={(e)=> {openModal(e)}}><Info className="max-w-[16px] md:max-w-[36px]"/>{(device === 'desktop' || device==='tablet') && (<span>En savoir plus</span>)}</a>
         </div>
         </>
         </article>

         <Modal 
            isOpen={isModalOpen}
            onClose={closeModal}
            title={<h2 className="text-sm sm:text-base lg:text-lg font-primary font-normal text-[var(--color-text)]">Détail du projet </h2>}
            showButtonClose={true}>
            <ProjectCard 
               name={name} 
               description={description} 
               languages={languages}
               homepage={homepage} 
               html_url={html_url} 
               updated_at={updated_at} 
               created_at={created_at}/>
         </Modal>
      </>

   )
}

export default ProjectListItem