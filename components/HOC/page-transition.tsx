import { motion } from "framer-motion";

export const PageTransition = (props) => {
  const variants = {
    initial: {opacity: 0},
    enter: {opacity: 1},
    end: {opacity: 0},
  }
  return (
    <motion.div
      variants={variants}
      initial="initial" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ duration: 1, ease: 'easeInOut' }} // Set the transition to linear
    >
      {props?.children}
    </motion.div>
  );
}