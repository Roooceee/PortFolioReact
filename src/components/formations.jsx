import { motion } from "motion/react";
import { forwardRef, useEffect, useState } from "react"
import Formation from "./formation"
import '../styles/formations.css'
import { CircleArrowLeft, CircleArrowRight } from "lucide-react"

function Formations(props,ref){

   const [formations,setFormations] = useState([])
   const [currentIndex,SetCurrentIndex] = useState(0)

   useEffect(()=> {

      getFormations()

   },[])

   // Récupère les formations depuis le fichier JSON
   // Du plus récent [0] au plus ancien [2]
   async function getFormations(){

      try {
         const req = await fetch('/datas/formations.json')
         const res = await req.json()
         setFormations(res)
      }
      catch(e){
         console.log('Erreur chargement formations '+e)
      }
   }

   // Fonction pour aller à la formation précédente
   function previous(e){
      e.preventDefault()
      // Si on est à la fin du tableau, on revient au début (indice 0)
      // Sinon on diminue l'indice pour afficher la formation précédente
      SetCurrentIndex(currentIndex === formations.length-1 ? 0 : currentIndex+1)
   }

   // Fonction pour aller à la formation suivante
   function next(e){
      e.preventDefault()
      // Si on est au début (indice 0), on revient à la fin (dernière formation)
      // Sinon on augmente l'indice pour afficher la formation suivante
      SetCurrentIndex(currentIndex === 0 ? formations.length-1 : currentIndex-1)
      // Si on est a la fin du tableau revient a la taille du tableau aussi non -1 car JSON du plus recent au plus ancien

   }

   return (
   
      <section id="formations">
         <div className="contain-1440">
            <h2 ref={ref}>Mes études et formations</h2>
               {formations.length > 0 ?
                  <>
                  <div>
                     <Formation key={formations[currentIndex].intitule} intitule={formations[currentIndex].intitule} option={formations[currentIndex].option} etablissement={formations[currentIndex].etablissement} debut={formations[currentIndex].debut} fin={formations[currentIndex].fin} obtention={formations[currentIndex].obtention} competences={formations[currentIndex].competences}/>
                     {/* Affiche le bouton "Précédent" uniquement si ce n'est pas la première formation chronologiquement[2] */}
                     {currentIndex < formations.length-1 && <a className="previous" href="#" onClick={previous}><CircleArrowLeft size={48}/></a>}
                     {/* Affiche le bouton "Suivant" uniquement si ce n'est pas la derniere formation chronologiquement [0] */}
                     {currentIndex > 0 && <a className="next" href="#" onClick={next}><CircleArrowRight size={48}/></a>}
                  </div>
                  </>
               : <p>Chargement</p>}
         </div>
      </section>
   
   )
}


export default forwardRef(Formations)