import '../styles/skill.css'
import { useEffect, useState } from 'react';

function Skill({title,list,logo=null}){

   const [Icon,setIcon] = useState(null)
   // UseState Icon qui va contenir le composant de l'icone a afficher (lucide-react)


   // useEffect qui se lance dès que la props logo change soit au montage du composant
   useEffect(()=> {
      // fonction loadIcon qui permet de recuperer l'icone depuis la bibliotheque lucide-react 
      async function loadIcon() {

         // try catch en cas d'erreur lors du chargement dynamique
         try {
            // destructuration permettant de recuperer l'icone correspondante a 'logo'
            const {[logo]: LoadedIcon} = await import("lucide-react")
            setIcon(()=> LoadedIcon)

         }
         catch(e){
            // Si ne trouve pas de correspondance setIcon prend la valeur null
            console.log('Erreur chargement logo '+e)
            setIcon(null)
         }

      }

      // Permet de lancer loadIcon si la props logo est presente
      if(logo){
         loadIcon()
      }
   },[logo])


   return (

      <article className='skill'>
         {/* Affiche l'icone si Icon à chargé sinon affiche rien */}
         <h3 className='title-section'>{Icon != null? <Icon size={36}/> : ''}{title}</h3>
         <ul>
            {list.map(element => {
            return <li key={element}>{element}</li> 
            })}
         </ul>
      </article>

   )

}

export default Skill