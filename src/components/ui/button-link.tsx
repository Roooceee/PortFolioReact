import {cn} from '@/utils/cn';
import {HTMLMotionProps, motion} from 'framer-motion';

interface ButtonLinkProps extends HTMLMotionProps<'a'> {
  href: string;
  children: React.ReactNode;
  isAnimated?: boolean;
  variant?: 'primary' | 'secondary' | 'transparent';
  className?: string;
}

export const ButtonLink = (props: ButtonLinkProps) => {
  const {
    href,
    children,
    isAnimated = false,
    variant = 'primary',
    whileHover = {scale: 1.1},
    whileTap = {scale: 0.95},
    className,
    ...otherProps
  } = props;

  const variants = {
    primary: 'bg-blue-primary text-white min-w-[100px] px-4 py-2.5',
    secondary: 'bg-blue-secondary text-white min-w-[100px] px-4 py-2.5',
    transparent: 'bg-transparent min-w-fit p-0',
  };

  const sharedClassnames = `${variants[variant]} font-title text-center border-none rounded-[10px] cursor-pointer`;

  if (isAnimated) {
    return (
      <motion.a
        whileHover={whileHover}
        whileTap={whileTap}
        href={href}
        className={cn(`${sharedClassnames}`, className && className)}
        {...otherProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <a href={href} className={cn(`${sharedClassnames}`, className && className)}>
      {children}
    </a>
  );
};
