import React from "react";
import frame from "../../assets/Laptop-frame.png";
import myntra from "../../assets/projectAssets/MyntraFullPage.png";

const ProjectCard = () => {
  return (
    <div className="flex justify-center">
      <div className="relative max-w-xl w-full">
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
              duration-[3000ms]
              ease-in-out
              hover:-translate-y-[80%]
            "
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
