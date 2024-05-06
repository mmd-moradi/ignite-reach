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
  downAnimation: {
    hidden: { opacity: 0, translateY: 200 },
    show: {
      opacity: 1,
      translateY: 0,
      transition: {
        type: "spring",
        duration: 1.8,
        staggerChildren: 0.25,
      },
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