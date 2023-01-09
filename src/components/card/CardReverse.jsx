import Viewbtn from "../botton/Viewbtn";
import "./Card.css";

const CardReverse = ({ title, text, link, img }) => {
  return (
    <div className="project-reverse">
      <div className="project-img">
        <img src={`../../assets/projects-img/${img}.png`} alt={img} />
      </div>
      <div className="project-text">
        <h2>{title}</h2>
        <p className="project-text__desc">
          {text}
        </p>
        <div className="project-btn">
          <Viewbtn text={"Live Demo "} link={link} />
          <Viewbtn text={"GitHub "} link={link} />
        </div>
      </div>
    </div>
  );
};

export default CardReverse;
