import {TypedText} from '@/components/ui/animated/typed-text';
import {useState} from 'react';

interface TextStep {
  text: string;
  wrapper: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
}

interface TypedTextSequenceProps {
  steps: TextStep[];
  onComplete?: () => void;
}

export const TypedTextSequence = ({steps, onComplete}: TypedTextSequenceProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {steps.slice(0, currentIndex + 1).map((step, index) => (
        <TypedText
          key={index}
          text={step.text}
          wrapper={step.wrapper}
          className={step.className}
          onComplete={() => {
            if (index === steps.length - 1) {
              if (onComplete) onComplete();
            } else if (index === currentIndex) {
              setCurrentIndex((prev) => prev + 1);
            }
          }}
        />
      ))}
    </>
  );
};
