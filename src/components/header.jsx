import { Link } from 'react-router-dom'
import '../styles/header.css'
import useStoreSectionVisible from '../storeSectionVisible'
import { Menu,X } from 'lucide-react'
import { useState } from 'react'

function Header() {

   const [isOpen,setIsOpen] = useState(false)
   
   function toggleMenu(){
    setIsOpen(prev=>!prev)  
   }
   
   const {activeSection} = useStoreSectionVisible()

   return (
     <header>
         <div className='contain-1440'>
            <div>
               <Link to="/">
               <img src="/img/logo.webp" className='logo' alt="logo du portfolio"/>
               Sébastien LUCAS
               </Link>
            </div>
            <nav className={isOpen?'open':''}>
               <span className="burger-icon" onClick={toggleMenu}>
                  {!isOpen ?<Menu size={38}/> : <X size={38}/>}
               </span>
               <ul className={isOpen?'open':''}>
                  <li><a className={activeSection == 'apropos' ? 'active' : ''} href='/#apropos' id='aproposLink'>A Propos</a></li>
                  <li><a className={activeSection == 'skills' ? 'active' : ''} href='/#skills' id='skillsLink'>Compétences</a></li>
                  <li><a className={activeSection === 'projects' ? 'active' : ''} href='/#projects' id='projectsLink' >Projets</a></li>
                  <li><a className={activeSection === 'experiences' ? 'active' : ''} href='/#experiences' id='experiencesLink'>Expériences</a></li>
                  <li><a className={activeSection === 'formations' ? 'active' : ''} href='/#formations' id='formationsLink'>Formation</a></li>
                  <li><a className={activeSection === 'contact' ? 'active' : ''} href='/#contact' id='contactLink'>Contact</a></li>
               </ul>
            </nav>
         </div>
     </header>
 )}
 
 export default Header