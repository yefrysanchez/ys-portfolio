import "./styles/AboutPage.css";
import Cover from "../components/cover/Cover";
import { motion } from "framer-motion";
import { Slider } from "../components/sliders/Slider";
import HomeFn from "../components/banner/HomeFn";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 }}}
      transition={{ duration: 0.5 }}
      className="about-container"
    >
<Slider icon={"fa-solid fa-user"} color={" rgb(215, 61, 61)"} linkText={"About Me"} />
      <div className="about">
      <HomeFn text={"About About"} />
        <div className="about__text">
          <h1>A BIT ABOUT ME</h1>
          <p>
            I was born in Dominican Republic and moved to New York in 2011, went
            to school in The Bronx, NY. I love Baseball, Videogames, Produce
            music and all about Computers from hardware to software. I am really
            passionate about technology in general.
          </p>
        </div>
        <div className="about__img">
          <Cover
            src="../../assets/about/personal-photo.jpg"
            alt="personal-photo"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
