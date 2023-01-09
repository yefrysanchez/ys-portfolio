import "./LogoSkill.css";
import { motion } from "framer-motion";
import { useState } from "react";


const LogoSkill = ({ skill, info }) => {



  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div  layout="position" onClick={() => setIsOpen(!isOpen)} className="logo-skill-container">
      <motion.div layout="position" className="logo-skill">
        <motion.img layout="position"
          src={`../../assets/skills/${skill}-logo.png`}
          alt="logo-skill"
        />
      </motion.div>
      {
        isOpen && (
      <motion.div layout="position"  initial={{opacity: 0.1}} animate={{opacity: 1}}  className="skill-text">
        <motion.h2>{skill.toUpperCase()}</motion.h2>
        <motion.p>
          {info}
        </motion.p>
      </motion.div>
      )}
    </motion.div>
  );
};

export default LogoSkill;
