import { useEffect, useState } from "react";

import Header from "../components/header";
import ProjectListItem from "../components/projectListItem";

import useStoreSectionVisible from '../storeSectionVisible'
import '../styles/allprojects.css';
import Footer from "../components/footer";

function Allprojects(){

      const {setActiveSection} = useStoreSectionVisible()
      const [projects,setProjects] = useState([])
   
      useEffect(()=>{

      window.scrollTo({
      top : 0,
      behavior: 'smooth'
      })
      
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

         <main>
            <section id="allprojects">
               <div className="contain-1440">
               <h1 className="title-section">Tous Mes Projets</h1>
               <div>
                  {projects.map(e=> {
                        if(e.name != 'Roooceee'){
                           return <ProjectListItem key={e.name} name={e.name} description={e.description} homepage={e.homepage} html_url={e.html_url} created={e.created_at} update={e.updated_at} />
                        }
                  })}
               </div>
               </div>
            </section>
         </main>

         <Footer/>

      </>

   )

}

export default Allprojects