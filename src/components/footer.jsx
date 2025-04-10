import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail } from "lucide-react"
import '../styles/footer.css'

function Footer(){


   return (

      <footer>
         <div className="contain-1440">
            <div>
               <Link to="/">
               <img src="/img/logo.png" className='logo' alt="logo du portfolio"/>
               <p>Sébastien LUCAS</p>
               </Link>

               <ul>
                  <li><a target="_blank" href="https://github.com/Roooceee"><Github/></a></li>
                  <li><a target="_blank" href="https://www.linkedin.com/in/sebastien-jose-lucas/"><Linkedin/></a></li>
                  <li><a target="_blank" href="mailto:sebastien.jose.lucas@gmail.com"><Mail/></a></li>
               </ul>
            </div>
            <hr />
            <p> ©2025 - Sébastien LUCAS - Tous droits réservé</p>
         </div>
      </footer>

   )

}

export default Footer