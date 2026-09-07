import {cn} from '@/utils/cn';
import {HTMLMotionProps, motion} from 'framer-motion';
import React from 'react';

interface CardHoverWrapperProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  yOffset?: number;
}

export const CardHoverWrapper: React.FC<CardHoverWrapperProps> = (props: CardHoverWrapperProps) => {
  const {children, scale = 1.05, yOffset = -5, className, ...otherProps} = props;

  return (
    <motion.div
      whileHover={{y: yOffset, scale: scale}}
      transition={{duration: 0.15, ease: 'easeIn'}}
      className={cn(
        'cursor-pointer card-principal flex flex-col justify-start border-[1px] border-neutral-500 hover:border-blue-primary rounded-xl p-5 bg-[var(--color-bg-primary)]',
        className && className,
      )}
      {...otherProps}>
      {children}
    </motion.div>
  );
};
