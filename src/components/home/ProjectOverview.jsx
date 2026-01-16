import React from "react";
import ProjectCard from "../common/ProjectCard";

const ProjectOverview = () => {
  return (
    <section className="relative w-full bg-zinc-900 pt-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wider text-white uppercase">
              Project Overview
            </h2>
            {/* Curved underline */}
            <svg
              className="absolute left-1/2 -bottom-3 sm:-bottom-4 -translate-x-1/2 w-32 sm:w-40 md:w-48"
              width="150"
              height="20"
              viewBox="0 0 150 20"
              fill="none"
            >
              <path
                d="M5 10 C40 18, 110 2, 145 10"
                stroke="url(#grad)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="200" y2="0">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#ea580c" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        {/* Project ShowCase */}
        <ProjectCard />
      </div>
    </section>
  );
};

export default ProjectOverview;
