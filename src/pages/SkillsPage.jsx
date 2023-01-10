import LogoSkill from "../components/logo-skill/LogoSkill";
import "./styles/SkillsPage.css";
import { motion } from "framer-motion";
import { info } from "../components/logo-skill/info";
import { Slider } from "../components/sliders/Slider";


const SkillsPage = () => {
  return (
    <motion.div
    
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 1 }}
      className="skills"
    >
      <Slider
        icon={"fa-solid fa-laptop-code"}
        color={" rgb(215, 184, 61)"}
        linkText={"Skills/Tools"}
      />
      <div className="title-skills">
        <h1>
          Some of my <span>skills</span> and <span>tools</span> are
        </h1>
      </div>
      <div className="skills-container">
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
      </div>
    </motion.div>
  );
};

export default SkillsPage;
