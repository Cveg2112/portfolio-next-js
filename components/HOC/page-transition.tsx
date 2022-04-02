import { motion } from "framer-motion";

export const PageTransition = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Set the initial state to variants.hidden
      animate={{ opacity: 1 }} // Animated state to variants.enter
      exit={{ opacity: 0 }} // Exit state (used later) to variants.exit
      transition={{ duration: 1, type: 'linear' }} // Set the transition to linear
      className=""
    >
      {props?.children}
    </motion.div>
  );
}