import Card from "../components/card/Card";
import CardReverse from "../components/card/CardReverse";
import MoreBtn from "../components/morebtn/MoreBtn";
import "./styles/ProjectsPage.css";
import { projectInfo } from "./projectInfo";
import { useState } from "react";

const ProjectsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project-container">
      <div className="projects-title">
        <h1>
          Some <span>Things</span> I’ve Built
        </h1>
      </div>
      <div className="projects">
        <Card
          img=""
          title="Personal Porfolio"
          text={projectInfo.portfolio}
          link="www.github.com"
        />
        <CardReverse
          img="shoesjs"
          title="shoesjs"
          text={projectInfo.shoesjs}
          link="www.github.com"
        />
        <Card
          img="herospa"
          title="herospa"
          text={projectInfo.herospa}
          link="www.github.com"
        />
        <CardReverse
          img="cryptojs"
          title="cryptojs"
          text={projectInfo.cryptojs}
          link="www.github.com"
        />
        <div onClick={() => setIsOpen(!isOpen)}>
          <MoreBtn open={isOpen} />
        </div>
        {isOpen && (
          <div>
            <Card
              img="photosome"
              title="Photosome"
              text={projectInfo.photosome}
              link="www.github.com"
            />
            <CardReverse
              img="bsg"
              title="BSG"
              text={projectInfo.bsg}
              link="www.github.com"
            />
            <Card
              img="beatbit"
              title="Beatbit"
              text={projectInfo.beatbit}
              link="www.github.com"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
