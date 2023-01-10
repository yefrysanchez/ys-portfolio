import "./LogoSkill.css";
import { useState } from "react";


const LogoSkill = ({ skill, info }) => {



  const [isOpen, setIsOpen] = useState(false)

  return (
    <div  layout="position" onClick={() => setIsOpen(!isOpen)} className="logo-skill-container">
      <div layout="position" className="logo-skill">
        <img layout="position"
          src={`../../assets/skills/${skill}-logo.png`}
          alt="logo-skill"
        />
      </div>
      {
        isOpen && (
      <div layout="position"  initial={{opacity: 0.1}} animate={{opacity: 1}}  className="skill-text">
        <h2>{skill.toUpperCase()}</h2>
        <p>
          {info}
        </p>
      </div>
      )}
    </div>
  );
};

export default LogoSkill;
