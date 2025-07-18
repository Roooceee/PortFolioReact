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

      <article className='skill flex flex-col justify-start gap-4'>
         {/* Affiche l'icone si Icon à chargé sinon affiche rien */}
         <h3 className='title-section text-lg md:text-2xl flex items-center gap-2.5'>{Icon != null? <Icon size={36}/> : ''}{title}</h3>
         <ul className='grid pl-3 gap-1'>
            {list.map(element => {
            return <li className='text-[var(--color-text)] text-xs md:text-sm before:content-["■"] before:text-blue-primary before:mr-3' key={element}>{element}</li> 
            })}
         </ul>
      </article>

   )

}

export default Skill