
import '../styles/project.css'
import { useEffect, useState } from "react"

function Project({name, description,created, homepage, update , html_url}){

   const [languages,setLanguages] = useState([])
   const [isVisible,setIsVisible] = useState(false)   

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
         console.log('Erreur '+e)
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
         const percent = ((Object.values(languages)[index] / totalLanguages) * 100).toFixed(2);
         return (
            <li key={index} className={language+'_before '+' list-style-none'}>
               <span className="title">{language} : </span> <span className="percent">{percent}%</span>
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
         const percent = ((Object.values(languages)[index] / totalLanguages) * 100).toFixed(2);
         return (
            <span key={index} className={language+'_progress'} style={{ width: percent+'%'}}></span>
         );
      });
   }


   return(
      <article className="card project">

         <div className="description">
            <h3>{name}</h3>
            <p className="title">Description :</p>
            <p>{description}</p>
         </div>

         <div>
            <p className="title">Language Utilisé : </p>
               <span className="Progress">{languages.length>0 ? <span>Chargement</span> : calculPercentLanguagesProgress(languages)}</span>
            <ul>
               {languages.length>0 ? <span>Chargement</span> : calculPercentLanguagesList(languages)}
            </ul>
         </div>
            

         <div>
            <div className="dates">
                  <p><span className="title">Crée : </span>{changeDateFormat(created)} | <span className="title">Mis à jour le</span> : {changeDateFormat(update)}</p>
            </div>
            <div className="links">
               <a href={homepage} className="button-blue">Visiter le site</a>
               <a href={html_url} className="button-blue">Lien vers le Repo</a>
            </div>
         </div>
      </article>
   )
}

export default Project