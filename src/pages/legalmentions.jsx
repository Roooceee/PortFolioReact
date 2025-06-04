
import Header from "../components/shared/header"
import Footer from "../components/shared/footer"

function LegalMentions(){




   return (

      <>
         <Header/>  

            <section id="mentions-legales" className="background-secondary min-h-[100svh]">
               <div className="margin-auto max-w-[900px] px-5 pt-40 pb-20">

                  <h1 className="title-section pb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-blue-primary">
                     Mentions Légales
                  </h1>

                  <h2 className="font-title text-blue-primary pb-2.5 text-xl sm:text-2xl pt-5">Éditeur du site</h2>
                  <p className="text-sm sm:text-base ">
                     Le site Portfolio Sébastien LUCAS est édité par Sébastien LUCAS.
                  </p>
                  <p className="text-sm sm:text-base ">
                     Adresse : <span className="numeric">817</span> route de Rougiers <span className="numeric">83470</span> Saint-Maximin-La-Sainte-Baume.
                  </p>

                  <h2 className="font-title text-blue-primary pb-2.5 pt-5 text-xl sm:text-2xl">Créateur du site</h2>
                  <p className="text-sm sm:text-base ">Le créateur du site est Sébastien LUCAS</p>

                  <h2 className="font-title text-blue-primary pb-2.5 pt-5 text-xl sm:text-2xl">Hébergeur du site</h2>
                  <p className="text-sm sm:text-base ">
                     L’hébergeur du site est 
                     <a href="https://vercel.com/" className="text-[var(--color-text)] hover:text-blue-secondary ml-1">Vercel</a>.
                  </p>

                  <h2 className="font-title text-blue-primary pb-2.5 pt-5 text-xl sm:text-2xl">Données personnelles et RGPD</h2>

                  <h3 className="font-title text-blue-primary pb-2.5 pt-5 text-lg sm:text-xl">Responsable du traitement des données :</h3>
                  <p className="text-sm sm:text-base ">
                     Sébastien Lucas –
                     <a href="mailto:sebastien.jose.lucas@gmail.com" className="text-[var(--color-text)] hover:text-blue-secondary ml-1">sebastien.jose.lucas@gmail.com</a>
                  </p>

                  <h3 className="font-title text-blue-primary pb-2.5 pt-5 text-lg sm:text-xl">Finalité du traitement :</h3>
                  <p className="text-sm sm:text-base ">
                     Le formulaire de contact permet de recueillir votre nom, prénom et votre adresse e-mail dans le seul but de vous recontacter suite à votre message. Ces informations sont transmises directement via le service 
                     <a href="https://www.emailjs.com/" className="text-[var(--color-text)] hover:text-blue-secondary mx-1">EmailJS</a>, sans stockage local sur le site ou dans une base de données.
                  </p>

                  <h3 className="font-title text-blue-primary pb-2.5 pt-5 text-lg sm:text-xl">Destinataire :</h3>
                  <p className="text-sm sm:text-base ">
                     Les données sont exclusivement destinées à Sébastien Lucas via 
                     <a href="mailto:sebastien.jose.lucas@gmail.com" className="text-[var(--color-text)] hover:text-blue-secondary mx-1">sebastien.jose.lucas@gmail.com</a>. Elles ne sont ni revendues, ni partagées avec des tiers.
                  </p>

                  <h3 className="font-title text-blue-primary pb-2.5 pt-5 text-lg sm:text-xl">Durée de conservation :</h3>
                  <p className="text-sm sm:text-base ">
                     Les messages sont conservés dans la boîte mail associée à l’adresse mentionnée ci-dessus, pour une durée indéterminée, à des fins de suivi de correspondance uniquement.
                  </p>

                  <h3 className="font-title text-blue-primary pb-2.5 pt-5 text-lg sm:text-xl">Droit de réclamation :</h3>
                  <p className="text-sm sm:text-base ">
                     Conformément au RGPD, vous pouvez demander l'accès, la rectification ou la suppression de vos données personnelles en envoyant un mail à :
                  </p>
                  <a href="mailto:sebastien.jose.lucas@gmail.com" className="text-[var(--color-text)] hover:text-blue-secondary text-sm sm:text-base">sebastien.jose.lucas@gmail.com</a>

                  <h3 className="font-title text-blue-primary pb-2.5 pt-5 text-lg sm:text-xl">Consentement :</h3>
                  <p className="text-sm sm:text-base ">
                     En utilisant le formulaire de contact, vous consentez à ce que vos données soient traitées de cette manière. Vous pouvez retirer votre consentement à tout moment en me contactant directement.
                  </p>

                  <h2 className="font-title text-blue-primary pb-2.5 pt-5 text-xl sm:text-2xl">Limitation de responsabilité</h2>
                  <p className="text-sm sm:text-base ">
                     L’éditeur du site ne pourra être tenu responsable en cas de dommage direct ou indirect lié à l’utilisation de ce site.
                  </p>

               </div>
            </section>



         <Footer/>
      </>
   )


}

export default LegalMentions