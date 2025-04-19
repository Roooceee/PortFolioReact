import { forwardRef, useEffect, useState } from "react"
import '../styles/contact.css'
import { CircleCheckBig, CircleX, Github, Linkedin, Mail, MapPin } from "lucide-react"
import emailjs from '@emailjs/browser';
import Modal from "./modal";
import Loading from "./loading";


function Contact(props , ref){
   
   const [isModalOpen,setIsModalOpen] = useState(false)
   const [modalContent,setModalContent] = useState(null)
   const [modalTitle,setModalTitle] = useState(null)
   const [loadingSendMessage,setLoadingSendMessage] = useState(null)
   const [canClose,setCanClose] = useState(false)

   const [lastName,setLastName] = useState('')
   const [lastNameError,setLastNameError] = useState('')

   const [name,setName] = useState('')
   const [nameError,setNameError] = useState('')

   const [company,setCompany] = useState('')
   const [companyError,SetCompanyError] = useState('')

   const [email,setEmail] = useState('')
   const [emailError,setEmailError] = useState('')

   const reasons = [
      "Proposition d'alternance",
      "Question (Profil / Alternance)",
      "Autre"
   ]

   const [reasonId,setReasonId] = useState('')
   const [reasonError,setReasonError] = useState('')

   const [message,setMessage] = useState('')
   const [messageError,setMessageError] = useState('')


   const messagesError = {
      lastnameError : "Un nom ne peut contenir que des lettres, des tirets ou des apostrophes.",
      nameError : "Un prénom ne peut contenir que des lettres, des tirets ou des apostrophes.",
      companyError: "Le nom de la société peut contenir lettres, chiffres, espaces et ponctuation classique (ex: @, &, -, ‘).",
      emailError:"L’adresse email saisie n’est pas valide. Merci de vérifier et de réessayer.",
      messageError:"Le message contient des caractères interdits (les balises HTML ne sont pas autorisées).",
      noEmptyField:"Ce champ ne peut pas être vide"
   }

   
   function verifyField(pRegex,pSizeMin , pSizeMax,pValue, setError ,pMessageError){

      if(pValue.trim()===''){
         setError(messagesError.noEmptyField)
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

      if(!verifyField(/^[A-Za-zÀ-ÖØ-öø-ÿ'’-]+(?:[-' ][A-Za-zÀ-ÖØ-öø-ÿ'’-]+)*$/,2,40,lastName,setLastNameError,messagesError.lastnameError)){
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
      if(!verifyField(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,5,50,email,setEmailError,messagesError.emailError)){
         allFieldIsGood = false
      }
      if(reasonId === ''){
         setReasonError('Veuillez sélectionner une raison de votre message.')
         allFieldIsGood = false
      }

      if(!verifyField(/^[^<>]+$/,10,1000,message,setMessageError,messagesError.messageError)){
         allFieldIsGood = false 
      }

      return allFieldIsGood
   }

   useEffect(()=>{

      if(isModalOpen){

         setTimeout(()=>{

            closeModal()
               },3000)
      }
         
      return () => {
         clearTimeout()
      }
   },[isModalOpen])


   function closeModal(){
      if(canClose){
         setIsModalOpen(false)
      }
   }

   function sendMail(e){

      e.preventDefault()

      if(verifyAllField()){

         setLoadingSendMessage(true)
         setModalTitle(null)
         setModalContent(<Loading textLoading={'Envoie du message en cours'}/>)
         setIsModalOpen(true)

         const delaiLoading = () => {
            setTimeout(()=>{
            },4000)
         }

         delaiLoading

         clearTimeout(delaiLoading)         
      
         const templateParams = {
            from_name : `${lastName} ${name}`,
            from_email : `${email}`,
            company_name : `${company}`,
            subject_reason : `${reasons[reasonId-1]}`,
            message_content : `${message}`
         }
         
         const public_key = import.meta.env.VITE_EMAILJS_TOKEN;
   
         emailjs.send('Service_Portfolio_SL','Template_Portfolio_SL',templateParams,public_key).then((response) => {

            setLoadingSendMessage(false)
            setModalTitle(<h2 className="modal-contact-title"><CircleCheckBig className="success" />Message envoyé avec succès !</h2>)
            setModalContent(<p>Merci pour votre message, je vous répondrai dans les plus brefs délais.</p>)
            setCanClose(true)
            setIsModalOpen(true)

            })
            .catch((error) => {

               setLoadingSendMessage(false)
               setModalTitle(<h2 className="modal-contact-title"><CircleX className="error" />Échec de l'envoi du message !</h2>)
               setModalContent(
                  <>
                  <p>Une erreur est survenue lors de l'envoi. Veuillez réessayer dans quelques instants.</p>
                  <p>Si le problème persiste, veuillez réessayer ultérieurement</p>
                  </>
               )
               setCanClose(true)
               setIsModalOpen(true)
         
            })

            setName('')
            setLastName('')
            setCompany('')
            setEmail('')
            setReasonId('')
            setMessage('')
      }

   }


   return (
      <>
         <section id="contact">
            <div className="contain-1440">
               <h2 ref={ref} className="title-section">Contact</h2>
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
                        <p>Je suis à la recherche d'une alternance. Utilisez ce formulaire pour toute proposition ou question à ce sujet.</p>
                     </div>
                     
                     <div className="lastname_form">
                        <label htmlFor="lastname">Nom <span className="asterix">*</span></label>
                        <input type="text" name="lastname" id="lastname" placeholder="ex : Dupont" value={lastName}
                        className={lastNameError ? 'border-red' : ''} 
                        onChange={(e) => {
                           setLastName(e.target.value)
                           if(lastNameError !== ''){
                              setLastNameError('')
                           }
                        }
                           }/>
                        {lastNameError != '' ? <p className="error">{lastNameError}</p> : ''}
                     </div>

                     <div className="name_form">
                        <label htmlFor="name">Prénom <span className="asterix">*</span></label>
                        <input type="text" name="name" id="name" placeholder="ex : Jean"  value={name}
                        className={nameError ? 'border-red':''}
                        onChange={(e)=> {
                           setName(e.target.value)
                           if(nameError !== ''){
                              setNameError('')
                           }
                        }
                           }/>
                        {nameError != '' ? <p className="error">{nameError}</p> : ''}
                     </div>

                     <div className="company_form">
                        <label htmlFor="company">Nom de l'entreprise (facultatif)</label>
                        <input type="text" name="company" id="company" placeholder="ex : Innovatech Solutions" value={company} 
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
                        <label htmlFor="email">Email <span className="asterix">*</span></label>
                        <input type="email" name="email" id="email" placeholder="ex : jean.dupont@exemple.fr" value={email} 
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
                        <label htmlFor="reason">Raison du contact <span className="asterix">*</span></label>
                        <select name="reason" id="reason" value={reasonId}
                        className={reasonError ? 'border-red':''}
                        onChange={(e)=> {
                           setReasonId(e.target.selectedIndex)
                           if(reasonError !== ''){
                              setReasonError('')
                           }
                        }
                           } >
                           <option value="" disabled selected>-- Séléctionnez un sujet --</option>
                           <option value="alternance_offer">Proposition d'alternance</option>
                           <option value="question_alternance">Question (Profil / Alternance)</option>
                           <option value="other">Autre</option>
                        </select>
                        {reasonError != '' ? <p className="error">{reasonError}</p> : ''}
                     </div>

                     <div className="message_form">
                        <label htmlFor="message">Message <span className="asterix">*</span></label>
                        <textarea name="message" id="message" placeholder="Bonjour, je vous contacte au sujet de..." value={message} 
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

         {loadingSendMessage ? 
            <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            children={modalContent}
            showButtonClose={false}
            canClose={canClose}
            />            
         :
            <Modal 
            isOpen={isModalOpen}
            onClose={closeModal}
            title={modalTitle}
            children={modalContent}
            showButtonClose={false}
            />
         }
      </>

   )

}

export default forwardRef(Contact)