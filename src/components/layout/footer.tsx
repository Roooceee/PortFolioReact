import {Link} from 'react-router-dom';
import {Github, Linkedin, Mail} from 'lucide-react';
import {ButtonLink} from '@/components/ui/button-link';

function Footer() {
  return (
    <footer className="background-primary">
      <div className="contain-1440 margin-auto grid gap-4 px-3 lg:px-6 pb-5">
        <div className="flex justify-between items-center text-[var(--color-text)]">
          <Link to="/" className="flex justify-center items-center  hover:text-blue-secondary">
            <img src="/img/logo.webp" className="logo max-w-[90px] pt-2" alt="logo du portfolio" />
            <span className="font-title hidden sm:block">Sébastien LUCAS</span>
          </Link>

          <ul className="flex gap-2.5 text-[var(--color-text)]">
            <li>
              <ButtonLink
                href="https://github.com/Roooceee"
                title="Mon Github"
                isAnimated={true}
                variant="transparent"
                target="blank"
                className="hover:text-blue-secondary">
                <Github />
              </ButtonLink>
            </li>
            <li>
              <ButtonLink
                href="https://www.linkedin.com/in/sebastien-jose-lucas/"
                title="Mon Linkedin"
                isAnimated={true}
                variant="transparent"
                target="blank"
                className="hover:text-blue-secondary">
                <Linkedin />
              </ButtonLink>
            </li>
            <li>
              <ButtonLink
                href="mailto:sebastien.jose.lucas@gmail.com"
                title="M'envoyer un e-mail"
                isAnimated={true}
                variant="transparent"
                target="blank"
                className="hover:text-blue-secondary">
                <Mail />
              </ButtonLink>
            </li>
          </ul>
        </div>
        <hr className="hr-grey" />
        <p className="text-center text-xs sm:text-sm">
          {' '}
          ©<span className="numeric">2025</span> - Sébastien LUCAS - Tous droits réservé -{' '}
          <Link to="/mentions-legales" className="hover:text-blue-secondary">
            Mentions légales
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
