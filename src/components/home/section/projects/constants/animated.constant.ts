export const variants = {
  hidden: {y: 50, opacity: 0, scale: 0.5},
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
};

export const variantsLink = {
  hidden: {y: 50, opacity: 0},
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
  initial: {x: 0, scale: 1},
  left: {
    x: -10,
    scale: 1.2,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
  middle: {
    x: 0,
    scale: 1.2,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

export const projectCardVariant = {
  hidden: {y: 50, opacity: 0, scale: 0.8},
  initial: {
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
  hover: {
    y: [-10],
    scale: [1.05],
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};
