import { useState } from "react"
import { CircleArrowLeft, CircleArrowRight } from "lucide-react"
import '../styles/carousel.css'

function Carousel({items , ItemComponent}){

      const [currentIndex,SetCurrentIndex] = useState(0)
      const currentItemData = items[currentIndex]

      // Fonction pour aller à la formation précédente
      function previous(e){
         e.preventDefault()
         // Si on est à la fin du item, on revient au début (indice 0)
         // Sinon on diminue l'indice pour afficher la formation précédente
         SetCurrentIndex(currentIndex === items.length-1 ? 0 : currentIndex+1)
      }
   
      // Fonction pour aller à la formation suivante
      function next(e){
         e.preventDefault()
         // Si on est au début (indice 0), on revient à la fin (dernière formation)
         // Sinon on augmente l'indice pour afficher la formation suivante
         SetCurrentIndex(currentIndex === 0 ? items.length-1 : currentIndex-1)
         // Si on est a la fin du tableau revient a la taille du tableau aussi non -1 car JSON du plus recent au plus ancien
   
      }



   return (

      <>
      <div className="carousel">
            <ItemComponent {...currentItemData}/>
            {/* operateur de décomposition passe toutes les clé/valeurs  de l'objet en props */}
         {/* Affiche le bouton "Précédent" uniquement si ce n'est pas la première formation chronologiquement[2] */}
         {currentIndex < items.length-1 && <a className="previous" href="#" onClick={previous}><CircleArrowLeft size={48}/></a>}
         {/* Affiche le bouton "Suivant" uniquement si ce n'est pas la derniere formation chronologiquement [0] */}
         {currentIndex > 0 && <a className="next" href="#" onClick={next}><CircleArrowRight size={48}/></a>}
      </div>
      </>


   )

}

export default Carousel