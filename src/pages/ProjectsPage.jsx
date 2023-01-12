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
      <Slider
        icon={"fa-regular fa-folder-open"}
        color={"rgb(61, 82, 215)"}
        linkText={"Projects"}
      />
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
          github="https://www.github.com/yefrysanchez/ys-portfolio"
          skill1={"react"}
          skill2={"css"}
          skill3={"framer-motion"}
          skill4={"vite"}
        />
        <CardReverse
          img="shoesjs"
          title="shoesjs"
          text={projectInfo.shoesjs}
          link={"https://shoesjs.netlify.app"}
          github="https://www.github.com/yefrysanchez/Website"
          skill1={"html"}
          skill2={"css"}
          skill3={"javascript"}
          skill4={"gsap"}
        />
        <Card
          img="herospa"
          title="herospa"
          text={projectInfo.herospa}
          link={"https://herospa.netlify.app/"}
          github="https://www.github.com/yefrysanchez/heroes-spa"
          skill1={"react"}
          skill2={"tailwindcss"}
          skill3={"javascript"}
          skill4={"vite"}
        />
        <CardReverse
          img="cryptojs"
          title="cryptojs"
          text={projectInfo.cryptojs}
          link={"https://cryptojs-ys.netlify.app"}
          github="https://www.github.com/yefrysanchez/Crypto-Js"
          skill1={"html"}
          skill2={"css"}
          skill3={"javascript"}
          skill4={"netlify"}
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
              link={"https://photosome.netlify.app"}
              github="https://www.github.com/yefrysanchez/Photosone"
              skill1={"html"}
              skill2={"css"}
              skill3={"javascript"}
              skill4={"netlify"}
            />
            <CardReverse
              img="mentor"
              title="Frontend Mentor"
              text={projectInfo.mentor}
              link={"https://www.frontendmentor.io/profile/y25sanchez"}
              github="https://www.github.com/y25sanchez"
              skill1={"html"}
              skill2={"css"}
              skill3={"javascript"}
              skill4={"netlify"}
            />
            <Card
              img="bsg"
              title="BSG"
              text={projectInfo.bsg}
              link={"https://bsg-ys.netlify.app"}
              github="https://www.github.com/yefrysanchez/BSG"
              skill1={"html"}
              skill2={"css"}
              skill3={"javascript"}
              skill4={"netlify"}
            />
            <CardReverse
              img="beatbit"
              title="Beatbit"
              text={projectInfo.beatbit}
              link={"https://beatbit.netlify.app"}
              github="https://www.github.com/yefrysanchez/"
              skill1={"html"}
              skill2={"css"}
              skill3={"javascript"}
              skill4={"netlify"}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
