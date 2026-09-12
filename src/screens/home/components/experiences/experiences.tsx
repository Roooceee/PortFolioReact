import {useEffect} from 'react';

import {ExperienceService} from '@/store/experience/experience.service';
import {useExperienceStore} from '@/store/experience/experience.store.ts';
import Experience from '@/screens/home/components/experiences/experience';
import Carousel from '@/components/ui/animated/carousel';
import {ExperienceDto} from '@/store/experience/experience.model';

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
        {experiences.length > 0 && (
          <Carousel<ExperienceDto>
            items={experiences}
            renderItem={(experience) => <Experience experience={experience} />}
          />
        )}
      </div>
    </section>
  );
};
