import { forwardRef } from "react"
import '../styles/contact.css'
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

function Contact(props , ref){


   return (
      <section id="contact">
         <div className="contain-1440">
            <h2 ref={ref}>Contact</h2>
            <div>
               <div className="contact_info card-principal">
                  <ul>
                     <li><Mail/><a href="mailto:sebastien.jose.lucas@gmail.com" >sebastien.jose.lucas@gmail.com</a></li>
                     <li><MapPin/>Région Aix / Marseille, France </li>
                     <li><Linkedin/><a target="_blank" href="https://www.linkedin.com/in/sebastien-jose-lucas/">LinkedIn</a></li>
                     <li><Github/><a target="_blank" href="https://github.com/Roooceee">Github</a></li>
                  </ul>
               </div>

               <form action="" className="card-principal">
                  
                  <div className="head_form">
                     <h3>Envoyez moi un message</h3>
                     <p>Je suis à la recherche d'une alternance. Utilisez ce formulaire pour toute proposition ou question à ce sujet</p>
                  </div>
                  
                  <div className="lastname_form">
                     <label htmlFor="lastname">Votre nom <span className="asterix">*</span></label>
                     <input type="text" name="lastname" id="lastname" required placeholder="ex : Dupont"/>
                  </div>

                  <div className="name_form">
                     <label htmlFor="name">Votre Prénom <span className="asterix">*</span></label>
                     <input type="text" name="name" id="name" required placeholder="ex : Jean"/>
                  </div>

                  <div className="company_form">
                     <label htmlFor="company">Nom de l'entreprise (facultatif)</label>
                     <input type="text" name="company" id="company" placeholder="ex : Innovatech Solutions" />
                  </div>
                  
                  <div className="email_form">
                     <label htmlFor="email">Votre Email <span className="asterix">*</span></label>
                     <input type="email" name="email" id="email" required placeholder="ex : jean.dupont@exemple.fr"/>
                  </div>

                  <div className="reason_form">
                     <label htmlFor="reason">Votre raison du contact <span className="asterix">*</span></label>
                     <select name="reason" id="reason" required>
                        <option value="disabled" disabled selected>-- Séléctionnez un sujet --</option>
                        <option value="alternance_offer">Proposition d'alternance</option>
                        <option value="question_alternance">Question (Profil / Alternance)</option>
                        <option value="other">Autre</option>
                     </select>
                  </div>

                  <div className="message_form">
                     <label htmlFor="message">Votre Message <span className="asterix">*</span></label>
                     <textarea name="message" id="message" placeholder="Bonjour, je vous contacte au sujet de..." required></textarea>
                  </div>

                     <p class="required-legend"><small>Les champs marqués d'un <span className="asterix">*</span> sont requis.</small></p>
                     <input type="submit" value="Envoyer le message"/>
               </form>
            </div>
         </div>
      </section>
   )

}

export default forwardRef(Contact)