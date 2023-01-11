import Card from "../components/card/Card";
import CardReverse from "../components/card/CardReverse";
import MoreBtn from "../components/morebtn/MoreBtn";
import "./styles/ProjectsPage.css";
import { projectInfo } from "./projectInfo";
import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "../components/sliders/Slider";
import HomeFn from "../components/banner/HomeFn";

const ProjectsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 }, scaleY: 0 }}
      transition={{ duration: 1 }}
      className="project-container"
    >
       <HomeFn text={"Projects Projects"} />
      <Slider icon={"fa-regular fa-folder-open"} color={"rgb(61, 82, 215)"} linkText={"Projects"} />
      <div className="projects-title">
        <h1>
          Some <span>Things</span> I've Built
        </h1>
      </div>
      <div className="projects">
        <Card
          img="portfolio"
          title="Personal Porfolio"
          text={projectInfo.portfolio}
          github="www.github.com"
        />
        <CardReverse
          img="shoesjs"
          title="shoesjs"
          text={projectInfo.shoesjs}
          github="www.github.com"
        />
        <Card
          img="herospa"
          title="herospa"
          text={projectInfo.herospa}
          github="www.github.com"
        />
        <CardReverse
          img="cryptojs"
          title="cryptojs"
          text={projectInfo.cryptojs}
          github="www.github.com"
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
              github="www.github.com"
            />
            <CardReverse
              img="mentor"
              title="Frontend Mentor"
              text={projectInfo.mentor}
              github="www.github.com"
            />
            <Card
              img="bsg"
              title="BSG"
              text={projectInfo.bsg}
              github="www.github.com"
            />
            <CardReverse
              img="beatbit"
              title="Beatbit"
              text={projectInfo.beatbit}
              github="www.github.com"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
