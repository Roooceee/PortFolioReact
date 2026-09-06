import { useEffect, useState } from "react";

import ProjectListItem from "../components/allprojects/projectListItem";
import Header from '../components/shared/header.jsx';
import Footer from "../components/shared/footer";

import useStoreSectionVisible from '../storeSectionVisible';

import { getDatas } from '../utils/getDatas.js';

import Loading from "../components/shared/loading/loading.jsx";
import { ArrowDownWideNarrow, ArrowUpNarrowWide, FunnelPlus, FunnelX } from "lucide-react";

function Allprojects(){

      const {setActiveSection} = useStoreSectionVisible()
      const [projects,setProjects] = useState([])
      const [languagesFilter,setLanguagesFilter] = useState([])
      const [activeLanguagesFilter,setActiveLanguagesFilter] = useState([])

      const [projectsOriginal,setProjectsOriginal] = useState([])
      const [order,setOrder] = useState('asc')
      const [sort,setSort] = useState('')

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

               const projectsWithLanuages = await Promise.all (
                  result.map(async(project)=>{
                        const languagesRes = await getDatas(`https://api.github.com/repos/Roooceee/${project.name}/languages`,token)

                        Object.keys(languagesRes).map((key)=>{
                              setLanguagesFilter(prev => [...new Set([...prev, key])])
                              
                        })

                        return {
                           ...project,
                           languages: languagesRes ? languagesRes : {},
                        };     
                        
                  })
               )

               setProjects(projectsWithLanuages)
               setProjectsOriginal(projectsWithLanuages)
               setIsReady(true)
            }
            else {
               console.warn('Aucun projet recupéré')
               setError(true)
            }
         }
         
         loadData()
      },[])

      const handleSort= (pCriteria,pOrder) => {

         setSort(pCriteria)

         let sorted = [...projects].sort((a,b)=>{

            const getValue = (item) => {
                  if (pCriteria === 'name') return item.name.toLowerCase();
                  if (pCriteria === 'date_created') return item.created_at;
                  if (pCriteria === 'date_updated') return item.updated_at;
            }

            if(pCriteria !==''){

               const valueA = getValue(a)
               const valueB = getValue(b)
   
               return pOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA)
            }
         })

         if(pCriteria !==''){
            setProjects(sorted)
         }
         else {
            setProjects(projectsOriginal)
         }
      }


   return (
      <>
         <Header/>

         <main>
            <section id="allprojects" className="background-secondary min-h-[100svh] pt-20">
               <div className="contain-1440 mx-auto section min-h-[400px] flex flex-col">
                  <h1 className="title-section pb-10 text-2xl sm:text-3xl font-bold">Tous Mes Projets</h1>

                  {isReady && !error && (
                     <div className="flex flex-col gap-2.5 max-w-fit md:max-w-full md:flex-row-reverse md:justify-between px-5 pb-5 lg:px-10">
                        <div>
                           <ul className="flex flex-row flex-wrap gap-2.5 items-start max-w-full">
                              {languagesFilter.map((languageFilter,i)=>{
                                 const isActive = activeLanguagesFilter.includes(languageFilter);
                                    return <li key={i}><a href="#" 
                                             onClick={(e)=> {
                                                setActiveLanguagesFilter(prev => isActive
                                                      ? prev.filter(l => l !== languageFilter) 
                                                      : [...prev, languageFilter])
                                             }} 
                                             className={`flex items-center rounded-3xl px-2 py-1 text-white max-w-fit 
                                                text-xxs sm:text-xs lg:text-sm 
                                                ${isActive ? 'bg-purple-primary' : 'bg-blue-primary hover:bg-blue-secondary'}`}
                                             >
                                             {isActive ? <FunnelX className="max-w-[16px] sm:max-w-[20px] md:max-w-[24px]"/> : <FunnelPlus className="max-w-[16px] sm:max-w-[20px] md:max-w-[24px]"/>}{languageFilter}
                                             </a></li>
                              })}
                           </ul>
                        </div>

                        <div className="flex lg:flex-row gap-2 items-start justify-start">
                           <select className="input-form w-[100%] lg:w-[355px]" 
                              onChange={(e)=> handleSort(e.target.value,order)}>
                              <option value=''>---Séléctionner un tri---</option>
                              <option value='name'>{order === 'asc' ? 'Nom (A à Z)' : 'Nom (Z à A)'}</option>
                              <option value='date_created'>{order === 'asc' ? 'Date de création (plus ancien → au plus récent)' : 'Date de création (plus récent → au plus ancien)'}</option>
                              <option value='date_updated'>{order === 'asc' ? 'Date de modification (plus ancien → au plus récent)' : 'Date de modification (plus récent → au plus ancien)'}</option>
                           </select>

                           {sort !== '' && (
                              <a className="text-blue-primary hover:text-blue-secondary cursor-pointer" 
                              onClick={(e)=> {
                                 e.preventDefault();
                                 const newOrder = order === 'desc' ? 'asc' : 'desc';
                                 setOrder(newOrder);
                                 handleSort(sort,newOrder);
                              }
                              }>
                                 {order ==='desc' ? <ArrowDownWideNarrow /> : <ArrowUpNarrowWide/>}
                              </a>
                           )}
                        </div>
                     </div>
                  )}


                  <div className={`px-5 lg:px-10 grid gap-5 lg:gap-10 ${!isReady && 'margin-auto'}`}>

                     {!isReady && !error && (
                        <Loading textLoading={'Chargement des projets'}/>
                     )}

                     {isReady && !error && (

                        <>
                        {
                           projects.filter(project => {
                              if (activeLanguagesFilter.length === 0) return true;
                              const projectLangs = Object.keys(project.languages || {});
                              return activeLanguagesFilter.every(lang => projectLangs.includes(lang));

                           })
                           .map(e => {
                              if(e.name !== 'Roooceee'){
                                 return <ProjectListItem key={e.name} name={e.name} description={e.description} languages={e.languages} homepage={e.homepage} html_url={e.html_url} created_at={e.created_at} updated_at={e.updated_at} />
                              }
                           })
                        }
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