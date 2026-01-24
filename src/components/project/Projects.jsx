import React, { useEffect, useState } from "react";
import ProjectCard from "../common/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      const res = await fetch("/projects", {
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
        <div className="mb-12 sm:mb-16">
          <h2 className="heading text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">
            Projects 🚀
          </h2>
          <div className="h-1 w-24 bg-linear-to-r from-orange-500 to-orange-600 mt-3 rounded-full"></div>
        </div>
        {/* Project Cards */}

        {projects === null && <div>Loading...</div>}
        <div>
          {projects.length === 0 && (
            <div className="text-center py-12 px-4">
              <div className="inline-block bg-red-500/10 border border-red-500/30 rounded-md px-6 py-4">
                <p className="text-red-400 font-bold text-lg mb-2">
                  ⚠️ No Projects Found
                </p>
                <p className="text-gray-400 text-sm">Server Connection Error</p>
              </div>
            </div>
          )}
        </div>

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
