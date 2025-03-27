import APropos from "../components/apropos"
import Experiences from "../components/experiences"
import Formations from "../components/formations"
import Head_Index from "../components/head_index"
import Header from "../components/header"
import Projects from "../components/projects"
import Skills from "../components/skills"
import '../style.css'

function Home() {

  return (
    <>
      <Header/>
      <Head_Index/> 
      <APropos/>
      <Skills/>
      <Projects/>
      <Experiences/>
      {/* <Formations/> */}
    </>
)}

export default Home