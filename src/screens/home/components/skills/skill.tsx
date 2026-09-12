import {ComponentType, useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {SkillDto} from '@/store/skill/skill.model';
import {CardHoverWrapper} from '@/components/ui/animated/card-hover-wrapper';
import {variantSkill} from '@/constants/animation.constants';

interface SkillProps {
  skill: SkillDto;
}

export const Skill = (props: SkillProps) => {
  const {skill} = props;
  const {logo, title, skills_details} = skill;
  const [Icon, setIcon] = useState<ComponentType<{size?: number}> | null>(null);

  useEffect(() => {
    async function loadIcon() {
      try {
        const icons = await import('lucide-react');
        const LoadedIcon = (icons as Record<string, any>)[logo];
        if (LoadedIcon) {
          setIcon(() => LoadedIcon);
        } else {
          setIcon(null);
        }
      } catch (e) {
        console.log('Erreur chargement logo ' + e);
        setIcon(null);
      }
    }
    if (logo) {
      loadIcon();
    }
  }, [logo]);

  return (
    <motion.article variants={variantSkill} initial="hidden" whileInView="visible" viewport={{once: true}}>
      <CardHoverWrapper className="skill max-w-[220px] sm:max-w-[280px] 2xl:max-w-[300px] min-h-[200px]">
        <div className="flex flex-col gap-2.5 justify-center">
          {Icon && (
            <span className="mx-auto text-blue-primary">
              <Icon size={44} />
            </span>
          )}
          <h3 className="text-[var(--color-text)] text-base font-semibold text-center md:text-lg gap-2.5">{title}</h3>
        </div>
        <ul className="flex flex-wrap justify-center gap-2 pt-10">
          {skills_details.map((element, index) => {
            return (
              <li className="badge text-xs" key={index}>
                {element}
              </li>
            );
          })}
        </ul>
      </CardHoverWrapper>
    </motion.article>
  );
};
