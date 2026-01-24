import React from "react";
import ProjectCard from "../common/ProjectCard";
import myntra from "../../assets/projectAssets/MyntraFullPage.webp";
import quizBattel from "../../assets/projectAssets/Quiz-battel.webp";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const ProjectOverview = () => {
  const projectData = [
    {
      projectName: "Myntra Clone",
      Image: myntra,
      projectStatus: "Completed",
      techStack: ["React", "Tailwind", "Responsive"],
      description:
        "A fully responsive e-commerce platform clone featuring modern UI design, product listings with advanced filtering, and smooth navigation. Built with React and Tailwind CSS, this project showcases clean component architecture, optimized performance, and pixel-perfect responsive layouts for seamless mobile-to-desktop experience.",
      keyFeatures: [
        "Dynamic product filtering and search functionality",
        "Fully responsive grid layouts for all screen sizes",
        "Reusable component-based architecture",
        "Optimized performance and clean code structure",
      ],
    },
    {
      projectName: "Quiz-Battel",
      Image: quizBattel,
      projectStatus: "Ongoing",
      techStack: ["React", "Tailwind", "Express", "MongoDB"],
      description:
        "Quiz Battle is a full-stack MERN (MongoDB, Express, React, Node.js) web application designed to provide an engaging and competitive quiz experience. The platform allows users to test their knowledge across multiple categories, track their performance, earn rewards, and create custom quizzes. Built with modern web technologies, it features a sleek dark-themed UI, real-time score tracking, and premium features for enhanced user experience.",
      keyFeatures: [
        "JWT-based authentication with protected routes.",
        "User profiles with performance tracking and leaderboard.",
        "Timed quiz system with instant feedback and scoring.",
        "Custom quiz creation with premium rewards.",
        "Responsive dark-themed UI built with Tailwind CSS.",
      ],
    },
  ];

  return (
    <section className="relative w-full pt-20 pb-10 bg-zinc-950/30 overflow-hidden border-b-2 border-amber-500/20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <h2 className=" heading text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">
            Projects Overview
          </h2>
          <div className="h-1 w-24 bg-linear-to-r from-orange-500 to-orange-600 mt-3 rounded-full"></div>
        </div>
        {/* Project ShowCase */}
        <div className="w-full mx-auto">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
          <div className="flex justify-center py-10">
            <Link to="/project">
              <Button name="View All Projects" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
