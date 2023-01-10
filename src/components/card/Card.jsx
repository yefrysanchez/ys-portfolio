import Viewbtn from "../botton/Viewbtn";
import "./Card.css";
import { motion } from "framer-motion";



const Card = ({ title, text, link, img }) => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1, transition:{duration: 1.5} }}
      className="project"
    >
      <div className="project-img">
        <img src={`../../assets/projects-img/${img}.png`} alt={img} />
      </div>
      <div className="project-text">
        <h2>{title}</h2>
        <p className="project-text__desc">{text}</p>

        <div className="btn-view">
          <Viewbtn text={"Live Demo "} link={link} />
          <Viewbtn text={"GitHub "} link={link} />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
