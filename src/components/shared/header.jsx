import { Link } from 'react-router-dom'
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
     <header className='background-primary z-10 fixed top-0 left-0 w-[100%]'>
         <div className='contain-1440 flex justify-between items-center margin-auto px-3 lg:px-6'>
            <div onClick={closeMenu}>
               <Link to="/" className='flex justify-center items-center font-title text-[var(--color-text)] hover:text-blue-secondary'>
               <img src="/img/logo.webp" className='logo max-w-[90px] pt-2' alt="logo du portfolio"/>
               <span>Sébastien LUCAS</span>
               </Link>
            </div>
            
            <div className='flex items-center gap-8'>
               {device !=='desktop' && (
                  <span className="text-blue-primary" onClick={toggleMenu}>
                     {!isOpen ?<Menu size={38}/> : <X size={38}/>}
                  </span>
               )}

               <nav className={`${device === 'desktop' ? 'flex justify-end gap-5' : isOpen ? ' absolute h-[100dvh] z-10 top-full right-0 left-0 bottom-0 overflow-y-auto border-t border-t-gray-400 background-primary':'hidden'}`}>
                  <ul className={`${device === 'desktop' ? 'flex justify-end gap-5 items-center' : isOpen && 'flex justify-start flex-col h-[600px] gap-5 pt-10'}`}>
                     <li><a className={`font-title text-[var(--color-text)] hover:text-blue-secondary ${device === 'desktop' ? 'py-9 px-3 border-b-4 border-transparent hover:border-b-blue-secondary' : isOpen && 'flex w-[280px] pb-2.5 border-b border-b-gray-400 hover:border-b-blue-secondary margin-auto'} ${activeSection === 'apropos' && 'border-b-blue-primary text-blue-primary' }`} onClick={closeMenu} href='/#a-propos' id='aproposLink'>A Propos</a></li>
                     <li><a className={`font-title text-[var(--color-text)] hover:text-blue-secondary ${device === 'desktop' ? 'py-9 px-3 border-b-4 border-transparent hover:border-b-blue-secondary' : isOpen && 'flex w-[280px] pb-2.5 border-b border-b-gray-400 hover:border-b-blue-secondary margin-auto'} ${activeSection === 'skills' && 'border-b-blue-primary text-blue-primary' }`} onClick={closeMenu} href='/#mes-competences' id='skillsLink'>Compétences</a></li>
                     <li><a className={`font-title text-[var(--color-text)] hover:text-blue-secondary ${device === 'desktop' ? 'py-9 px-3 border-b-4 border-transparent hover:border-b-blue-secondary' : isOpen && 'flex w-[280px] pb-2.5 border-b border-b-gray-400 hover:border-b-blue-secondary margin-auto'} ${activeSection === 'projects' && 'border-b-blue-primary text-blue-primary' }`} onClick={closeMenu} href='/#mes-derniers-projets' id='projectsLink' >Projets</a></li>
                     <li><a className={`font-title text-[var(--color-text)] hover:text-blue-secondary ${device === 'desktop' ? 'py-9 px-3 border-b-4 border-transparent hover:border-b-blue-secondary' : isOpen && 'flex w-[280px] pb-2.5 border-b border-b-gray-400 hover:border-b-blue-secondary margin-auto'}  ${activeSection === 'experiences' && 'border-b-blue-primary text-blue-primary' }`} onClick={closeMenu} href='/#mes-experiences-professionnelles' id='experiencesLink'>Expériences</a></li>
                     <li><a className={`font-title text-[var(--color-text)] hover:text-blue-secondary ${device === 'desktop' ? 'py-9 px-3 border-b-4 border-transparent hover:border-b-blue-secondary' : isOpen && 'flex w-[280px] pb-2.5 border-b border-b-gray-400 hover:border-b-blue-secondary margin-auto'} ${activeSection === 'formations' && 'border-b-blue-primary text-blue-primary' }`} onClick={closeMenu} href='/#mes-etudes-et-formations' id='formationsLink'>Formation</a></li>
                     <li><a className={`font-title text-[var(--color-text)] hover:text-blue-secondary ${device === 'desktop' ? 'py-9 px-3 border-b-4 border-transparent hover:border-b-blue-secondary' : isOpen && 'flex w-[280px] pb-2.5 border-b border-b-gray-400 hover:border-b-blue-secondary margin-auto'} ${activeSection === 'contact' && 'border-b-blue-primary text-blue-primary' }`} onClick={closeMenu} href='/#contact' id='contactLink'>Contact</a></li>
                     <li><a href='/datas/CV_Sebastien_LUCAS.pdf' className={` ${isOpen && 'flex w-fit pb-2.5 margin-auto'} button-blue CV`} target='_blank'>Télécharger mon CV</a></li>
                     <li className={`${isOpen && 'w-fit mx-auto'}`}><ChangeTheme/></li>
                  </ul>
               </nav>
            </div>
         </div>
     </header>
   )}
 
 export default Header