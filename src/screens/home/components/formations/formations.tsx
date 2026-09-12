import {useEffect} from 'react';
import {Formation} from '@/screens/home/components/formations/formation';
import {FormationService} from '@/store/formation/formation.service';
import {useFormationStore} from '@/store/formation/formation.store';
import Carousel from '@/components/ui/animated/carousel';
import {FormationDto} from '@/store/formation/formation.model';

interface FormationsProps {
  sectionId: string;
}

export const Formations = (props: FormationsProps) => {
  const {sectionId} = props;
  const {formations} = useFormationStore();

  useEffect(() => {
    FormationService.fetchAndStoreFormations();
  }, []);

  return (
    <section id={sectionId} className="background-primary section">
      <div className="contain-1440 margin-auto min-h-[570px]">
        <h2 className="title-section pb-8">Mes études et formations</h2>
        {formations.length > 0 && (
          <Carousel<FormationDto> items={formations} renderItem={(formation) => <Formation formation={formation} />} />
        )}
      </div>
    </section>
  );
};
