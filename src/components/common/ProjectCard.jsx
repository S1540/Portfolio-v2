import React, { useState } from "react";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import frame from "../../assets/Laptop-frame.png";
import { Link } from "react-router-dom";
import Button from "./Button";

const ProjectCard = ({ project, index }) => {
  const [animatedHeight, setAnimatedHeight] = useState(false);
  const isReversed = index % 2 !== 0;

  return (
    <div
      onMouseEnter={() => setAnimatedHeight(true)}
      onMouseLeave={() => setAnimatedHeight(false)}
      className="relative group mb-10 overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div
        className={` absolute inset-0 bg-linear-to-br from-amber-500/20 to-transparent w-full h-full ${animatedHeight ? "translate-y-0" : "translate-y-full"} transition-transform duration-500`}
      ></div>

      {/* Main Card */}
      <div
        className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12  items-center p-6 lg:p-8 bg-linear-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-orange-600/20 rounded-md hover:border-orange-500/50 transition-all duration-300 overflow-hidden group`}
      >
        {/* Decorative Corner Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-orange-500/10 to-transparent rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-amber-500/10 to-transparent rounded-tr-full"></div>

        {/* Left Column - Laptop Frame */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className={`relative max-w-xl w-full z-10 ${isReversed ? "lg:order-2" : "lg:order-1"}`}
        >
          {/* Status Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-medium text-gray-400">Status:</span>
            <span className="px-3 py-1 bg-green-500/20 border border-green-500/50 text-green-400 text-xs font-bold rounded-md">
              {project.projectStatus}
            </span>
          </div>

          {/* Laptop Frame Container */}
          <div className="relative group/laptop">
            {/* Laptop Frame */}
            <img
              src={frame}
              alt="Laptop frame"
              className="w-full relative z-10"
            />

            {/* Screen Area */}
            <div className="absolute top-[10%] left-[12%] w-[76%] h-[75%] overflow-hidden rounded-sm z-20 cursor-pointer">
              {/* Scroll Image */}
              <img
                src={
                  project.projectImage
                    ? `/uploads/${project.projectImage}`
                    : `${project.Image}`
                }
                alt="Project screenshot"
                className="w-full will-change-transform transition-transform duration-3000 ease-linear group-hover/laptop:-translate-y-[700px]"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Column - Description */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className={`flex flex-col gap-6 z-10 ${isReversed ? "lg:order-1" : "lg:order-2"}`}
        >
          {/* Project Title */}
          <div className="space-y-4">
            <h3 className="subheading text-3xl lg:text-4xl font-black bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {project.projectName}
            </h3>

            {/* Tech Stack */}
            <ul className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <li
                  key={index}
                  className="text-gray-400
                text-sm flex gap-3 "
                >
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0"></span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
            {project.projectDescription}
          </p>

          {/* Features */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <h4 className="subheading text-white font-bold text-sm uppercase tracking-wide">
                Key Features
              </h4>
            </div>
            <ul className="space-y-2.5 pl-1">
              {project.keyFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-400 text-sm group/item"
                >
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0 group-hover/item:scale-150 transition-transform"></span>
                  <span className="group-hover/item:text-gray-300 transition-colors">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link to={project.liveLink}>
              <Button name="View Live Demo" />
            </Link>
            <Link to={project.githubLink}>
              <button className="px-6 py-3 bg-zinc-800 border border-zinc-700 hover:border-orange-500/50 text-white rounded-md font-bold flex items-center justify-center sm:justify-start gap-2 transition-all hover:bg-zinc-700 group/btn w-full sm:w-auto cursor-pointer">
                <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                <span>Source Code</span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectCard;
