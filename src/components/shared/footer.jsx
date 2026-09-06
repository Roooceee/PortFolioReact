import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail } from "lucide-react"

function Footer(){


   return (

      <footer className='background-primary'>
         <div className="contain-1440 margin-auto grid gap-4 px-3 lg:px-6 pb-5">
            <div className='flex justify-between items-center text-[var(--color-text)]'>
               <Link to="/" className='flex justify-center items-center  hover:text-blue-secondary'>
               <img src="/img/logo.webp" className='logo max-w-[90px] pt-2' alt="logo du portfolio"/>
               <span className='font-title hidden sm:block'>Sébastien LUCAS</span>
               </Link>

               <ul className='flex gap-2.5 text-[var(--color-text)]'>
                  <li><a target="_blank" href="https://github.com/Roooceee" className='hover:text-blue-secondary'><Github/></a></li>
                  <li><a target="_blank" href="https://www.linkedin.com/in/sebastien-jose-lucas/" className='hover:text-blue-secondary'><Linkedin/></a></li>
                  <li><a target="_blank" href="mailto:sebastien.jose.lucas@gmail.com" className='hover:text-blue-secondary'><Mail/></a></li>
               </ul>
            </div>
            <hr className='hr-grey' />
            <p className='text-center text-xs sm:text-sm'> ©<span className='numeric'>2025</span> - Sébastien LUCAS - Tous droits réservé - <Link to='/mentions-legales' className='hover:text-blue-secondary'>Mentions légales</Link></p>
         </div>
      </footer>

   )

}

export default Footer