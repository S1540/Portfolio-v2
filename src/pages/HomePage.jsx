import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import TechSkills from "../components/home/TechSkills";
import ProjectOverview from "../components/home/ProjectOverview";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <TechSkills />
      <ProjectOverview />
    </div>
  );
};

export default HomePage;
