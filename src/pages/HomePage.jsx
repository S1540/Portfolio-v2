import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import TechSkills from "../components/home/TechSkills";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <TechSkills />
    </div>
  );
};

export default HomePage;
