import React from "react";
import { Github } from "lucide-react";
import { motion } from "motion/react";
import frame from "../../assets/Laptop-frame.png";

import Button from "./Button";

const ProjectCard = ({ project }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 lg:p-8 bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 backdrop-blur-sm border border-orange-600/20 rounded-md hover:border-orange-500/40 transition-all duration-300">
      {/* Left Column - Laptop Frame */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.0 }}
        className="relative max-w-xl w-full"
      >
        {/* Laptop Frame */}
        <img src={frame} alt="Laptop frame" className="w-full relative z-10" />

        {/* Screen Area */}
        <div
          className="
            absolute 
            top-[9%] left-[12%]
            w-[76%] h-[75%]
            overflow-hidden
            rounded-sm z-20 cursor-pointer
          "
        >
          {/* Scroll Image */}
          <img
            src={project.image}
            alt="Project screenshot"
            className="
              w-full
              transition-transform
              duration-[4000ms]
              ease-in-out
              hover:-translate-y-[80%]
            "
          />
        </div>
      </motion.div>

      {/* Right Column - Description */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.0 }}
        className="flex flex-col gap-5"
      >
        {/* Project Title */}
        <div className="space-y-3">
          <h3 className="text-3xl lg:text-4xl font-black text-white">
            {project.title}
          </h3>
          <ul className="flex flex-wrap gap-6 lg:gap-10 font-medium text-gray-400 ">
            {project.techStack.map((tech, index) => (
              <li key={index} className="flex items-start gap-2 ">
                <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 shrink-0 animate-pulse" />
                <span>{tech}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
          {project.description}
        </p>

        {/* Features */}
        <div className="space-y-2.5">
          <h4 className="text-white font-bold text-sm uppercase tracking-wide">
            Key Features:
          </h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {project.keyFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 shrink-0 animate-pulse" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          <Button name="View Project" />
          <button className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-600/40 text-white rounded-md font-bold flex items-center gap-2 transition-all hover:bg-white/10">
            <Github className="w-4 h-4" />
            <span>Source Code</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
