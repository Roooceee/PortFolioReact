import { Calendar, Github, Info, RefreshCcw, SquareArrowOutUpRight } from "lucide-react"

import { useEffect, useState } from "react"

import { changeDateFormat } from "../utils/changeDateFormat"
import { calculPercentLanguages } from "../utils/calculPercentLangages"
import '../styles/projectListItem.css'
import ListLanguagePercent from "./listLanguagePercent"

function ProjectListItem({name , homepage , html_url , created , update}){

   const [languages,setLanguages] = useState([])

   useEffect(()=>{

      getLanguageProjects()
   
   },[])


   async function getLanguageProjects(){

      const token = import.meta.env.VITE_GITHUB_TOKEN;

      try {         
         const req = await fetch(`https://api.github.com/repos/Roooceee/${name}/languages`,{

            headers:{
               Authorization: `token ${token}`,
            }
            })

         const res = await req.json()
         setLanguages(res)

         // Log le nombre de requêtes restantes
         const remainingRequests = req.headers.get('X-RateLimit-Remaining');
         console.log(`Il te reste ${remainingRequests} requêtes avant de dépasser la limite.`);
      }
      catch(e){
         console.log('Erreur Chargement languages '+e)
      }
   }

   

   return (
      <article className="card-principal projectListItem">
         <div>
            <h2>{name}</h2>
            <div className="languages">
               <ListLanguagePercent listLanguagesPercent={calculPercentLanguages(languages)}/>
            </div>
               <div className="dates">
               <div><Calendar size={18}/><p>Crée le : </p><p className="date">{changeDateFormat(created)}</p></div>
               {update ? 
               <div><RefreshCcw size={18}/><p>Modifier le : </p><p className="date">{changeDateFormat(update)}</p></div>
               : ''}
            </div>
         </div>

         <div className="links">
            {homepage ? 
            <a href={homepage} target="_blank" className="button-blue"><SquareArrowOutUpRight size={22} /> Visiter le site</a> : 
            ''}
            <a href={html_url} target="_blank" className="button-blue"><Github size={24} />Voir le code</a>
            <a href="" className="button-blue"><Info size={24}/>En savoir plus</a>
         </div>

      </article>
   )
}

export default ProjectListItem