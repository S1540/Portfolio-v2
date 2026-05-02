import React from "react";
import ProjectCard from "../common/ProjectCard";
import cozycabz from "../../assets/projectAssets/cozycabz.png";
import unnity from "../../assets/projectAssets/unnity.png";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const ProjectOverview = () => {
  const projectData = [
    {
      projectName: "CozyCabz Cab Booking Platform",
      Image: cozycabz,
      projectStatus: "Completed",
      liveLink: "https://cozycabz.com",
      githubLink: "https://github.com/Unnity-Development-Agency/cozycabs",
      techStack: ["Next.js", "Mapbox API", "Authentication", "More++"],
      description:
        "A fully responsive cab booking platform featuring a modern UI, dynamic car listings, and real-time fare calculation with additional charges like tolls and distance-based pricing. Built with Next.js and Tailwind CSS, this project demonstrates clean component architecture, Firebase integration, and smooth navigation, delivering a seamless booking experience across mobile and desktop devices.",
      keyFeatures: [
        "Dynamic fare calculation using distance, tolls, and real-time inputs",
        "Map integration with Mapbox API for accurate routes and location handling",
        "User authentication and booking history tracking with personalized accounts",
        "Ride booking system with live data updates and status management",
        "Clean, reusable component-based architecture with optimized performance",
        "Admin dashboard with analytics graphs for bookings and revenue insights",
        "Dynamic price management and ride status control via admin panel",
      ],
    },
    {
      projectName: "Unnity Degital Marketing Agency",
      Image: unnity,
      projectStatus: "Completed",
      techStack: ["Next.js", "Tailwind", "Node-Mailer", "More++"],
      liveLink: "https://unnity.in",
      githubLink: "https://github.com/Unnity-Development-Agency/e-marketing",
      description:
        "A fully responsive digital marketing agency website built with Next.js and Tailwind CSS, featuring a modern design and seamless user experience. The site includes dynamic content sections, smooth animations, and an integrated contact form powered by Node-Mailer for efficient lead generation. With a focus on clean code architecture and optimized performance, this project showcases a professional online presence for the agency while ensuring accessibility across all devices.",
      keyFeatures: [
        "Dynamic content sections for services, portfolio, and client testimonials.",
        "Smooth animations and transitions for an engaging user experience.",
        "Integrated contact form with Node-Mailer for efficient lead generation.",
        "Clean code architecture with reusable components and optimized performance.",
        "Fully responsive design ensuring accessibility across all devices.",
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
