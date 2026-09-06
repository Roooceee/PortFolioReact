import React from 'react';
import {useInView} from 'react-intersection-observer';

interface SectionObserverWrapperProps {
  children: React.ReactNode;
  sectionId: string;
  onIntersect: (id: string) => void;
}

export const SectionObserverWrapper = (props: SectionObserverWrapperProps) => {
  const {children, sectionId, onIntersect} = props;

  const {ref} = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) {
        onIntersect(sectionId);
      }
    },
  });

  return <div ref={ref}>{children}</div>;
};
