import { CircleArrowDown } from 'lucide-react'

import { TypeAnimation } from 'react-type-animation';
import { motion } from "motion/react"
import { useEffect, useState } from 'react';

function Head_Index() {

   const [isFirstDone,setIsFirstDone] = useState(false)

   useEffect(()=>{

      setTimeout(()=>{
         setIsFirstDone(true)
      },3500)

   },[])

   return (
      <section id="head_index" className='section background-secondary min-h-[80dvh] lg:min-h-[500px] flex flex-col mt-12'>
         <div className='flex flex-col justify-center text-center margin-auto'>
            <div className='h-[90px] lg:h-[120px]'>
               <h2 className='font-title text-lg sm:text-xl md:text-xl lg:text-3xl font-semibold text-[var(--color-blue-secondary)]'>Sébastien LUCAS</h2>

               <TypeAnimation
               sequence={[
                  "Développeur d'application JavaScript React",
                  1000,
               ]}
               wrapper="h1"
               speed={40}
               repeat={1}
               cursor={false}
               className='font-title text-lg sm:text-2xl md:text-2xl lg:text-4xl font-semibold text-[var(--color-blue-primary)]'
               />

               {isFirstDone && (
                  <TypeAnimation
                  sequence={[
                     "Actuellement à la recherche d’une alternance",
                     1000,
                  ]}
                  wrapper="p"
                  speed={40}
                  repeat={1}
                  cursor={false}
                  className='text-xs md:text-sm lg:text-base'
                  />
               )}

            </div>
            <div className='flex justify-center gap-2.5 pt-2.5 lg:gap-8 lg:pt-12'>
               <a href="#mes-derniers-projets" className="button-blue min-w-[100px]">Mes Projets</a>
               <a href="#contact" className="button-blue min-w-[100px]">Me Contacter</a>
            </div>
         </div>

         <motion.a href='#a-propos'
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
            duration: 2,
            repeat: Infinity,
            }}
         className='mx-auto max-w-fit lg:hidden'>
            <CircleArrowDown className='text-blue-primary hover:text-blue-secondary'/>
         </motion.a>
      </section>
 )}
 
 export default Head_Index