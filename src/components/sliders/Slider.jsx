import { motion } from "framer-motion";
import "./sliders.css";

const box = {
  initial: {
    height: "100%",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      staggerChildren: 0.1, delayChildren: 2.8,
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};




export const Slider = ({ color, linkText, icon }) => {
  return (
    <div className="transition">
      <motion.div
        style={{ backgroundColor: color }}
        className="transition-text"
        initial="initial"
        animate="animate"
        variants={box}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      >
        <div className="transition-icon">
          <i className={icon}></i>
          <h2>{linkText}</h2>
        </div>
      </motion.div>
    </div>
  );
};
