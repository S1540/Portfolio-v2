import React from "react";

const About = () => {
  return (
    <div className="w-full flex justify-center py-14">
      <h2 className="relative text-4xl md:text-5xl font-bold text-white">
        About Me
        {/* Curved underline */}
        <svg
          className="absolute left-1/2 -bottom-5 -translate-x-1/2"
          width="180"
          height="20"
          viewBox="0 0 180 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 10 C40 20, 140 0, 175 10"
            stroke="url(#grad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="180" y2="0">
              <stop offset="0%" stopColor="#F54900" />
              <stop offset="50%" stopColor="#F54900" />
              <stop offset="100%" stopColor="#F54900" />
            </linearGradient>
          </defs>
        </svg>
      </h2>
    </div>
  );
};

export default About;
