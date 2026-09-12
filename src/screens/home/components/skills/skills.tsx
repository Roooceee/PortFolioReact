import {useEffect} from 'react';
import {motion} from 'framer-motion';
import {SkillService} from '@/store/skill/skill.service';
import {useSkillStore} from '@/store/skill/skill.store';
import {Skill} from '@/screens/home/components/skills/skill';
import {ScrollDownArrow} from '@/components/ui/animated/scroll-down-arrow';
import {HomeSection} from '@/constants/home-section.constants';
import {containerVariants, variants} from '@/constants/animation.constants';

interface SkillsProps {
  sectionId: string;
}

export const Skills = (props: SkillsProps) => {
  const {sectionId} = props;
  const {skills} = useSkillStore();

  useEffect(() => {
    SkillService.fetchAndStoreSkills();
  }, []);

  return (
    <section id={sectionId} className="section background-secondary min-h-[750px] flex justify-between">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        className="flex-1 flex flex-col items-center">
        <div className="contain-1440 m-auto grid gap-10 xl:min-h-[400px]">
          <motion.h2 variants={variants} className="title-section">
            Compétences
          </motion.h2>
          <div className="flex flex-col gap-5 md:grid md:grid-cols-2 xl:flex xl:flex-row mx-auto">
            {skills?.map((element, index) => {
              return <Skill key={index} skill={element} />;
            })}
          </div>
        </div>
        <ScrollDownArrow href={HomeSection.MY_LATEST_PROJECT} />
      </motion.div>
    </section>
  );
};
