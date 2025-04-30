import { useEffect, useState } from "react";

import ProjectListItem from "../components/allprojects/projectListItem";
import Header from '../components/shared/header.jsx';
import Footer from "../components/shared/footer";

import useStoreSectionVisible from '../storeSectionVisible';

import { getDatas } from '../utils/getDatas.js';

import '../styles/pages/allprojects.css';

function Allprojects(){

      const {setActiveSection} = useStoreSectionVisible()
      const [projects,setProjects] = useState([])
   
      const [isReady, setIsReady] = useState(false);
      const [error, setError] = useState(false);

      useEffect(()=>{

      window.scrollTo({
      top : 0,
      behavior: 'smooth'
      })
      
         document.title='Portfolio de Sébastien LUCAS - Développeur Web Junior React & Node.js - Mes Projets'
         setActiveSection('projects')

         const loadData = async () => {

            const token = import.meta.env.VITE_GITHUB_TOKEN;
            const result = await getDatas('https://api.github.com/users/Roooceee/repos?sort=created&direction=desc',token)
            if(result){
               setProjects(result)
               setIsReady(true)
            }
            else {
               console.warn('Aucun projet recupéré')
               setError(true)
            }
         }
         
         loadData()
      
      },[])

        

   return (
      <>
         <Header/>

         <main>
            <section id="allprojects">
               <div className="contain-1440">
                  <h1 className="title-section">Tous Mes Projets</h1>
                  <div className="projects-list-items">
                     {isReady && !error && (

                        <>
                           {projects.map(e=> {
                                 if(e.name != 'Roooceee'){
                                    return <ProjectListItem key={e.name} name={e.name} description={e.description} homepage={e.homepage} html_url={e.html_url} created={e.created_at} update={e.updated_at} />
                                 }
                           })}
                        </>

                     )}

                     {!isReady && error && (
                        <div className="error">
                           <p>Erreur lors du chargement des projets</p>
                        </div>
                     )}
                     </div>
               </div>
            </section>
         </main>

         <Footer/>

      </>

   )

}

export default Allprojects