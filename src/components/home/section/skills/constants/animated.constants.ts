export const variantSkill = {
  hidden: {y: 50, opacity: 0, scale: 0.8},
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
  initiale: {
    scale: 1,
    transition: {
      duration: 0.1,
      ease: 'easeIn',
    },
  },
  hover: {
    y: [-5],
    scale: [1.05],
    transition: {
      duration: 0.1,
      ease: 'easeIn',
    },
  },
};

export const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const variants = {
  hidden: {y: 50, opacity: 0, scale: 0.5},
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};
