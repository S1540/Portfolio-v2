import React from "react";
import ServiceCard from "../common/ServiceCard";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import developer from "../../assets/serviceAssets/developer.png";
import cleanCode from "../../assets/serviceAssets/clean-code.png";
import responsive from "../../assets/serviceAssets/Responsive.webp";
import genAi from "../../assets/serviceAssets/gen-ai.png";
import animation from "../../assets/serviceAssets/walking office man.json";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import resume from "../../assets/Resume3.0.pdf";

const Service = () => {
  const services = [
    {
      name: "Web Development",
      image: developer,
      description:
        "Building responsive and modern websites using latest technologies and Ai Integration for enhanced user experience.",
    },
    {
      name: "Clean Code",
      image: cleanCode,
      description:
        "Writing clean, maintainable code for optimal performance and maintainability of web applications. For deployment first approach.",
    },
    {
      name: "Responsive Design",
      image: responsive,
      description:
        "Creating fully responsive and user-friendly layouts for all screen size. For mobile-first approach. along with pixel-perfect design.",
    },
    {
      name: "Gen-AI",
      image: genAi,
      description:
        "Incorporating AI features to enhance user experience and functionality. For better user engagement and personalized recommendations.",
    },
  ];

  return (
    <section className="relative w-full bg-[url('/src/assets/fixBg.jpg')] bg-fixed overflow-hidden">
      <div className="pt-20 pb-10 bg-zinc-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16">
            <h2 className="heading text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">
              Services
            </h2>
            <div className="h-1 w-24 bg-linear-to-r from-orange-500 to-orange-600 mt-3 rounded-full"></div>
          </div>
          {/* service content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-2"
          >
            {services.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </motion.div>
        </div>
      </div>
      {/* button + animation */}
      <div className="relative w-full h-72 backdrop-blur-xs">
        <div className="animate w-28 h-32 absolute -bottom-10">
          <Lottie animationData={animation} loop={true} />
        </div>
        {/* button */}

        <div className="flex flex-col gap-2 justify-center items-center h-full px-4">
          <a href={resume} download={false}>
            <Button name="Hire Me" />
          </a>
          <h1 className="text-lg md:text-3xl font-medium tracking-wider text-white py-4">
            I'M AVAILABLE FOR FREELANCING
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Service;
