import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Header from "../components/header";
import ProjectCard from "../components/projectCard";
import '../styles/allprojects.css';
import useStoreSectionVisible from '../storeSectionVisible'

function Allprojects(){

      const {setActiveSection} = useStoreSectionVisible()

      const [projects,setProjects] = useState([])
   
      useEffect(()=>{
      
         document.title='Portfolio - Sébastien LUCAS - Mes Projets'
         setActiveSection('projects')
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
      <>
         <Header/>

         <div id="allprojects">
            <div className="contain-1440">
            <motion.h1 whileInView={{scale:1.4}}>Tous Mes Projets</motion.h1>
            <div>
               {projects.map(e=> {
                     if(e.name != 'Roooceee'){
                        return <ProjectCard key = {e.name} name = {e.name}  created= {e.created_at} description = {e.description} homepage = {e.homepage} update = {e.updated_at} html_url = {e.html_url}/>
                     }
               })}
            </div>
            </div>
         </div>

      </>

   )

}

export default Allprojects