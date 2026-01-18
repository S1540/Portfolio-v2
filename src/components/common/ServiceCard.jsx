import React from "react";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ service }) => {
  return (
    <div className="group max-w-64 h-72 w-full relative flex flex-col justify-center items-center bg-zinc-800/50 border border-zinc-700/50 rounded-md overflow-hidden hover:border-orange-500/50 transition-all duration-300">
      {/* Image Container with Overlay */}
      <div className="relative h-48 flex flex-col justify-center items-center overflow-hidden">
        {/* Service Image */}
        <img
          src={service.image}
          alt={service.name}
          className="w-32 h-36 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
          {service.name}
        </h3>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-gray-400 text-sm leading-relaxed">
          {service.description}
        </p>
        <div className="w-12 h-0.5 bg-zinc-700 group-hover:w-full group-hover:bg-orange-500 transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
