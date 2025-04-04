import { Link } from 'react-router-dom'
import '../styles/header.css'
import useStoreSectionVisible from '../storeSectionVisible'

function Header() {

   
   function showBurgerMenu(){
      console.log('button burger afficher')
   }
   
   const {activeSection} = useStoreSectionVisible()

   return (
     <header>
         <div className='contain-1440'>
            <div>
               <Link to="/">
               <img src="/img/logo.png" className='logo' alt="logo du portfolio"/>
               <p>Sébastien LUCAS</p>
               </Link>
            </div>
            <nav>
               <span className="burger-icon" onClick={showBurgerMenu}>
                  <span></span>
                  <span></span>
                  <span></span>
               </span>
               <ul>
                  <li><a className={activeSection == 'apropos' ? 'active' : ''} href='/#apropos' id='aproposLink'>A Propos</a></li>
                  <li><a className={activeSection == 'skills' ? 'active' : ''} href='/#skills' id='skillsLink'>Compétences</a></li>
                  <li><a className={activeSection === 'projects' ? 'active' : ''} href='/#projects' id='projectsLink' >Projets</a></li>
                  <li><a className={activeSection === 'experiences' ? 'active' : ''} href='/#experiences' id='experiencesLink'>Expériences</a></li>
                  <li><a className={activeSection === 'formations' ? 'active' : ''} href='/#formations' id='formationsLink'>Formation</a></li>
                  <li><a className={activeSection === 'contact' ? 'active' : ''} href='/' id='contactLink'>Contact</a></li>
               </ul>
            </nav>
         </div>
     </header>
 )}
 
 export default Header