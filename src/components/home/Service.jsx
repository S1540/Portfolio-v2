import React from "react";
import ServiceCard from "../common/ServiceCard";
import { motion } from "motion/react";
import developer from "../../assets/serviceAssets/developer.png";
import cleanCode from "../../assets/serviceAssets/clean-code.png";
import responsive from "../../assets/serviceAssets/Responsive.png";

const Service = () => {
  const services = [
    {
      name: "Web Development",
      image: developer,
      description: "Building responsive, scalable web applications",
    },
    {
      name: "Clean Code",
      image: cleanCode,
      description:
        "Writing clean, maintainable code for optimal performance and maintainability",
    },
    {
      name: "Responsive Design",
      image: responsive,
      description:
        "Creating user-friendly interfaces that adapt to different screen sizes and devices",
    },
  ];

  return (
    <section className="relative w-full bg-zinc-900 pt-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wider text-white uppercase">
              Services
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
        {/* service content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
