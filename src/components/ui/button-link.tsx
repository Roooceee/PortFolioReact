import {cn} from '@/utils/cn';
import {HTMLMotionProps, motion} from 'framer-motion';
import {Link} from 'react-router-dom';

interface ButtonLinkProps extends Omit<HTMLMotionProps<'a'>, 'href'> {
  children: React.ReactNode;
  href?: string;
  to?: string;
  isAnimated?: boolean;
  variant?: 'primary' | 'secondary' | 'transparent';
  className?: string;
}

const MotionLink = motion.create(Link);

export const ButtonLink = (props: ButtonLinkProps) => {
  const {
    children,
    href,
    to,
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

  const finalClassName = `${variants[variant]} font-title text-center border-none rounded-[10px] cursor-pointer justify-center`;

  if (isAnimated) {
    if (to) {
      return (
        <MotionLink to={to} whileHover={whileHover} whileTap={whileTap} className={finalClassName} {...otherProps}>
          {children}
        </MotionLink>
      );
    }

    return (
      <motion.a
        whileHover={whileHover}
        whileTap={whileTap}
        href={href}
        className={cn(`${finalClassName}`, className && className)}
        {...otherProps}>
        {children}
      </motion.a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={finalClassName}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={cn(`${finalClassName}`, className && className)}>
      {children}
    </a>
  );
};
