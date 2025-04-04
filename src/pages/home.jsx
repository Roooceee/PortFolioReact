import { useEffect, useRef} from "react"

import APropos from "../components/apropos"
import Experiences from "../components/experiences"
import Formations from "../components/formations"
import Head_Index from "../components/head_index"
import Header from "../components/header"
import Projects from "../components/projects"
import Skills from "../components/skills"

import '../style.css'

import useStoreSectionVisible from '../storeSectionVisible'

function Home() {

  useEffect(()=> {
    document.title = 'Portfolio - Sébastien LUCAS'
    checkIsInView()
    window.addEventListener('scroll',checkIsInView)
  },[])

  const {setActiveSection} = useStoreSectionVisible()

  const refAPropos = useRef(null)
  const refSkills = useRef(null)
  const refProjects = useRef(null)
  const refExperiences = useRef(null)
  const refFormations = useRef(null)

  const sectionsRefs = [
    {id:'apropos' , ref:refAPropos},
    {id:'skills', ref:refSkills},
    {id:'projects', ref:refProjects},
    {id:'experiences', ref:refExperiences},
    {id:'formations', ref:refFormations}
  ]

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
        const rectBottom = rect.bottom
        const rectPlusOne = sectionsRefs[i+1].ref.current.getBoundingClientRect()
        const rectTopPlusOne = rectPlusOne.top
  
  
        if(rectTop < 0 && i < sectionsRefs.length-1 && rectTopPlusOne < window.innerHeight ){
          topRefHeight = rectTopPlusOne
          topId = sectionsRefs[i+1].id
        }
        if(rectBottom === window.innerHeight){
          topId = sectionsRefs[i].id
        }
      }
      setActiveSection(topId)
    
    }
    

  }
  
  return (
    <>
      <Header/>
      <Head_Index/> 
      <APropos ref={refAPropos}/>
      <Skills ref={refSkills}/>
      <Projects ref={refProjects}/>
      <Experiences ref={refExperiences}/>
      <Formations ref={refFormations}/>
    </>
)}

export default Home