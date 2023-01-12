import Viewbtn from "../botton/Viewbtn";
import "./Card.css";
import { motion } from "framer-motion";
import LogoStack from "../logo-skill/LogoStack";

const CardReverse = ({
  title,
  text,
  link,
  github,
  img,
  skill1,
  skill2,
  skill3,
  skill4,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      className="project-reverse"
    >
      <div className="project-img">
        <img src={`../../assets/projects-img/${img}.png`} alt={img} />
      </div>
      <div className="project-text">
        <h2>{title}</h2>
        <div>
          <LogoStack
            skill1={skill1}
            skill2={skill2}
            skill3={skill3}
            skill4={skill4}
          />
        </div>
        <p className="project-text__desc">{text}</p>
        <div className="btn-view">
          <Viewbtn text={"Live Demo "} link={link} />
          <Viewbtn text={"GitHub "} link={github} />
        </div>
      </div>
    </motion.div>
  );
};

export default CardReverse;
