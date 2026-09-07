export const linkContainerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const linkItemsVariants = {
  hidden: {y: 20, opacity: 0},
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
