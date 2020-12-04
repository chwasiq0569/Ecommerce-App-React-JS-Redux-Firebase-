import React, { useEffect } from "react";
import Hero from "./Hero";
import "./home.scss";
import Cards from "./Cards";
import { motion } from "framer-motion";
import InfoCards from "./InfoCards";

const Home = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(props);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="homePage__wrapper"
    >
      <Hero />
      <InfoCards />
      <Cards />
    </motion.div>
  );
};

export default Home;
