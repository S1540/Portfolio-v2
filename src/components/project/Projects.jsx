import React, { useEffect, useState } from "react";
import ProjectCard from "../common/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      const res = await fetch("http://localhost:3000/projects", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      setProjects(data.projects);
    };
    handleFetch();
  }, []);

  // const projects = [
  //   {
  //     title: "Myntra Clone",
  //     image: myntra,
  //     status: "Completed",
  //     techStack: ["React", "Tailwind", "Responsive"],
  //     description:
  //       "A fully responsive e-commerce platform clone featuring modern UI design, product listings with advanced filtering, and smooth navigation. Built with React and Tailwind CSS, this project showcases clean component architecture, optimized performance, and pixel-perfect responsive layouts for seamless mobile-to-desktop experience.",
  //     keyFeatures: [
  //       "Dynamic product filtering and search functionality",
  //       "Fully responsive grid layouts for all screen sizes",
  //       "Reusable component-based architecture",
  //       "Optimized performance and clean code structure",
  //     ],
  //   },
  //   {
  //     title: "Quiz-Battel",
  //     image: quizBattel,
  //     status: "Ongoing",
  //     techStack: ["React", "Tailwind", "Express", "MongoDB"],
  //     description:
  //       "Quiz Battle is a full-stack MERN (MongoDB, Express, React, Node.js) web application designed to provide an engaging and competitive quiz experience. The platform allows users to test their knowledge across multiple categories, track their performance, earn rewards, and create custom quizzes. Built with modern web technologies, it features a sleek dark-themed UI, real-time score tracking, and premium features for enhanced user experience.",
  //     keyFeatures: [
  //       "JWT-based authentication with protected routes.",
  //       "User profiles with performance tracking and leaderboard.",
  //       "Timed quiz system with instant feedback and scoring.",
  //       "Custom quiz creation with premium rewards.",
  //       "Responsive dark-themed UI built with Tailwind CSS.",
  //     ],
  //   },
  // ];
  return (
    <section className="relative w-full pt-20 overflow-hidden border-b-2 border-amber-500/20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wider text-white uppercase">
              Projects
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
        {/* Project Cards */}

        {projects === null && <div>Loading...</div>}

        <div>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
