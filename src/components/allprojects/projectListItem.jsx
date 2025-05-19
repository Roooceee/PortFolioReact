import { Calendar, Github, Info, RefreshCcw, SquareArrowOutUpRight } from "lucide-react"
import { useEffect, useState } from "react"

import { calculPercentLanguages } from "../../utils/calculPercentLangages.js"
import { changeDateFormat } from "../../utils/changeDateFormat.js"
import { getDatas } from '../../utils/getDatas.js'

import ListLanguagePercent from "../shared/languagesPercent/listLanguagePercent.jsx"
import Modal from "../shared/modal.jsx"
import ProjectCard from "../shared/projectCard.jsx"

import '../../styles/allprojects/projectListItem.css'
import Loading from "../shared/loading.jsx"

function ProjectListItem({name , description , homepage , html_url , created , update}){
   
   const [languages,setLanguages] = useState([])
   const [isReady, setIsReady] = useState(false);
   const [error, setError] = useState(false);

   const [isModalOpen,setIsModalOpen] = useState(false)

   useEffect(()=>{

      const loadData = async () => {

         const token = import.meta.env.VITE_GITHUB_TOKEN;
         const result = await getDatas(`https://api.github.com/repos/Roooceee/${name}/languages`,token)
         
         if(result){
            setLanguages(result)
            setIsReady(true)
         }
         else {
            console.warn('Aucun languages recupéré')
            setError(true)
         }


      }
      
      loadData()
   
   },[])
   
   function openModal(e){
      e.preventDefault()
      setIsModalOpen(true)
   }

   function closeModal(){
      setIsModalOpen(false)
   }

   return (

      <>
      {isReady && !error && (
      <article className="card-principal projectListItem">
         <>
         <div>
            <h2>{name}</h2>
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
            {homepage ? 
            <a href={homepage} target="_blank" aria-label="Visiter le site" title="Visiter le site" className="button-blue"><SquareArrowOutUpRight /><span>Visiter le site</span></a> : 
            ''}
            <a href={html_url} target="_blank" aria-label="Voir le code" title="Voir le code" className="button-blue"><Github/><span>Voir le code</span></a>
            <a href="#" aria-label="En savoir plus" title="En savoir plus" className="button-blue" onClick={(e)=> {openModal(e)}}><Info/><span>En savoir plus</span></a>
         </div>
         </>
         </article>
         )}

         {!isReady && error && (
            <article className="card-principal projectListItem">
               <div className="error">
                  <p className="error-loading">Erreur lors du chargement du projet</p>
                  {/*Remplacer par le suite par un composant Error */}
               </div>
            </article>
            )}

            <Modal 
            isOpen={isModalOpen}
            onClose={closeModal}
            title={<h2>Détail du projet </h2>}
            showButtonClose={true}>

               <div className="modal-project">
                  <ProjectCard 
                  name={name} 
                  description={description} 
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