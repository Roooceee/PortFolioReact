// --- CONTENEURS ---
export const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const containerParagrapheVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const linkContainerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

// --- ÉLÉMENTS INDIVIDUELS & CARTES ---
export const itemVariants = {
  hidden: {y: 50, opacity: 0, scale: 0.5},
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

export const paragraphVariant = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
};

// Variante standard (fusionnée / nettoyée des doublons)
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
