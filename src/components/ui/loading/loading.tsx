import {useEffect, useState} from 'react';

interface LoadingProps {
  txt: string;
}

export const Loading = (props: LoadingProps) => {
  const {txt} = props;
  const [loadingDots, setLoadingDots] = useState('');

  useEffect(() => {
    setTimeout(() => {
      if (loadingDots.length < 3) {
        setLoadingDots(loadingDots + '.');
      } else {
        setLoadingDots('');
      }
    }, 500);
  }, [loadingDots]);

  return (
    <div className="flex flex-col justify-center gap-4 max-h-[90px]">
      <span className="loader"></span>
      {txt && (
        <p className="text-center relative">
          {txt}
          <span className="loading-dots absolute -top-[15px] font-numeric text-2xl text-blue-primary">
            {loadingDots}
          </span>
        </p>
      )}
    </div>
  );
};
