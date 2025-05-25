import { useState, useRef} from "react"
import { CircleArrowLeft, CircleArrowRight, CircleDot } from "lucide-react"
import { useSwipeable } from 'react-swipeable'
import { motion, AnimatePresence } from "framer-motion"

import useStoreDevice from '../../storeDevice'

import '../../styles/shared/carousel.css'

function Carousel({items , ItemComponent}){

      const [currentIndex,SetCurrentIndex] = useState(0)
      const [direction,setDirection] = useState(null)
      const carouselRef = useRef(null);
      const {device} = useStoreDevice()

      // Fonction permettant de remonter après un scroll vers carouselRef
      function scrollIntoCarouselRef(){
         setTimeout(()=>{
            carouselRef.current.scrollIntoView({ behavior: "smooth" });
         },700)
      }

      // Permet via la bibliothèque useSwipeable de changer d'index si on swipe a droite ou a gauche
      const handlers = useSwipeable({
         onSwipedRight: () => {
           if (currentIndex < items.length - 1 && device !== 'desktop') {
            setDirection(-1)
            SetCurrentIndex(currentIndex + 1)
            scrollIntoCarouselRef()
           }
         },
         onSwipedLeft: () => {
           if (currentIndex > 0 && device !== 'desktop') {
            setDirection(1)
            SetCurrentIndex(currentIndex - 1)
            scrollIntoCarouselRef()
           }
         },
         preventDefaultTouchmoveEvent: true,
         trackMouse: true,
       })

       
      const variants = {
      enter: (dir) => ({
         x: dir > 0 ? 300 : -300,
         opacity: 0,
      }),
      center: {
         x: 0,
         opacity: 1,
      },
      exit: (dir) => ({
         x: dir > 0 ? -300 : 300,
         opacity: 0,
      }),
      }

      // Fonction pour aller a la slide précédente
      function previous(e){
         e.preventDefault()
         SetCurrentIndex(currentIndex === items.length-1 ? items.length : currentIndex+1)
         setDirection(-1)
         scrollIntoCarouselRef()
      }
   
      // Fonction pour aller a la slide suivante
      function next(e){
         e.preventDefault()
         SetCurrentIndex(currentIndex === 0 ? 0 : currentIndex-1)
         setDirection(1)
         scrollIntoCarouselRef()
      }

      // Permet de changer de currentIndex via un pIndex
      function changeCurrentIndex(e,pIndex){
         e.preventDefault()
         if(pIndex <= items.length && pIndex >= 0 ){
            if(pIndex>currentIndex){
               setDirection(-1)
            }
            else {
               setDirection(1)
            }
            scrollIntoCarouselRef()
            SetCurrentIndex(pIndex)
         }

      }

   return (

      <>
      <div className="carousel" ref={carouselRef}>
         <div className="carousel-swipe" {...handlers}>
            {/* Permet d'avoir une transition via motion quand currentIndex change */}
            <AnimatePresence mode="wait" custom={direction}>
            <motion.div
               key={currentIndex}
               custom={direction}
               variants={variants}
               initial="enter"
               animate="center"
               exit="exit"
               transition={{ duration: 0.4 }}
            >
               <ItemComponent {...items[currentIndex]} />
            </motion.div>
            </AnimatePresence>
         </div>
            {/* operateur de décomposition passe toutes les clé/valeurs  de l'objet en props */}
         <div className="dots">
            {items.map((dot,index)=>{
               return <a key={index}
               href="#" 
               className={`dot ${index === currentIndex ? "active" : ""}`}
               title={'slide numéro '+(index+1)} aria-label={'slide numéro '+(index+1)}
               onClick={(e)=> changeCurrentIndex(e,index)}><CircleDot/>
               </a>
            })}
         </div>
         <div className="arrows">
            {/* Affiche le bouton "Précédent" uniquement si ce n'est pas la première formation chronologiquement[2] */}
            {currentIndex < items.length-1 && <a className="previous" href="#" onClick={(e)=> previous(e)} title="précédent" aria-label="precedent"><CircleArrowLeft size={48}/></a>}
            {/* Affiche le bouton "Suivant" uniquement si ce n'est pas la derniere formation chronologiquement [0] */}
            {currentIndex > 0 && <a className="next" href="#" onClick={(e)=> next(e)} title="suivant" aria-label="suivant"><CircleArrowRight size={48}/></a>}
         </div>
      </div>
      </>


   )

}

export default Carousel