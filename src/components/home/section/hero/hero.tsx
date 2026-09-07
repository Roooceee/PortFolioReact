import {Github, Linkedin, Mail} from 'lucide-react';
import {motion, useAnimation} from 'framer-motion';
import {ButtonLink} from '@/components/ui/button-link';
import {ScrollDownArrow} from '@/components/ui/animated/scroll-down-arrow';
import {TypedTextSequence} from '@/components/ui/animated/typed-text-sequence';
import {linkContainerVariants, linkItemsVariants} from '@/components/home/section/hero/constants/animated.constants';
import {UnAuthRoutes} from '@/constants/route.constants';
import {HomeSection} from '@/constants/home-section.constants';

export const Hero = () => {
  const linkControls = useAnimation();

  return (
    <section id="hero" className="section background-secondary min-h-[calc(99svh-168px)] flex flex-col mt-12">
      <div className="flex flex-col justify-center text-center margin-auto">
        <div className="h-[90px] lg:h-[120px]">
          <h2 className="font-title text-lg sm:text-xl md:text-xl lg:text-3xl font-semibold text-[var(--color-blue-secondary)]">
            Sébastien LUCAS
          </h2>
          <TypedTextSequence
            steps={[
              {
                text: "Développeur d'application React",
                wrapper: 'h1',
                className:
                  'font-title text-lg sm:text-2xl md:text-2xl lg:text-4xl font-semibold text-[var(--color-blue-primary)]',
              },
              {
                text: 'Actuellement à la recherche d’une alternance',
                wrapper: 'p',
                className: 'text-xs md:text-sm lg:text-base',
              },
            ]}
            onComplete={() => linkControls.start('visible')}
          />
        </div>

        <motion.div variants={linkContainerVariants} initial="hidden" animate={linkControls}>
          <motion.div variants={linkItemsVariants} className="flex justify-center gap-2.5 pt-2.5 lg:gap-3 lg:pt-12">
            <ButtonLink href="#mes-derniers-projets" isAnimated={true}>
              Mes Projets
            </ButtonLink>
            <ButtonLink href="#mes-derniers-projets" isAnimated={true}>
              Me Contacter
            </ButtonLink>
          </motion.div>

          <motion.div variants={linkItemsVariants} className="flex justify-center gap-5 pt-10 text-blue-primary">
            <ButtonLink
              href="https://github.com/Roooceee"
              title="Mon Github"
              isAnimated={true}
              variant="transparent"
              target="blank"
              className="hover:text-blue-secondary">
              <Github />
            </ButtonLink>
            <ButtonLink
              href="https://www.linkedin.com/in/sebastien-jose-lucas/"
              title="Mon Linkedin"
              isAnimated={true}
              variant="transparent"
              target="blank"
              className="hover:text-blue-secondary">
              <Linkedin />
            </ButtonLink>
            <ButtonLink
              href="mailto:sebastien.jose.lucas@gmail.com"
              title="M'envoyer un e-mail"
              isAnimated={true}
              variant="transparent"
              target="blank"
              className="hover:text-blue-secondary">
              <Mail />
            </ButtonLink>
          </motion.div>
        </motion.div>
      </div>

      <ScrollDownArrow href={HomeSection.ABOUT_US} />
    </section>
  );
};
