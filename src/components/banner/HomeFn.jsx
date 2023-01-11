import "./banner.css";
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: {
    y: 420,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const HomeFn = ({text}) => {
  return (
    <motion.div
      variants={banner}
      initial="initial"
      animate="animate"
      className="banner"
    >
      <div className="h2-container">
        <motion.h2 className="banner-h2" variants={letterAnimation}>
          {text}
        </motion.h2>
      </div>
      <div className="h2-container">
        <motion.h2 className="banner-h2" variants={letterAnimation}>
          {text}
        </motion.h2>
      </div>
      <div className="h2-container">
        <motion.h2 className="banner-h2" variants={letterAnimation}>
          {text}
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default HomeFn;
