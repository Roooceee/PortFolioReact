import { forwardRef } from "react";

function APropos({id},ref) {
      
      return (
         <section id='a-propos' className="background-primary section">      
            <div className="flex flex-col p-5 lg:flex-row justify-between gap-12 max-w-[900px] margin-auto items-center">
                  <img src="/img/image_profil_SL.webp" alt="image de profil" className="rounded-[100%] max-w-[200px] sm:max-w-[300px]" />
               <div className="grid gap-8">
                  <h2 ref={ref} className='title-section'>A Propos</h2>
                     <p>Développeur web junior passionné, j’ai obtenu un BTS Services Informatiques aux Organisations avant d’évoluer dans le support technique, notamment en tant que technicien Helpdesk chez ADSN. Ces expériences m'ont permis de développer rigueur, écoute utilisateur et sens du détail, tout en me familiarisant avec des environnements techniques exigeants.</p>
                     <p>Début <span className='numeric'>2025</span>, j’ai suivi une formation professionnelle pour consolider mes bases en HTML, CSS, JavaScript et découvrir React.js ainsi que les fondamentaux côté serveur avec PHP. J’y ai renforcé ma logique de développement, appris à manipuler des APIs et à créer des interfaces réactives et modernes.</p>
                     <p>Aujourd’hui, je me prépare à suivre une formation diplômante pour aller encore plus loin avec React.js et Node.js. Mon objectif : continuer à progresser, créer des interfaces utiles et intuitives, et intégrer une équipe tech où je pourrai contribuer tout en apprenant. Vous cherchez un profil motivé, curieux, et prêt à relever des défis ?<br/><br/>Je suis votre développeur !</p>
               </div>
            </div>
         </section>
    )

}
 
 export default forwardRef(APropos)