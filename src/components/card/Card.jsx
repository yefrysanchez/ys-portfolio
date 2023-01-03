import Viewbtn from "../botton/Viewbtn";
import "./Card.css";

const Card = () => {
  return (
    <div className="project">
      <div className="project-img">
        <img
          src="https://s3.amazonaws.com/wordpress-production/wp-content/uploads/sites/19/2016/03/10-Ways-Project-Managers-Stay-Organized.jpg"
          alt=""
        />
      </div>
      <div className="project-text">
        <h2>Project Title</h2>
        <p className="project-text__desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          officiis ipsa ut quia dolores?
        </p>
        <Viewbtn />
      </div>
    </div>
  );
};

export default Card;
