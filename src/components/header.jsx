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
                  <li><Link to='/#apropos'>A Propos</Link></li>
                  <li><Link to='/#skills'>Compétences</Link></li>
                  <li><Link to='/#projects'>Projets</Link></li>
                  <li><Link to='/#experiences'>Expériences</Link></li>
                  <li><Link to='/'>Formation</Link></li>
                  <li><Link to='/'>Contact</Link></li>
               </ul>
            </nav>
         </div>
     </header>
 )}
 
 export default Header