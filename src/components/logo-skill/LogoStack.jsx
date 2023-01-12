import "./LogoSkill.css";

const LogoStack = ({ skill1, skill2, skill3, skill4 }) => {
  return (
    <div className="logo-stack-container">
      <div className="logo-stack">
        <img
          src={`../../assets/skills/${skill1}-logo.png`}
          alt={`${skill1} logo`}
        />
      </div>
      <div className="logo-stack">
        <img
          src={`../../assets/skills/${skill2}-logo.png`}
          alt={`${skill2} logo`}
        />
      </div>
      <div className="logo-stack">
        <img
          src={`../../assets/skills/${skill3}-logo.png`}
          alt={`${skill3} logo`}
        />
      </div>
      <div className="logo-stack">
        <img
          src={`../../assets/skills/${skill4}-logo.png`}
          alt={`${skill4} logo`}
        />
      </div>
    </div>
  );
};

export default LogoStack;
