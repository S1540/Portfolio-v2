import React from "react";
import { ExternalLink, Github } from "lucide-react";
import frame from "../../assets/Laptop-frame.png";
import myntra from "../../assets/projectAssets/MyntraFullPage.png";
import Button from "./Button";

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 lg:p-8 bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 backdrop-blur-sm border border-orange-600/20 rounded-md hover:border-orange-500/40 transition-all duration-300">
      {/* Left Column - Laptop Frame */}
      <div className="relative max-w-xl w-full mx-auto">
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
            src={myntra}
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
      </div>

      {/* Right Column - Description */}
      <div className="flex flex-col gap-5">
        {/* Project Title */}
        <div className="space-y-3">
          <h3 className="text-3xl lg:text-4xl font-black text-white">
            Myntra Clone
          </h3>
          <ul className="flex flex-wrap gap-6 lg:gap-10 font-medium text-gray-400 ">
            <li className="flex items-start gap-2 ">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
              <span>React</span>
            </li>
            <li className="flex items-start gap-2 ">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
              <span>Tailwind</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
              <span>Responsive</span>
            </li>
          </ul>
        </div>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
          A fully responsive e-commerce platform clone featuring modern UI
          design, product listings with advanced filtering, and smooth
          navigation. Built with React and Tailwind CSS, this project showcases
          clean component architecture, optimized performance, and pixel-perfect
          responsive layouts for seamless mobile-to-desktop experience.
        </p>

        {/* Features */}
        <div className="space-y-2.5">
          <h4 className="text-white font-bold text-sm uppercase tracking-wide">
            Key Features:
          </h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
              <span>Dynamic product filtering and search functionality</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
              <span>Fully responsive grid layouts for all screen sizes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
              <span>Reusable component-based architecture</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
              <span>Optimized performance and clean code structure</span>
            </li>
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
      </div>
    </div>
  );
};

export default ProjectCard;
