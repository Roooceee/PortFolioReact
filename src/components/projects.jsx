import { useEffect, useState } from "react"
import Project from "./project";
import { Link } from "react-router-dom";
import '../styles/projects.css'
import { motion } from "motion/react"

function Projects(){

   const [projects,setProjects] = useState([])

   useEffect(()=>{
   
      getProjects()

   
   },[])
   // lorsqu'on fais des requetes réseaux via fetch dans un useEffect il faut utiliser un tableau de dépendance vide [] pour que la requete ne s'envoie que a la création du component

   async function getProjects(){

      const token = import.meta.env.VITE_GITHUB_TOKEN;
      try {         
         const req = await fetch('https://api.github.com/users/Roooceee/repos?sort=created&direction=desc',{

            headers:{
               Authorization: `token ${token}`,
            }
            })

         const res = await req.json()
         setProjects(res)

         // Log le nombre de requêtes restantes
         const remainingRequests = req.headers.get('X-RateLimit-Remaining');
         console.log(`Il te reste ${remainingRequests} requêtes avant de dépasser la limite.`);
      }
      catch(e){
         console.log('Erreur '+e)
      }
   }

   return (

      <div id='projects'>
         <div className="contain-1440">
            <motion.h2 whileInView={{scale:1.4}}>Mes Derniers Projets</motion.h2>
            <div>
               {projects.length>0 ? 
               <>
                  <Project key = {projects[0].name} name = {projects[0].name}  created= {projects[0].created_at} description = {projects[0].description} homepage = {projects[0].homepage} update = {projects[0].updated_at} html_url = {projects[0].html_url}/>
                  <Project key = {projects[1].name} name = {projects[1].name}  created= {projects[1].created_at} description = {projects[1].description} language = {projects[1].language} homepage = {projects[1].homepage} update = {projects[1].updated_at} html_url = {projects[1].html_url}/>
                  <Project key = {projects[2].name} name = {projects[2].name}  created= {projects[2].created_at} description = {projects[2].description} language = {projects[2].language} homepage = {projects[2].homepage} update = {projects[2].updated_at} html_url = {projects[2].html_url}/>
               </>
               : <p>Chargement des Projects</p>}
            </div>

            <div>
               <Link to='/Projets' className="button-blue">Voir tous mes Projets</Link>
            </div>
         </div>
   </div>
   )

}

export default Projects