import {useEffect} from 'react';

import Carousel from '@/components/shared/carousel.jsx';
import {ExperienceService} from '@/store/experience/experience.service';
import {useExperienceStore} from '@/store/experience/experience.store.ts';
import Experience from '@/components/home/section/experiences/experience';

interface ExperiencesProps {
  sectionId: string;
}

export const Experiences = (props: ExperiencesProps) => {
  const {sectionId} = props;
  const {experiences} = useExperienceStore();

  useEffect(() => {
    ExperienceService.fetchAndStoreExperience();
  }, []);

  return (
    <section id={sectionId} className="background-secondary section">
      <div className="contain-1440 grid gap-8 margin-auto min-h-[740px]">
        <h2 className="title-section max-h-fit">Mes Expériences Professionnelles</h2>
        {experiences.length > 0 && <Carousel items={experiences} ItemComponent={Experience} />}
      </div>
    </section>
  );
};
