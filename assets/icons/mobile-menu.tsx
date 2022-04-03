import { motion } from "framer-motion";

interface MenuSVGProps {
  fillColor?: string;
  isClicked?: boolean;
}

export function MobileMenuIcon({fillColor, isClicked}: MenuSVGProps){
  const color = fillColor || '#f72119';
  const circleVariants = {
    inactive: { 
      opacity: 1, 
      transition: { 
        duration: .8, 
        type: 'spring', 
        delay: 0.2 
      } 
    },
    active: { 
      opacity: 0, 
      transition: { 
        duration: .8, 
        type: 'spring', 
        delay: 0 
      } 
    }
  }
  const lineGroup = {
    inactive: { 
      rotateZ: '-90deg', 
      scale: .8, 
      opacity: 0, 
      transition: { 
        duration: .8, 
        type: 'spring', 
        delay: 0 
      } 
    },
    active: { 
      rotateZ: '0deg', 
      scale: 1, 
      opacity: 1, 
      transition: { 
        duration: .8, 
        type: 'spring', 
        delay: 0.2 
      } 
    }
  }

  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.71 33.71">
      <motion.g>
        <motion.circle 
          fill={color} 
          cx="3.85" 
          cy="16.85" 
          r="3.5" 
          variants={circleVariants} 
          animate={isClicked ? 'active' : 'inactive'} 
          style={{scale: 0.85}}
        />
        <motion.circle 
          fill={color} 
          cx="16.85" 
          cy="16.85" 
          r="3.5"
          style={{scale: 0.85}}
        />
        <motion.circle 
          fill={color} 
          cx="29.85" 
          cy="16.85" 
          r="3.5" 
          variants={circleVariants} 
          animate={isClicked ? 'active' : 'inactive'} 
          style={{scale: 0.85}}
        />
      </motion.g>
      <motion.g variants={lineGroup} animate={isClicked ? 'active' : 'inactive'}>
        <motion.line stroke={color} strokeMiterlimit="10" x1="0.35" y1="33.35" x2="13.35" y2="20.35"/>
        <motion.line stroke={color} strokeMiterlimit="10" x1="20.35" y1="13.35" x2="33.35" y2="0.35"/>
        <motion.line stroke={color} strokeMiterlimit="10" x1="33.35" y1="33.35" x2="20.35" y2="20.35"/>
        <motion.line stroke={color} strokeMiterlimit="10" x1="13.35" y1="13.35" x2="0.35" y2="0.35"/>
      </motion.g>
    </motion.svg>
  )
}