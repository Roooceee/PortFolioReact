import React from 'react';
import {CalendarCheck, CalendarClock, CalendarDays, CircleCheckBig, GraduationCap, MapPin, School} from 'lucide-react';
import ParseTextWithBreaks from '@/components/shared/parseTextWithBreaks.jsx';
import {FormationDto} from '@/store/formation/formation.model';
import {changeDateFormat} from '@/utils/changeDateFormat';

interface FormationProps {
  formation?: FormationDto;
  [key: string]: any;
}

export const Formation = (props: FormationProps) => {
  const formation = props.formation || (props as FormationDto);
  const {type, name, itemLink, option, description, organization, location, startDate, endDate, obtention, skills} =
    formation;

  let obtentionText: string | null = null;
  let obtentionLogo: React.ReactNode = null;

  const now = new Date();
  const parsedStartDate = startDate ? new Date(startDate) : null;
  const parsedEndDate = endDate ? new Date(endDate) : null;

  if (!parsedStartDate || parsedStartDate > now) {
    obtentionText = 'A Venir';
    obtentionLogo = <CalendarClock />;
  } else {
    if (parsedStartDate < now && parsedEndDate && parsedEndDate < now) {
      if (obtention === true) {
        obtentionText = 'Obtenu';
        obtentionLogo = <GraduationCap />;
      } else {
        obtentionText = 'Terminé';
        obtentionLogo = <CalendarCheck />;
      }
    } else {
      obtentionText = 'En cours';
      obtentionLogo = <CalendarDays />;
    }
  }

  return (
    <article className="card-secondary margin-auto grid gap-6">
      <div className="grid gap-1">
        <div className="flex flex-col-reverse gap-2.5 items-start md:flex-row justify-between md:items-center">
          <p className="badge">{type}</p>
          {obtentionText ? (
            <span className="badge gap-2">
              {obtentionLogo}
              {obtentionText}
            </span>
          ) : (
            ''
          )}
        </div>
        <h3 className="text-blue-primary hover:text-blue-secondary font-bold text-lg sm:text-xl underline">
          <a href={itemLink} target="_blank" rel="noreferrer">
            {name}
          </a>
        </h3>
        {option != null ? <p className="text-primary text-md md:text-lg">Option {option}</p> : ''}
        {description && (
          <p className="pt-5 max-w-[90%] text-sm">
            <ParseTextWithBreaks text={description} />
          </p>
        )}
      </div>

      <div>
        <ul className="grid gap-1 text-[var(--color-text)]">
          <li className="flex items-center gap-1 text-sm">
            <School className="text-blue-primary" />
            {organization}
          </li>
          <li className="flex items-center gap-1 text-sm">
            <MapPin className="text-blue-primary" />
            {location}
          </li>
          {startDate && endDate && (
            <li className="flex items-center gap-1 text-sm">
              <CalendarDays className="text-blue-primary" />
              Du {changeDateFormat(startDate, true, true)} au {changeDateFormat(endDate, true, true)}
            </li>
          )}
        </ul>
      </div>

      {skills && skills.length > 0 ? (
        <div className="grid gap-5">
          <hr className="hr-grey" />
          <h4 className="text-blue-primary font-bold">Compétence{skills.length > 1 ? 's' : ''}</h4>
          <ul className="grid grid-cols-1 lg:grid-cols-[auto,auto] gap-2.5 text-[var(--color-text)]">
            {(skills as string[]).map((e, index) => (
              <li className="flex gap-1 text-xs sm:text-sm items-center" key={index}>
                <CircleCheckBig className="text-success min-w-[20px] max-w-[20px]" />
                {e}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ''
      )}
    </article>
  );
};
