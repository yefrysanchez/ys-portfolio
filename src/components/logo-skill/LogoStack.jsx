import "./LogoSkill.css";

const LogoStack = ({ skill }) => {
  return (
    <div className="logo-stack-container">
      <div className="logo-stack">
        <img
          layout="position"
          src={`../../assets/skills/${skill}-logo.png`}
          alt="logo-skill"
        />
      </div>
    </div>
  );
};

export default LogoStack;
