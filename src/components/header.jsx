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
                  <li><a to='/#apropos'>A Propos</a></li>
                  <li><a to='/#skills'>Compétences</a></li>
                  <li><a to='/#projects'>Projets</a></li>
                  <li><a to='/#experiences'>Expériences</a></li>
                  <li><a to='/'>Formation</a></li>
                  <li><a to='/'>Contact</a></li>
               </ul>
            </nav>
         </div>
     </header>
 )}
 
 export default Header