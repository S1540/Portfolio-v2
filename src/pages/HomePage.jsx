import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import TechSkills from "../components/home/TechSkills";
import ProjectOverview from "../components/home/ProjectOverview";
import Service from "../components/home/Service";

const HomePage = () => {
  return (
    <div className="scroll-smooth">
      <Hero />
      <About />
      <TechSkills />
      <ProjectOverview />
      <Service />
    </div>
  );
};

export default HomePage;
