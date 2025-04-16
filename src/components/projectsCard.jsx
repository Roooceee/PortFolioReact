import { forwardRef, useEffect, useState } from "react"
import ProjectCard from "./projectCard";
import { Link } from "react-router-dom";
import '../styles/projects.css'
import {getDatas} from '../utils/getDatas.js'

function Projects(props,ref){

   const [projects,setProjects] = useState([])

   useEffect(()=>{

      const loadData = async () => {

         const token = import.meta.env.VITE_GITHUB_TOKEN;
         const result = await getDatas('https://api.github.com/users/Roooceee/repos?sort=created&direction=desc',token)
         setProjects(result)
      }
      
      loadData()


   },[])

   return (

      <section id='projects' ref={ref}>
         <div className="contain-1440">
            <h2 className="title-section">Mes Derniers Projets</h2>
               {projects.length>0 ? 
               <div>
                  <ProjectCard key = {projects[0].name} name = {projects[0].name}  created= {projects[0].created_at} description = {projects[0].description} homepage = {projects[0].homepage} update = {projects[0].updated_at} html_url = {projects[0].html_url}/>
                  <ProjectCard key = {projects[1].name} name = {projects[1].name}  created= {projects[1].created_at} description = {projects[1].description} homepage = {projects[1].homepage} update = {projects[1].updated_at} html_url = {projects[1].html_url}/>
                  <ProjectCard key = {projects[2].name} name = {projects[2].name}  created= {projects[2].created_at} description = {projects[2].description} homepage = {projects[2].homepage} update = {projects[2].updated_at} html_url = {projects[2].html_url}/>
               </div>
               : 
               <p>Chargement des données</p>}

            <div>
               <Link to='/Projets' className="button-blue">Voir tous mes Projets</Link>
            </div>
         </div>
      </section>
   )

}

export default forwardRef(Projects)