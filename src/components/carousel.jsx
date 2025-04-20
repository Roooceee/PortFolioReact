import { useState, useRef, useEffect } from "react"
import { CircleArrowLeft, CircleArrowRight, CircleDot } from "lucide-react"
import { useSwipeable } from 'react-swipeable'
import { motion, AnimatePresence } from "framer-motion"
import '../styles/carousel.css'

function Carousel({items , ItemComponent}){

      const [currentIndex,SetCurrentIndex] = useState(0)
      const [direction,setDirection] = useState(null)
      const carouselRef = useRef(null);


      function scrollIntoCarouselRef(){
         // setTimeout(()=>{
         //    carouselRef.current.scrollIntoView({ behavior: "smooth" });
         // },700)
      }

      // Permet via la bibliothèque useSwipeable de changer d'index si on swipe a droite ou a gauche
      const handlers = useSwipeable({
         onSwipedRight: () => {
           if (currentIndex < items.length - 1) {
            setDirection(-1)
            SetCurrentIndex(currentIndex + 1)
            scrollIntoCarouselRef()
           }
         },
         onSwipedLeft: () => {
           if (currentIndex > 0) {
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

      // Fonction pour aller à la formation précédente
      function previous(e){
         e.preventDefault()
         // Si on est à la fin du item, on revient au début (indice 0)
         // Sinon on diminue l'indice pour afficher la formation précédente
         SetCurrentIndex(currentIndex === items.length-1 ? 0 : currentIndex+1)
         setDirection(-1)
         scrollIntoCarouselRef()
      }
   
      // Fonction pour aller à la formation suivante
      function next(e){
         e.preventDefault()
         // Si on est au début (indice 0), on revient à la fin (dernière formation)
         // Sinon on augmente l'indice pour afficher la formation suivante
         SetCurrentIndex(currentIndex === 0 ? items.length-1 : currentIndex-1)
         setDirection(1)
         scrollIntoCarouselRef()
         // Si on est a la fin du tableau revient a la taille du tableau aussi non -1 car JSON du plus recent au plus ancien
      }

      // Permet de changer 
      function changeCurrentIndex(e,pIndex){
         e.preventDefault()
         if(pIndex <= items.length && pIndex >= 0 ){
            if(pIndex>currentIndex){
               setDirection(-1)
            }
            else {
               setDirection(1)
            }
            SetCurrentIndex(pIndex)
         }

      }

   return (

      <>
      <div className="carousel" {...handlers}>
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
            {/* operateur de décomposition passe toutes les clé/valeurs  de l'objet en props */}
         <div className="dots">
            {items.map((dot,index)=>{
               console.log(dot,index)
               return <a key={index} 
               className={`dot ${index === currentIndex ? "active" : ""}`}
               onClick={(e)=> changeCurrentIndex(e,index)}><CircleDot/></a>
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