import React from "react";
import "./styles/HomePage.css";
import { motion } from "framer-motion";
import { Slider } from "../components/sliders/Slider";
import HomeFn from "../components/banner/HomeFn";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const HomePage = () => {
  const [text] = useTypewriter({
    words: ['Yefry Sanchez', 'a Junior Front-End Developer'],
    loop: {},
  })

  return (
    <div>
      <HomeFn text={"HOME HOME"} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        transition={{ duration: 1 }}
        className="home"
      >
        <Slider
          icon={"fa-solid fa-house"}
          color={"rgb(215, 61, 61)"}
          linkText={"Home"}
        />

        <h1 className="title">
          Hello, I'm {text.includes('junior') && a } <span>{text}</span>
          <span style={{color: 'white'}}>
            <Cursor /><br />
          </span>
          based <br />
          in <span>New York</span>
        </h1>
      </motion.div>
    </div>
  );
};

export default HomePage;
