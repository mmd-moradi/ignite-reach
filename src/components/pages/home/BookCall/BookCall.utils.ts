export const animationsVariants = {
  leftAnimation: {
    hidden: { opacity: 0, translateX: -200 },
    show: {
      opacity: 1,
      translateX: 0,
      transition: {
        type: "spring",
        duration: 2,
        staggerChildren: 0.25,
      },
    },
  },
  opacityAnimation: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.8
      }
    },
  },
  rightAnimation: {
    hidden: { opacity: 0, translateX: 200 },
    show: {
      opacity: 1,
      translateX: 0,
      transition: {
        type: "spring",
        duration: 2,
        staggerChildren: 0.25,
      },
    },
  },
};