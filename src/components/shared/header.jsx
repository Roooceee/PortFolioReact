import { Link } from 'react-router-dom'
import '../../styles/shared/header.css'
import { Menu,X } from 'lucide-react'

import useStoreSectionVisible from '../../storeSectionVisible'
import useStoreBurgerMenu from '../../storeBurgerMenu'
import useStoreDevice from '../../storeDevice'
import { useEffect } from 'react'
import ChangeTheme from './changeTheme'

function Header() {


   const {device,handleDevice} = useStoreDevice()
   const {isOpen,closeMenu,toggleMenu} = useStoreBurgerMenu()
   const {activeSection} = useStoreSectionVisible()

   useEffect(()=>{

      const handleWidth = () => {

         handleDevice()
         }
         
      window.addEventListener("resize", handleWidth);

      handleWidth()

      return () => {
         window.removeEventListener('resize',handleWidth)
      }

   },[])

   useEffect(()=>{
         document.body.style.overflow = (isOpen && device!=='desktop') ? "hidden" : "auto"
   })

   return (
     <header>
         <div className='contain-1440'>
            <div onClick={closeMenu}>
               <Link to="/">
               <img src="/img/logo.webp" className='logo' alt="logo du portfolio"/>
               Sébastien LUCAS
               </Link>
            </div>
            
            <div>
               <span className="burger-icon" onClick={toggleMenu}>
                  {!isOpen ?<Menu size={38}/> : <X size={38}/>}
               </span>
               <nav className={isOpen?'open':'close'}>
                  <ul>
                     <li><a className={activeSection === 'apropos' ? 'active' : ''} onClick={closeMenu} href='/#apropos' id='aproposLink'>A Propos</a></li>
                     <li><a className={activeSection === 'skills' ? 'active' : ''} onClick={closeMenu} href='/#skills' id='skillsLink'>Compétences</a></li>
                     <li><a className={activeSection === 'projects' ? 'active' : ''} onClick={closeMenu} href='/#projects' id='projectsLink' >Projets</a></li>
                     <li><a className={activeSection === 'experiences' ? 'active' : ''} onClick={closeMenu} href='/#experiences' id='experiencesLink'>Expériences</a></li>
                     <li><a className={activeSection === 'formations' ? 'active' : ''} onClick={closeMenu} href='/#formations' id='formationsLink'>Formation</a></li>
                     <li><a className={activeSection === 'contact' ? 'active' : ''} onClick={closeMenu} href='/#contact' id='contactLink'>Contact</a></li>
                     <li><a href='/datas/CV_Sebastien_LUCAS.pdf' className='button-blue CV' target='_blank'>Télécharger mon CV</a></li>
                     <li><ChangeTheme/></li>
                  </ul>
               </nav>
            </div>
         </div>
     </header>
 )}
 
 export default Header