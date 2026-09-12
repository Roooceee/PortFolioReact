import {CircleCheckBig, CircleX, Github, Linkedin, Mail} from 'lucide-react';
import Modal from '@/components/shared/modal.jsx';
import Loading from '@/components/shared/loading/loading';
import {useContactForm} from '@/components/home/section/contact/useContactForm.js';
import {ButtonLink} from '@/components/ui/button-link';

interface ContactProps {
  sectionId: string;
}

export const Contact = (props: ContactProps) => {
  const {sectionId} = props;

  const {form, errors, isSubmitting, isSubmitted, isSendSuccess, isOpenModal, actions} = useContactForm();

  const {register} = form;

  return (
    <>
      <section id={sectionId} className="background-secondary section">
        <div className="contain-1440 margin-auto grid gap-8">
          <h2 className="title-section">Contact</h2>
          <div className="flex flex-col lg:flex-row gap-12 justify-center">
            <div className="card-principal h-fit w-fit margin-auto lg:m-0">
              <ul className="grid gap-2.5">
                <li className="flex gap-1.5 items-center">
                  <ButtonLink
                    href="mailto:sebastien.jose.lucas@gmail.com"
                    title="Mon Github"
                    isAnimated={true}
                    variant="transparent"
                    target="blank"
                    className="text-blue-primary hover:text-blue-secondary">
                    <Mail />
                  </ButtonLink>
                  <a
                    href="mailto:sebastien.jose.lucas@gmail.com"
                    className="text-[var(--color-text)] hover:text-blue-primary">
                    sebastien.jose.lucas@gmail.com
                  </a>
                </li>
                <li className="flex gap-1.5 items-center">
                  <ButtonLink
                    href="https://www.linkedin.com/in/sebastien-jose-lucas/"
                    title="Mon LinkedIn"
                    isAnimated={true}
                    variant="transparent"
                    target="blank"
                    className="text-blue-primary hover:text-blue-secondary">
                    <Linkedin />
                  </ButtonLink>
                  <a
                    href="https://www.linkedin.com/in/sebastien-jose-lucas/"
                    className="text-[var(--color-text)] hover:text-blue-primary">
                    LinkedIn
                  </a>
                </li>
                <li className="flex gap-1.5 items-center">
                  <ButtonLink
                    href="https://github.com/Roooceee"
                    title="Mon Github"
                    isAnimated={true}
                    variant="transparent"
                    target="blank"
                    className="text-blue-primary hover:text-blue-secondary">
                    <Github />
                  </ButtonLink>
                  <a href="https://github.com/Roooceee" className="text-[var(--color-text)] hover:text-blue-primary">
                    Github
                  </a>
                </li>
              </ul>
            </div>

            <form
              className="card-principal grid grid-cols-2 items-start gap-6 max-w-[80%] md:w-[800px] margin-auto lg:mx-0"
              onSubmit={(e) => {
                e.preventDefault();
                actions.handleOnSubmit();
              }}>
              <div className="col-start-1 col-end-3">
                <h3 className="text-blue-primary text-primary font-bold col-start-1 col-end-2">
                  Envoyez moi un message
                </h3>
                <p className="text-primary col-span-2">
                  Je suis à la recherche d'une alternance. Utilisez ce formulaire pour toute proposition ou question à
                  ce sujet.
                </p>
              </div>

              <div className="col-start-1 col-end-3 md:col-span-1 grid">
                <label htmlFor="lastname" className="label-form">
                  Nom <span className="asterix">*</span>
                </label>
                <input
                  type="text"
                  placeholder="ex : Dupont"
                  className={`input-form ${errors.lastname && 'border-error'} `}
                  {...register('lastname')}
                />
                {errors.lastname && <p className="error">{errors.lastname.message}</p>}
              </div>

              <div className="col-start-1 col-end-3 md:col-span-1 grid">
                <label className="label-form" htmlFor="name">
                  Prénom <span className="asterix">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="ex : Jean"
                  className={`input-form ${errors.firstname && 'border-error'} `}
                  {...register('firstname')}
                />
                {errors.firstname && <p className="error">{errors.firstname.message}</p>}
              </div>

              <div className="col-start-1 col-end-3 grid">
                <label className="label-form" htmlFor="company">
                  Nom de l'entreprise (facultatif)
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="ex : Innovatech Solutions"
                  className={`input-form ${errors.company && 'border-error'} `}
                  {...register('company')}
                />
                {errors.company && <p className="error">{errors.company.message}</p>}
              </div>

              <div className="col-start-1 col-end-3 grid">
                <label className="label-form" htmlFor="email">
                  Email <span className="asterix">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="ex : jean.dupont@exemple.fr"
                  className={`input-form ${errors.email && 'border-error'} `}
                  {...register('email')}
                />
                {errors.email && <p className="error">{errors.email.message}</p>}
              </div>

              <div className="col-start-1 col-end-3 grid">
                <label className="label-form" htmlFor="reason">
                  Raison du contact <span className="asterix">*</span>
                </label>

                <select
                  id="reason"
                  className={`col-start-1 col-end-3 input-form ${errors.reason && 'border-error'}`}
                  {...register('reason')}>
                  <option value="none">-- Séléctionnez un sujet --</option>
                  <option value="alternance_offer">Proposition d'alternance</option>
                  <option value="question_alternance">Question (Profil / Alternance)</option>
                  <option value="other">Autre</option>
                </select>
                {errors.reason && <p className="error">{errors.reason.message}</p>}
              </div>

              <div className="col-start-1 col-end-3 grid">
                <label className="label-form" htmlFor="message">
                  Message <span className="asterix">*</span>
                </label>
                <textarea
                  id="message"
                  placeholder="Bonjour, je vous contacte au sujet de..."
                  className={`input-form resize-none min-h-[200px] ${errors.message && 'border-error'} `}
                  {...register('message')}
                />
                {errors.message && <p className="error">{errors.message.message}</p>}
              </div>

              <p className="col-start-1 col-end-3 ml-auto">
                <small>
                  Les champs marqués d'un <span className="asterix">*</span> sont requis.
                </small>
              </p>
              <input
                type="submit"
                value="Envoyer le message"
                disabled={isSubmitting}
                className="button-blue col-start-1 col-end-3 cursor-pointer disabled:opacity-60"
              />
            </form>
          </div>
        </div>
      </section>

      {isSubmitting && isOpenModal && (
        <Modal
          isOpen={isSubmitting && isOpenModal}
          onClose={actions.closeModal}
          title={null}
          children={<Loading textLoading={'Envoi du message en cours'} />}
          showButtonClose={false}></Modal>
      )}

      {!isSubmitting && isSubmitted && !isSendSuccess && isOpenModal && (
        <Modal
          isOpen={isSubmitted && !isSendSuccess && isOpenModal}
          onClose={actions.closeModal}
          title={
            <h2 className="flex items-center gap-1 text-lg text-primary font-normal text-[var(--color-text)]">
              <CircleX className="error" />
              Échec de l'envoi du message !
            </h2>
          }
          children={
            <>
              <p>Une erreur est survenue lors de l'envoi. Veuillez réessayer dans quelques instants.</p>
              <p>Si le problème persiste, veuillez réessayer ultérieurement</p>
            </>
          }
          showButtonClose={true}></Modal>
      )}

      {!isSubmitting && isSubmitted && isSendSuccess && (
        <Modal
          isOpen={isSubmitted && isSendSuccess && isOpenModal}
          onClose={actions.closeModal}
          title={
            <h2 className="flex items-center gap-1 text-lg text-primary font-normal text-[var(--color-text)]">
              <CircleCheckBig className="text-success" />
              Message envoyé avec succès !
            </h2>
          }
          children={<p>Merci pour votre message, je vous répondrai dans les plus brefs délais.</p>}
          showButtonClose={true}></Modal>
      )}
    </>
  );
};
