import { Link } from 'react-router-dom'
import '../styles/header.css'

function Header() {

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
               <ul>
                  <li><a href='/#apropos'>A Propos</a></li>
                  <li><a href='/#skills'>Compétences</a></li>
                  <li><a href='/#projects'>Projets</a></li>
                  <li><a href='/#experiences'>Expériences</a></li>
                  <li><a href='/'>Formation</a></li>
                  <li><a href='/'>Contact</a></li>
               </ul>
            </nav>
         </div>
     </header>
 )}
 
 export default Header