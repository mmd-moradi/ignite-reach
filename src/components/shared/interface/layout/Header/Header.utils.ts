

export const animationsVariants = {
  opacity: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.6,
        staggerChildren: 0.25,
      },
    },
  },
  position: {
    hidden: { translateY: -75 },
    show: {
      translateY: 0,
      transition: {
        type: "linear",
        duration: 0.6,
        staggerChildren: 0.25,
      },
    },
  },
};