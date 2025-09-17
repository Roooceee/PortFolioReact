import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

import { TypeAnimation } from 'react-type-animation';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const arrowVariants = {
  appear: {
   y: 0,
   opacity: 1,
   transition: { 
      duration: 1,
      delay: 4,
      ease: "easeOut"
    }
  },
  bouncing: {
    y: [0, 10, 0],
    scale: [1,1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }
  },
  hover: {
    y: 0,
    scale: 1.5,
    transition: { 
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

const textContainerVariants  = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
    },
  },
};

const textItemsVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const linkContainerVariants  = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, 
    },
  },
};

const linkItemsVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function Hero() {

   const arrowControls = useAnimation();
   const linkControls  = useAnimation();

   useEffect(()=>{

      const sequence = async () => {
         await arrowControls.start('appear')
         arrowControls.start('bouncing')
      }

      sequence()

   },[])

   return (
      <section id="hero" className='section background-secondary min-h-[70dvh] lg:min-h-[500px] flex flex-col mt-12'>
         <div className='flex flex-col justify-center text-center margin-auto'>

            <motion.div 
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
            className='h-[90px] lg:h-[120px]'>
               <motion.h2 
               variants={textItemsVariants}
               className='font-title text-lg sm:text-xl md:text-xl lg:text-3xl font-semibold text-[var(--color-blue-secondary)]'>
                  Sébastien LUCAS
               </motion.h2>

               <motion.h1
               variants={textItemsVariants}
               className='font-title text-lg sm:text-2xl md:text-2xl lg:text-4xl font-semibold text-[var(--color-blue-primary)]'
               >Développeur d'application React</motion.h1>

               <motion.div
               variants={textItemsVariants}>
                  <TypeAnimation
                  sequence={[
                     1000,
                     "Actuellement à la recherche d’une alternance",
                     () => {
                        linkControls.start('visible')
                     }
                  ]}
                  wrapper="p"
                  speed={50}
                  repeat={1}
                  cursor={false}
                  className='text-xs md:text-sm lg:text-base'
                  />
               </motion.div>

            </motion.div>

            <motion.div 
            variants={linkContainerVariants}
            initial="hidden"
            animate={linkControls}>

               <motion.div variants={linkItemsVariants} 
               className='flex justify-center gap-2.5 pt-2.5 lg:gap-3 lg:pt-12'>
                  <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                  href="#mes-derniers-projets" 
                  className="button-blue min-w-[100px]">Mes Projets</motion.a>
                  <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                  href="#contact" 
                  className="button-blue min-w-[100px]">Me Contacter</motion.a>
               </motion.div>


               <motion.div variants={linkItemsVariants}  className='flex justify-center gap-5 pt-10 text-blue-primary'>
                  <motion.a 
                  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} title='Mon Github' 
                  className='hover:text-blue-secondary' href='https://github.com/Roooceee' target='to_blank'><Github/></motion.a>
                  
                  <motion.a 
                  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} title="Mon Linkedin"
                  className='hover:text-blue-secondary' href='https://www.linkedin.com/in/sebastien-jose-lucas/' target='to_blank'><Linkedin/></motion.a>
                  <motion.a 
                  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} title="M'envoyer un e-mail" 
                  className='hover:text-blue-secondary' href='mailto:sebastien.jose.lucas@gmail.com'><Mail/></motion.a>
               </motion.div>


            </motion.div>
         </div>

         <motion.a href='#a-propos'
         variants={arrowVariants}
         initial={{ opacity: 0, y: 20 }}
         animate={arrowControls}
         onHoverStart={() => arrowControls.start("hover")}
         onHoverEnd={() => arrowControls.start("bouncing")}
         className='mx-auto max-w-fit' title='A Propos'>
            <ArrowDown className='text-blue-primary hover:text-blue-secondary'/>
         </motion.a>

      </section>
 )}
 
 export default Hero