import { forwardRef, useState } from "react"
import '../styles/contact.css'
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import emailjs from '@emailjs/browser';

function Contact(props , ref){


   const [lastname,setLastname] = useState('')
   const [lastnameError,setLastnameError] = useState('')

   const [name,setName] = useState('')
   const [nameError,setNameError] = useState('')

   const [company,setCompany] = useState('')
   const [companyError,SetCompanyError] = useState('')

   const [email,setEmail] = useState('')
   const [emailError,setEmailError] = useState('')

   const [reasonId,setreasonId] = useState('')
   const [reasonError,setReasonError] = useState('')

   const [message,setMessage] = useState('')
   const [messageError,setMessageError] = useState('')

   const messagesError = {
      lastnameError : "Un nom ne peut contenir que des lettres, des tirets ou des apostrophes.",
      nameError : "Un prénom ne peut contenir que des lettres, des tirets ou des apostrophes.",
      companyError: "Le nom de la société peut contenir lettres, chiffres, espaces et ponctuation classique (ex: @, &, -, ‘).",
      emailError:"L’adresse email saisie n’est pas valide. Merci de vérifier et de réessayer.",
      messageError:"Le message contient des caractères interdits (les balises HTML ne sont pas autorisées)."
   }

   
   function verifyField(pRegex,pSizeMin , pSizeMax,pValue, setError ,pMessageError){

      if(pValue.trim()===''){
         setError('Ce champ ne peut pas être vide.')
      }
      else {
         if(pValue.length >= pSizeMin && pValue.length <= pSizeMax){
            if(pRegex.test(pValue)){
               setError('')
               return true
            }
            setError(pMessageError)
         }
         else {
            setError(`Doit contenir entre ${pSizeMin} et ${pSizeMax} caractère${pSizeMax>1?'s':''}`)
         }
      }
      return false

   }

   function verifyAllField(){

      let allFieldIsGood = true

      if(!verifyField(/^[A-Za-zÀ-ÖØ-öø-ÿ'’-]+(?:[-' ][A-Za-zÀ-ÖØ-öø-ÿ'’-]+)*$/,2,40,lastname,setLastnameError,messagesError.lastnameError)){
         allFieldIsGood = false
      }
      if(!verifyField(/^[A-Za-zÀ-ÖØ-öø-ÿ'’-]+(?:[-' ][A-Za-zÀ-ÖØ-öø-ÿ'’-]+)*$/,2,40,name,setNameError,messagesError.nameError)){
         allFieldIsGood = false
      }
      if(company.trim() != ""){
         if(!verifyField(/^[A-Za-zÀ-ÖØ-öø-ÿ0-9@&'’\-.(),+ ]+$/,2,60,company,SetCompanyError,messagesError.companyError)){
            allFieldIsGood = false
         }
      }
      if(!verifyField(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,5,254,email,setEmailError,messagesError.emailError)){
         allFieldIsGood = false
      }
      if(reasonId === ''){
         setReasonError('Veuillez sélectionner une raison de votre message.')
         allFieldIsGood = false
      }

      if(!verifyField(/^[^<>]+$/,10,254,message,setMessageError,messagesError.messageError)){
         allFieldIsGood = false 
      }

      return allFieldIsGood
   }

   function sendMail(e){
      e.preventDefault()

      if(verifyAllField()){
         
         const reasons = [
            "Proposition d'alternance",
            "Question (Profil / Alternance)",
            "Autre"
         ]
   
         const templateParams = {
            from_name : `${lastname} ${name}`,
            from_email : `${email}`,
            company_name : `${company}`,
            subject_reason : `${reasons[reasonId]}`,
            message_content : `${message}`
         }
   
         const public_key = import.meta.env.VITE_EMAILJS_TOKEN;
   
         emailjs.send('Service_Portfolio_SL','Template_Portfolio_SL',templateParams,public_key).then((response) => {
            
            console.log('SUCCESS!', response.status, response.text);
   
            })
            .catch((error) => {
               console.error('FAILED...', error);
            })
      }

   }


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
                     <input type="text" name="lastname" id="lastname" placeholder="ex : Dupont"
                     className={lastnameError ? 'border-red' : ''} 
                     onChange={(e) => {
                        setLastname(e.target.value)
                        if(lastnameError !== ''){
                           setLastnameError('')
                        }
                     }
                        }/>
                     {lastnameError != '' ? <p className="error">{lastnameError}</p> : ''}
                  </div>

                  <div className="name_form">
                     <label htmlFor="name">Votre Prénom <span className="asterix">*</span></label>
                     <input type="text" name="name" id="name" placeholder="ex : Jean" 
                     className={nameError ? 'border-red':''}
                     onChange={(e)=> {
                        setName(e.target.value)
                        if(nameError !== ''){
                           setLastnameError('')
                        }
                     }
                        }/>
                     {nameError != '' ? <p className="error">{nameError}</p> : ''}
                  </div>

                  <div className="company_form">
                     <label htmlFor="company">Nom de l'entreprise (facultatif)</label>
                     <input type="text" name="company" id="company" placeholder="ex : Innovatech Solutions" 
                     className={companyError ? 'border-red':''}
                     onChange={(e)=> {
                        setCompany(e.target.value)
                        if(companyError !== ''){
                           SetCompanyError('')
                        }
                     }
                        }/>
                     {companyError != '' ? <p className="error">{companyError}</p> : ''}
                  </div>
                  
                  <div className="email_form">
                     <label htmlFor="email">Votre Email <span className="asterix">*</span></label>
                     <input type="email" name="email" id="email" placeholder="ex : jean.dupont@exemple.fr" 
                     className={emailError ? 'border-red':''}
                     onChange={(e)=> {
                        setEmail(e.target.value)
                        if(emailError !== ''){
                           setEmailError('')
                        }
                     }
                     }/>
                     {emailError != '' ? <p className="error">{emailError}</p> : ''}
                  </div>

                  <div className="reason_form">
                     <label htmlFor="reason">Votre raison du contact <span className="asterix">*</span></label>
                     <select name="reason" id="reason" 
                     className={reasonError ? 'border-red':''}
                     onChange={(e)=> {
                        setreasonId(e.target.selectedIndex)
                        if(reasonError !== ''){
                           setReasonError('')
                        }
                     }
                        } >
                        <option value="disabled" disabled selected>-- Séléctionnez un sujet --</option>
                        <option value="alternance_offer">Proposition d'alternance</option>
                        <option value="question_alternance">Question (Profil / Alternance)</option>
                        <option value="other">Autre</option>
                     </select>
                     {reasonError != '' ? <p className="error">{reasonError}</p> : ''}
                  </div>

                  <div className="message_form">
                     <label htmlFor="message">Votre Message <span className="asterix">*</span></label>
                     <textarea name="message" id="message" placeholder="Bonjour, je vous contacte au sujet de..." 
                     className={messageError ? 'border-red':''}
                     onChange={(e)=> {
                        setMessage(e.target.value)
                        if(messageError !== ''){
                           setMessageError('')
                        }
                     }
                        }>
                     </textarea>
                     {messageError != '' ? <p className="error">{messageError}</p> : ''}
                  </div>

                     <p className="required-legend"><small>Les champs marqués d'un <span className="asterix">*</span> sont requis.</small></p>
                     <input type="submit" value="Envoyer le message" onClick={(e) => sendMail(e,lastname)}/>
               </form>
            </div>
         </div>
      </section>
   )

}

export default forwardRef(Contact)