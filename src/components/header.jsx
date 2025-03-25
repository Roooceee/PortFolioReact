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
                  <li><Link to=''>A Propos</Link></li>
                  <li><Link to=''>Compétences</Link></li>
                  <li><Link to=''>Projets</Link></li>
                  <li><Link to=''>Formation</Link></li>
                  <li><Link to=''>Expériences</Link></li>
                  <li><Link to=''>Contact</Link></li>
               </ul>
            </nav>
         </div>
     </header>
 )}
 
 export default Header