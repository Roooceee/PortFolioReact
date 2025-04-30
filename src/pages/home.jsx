import { useEffect, useRef} from "react"

import Header from '../components/shared/header.jsx';
import Head_Index from "../components/home/section/headIndex/head_index.jsx"
import APropos from "../components/home/section/apropos/apropos.jsx"
import Skills from "../components/home/section/skills/skills.jsx"
import ProjectsCard from "../components/home/section/projectsCard/projectsCard.jsx"
import Experiences from "../components/home/section/experiences/experiences.jsx"
import Formations from "../components/home/section/formations/formations.jsx"
import Contact from "../components/home/section/contact/contact.jsx"
import Footer from "../components/shared/footer.jsx"

import '../style.css'

import useStoreSectionVisible from '../storeSectionVisible'
import { useLocation } from "react-router-dom"

function Home() {

  useEffect(()=> {
    document.title = 'Portfolio de Sébastien LUCAS - Développeur Web Junior React & Node.js'

    const handleScroll = () => {
      checkIsInView()
    }

    checkIsInView()
    window.addEventListener('scroll',handleScroll)

    return () => {
      window.removeEventListener('scroll',handleScroll)
    }

  },[])
  
  const location = useLocation()

  useEffect(()=> {

    if(location.hash){
      setTimeout(()=>{
        const target = document.querySelector(location.hash)
        target.scrollIntoView({behavior : 'smooth'})
      },500)
    }
    else {
      window.scrollTo({
        top : 0,
        behavior: 'smooth'
     })
    }
  },[location])

  const setActiveSection = useStoreSectionVisible((state) => state.setActiveSection);

  const refAPropos = useRef(null)
  const refSkills = useRef(null)
  const refProjects = useRef(null)
  const refExperiences = useRef(null)
  const refFormations = useRef(null)
  const refContact = useRef(null)

  const sectionsRefs = [
    {id:'apropos' , ref:refAPropos},
    {id:'skills', ref:refSkills},
    {id:'projects', ref:refProjects},
    {id:'experiences', ref:refExperiences},
    {id:'formations', ref:refFormations},
    {id:'contact',ref:refContact}
  ]

  // Fonction a retravailler pour la simplifier au maximum
  function checkIsInView(){
   
    let topRefHeight = null
    let topId = null

    if(sectionsRefs){

      if(sectionsRefs[0].ref.current.getBoundingClientRect().top > 0 && sectionsRefs[0].ref.current.getBoundingClientRect().top < window.innerHeight){
        topRefHeight = sectionsRefs[0].ref.current.getBoundingClientRect().top
        topId = sectionsRefs[0].id
      }
  
      for(let i=0 ; i<sectionsRefs.length-1 ; i++){
  
        const rect = sectionsRefs[i].ref.current.getBoundingClientRect()
        const rectTop = rect.top
        const rectPlusOne = sectionsRefs[i+1].ref.current.getBoundingClientRect()
        const rectTopPlusOne = rectPlusOne.top
  
        if(rectTop < 0 && i < sectionsRefs.length-1 && rectTopPlusOne < window.innerHeight ){
          topRefHeight = rectTopPlusOne
          topId = sectionsRefs[i+1].id
        }
      }
      setActiveSection(topId);
    
    }
  }
  
  return (
    <>
      <Header/>
      <main>
        <Head_Index/> 
        <APropos ref={refAPropos}/>
        <Skills ref={refSkills}/>
        <ProjectsCard ref={refProjects}/>
        <Experiences ref={refExperiences}/>
        <Formations ref={refFormations}/>
        <Contact ref={refContact}/>
      </main>
      <Footer/>
    </>
)}

export default Home