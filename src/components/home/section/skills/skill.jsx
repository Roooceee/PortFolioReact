import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const variantSkill = {
  hidden: { y: 50, opacity: 0 , scale:0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale:1,
    transition: {
      duration: 0.5,
      ease: "easeIn"
    },
  },
  initiale: {
    scale:1,
    transition: {
      duration: 0.1,
      ease: "easeIn"
    },
  },
  hover: {
   y:[-5],
   scale:[1.05],
   transition: {
      duration:0.1,
      ease:"easeIn",
   }
  }
}


function Skill({title,list,logo=null}){

   const controls  = useAnimation();


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

      <motion.article variants={variantSkill}
      initial='hidden'
      whileInView='visible' 
      animate={controls}
      viewport={{ once: true }}  
      onHoverStart={() => controls.start('hover')}
      onHoverEnd={() => controls.start('initiale')}
      className='skill card-principal flex flex-col justify-start 
      border-[1px] border-neutral-500 hover:border-blue-primary rounded-xl p-5 bg-[var(--color-bg-primary)] 
      max-w-[220px] sm:max-w-[280px] 2xl:max-w-[300px]'>
         <div className='flex flex-col gap-2.5 justify-center'>
            <span className='mx-auto text-blue-primary'>{Icon != null? <Icon size={44}/> : ''}</span>
            <h3 className='text-[var(--color-text)] text-base font-semibold text-center md:text-lg gap-2.5'>{title}</h3>
         </div>
         <ul className='flex flex-wrap justify-center gap-2 pt-10'>
            {list.map((element , index)  => {
            return <li className='badge text-xs' key={element}>{element}</li>
            })}
         </ul>
      </motion.article>


   )

}

export default Skill