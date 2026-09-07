import {cn} from '@/utils/cn';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  containerClassName?: string;
  className?: string;
}

export const Image = (props: ImageProps) => {
  const {src, alt, containerClassName, className, ...otherProps} = props;
  if (containerClassName)
    return (
      <div className={cn('overflow-hidden flex min-w-max min-h-max', containerClassName && containerClassName)}>
        <img src={src} alt={alt} className={cn('', className && className)} {...otherProps} />;
      </div>
    );

  return <img src={src} alt={alt} className={cn('', className && className)} {...otherProps} />;
};
