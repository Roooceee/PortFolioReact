import { Link } from 'react-router-dom'
import '../../styles/shared/header.css'
import useStoreSectionVisible from '../../storeSectionVisible'
import { Menu,X } from 'lucide-react'
import { useState } from 'react'

function Header() {

   const [isOpen,setIsOpen] = useState(false)
   
   function toggleMenu(){
    setIsOpen(prev=>!prev)  
   }

   const handleLinkClick = () => {
      setIsOpen(prev => !prev)
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
                  <li><a className={activeSection === 'apropos' ? 'active' : ''} onClick={handleLinkClick} href='/#apropos' id='aproposLink'>A Propos</a></li>
                  <li><a className={activeSection === 'skills' ? 'active' : ''} onClick={handleLinkClick} href='/#skills' id='skillsLink'>Compétences</a></li>
                  <li><a className={activeSection === 'projects' ? 'active' : ''} onClick={handleLinkClick} href='/#projects' id='projectsLink' >Projets</a></li>
                  <li><a className={activeSection === 'experiences' ? 'active' : ''} onClick={handleLinkClick} href='/#experiences' id='experiencesLink'>Expériences</a></li>
                  <li><a className={activeSection === 'formations' ? 'active' : ''} onClick={handleLinkClick} href='/#formations' id='formationsLink'>Formation</a></li>
                  <li><a className={activeSection === 'contact' ? 'active' : ''} onClick={handleLinkClick} href='/#contact' id='contactLink'>Contact</a></li>
               </ul>
            </nav>
         </div>
     </header>
 )}
 
 export default Header