import LogoSkill from "../components/logo-skill/LogoSkill";
import "./styles/SkillsPage.css";
import { motion } from "framer-motion";
import { info } from "../components/logo-skill/info";


const SkillsPage = () => {
  return (
    <div className="skills">
      <div className="title-skills">
        <h1>
          Some of my <span>skills</span> and <span>tools</span> are
        </h1>
      </div>
      <motion.div layout="position" className="skills-container">
        <LogoSkill info={info.html} skill="html" />
        <LogoSkill info={info.css} skill="css" />
        <LogoSkill info={info.js} skill="javascript" />
        <LogoSkill info={info.react} skill="react" />
        <LogoSkill info={info.tailwindcss} skill="tailwindcss" />
        <LogoSkill info={info.git} skill="git" />
        <LogoSkill info={info.vite} skill="vite" />
        <LogoSkill info={info.vscode} skill="vscode" />
        <LogoSkill info={info.framerMotion} skill="framer-motion" />
        <LogoSkill info={info.github} skill="github" />
      </motion.div>
    </div>
  );
};

export default SkillsPage;
