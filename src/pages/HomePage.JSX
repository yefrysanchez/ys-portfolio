import React from "react";
import "./styles/HomePage.css";
import { motion } from "framer-motion";
import { Slider } from "../components/sliders/Slider";

const HomePage = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        transition={{ duration: 1 }}
        className="home"
      >
        <Slider
          icon={"fa-solid fa-house"}
          color={"rgb(138, 61, 215)"}
          linkText={"Home"}
        />
        <h1 className="title">
          I'm a <span>Front-End Developer</span> based <br />
          in <span>New York</span>
        </h1>
      </motion.div>
    </div>
  );
};

export default HomePage;
