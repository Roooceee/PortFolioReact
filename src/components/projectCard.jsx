import React, {Suspense,lazy} from "react";

import { Calendar, Code, Github, RefreshCcw, SquareArrowOutUpRight } from 'lucide-react'
import { useEffect, useState } from "react"

import { calculPercentLanguages } from '../utils/calculPercentLangages.js'
import { changeDateFormat } from '../utils/changeDateFormat.js'
import {getDatas} from '../utils/getDatas.js'

import ProgressBarLanguage from "./progressBarLanguage.jsx";
import ListLanguage from "./listLanguagePercent.jsx"

import '../styles/projectCard.css'
import Loading from "./loading.jsx";

function ProjectCard({name, description,created, homepage, update , html_url}){
   
   const [languages,setLanguages] = useState([])
   const [isReady, setIsReady] = useState(false);
   const [error, setError] = useState(false);

   const percentLanguages = calculPercentLanguages(languages)

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

   return(
      <>
         <article className="card-secondary projectCard">

            {!isReady && !error && (
                  <Loading textLoading="Chargement du projet en cours" />
            )}

            {isReady && !error && (
                  <>
                  <div className='head_project'>
                     <h3>{name}</h3>
                     <p>{description}</p>
                  </div>
                  
                  <hr className='hr-grey' />

                  <div className='languages'>
                     <h4 className='language_title'>
                        <Code size={24} />
                        {Object.values(languages).length > 1 ? 'Languages' : 'Language' }
                     </h4>
                     <ProgressBarLanguage ListLanguagesPercent={percentLanguages}/>
                     <ListLanguage listLanguagesPercent={percentLanguages}/>
                  </div>
                     
                  <div className="links_project">
                     {homepage ? 
                     <a href={homepage} target="_blank" className="button-blue"><SquareArrowOutUpRight size={18} /> Visiter le site</a> : 
                     ''}
                     <a href={html_url} target="_blank" className="button-blue"><Github size={18} />Voir le code</a>
                  </div>
                  <hr className='hr-grey' />
                  <div className='dates_project'>
                     <div><Calendar size={18}/><p>Crée le : </p><p className='numeric'>{changeDateFormat(created,false,false)}</p></div> 
                     {update ? 
                     <div><RefreshCcw size={18}/><p>Modifier le : </p><p className='numeric'>{changeDateFormat(update,false,false)}</p></div> 
                     : ''}
                  </div>
                  </>)}   

            {!isReady && error && (
               <p className="error-loading">Erreur lors du chargement du projet</p>
               // Remplacer par le suite par un composant Error
            )}
         </article>
      </>
   )
}

export default ProjectCard