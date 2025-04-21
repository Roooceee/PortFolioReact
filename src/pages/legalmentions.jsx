
import Header from "../components/header"
import Footer from "../components/footer"
import '../styles/legalmentions.css'

function LegalMentions(){




   return (

      <>
         <Header/>

            
         <section id="mentions-legales">
            <div className="contain-1440">
               <h1>Mentions Légales</h1>

               <h2>Éditeur du site</h2>
               <p>Le site Portfolio Sébastien LUCAS est édité par Sébastien LUCAS.</p>
               <p>Adresse : <span className="numeric">817</span>route de Rougiers <span className="numeric">83470</span> Saint-Maximin-La-Sainte-Baume.</p>

               <h2>Créateur du site</h2>
               <p>Le créateur du site est Sébastien LUCAS</p>

               <h2>Hébergeur du site</h2>
               <p>L’hébergeur du site est Vercel.</p>

               <h2>Données personnelles et RGPD</h2>
               
               <h3>Responsable du traitement des données : </h3>
               <p>Sébastien Lucas – <a href="mailto:sebastien.jose.lucas@gmail.com">sebastien.jose.lucas@gmail.com</a></p>

               <h3>Finalité du traitement :</h3>
               <p>Le formulaire de contact permet de recueillir votre nom et votre adresse e-mail dans le seul but de vous recontacter suite à votre message. Ces informations sont transmises directement via le service EmailJS, sans stockage local sur le site ou dans une base de données.</p>

               <h3>Destinataire :</h3>
               <p>Les données sont exclusivement destinées à Sébastien Lucas vers sebastien.jose.lucas@gmail.com. Elles ne sont ni revendues, ni partagées avec des tiers.</p>

               <h3>Durée de conservation :</h3>
               <p>Les messages sont conservés dans la boîte mail associée à l’adresse mentionnée ci-dessus, pour une durée indéterminée, à des fins de suivi de correspondance uniquement.</p>

               <h3>Droit de réclamation :</h3>
               <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous pouvez demander l'accès, la rectification ou la suppression de vos données personnelles en envoyant un mail à l’adresse :</p>
               <a href="mailto:sebastien.jose.lucas@gmail.com">sebastien.jose.lucas@gmail.com</a>

               <h3>Consentement :</h3>
               <p>En utilisant le formulaire de contact, vous consentez à ce que vos données soient traitées de cette manière. Vous pouvez retirer votre consentement à tout moment en me contactant directement.</p>

               <h2>Limitation de responsabilité</h2>
               <p>L’éditeur du site ne pourra être tenu responsable en cas de dommage direct ou indirect lié à l’utilisation de ce site.</p>
            </div>
         </section>

         <Footer/>
      </>
   )


}

export default LegalMentions