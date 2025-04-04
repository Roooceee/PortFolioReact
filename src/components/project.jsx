
import { Calendar, Code, Github, RefreshCcw, SquareArrowOutUpRight } from 'lucide-react'
import '../styles/project.css'
import { useEffect, useState } from "react"

function Project({name, description,created, homepage, update , html_url}){

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

   function changeDateFormat(pDate){

      let date = new Date(pDate)

      let dateMonth = date.getMonth()+1
      let dateDate = date.getDate()
      
      dateMonth = dateMonth >= 10 ? dateMonth : '0'+dateMonth
      dateDate = dateDate >= 10 ? dateDate : '0'+dateDate

      let dateFormatFR = `${dateDate}/${dateMonth}/${date.getFullYear()}`

      return dateFormatFR
   }

   function calculPercentLanguagesList(languages) {
      let totalLanguages = 0;
      Object.values(languages).forEach((e) => {
         totalLanguages += e;
      });

      // Utilisation de map pour générer le JSX
      return Object.keys(languages).map((language, index) => {
         const percent = Math.round((Object.values(languages)[index] / totalLanguages) * 100);
         return (
            <li key={index} className={language+'_before '+' list-style-none'}>
               <span>{language}</span> <span className="percent">{percent}%</span>
            </li>
         );
      });
   }

   function calculPercentLanguagesProgress(languages) {
      let totalLanguages = 0;
      Object.values(languages).forEach((e) => {
         totalLanguages += e;
      });

      // Utilisation de map pour générer le JSX
      return Object.keys(languages).map((language, index) => {
         const percent = ((Object.values(languages)[index] / totalLanguages) * 100);
         return (
            <span key={index} className={language+'_progress'} style={{ width: percent+'%'}}></span>
         );
      });
   }


   return(
      <article className="card project">

         <div className='head_project'>
            <h3>{name}</h3>
            <p>{description}</p>
         </div>
         <hr />

         <div className='languages'>
            {languages.length === 1 ? <div className='language_title'><Code size={24} /><p>Language</p></div>:<div className='language_title'><Code size={24} /><p>Languages</p></div>}
               <span className="Progress">{languages.length>0 ? <span>Chargement</span> : calculPercentLanguagesProgress(languages)}</span>
            <ul>
               {languages.length>0 ? <span>Chargement</span> : calculPercentLanguagesList(languages)}
            </ul>
         </div>
            
         <div className="links_project">
            {homepage ? <a href={homepage} target="_blank" className="button-blue"><SquareArrowOutUpRight size={22} /> Visiter le site</a> : ''}
            <a href={html_url} target="_blank" className="button-blue"><Github size={24} />Voir le code</a>
         </div>
         <hr />
         <div className='dates_project'>
            <div><Calendar size={18}/><p>Crée le : </p><p className='date'>{changeDateFormat(created)}</p></div> 
            {update ? <div><RefreshCcw size={18}/><p>Modifier le : </p><p className='date'>{changeDateFormat(update)}</p></div> : ''}
         </div>
      </article>
   )
}

export default Project