import { useState, useRef, useEffect} from "react"
import { CircleArrowLeft, CircleArrowRight, CircleDot } from "lucide-react"
import { motion } from "framer-motion"

import useStoreWidthScreen from '../../storeWidthScreen'

function Carousel({items , ItemComponent}){

      const [currentIndex,SetCurrentIndex] = useState(0)
      const [direction,setDirection] = useState(null)
      const carouselRef = useRef(null);
      const {widthScreen} = useStoreWidthScreen()
      let isDraggable = widthScreen <= 1024 ? true : false

      // Fonction permettant de remonter après un scroll vers carouselRef
      function scrollIntoCarouselRef(){
         setTimeout(()=>{
            carouselRef.current.scrollIntoView({ behavior: "smooth" });
         },700)
      }
       
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
         if(pIndex <= items.length && pIndex >= 0 && pIndex !== currentIndex ){
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

      function handleDragEnd(info){

         console.log(isDraggable)

         if(!isDraggable) {
            return
         }
         if (info.offset.x > widthScreen*0.5 && currentIndex < items.length - 1) {
            // Swipe vers la gauche -> slide precedente
            setDirection(-1);
            SetCurrentIndex(currentIndex + 1);
            scrollIntoCarouselRef();
         } else if (info.offset.x < -(widthScreen*0.5) && currentIndex > 0) {
            // Swipe vers la droite -> slide suivante
            setDirection(1);
            SetCurrentIndex(currentIndex - 1);
            scrollIntoCarouselRef();
         }

      }

   return (

      <>
         <div className="relative max-w-[85%] margin-auto scroll-mt-60" ref={carouselRef}>         
         
         <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8 }}
            drag={isDraggable ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2} // ajoute un rebond doux
            onDragEnd={(event, info) => {
               handleDragEnd(info)
            }}
            >
            <ItemComponent {...items[currentIndex]} />
            {/* operateur de décomposition passe toutes les clé/valeurs  de l'objet en props */}
         </motion.div>

         <div className="flex flex-row-reverse gap-1.5 w-fit margin-auto pt-5 text-blue-primary">
            {items.map((dot,index)=>{
               return <a key={index}
               href="#" 
               className={`${index === currentIndex && "text-purple-primary"} ${index !== currentIndex && "hover:text-blue-secondary"}`}
               title={'slide numéro '+(index+1)} aria-label={'slide numéro '+(index+1)}
               onClick={(e)=> changeCurrentIndex(e,index)}><CircleDot/>
               </a>
            })}
         </div>
            <div className="text-blue-primary hidden lg:inline">
               {/* Affiche le bouton "Précédent" uniquement si ce n'est pas la première formation chronologiquement[2] */}
               {currentIndex < items.length-1 && <a className="absolute top-[3rem] left-[-7%]" href="#" onClick={(e)=> previous(e)} title="précédent" aria-label="precedent"><CircleArrowLeft size={48}/></a>}
               {/* Affiche le bouton "Suivant" uniquement si ce n'est pas la derniere formation chronologiquement [0] */}
               {currentIndex > 0 && <a className="absolute top-[3rem] right-[-7%]" href="#" onClick={(e)=> next(e)} title="suivant" aria-label="suivant"><CircleArrowRight size={48}/></a>}
            </div>
      </div>

      </>


   )

}

export default Carousel