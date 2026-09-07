import {ArrowDown} from 'lucide-react';
import {motion, useAnimation} from 'framer-motion';
import {useEffect} from 'react';

const arrowVariants = {
  appear: {
    y: 0,
    opacity: 1,
    transition: {duration: 1, delay: 4, ease: 'easeOut'},
  },
  bouncing: {
    y: [0, 10, 0],
    scale: [1, 1],
    transition: {duration: 2, repeat: Infinity, ease: 'easeInOut'},
  },
  hover: {
    y: 0,
    scale: 1.5,
    transition: {duration: 0.2, ease: 'easeOut'},
  },
};

export const ScrollDownArrow = () => {
  const arrowControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await arrowControls.start('appear');
      arrowControls.start('bouncing');
    };
    sequence();
  }, [arrowControls]);

  return (
    <motion.a
      href="#a-propos"
      variants={arrowVariants}
      initial={{opacity: 0, y: 20}}
      animate={arrowControls}
      onHoverStart={() => arrowControls.start('hover')}
      onHoverEnd={() => arrowControls.start('bouncing')}
      className="mx-auto max-w-fit"
      title="A Propos">
      <ArrowDown className="text-blue-primary hover:text-blue-secondary" />
    </motion.a>
  );
};
