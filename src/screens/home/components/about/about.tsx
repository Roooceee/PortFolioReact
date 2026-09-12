import {motion} from 'framer-motion';
import {Image} from '@/components/ui/image';
import {ScrollDownArrow} from '@/components/ui/animated/scroll-down-arrow';
import {HomeSection} from '@/constants/home-section.constants';
import {
  containerParagrapheVariants,
  containerVariants,
  itemVariants,
  paragraphVariant,
} from '@/constants/animation.constants';

interface AProposProps {
  sectionId: string;
}

export const About = (props: AProposProps) => {
  const {sectionId} = props;

  return (
    <section
      id={sectionId}
      className="background-primary flex flex-col justify-between section min-h-[800px] items-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        className="flex flex-col p-5 justify-between max-w-[900px] margin-auto items-center flex-1">
        <div className="flex flex-col p-5 lg:flex-row justify-between gap-12 max-w-[900px] margin-auto items-center">
          <Image
            src="/img/image_profil_SL.webp"
            alt="image de profil"
            containerClassName="p-2.5 rounded-full bg-blue-primary"
            className="rounded-full max-w-[200px] sm:max-w-[300px]"
          />

          <div className="grid gap-8">
            <motion.h2 variants={itemVariants} className="title-section">
              A Propos
            </motion.h2>

            <motion.div variants={containerParagrapheVariants} className="grid gap-8">
              <motion.p variants={paragraphVariant}>
                Développeur web passionné, mon parcours a commencé par un BTS SIO qui m'a donné des bases techniques
                solides, consolidées ensuite dans le support applicatif chez ADSN où j'ai développé ma rigueur et ma
                compréhension des besoins utilisateurs.
              </motion.p>
              <motion.p variants={paragraphVariant}>
                Pour faire de ma passion mon métier, début <span className="numeric">2025</span>, j’ai suivi une
                formation professionnelle pour consolider mes bases en HTML, CSS, JavaScript et découvrir React.js ainsi
                que les fondamentaux côté serveur avec PHP. J’y ai renforcé ma logique de développement, appris à
                manipuler des APIs et à créer des interfaces réactives et modernes.
              </motion.p>
              <motion.p variants={paragraphVariant}>
                Aujourd'hui, je suis à la recherche d'une alternance pour valider un Titre RNCP de niveau{' '}
                <span className="numeric">6</span>, (Bac+<span className="numeric">3</span>/
                <span className="numeric">4</span>) et transformer mes compétences en une véritable expertise
                professionnelle. Mon objectif est simple : intégrer une équipe, contribuer concrètement à ses projets
                grâce à mes acquis, et m'investir pour maîtriser les technologies et les méthodes qui font votre succès.
              </motion.p>
              <motion.p variants={paragraphVariant}>
                Vous cherchez un profil curieux, déjà opérationnel sur la création d'interfaces et prêt à grandir avec
                vous ?
              </motion.p>
              <motion.p variants={paragraphVariant}>Je suis votre alternant !</motion.p>
            </motion.div>
          </div>
        </div>
        <ScrollDownArrow href={HomeSection.MY_SKILLS} />
      </motion.div>
    </section>
  );
};
