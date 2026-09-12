import z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

import {useForm, type SubmitHandler} from 'react-hook-form';
import {useState} from 'react';
import emailjs from '@emailjs/browser';

const messagesError = {
  sizeMin2andMax50: `Doit contenir entre 2 et 50 caractère`,
  sizeMin10andMax1000: `Doit contenir entre 10 et 1000 caractère`,
  lastnameError: 'Un nom ne peut contenir que des lettres, des tirets ou des apostrophes.',
  nameError: 'Un prénom ne peut contenir que des lettres, des tirets ou des apostrophes.',
  companyError:
    'Le nom de la société peut contenir lettres, chiffres, espaces et ponctuation classique (ex: @, &, -, ‘).',
  emailError: 'L’adresse email saisie n’est pas valide. Merci de vérifier et de réessayer.',
  reasonError: 'Veuillez choisir une raison pour me contacter',
  messageError: 'Le message contient des caractères interdits (les balises HTML ne sont pas autorisées).',
  noEmptyField: 'Ce champ ne peut pas être vide',
};

interface ContactForm {
  firstname: string;
  lastname: string;
  company?: string;
  email: string;
  reason: string;
  message: string;
}

const public_key = import.meta.env.VITE_EMAILJS_TOKEN;

const companyRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9@&'’\-.(),+ ]+$/;
const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ'’-]+(?:[-' ][A-Za-zÀ-ÖØ-öø-ÿ'’-]+)*$/;

export const useContactForm = () => {
  const contactSchema = z.object({
    firstname: z
      .string()
      .trim()
      .min(2, messagesError.sizeMin2andMax50)
      .max(50, messagesError.sizeMin2andMax50)
      .regex(nameRegex, messagesError.nameError),
    lastname: z
      .string()
      .trim()
      .min(2, messagesError.sizeMin2andMax50)
      .max(40, messagesError.sizeMin2andMax50)
      .regex(nameRegex, messagesError.lastnameError),
    company: z
      .string()
      .trim()
      .min(2, messagesError.sizeMin2andMax50)
      .max(40, messagesError.sizeMin2andMax50)
      .regex(companyRegex, messagesError.companyError)
      .optional()
      .or(z.literal('')),
    email: z
      .string()
      .min(2, messagesError.sizeMin2andMax50)
      .max(50, messagesError.sizeMin2andMax50)
      .email(messagesError.emailError),
    reason: z.string().refine((e) => e !== 'none', messagesError.reasonError),
    message: z.string().min(10, messagesError.sizeMin10andMax1000).max(1000, messagesError.sizeMin10andMax1000),
  });

  const form = useForm<ContactForm>({
    mode: 'onBlur',
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      company: '',
      email: '',
      reason: 'none',
      message: '',
    },
  });

  const {
    formState: {errors, isValid, isSubmitting, isSubmitted},
  } = form;

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isSendSuccess, setIsSendSuccess] = useState<boolean>(false);

  const closeModal = () => {
    if (!isSubmitting && isSubmitted) {
      setIsOpenModal(false);
    }
  };

  const sendMail = async (dataToSend: ContactForm) => {
    const templateParams = {
      from_name: `${dataToSend.lastname} - ${dataToSend.firstname}`,
      from_email: `${dataToSend.email}`,
      company_name: `${dataToSend.company}`,
      subject_reason: `${dataToSend.reason}`,
      message_content: `${dataToSend.message}`,
    };
    return emailjs.send('Service_Portfolio_SL', 'Template_Portfolio_SL', templateParams, public_key);
  };

  const handleOnSubmit: SubmitHandler<ContactForm> = async (data) => {
    try {
      setIsOpenModal(true);
      const dataTrim = {
        firstname: data.firstname.trim(),
        lastname: data.lastname.trim(),
        email: data.email.trim(),
      };
      const dataToSend = {...data, ...dataTrim};
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await sendMail(dataToSend);
      setIsSendSuccess(true);
      form.reset();
    } catch (e) {
      console.log('Error to send email :', e);
      setIsSendSuccess(false);
    }
  };

  return {
    form: form,
    errors: errors,
    isValid: isValid,
    isSubmitting: isSubmitting,
    isSubmitted: isSubmitted,
    isSendSuccess: isSendSuccess,
    isOpenModal: isOpenModal,
    actions: {
      handleOnSubmit: form.handleSubmit(handleOnSubmit),
      closeModal: closeModal,
    },
  };
};
