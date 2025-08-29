import { forwardRef } from "react";

function APropos({id},ref) {
      
      return (
         <section id='a-propos' className="background-primary section">      
            <div className="flex flex-col p-5 lg:flex-row justify-between gap-12 max-w-[900px] margin-auto items-center">
                  <img src="/img/image_profil_SL.webp" alt="image de profil" className="rounded-[100%] max-w-[200px] sm:max-w-[300px]" />
               <div className="grid gap-8">
                  <h2 ref={ref} className='title-section'>A Propos</h2>
                     <p>Développeur web passionné, mon parcours a commencé par un BTS SIO qui m'a donné des bases techniques solides, consolidées ensuite dans le support applicatif chez ADSN où j'ai développé ma rigueur et ma compréhension des besoins utilisateurs.</p>
                     <p>Pour faire de ma passion mon métier, début <span className='numeric'>2025</span>, j’ai suivi une formation professionnelle pour consolider mes bases en HTML, CSS, JavaScript et découvrir React.js ainsi que les fondamentaux côté serveur avec PHP. J’y ai renforcé ma logique de développement, appris à manipuler des APIs et à créer des interfaces réactives et modernes.</p>
                     <p>Aujourd'hui, je suis à la recherche d'une alternance pour valider un Titre RNCP de niveau <span className='numeric'>6</span>, (Bac+<span className='numeric'>3</span>/<span className='numeric'>4</span>) et transformer mes compétences en une véritable expertise professionnelle. Mon objectif est simple : intégrer une équipe, contribuer concrètement à ses projets grâce à mes acquis, et m'investir pour maîtriser les technologies et les méthodes qui font votre succès.</p>
                     <p>Vous cherchez un profil curieux, déjà opérationnel sur la création d'interfaces et prêt à grandir avec vous ?</p>
                     <p>Je suis votre alternant !</p>
               </div>
            </div>
         </section>
    )

}
 
 export default forwardRef(APropos)