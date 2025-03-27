import { useEffect, useState } from "react"
import Formation from "./formation"
import '../styles/formations.css'

function Formations(){

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

   console.log(currentIndex)

   return (
   
      <div className="formations">
         <div>
            <h2>Formations</h2>
               {formations.length > 0 ?
                  <>
                  <article>
                     <Formation key={formations[currentIndex].intitule} intitule={formations[currentIndex].intitule} option={formations[currentIndex].option} etablissement={formations[currentIndex].etablissement} debut={formations[currentIndex].debut} fin={formations[currentIndex].fin} obtention={formations[currentIndex].obtention} competences={formations[currentIndex].competences}/>
                     {/* Affiche le bouton "Précédent" uniquement si ce n'est pas la première formation chronologiquement[2] */}
                     {currentIndex < formations.length-1 && <a className="previous" href="#" onClick={previous}>Précédent</a>}
                     {/* Affiche le bouton "Suivant" uniquement si ce n'est pas la derniere formation chronologiquement [0] */}
                     {currentIndex > 0 && <a className="next" href="#" onClick={next}>Suivant</a>}
                  </article>
                  </>
               : <p>Chargement</p>}
         </div>
      </div>
   
   )
}


export default Formations