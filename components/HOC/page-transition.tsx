import { motion } from "framer-motion";

export const PageTransition = (props) => {
  const variants = {
    initial: { opacity: 0, y: '1%', scale: .99 },
    enter: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: '-1%', scale: .99 },
  }
  return (
    <motion.div
      variants={variants}
      initial="initial" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ duration: 0.55, ease: 'easeInOut' }} // Set the transition to linear
    >
      {props?.children}
    </motion.div>
  );
}