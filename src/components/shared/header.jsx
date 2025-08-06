import { Link } from 'react-router-dom'
import { Menu,X } from 'lucide-react'

import useStoreSectionVisible from '../../storeSectionVisible'
import useStoreBurgerMenu from '../../storeBurgerMenu'
import { useEffect, useState } from 'react'
import ChangeTheme from './changeTheme'
import useStoreWidthScreen from '../../storeWidthScreen'
import Modal from "../shared/modal.jsx"

function Header() {

   const [isModalOpen,setIsModalOpen] = useState(false)

   function openModal(e){
      e.preventDefault()
      setIsModalOpen(true)
   }

   function closeModal(){
      setIsModalOpen(false)
   }

   const {isOpen,closeMenu,toggleMenu} = useStoreBurgerMenu()
   const {activeSection} = useStoreSectionVisible()
   const {handleWidthScreen,widthScreen} = useStoreWidthScreen()

   useEffect(()=>{

      const handleWidth = () => {
         handleWidthScreen()
         }
         
      window.addEventListener("resize", handleWidth);

      handleWidth()

      return () => {
         window.removeEventListener('resize',handleWidth)
      }


   },[widthScreen])

   useEffect(()=>{
         document.body.style.overflow = isOpen ? "hidden" : "auto";
   },[isOpen])

   return (
      <>
         <header className='background-primary z-10 fixed top-0 left-0 w-[100%] min-h-[100px]'>
            <div className='contain-1440 flex justify-between items-center margin-auto px-3 lg:px-6'>
               <div onClick={closeMenu}>
                  <Link to="/" className='flex justify-center items-center font-title text-[var(--color-text)] hover:text-blue-secondary'>
                  <img src="/img/logo.webp" className='logo max-w-[90px] pt-2' alt="logo du portfolio"/>
                  <span>Sébastien LUCAS</span>
                  </Link>
               </div>
               
               <div className='flex items-center gap-8'>
                     <span className="text-blue-primary lg:hidden" onClick={toggleMenu}>
                        {!isOpen ?<Menu size={38}/> : <X size={38}/>}
                     </span>

                  <nav className={`${isOpen ? 'fixed top-[100px] h-[calc(100dvh-100px)]' : 'hidden'} lg:flex lg:relative lg:h-auto lg:top-auto lg:border-t-0 z-50 right-0 left-0 bottom-0 overflow-y-auto border-t border-t-[var(--color-text)] background-primary`}>
                     <ul className="flex flex-col gap-5 pt-10 lg:flex-row lg:items-center lg:pt-0">
                        <li><a className={`font-title text-[var(--color-text)] hover:text-blue-secondary flex w-[280px] pb-2.5 border-b border-b-gray-400 hover:border-b-blue-secondary margin-auto lg:py-10 lg:px-3 lg:border-b-4 lg:w-auto ${activeSection === 'a-propos' ? 'border-b-blue-primary text-blue-primary' : 'lg:border-transparent lg:hover:border-b-blue-secondary' }`} onClick={closeMenu} href='/#a-propos' id='aproposLink'>A Propos</a></li>
                        <li><a className={`font-title text-[var(--color-text)] hover:text-blue-secondary flex w-[280px] pb-2.5 border-b border-b-gray-400 hover:border-b-blue-secondary margin-auto lg:py-10 lg:px-3 lg:border-b-4 lg:w-auto ${activeSection === 'mes-competences' ? 'border-b-blue-primary text-blue-primary' : 'lg:border-transparent lg:hover:border-b-blue-secondary' }`} onClick={closeMenu} href='/#mes-competences' id='skillsLink'>Compétences</a></li>
                        <li><a className={`font-title text-[var(--color-text)] hover:text-blue-secondary flex w-[280px] pb-2.5 border-b border-b-gray-400 hover:border-b-blue-secondary margin-auto lg:py-10 lg:px-3 lg:border-b-4 lg:w-auto ${activeSection === 'mes-derniers-projets' ? 'border-b-blue-primary text-blue-primary' : 'lg:border-transparent lg:hover:border-b-blue-secondary' }`} onClick={closeMenu} href='/#mes-derniers-projets' id='projectsLink' >Projets</a></li>
                        <li><a className={`font-title text-[var(--color-text)] hover:text-blue-secondary flex w-[280px] pb-2.5 border-b border-b-gray-400 hover:border-b-blue-secondary margin-auto lg:py-10 lg:px-3 lg:border-b-4 lg:w-auto ${activeSection === 'mes-experiences-professionnelles' ? 'border-b-blue-primary text-blue-primary' : 'lg:border-transparent lg:hover:border-b-blue-secondary' }`} onClick={closeMenu} href='/#mes-experiences-professionnelles' id='experiencesLink'>Expériences</a></li>
                        <li><a className={`font-title text-[var(--color-text)] hover:text-blue-secondary flex w-[280px] pb-2.5 border-b border-b-gray-400 hover:border-b-blue-secondary margin-auto lg:py-10 lg:px-3 lg:border-b-4 lg:w-auto ${activeSection === 'mes-etudes-et-formations' ? 'border-b-blue-primary text-blue-primary' : 'lg:border-transparent lg:hover:border-b-blue-secondary' }`} onClick={closeMenu} href='/#mes-etudes-et-formations' id='formationsLink'>Formation</a></li>
                        <li><a className={`font-title text-[var(--color-text)] hover:text-blue-secondary flex w-[280px] pb-2.5 border-b border-b-gray-400 hover:border-b-blue-secondary margin-auto lg:py-10 lg:px-3 lg:border-b-4 lg:w-auto ${activeSection === 'contact' ? 'border-b-blue-primary text-blue-primary' : 'lg:border-transparent lg:hover:border-b-blue-secondary' }`} onClick={closeMenu} href='/#contact' id='contactLink'>Contact</a></li>
                        <li><a href='#' onClick={(e) => {openModal(e)}} className={` ${isOpen && 'flex w-fit pb-2.5 margin-auto'} button-blue CV`} >Télécharger mon CV</a></li>
                        <li className={`${isOpen && 'w-fit mx-auto'}`}><ChangeTheme/></li>
                     </ul>
                  </nav>
               </div>
            </div>
         </header>

         <Modal 
            isOpen={isModalOpen}
            onClose={closeModal}
            showButtonClose={true}
            title={<h2 className="text-sm sm:text-base lg:text-lg font-primary font-normal text-[var(--color-text)]">Télécharger mon CV</h2>}
            children=
            {
               <div className='max-w-xs md:max-w-md lg:max-w-xl grid gap-2'>
                  <p className='text-xs'>La version <span className='text-[var(--color-blue-primary)]'>ATS</span> est un document épuré, optimisé pour tous les systèmes de suivi des candidatures.</p>
                  <p className='text-xs pb-5'>La version <span className='text-[var(--color-blue-primary)]'>Graphique</span> est conçue pour une expérience de lecture visuelle optimale.</p>
                  <div className='grid gap-5'>
                  <a href='/datas/CV_LUCAS_Sebastien_ATS.pdf' target='_blank' className='button-blue'>Télécharger la version ATS</a>
                  <a href='/datas/CV_Sebastien_LUCAS.pdf' target='_blank' className='button-blue' >Télécharger la version Graphique</a>
                  </div>
               </div>
            }
            >
         </Modal>

      </>
   )
}

 export default Header