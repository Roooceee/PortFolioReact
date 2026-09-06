import emailjs from '@emailjs/browser';
import { CircleCheckBig, CircleX, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { forwardRef, useState } from "react";
import Modal from "../../../shared/modal.jsx";
import Loading from "../../../shared/loading/loading.jsx";


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
   const [companyError,setCompanyError] = useState('')

   const [email,setEmail] = useState('')
   const [emailError,setEmailError] = useState('')

   const [reason,setReason] = useState('')
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

   function resetForm() {
      setName('')
      setLastName('')
      setCompany('')
      setEmail('')
      setReason('')
      setMessage('')
   }
      
   function verifyField(pRegex,pSizeMin , pSizeMax,pValue, setError ,pMessageError){

      if(pValue.trim()===''){
         setError(messagesError.noEmptyField)
      }
      else {
         if(pRegex.test(pValue)){
            if(pValue.length >= pSizeMin && pValue.length <= pSizeMax){
               setError('')
               return true
            }
            else {
               setError(`Doit contenir entre ${pSizeMin} et ${pSizeMax} caractère${pSizeMax>1?'s':''}`)
            }
         }
         else {
            setError(pMessageError)
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
      if(company.trim() !== ""){
         if(!verifyField(/^[A-Za-zÀ-ÖØ-öø-ÿ0-9@&'’\-.(),+ ]+$/,2,60,company,setCompanyError,messagesError.companyError)){
            allFieldIsGood = false
         }
      }
      if(!verifyField(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,5,50,email,setEmailError,messagesError.emailError)){
         allFieldIsGood = false
      }
      if(reason === ''){
         setReasonError('Veuillez sélectionner une raison de votre message.')
         allFieldIsGood = false
      }

      if(!verifyField(/^(?!.*<\/?[a-z][\s\S]*?>).*$/i,10,1000,message,setMessageError,messagesError.messageError)){
         allFieldIsGood = false 
      }

      return allFieldIsGood
   }

   function closeModal(){
      if(canClose){
         setIsModalOpen(false)
      }
   }

   function sendMail(e){

      e.preventDefault()

      setCanClose(false)
      
      if(verifyAllField()){

         setLoadingSendMessage(true)
         setModalTitle(null)
         setModalContent(<Loading textLoading={'Envoi du message en cours'}/>)
         setIsModalOpen(true)
      
         const templateParams = {
            from_name : `${lastName} ${name}`,
            from_email : `${email}`,
            company_name : `${company}`,
            subject_reason : `${reason}`,
            message_content : `${message}`
         }
         
         const public_key = import.meta.env.VITE_EMAILJS_TOKEN;
   
         emailjs.send('Service_Portfolio_SL','Template_Portfolio_SL',templateParams,public_key).then((response) => {

            setCanClose(true)
            setTimeout(()=>{
               closeModal()
            },3000)

            setLoadingSendMessage(false)
            setModalTitle(<h2 className="flex items-center gap-1 text-lg text-primary font-normal text-[var(--color-text)]"><CircleCheckBig className="text-success" />Message envoyé avec succès !</h2>)
            setModalContent(<p>Merci pour votre message, je vous répondrai dans les plus brefs délais.</p>)
            setCanClose(true)
            setIsModalOpen(true)

            resetForm()

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
      }

   }


   return (
      <>
         <section id="contact" className='background-secondary section'>
            <div className="contain-1440 margin-auto grid gap-8">
               <h2 ref={ref} className="title-section">Contact</h2>
               <div className='flex flex-col lg:flex-row gap-12 justify-center'>
                  <div className="card-principal h-fit w-fit margin-auto lg:m-0">
                     <ul className='grid gap-2.5'>
                        <li><a href="mailto:sebastien.jose.lucas@gmail.com" className='flex gap-1 text-[var(--color-text)] hover:text-blue-primary' ><Mail className='text-blue-primary'/>sebastien.jose.lucas@gmail.com</a></li>
                        <li className='flex gap-1 text-[var(--color-text)]'><MapPin className='text-blue-primary'/>Région Aix / Marseille, France </li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/sebastien-jose-lucas/" className='flex gap-1 text-[var(--color-text)] hover:text-blue-primary'><Linkedin className='text-blue-primary'/>LinkedIn</a></li>
                        <li><a target="_blank" href="https://github.com/Roooceee" className='flex gap-1 text-[var(--color-text)] hover:text-blue-primary'><Github className='text-blue-primary'/>Github</a></li>
                     </ul>
                  </div>

                  <form action="" className="card-principal grid grid-cols-2 items-start gap-6 max-w-[80%] md:max-w-[750px] margin-auto lg:mx-0">
                     
                     <div className="col-start-1 col-end-3">
                        <h3 className='text-blue-primary text-primary font-bold col-start-1 col-end-2'>Envoyez moi un message</h3>
                        <p className='text-primary col-span-2'>Je suis à la recherche d'une alternance. Utilisez ce formulaire pour toute proposition ou question à ce sujet.</p>
                     </div>
                     
                     <div className='col-start-1 col-end-3 md:col-span-1 grid'>
                        <label htmlFor="lastname" className='label-form'>Nom <span className="asterix">*</span></label>
                        <input  type="text" name="lastname" id="lastname" placeholder="ex : Dupont" value={lastName}
                        className={`input-form ${lastNameError && 'border-error'} `}
                        onChange={(e) => {
                           setLastName(e.target.value)
                           if(lastNameError !== ''){
                              setLastNameError('')
                           }
                        }}
                        onBlur={(e)=> {
                           verifyField(/^[A-Za-zÀ-ÖØ-öø-ÿ'’-]+(?:[-' ][A-Za-zÀ-ÖØ-öø-ÿ'’-]+)*$/,2,40,lastName,setLastNameError,messagesError.lastnameError)
                        }}
                        />
                        {lastNameError && <p className="error">{lastNameError}</p>}
                     </div>

                     <div className='col-start-1 col-end-3 md:col-span-1 grid'>
                        <label className='label-form' htmlFor="name">Prénom <span className="asterix">*</span></label>
                        <input  type="text" name="name" id="name" placeholder="ex : Jean"  value={name}
                        className={`input-form ${nameError && 'border-error'} `}
                        onChange={(e)=> {
                           setName(e.target.value)
                           if(nameError !== ''){
                              setNameError('')
                           }
                        }}
                        onBlur={(e)=> {
                           verifyField(/^[A-Za-zÀ-ÖØ-öø-ÿ'’-]+(?:[-' ][A-Za-zÀ-ÖØ-öø-ÿ'’-]+)*$/,2,40,name,setNameError,messagesError.nameError)
                        }}
                        />
                        {nameError && <p className="error">{nameError}</p>}
                     </div>

                     <div className="col-start-1 col-end-3 grid">
                        <label className='label-form' htmlFor="company">Nom de l'entreprise (facultatif)</label>
                        <input  type="text" name="company" id="company" placeholder="ex : Innovatech Solutions" value={company} 
                        className={`input-form ${companyError && 'border-error'} `}
                        onChange={(e)=> {
                           setCompany(e.target.value)
                           if(companyError !== ''){
                              setCompanyError('')
                           }
                        }}
                        onBlur={(e)=> {
                           if(company.trim()!==''){
                              verifyField(/^[A-Za-zÀ-ÖØ-öø-ÿ0-9@&'’\-.(),+ ]+$/,2,60,company,setCompanyError,messagesError.companyError)
                           }
                        }}
                        />
                        {companyError && <p className="error">{companyError}</p>}
                     </div>
                     
                     <div className="col-start-1 col-end-3 grid">
                        <label className='label-form' htmlFor="email">Email <span className="asterix">*</span></label>
                        <input type="email" name="email" id="email" placeholder="ex : jean.dupont@exemple.fr" value={email} 
                        className={`input-form ${emailError && 'border-error'} `}
                        onChange={(e)=> {
                           setEmail(e.target.value)
                           if(emailError !== ''){
                              setEmailError('')
                           }
                        }}
                        onBlur={(e)=>{
                           verifyField(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,5,50,email,setEmailError,messagesError.emailError)
                        }}
                        />
                        {emailError && <p className="error">{emailError}</p>}
                     </div>

                     <div className="col-start-1 col-end-3 grid">
                        <label className='label-form' htmlFor="reason">
                           Raison du contact <span className="asterix">*</span>
                        </label>

                        <select
                           name="reason"
                           id="reason"
                           value={reason}
                           className={`col-start-1 col-end-3 input-form ${reasonError && 'border-error'}`}
                           onChange={(e) => {
                              setReason(e.target.value)
                              if (reasonError !== '') {
                              setReasonError('')
                              }
                           }}

                           onBlur={(e)=>{
                              if(reason === ''){
                                 setReasonError('Veuillez sélectionner une raison de votre message.')
                              }
                        }}
                        >
                           <option value="" disabled>-- Séléctionnez un sujet --</option>
                           <option value="alternance_offer">Proposition d'alternance</option>
                           <option value="question_alternance">Question (Profil / Alternance)</option>
                           <option value="other">Autre</option>
                        </select>

                        {reasonError && <p className="error">{reasonError}</p>}
                     </div>

                     <div className="col-start-1 col-end-3 grid">
                        <label className='label-form' htmlFor="message">Message <span className="asterix">*</span></label>
                        <textarea name="message" id="message" placeholder="Bonjour, je vous contacte au sujet de..." value={message} 
                        className={`input-form resize-none min-h-[200px] ${messageError && 'border-error'} `}
                        onChange={(e)=> {
                           setMessage(e.target.value)
                           if(messageError !== ''){
                              setMessageError('')
                           }
                        }}
                        onBlur={(e)=>{
                           verifyField(/^(?!.*<\/?[a-z][\s\S]*?>).*$/i,10,1000,message,setMessageError,messagesError.messageError)
                        }}
                        
                        >
                        </textarea>
                        {messageError && <p className="error">{messageError}</p>}
                     </div>

                        <p className="col-start-1 col-end-3 ml-auto"><small>Les champs marqués d'un <span className="asterix">*</span> sont requis.</small></p>
                        <input type="submit" value="Envoyer le message" className='button-blue col-start-1 col-end-3 cursor-pointer' onClick={(e) => sendMail(e)}/>
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
            />            
         :
            <Modal 
            isOpen={isModalOpen}
            onClose={closeModal}
            title={modalTitle}
            children={modalContent}
            showButtonClose={true}
            />
         }
      </>

   )

}

export default forwardRef(Contact)