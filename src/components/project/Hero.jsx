import React, { useEffect, useState } from "react";
import { Dot, ChevronRight, ChevronLeft, Sparkles } from "lucide-react";

import slider1 from "../../assets/projectAssets/Slider-1.jpg";
import slider2 from "../../assets/projectAssets/Slider-2.png";
import slider3 from "../../assets/projectAssets/Slider-3.jpg";

import Button from "../common/Button";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderData = [
    {
      image: slider1,
      title: "E-Commerce Project",
      description:
        "Full-featured online shopping experience with cart and checkout",
      buttonText: "View Project",
    },
    {
      image: slider2,
      title: "AI Chat Application",
      description:
        "Real-time messaging with AI-powered responses and analytics",
      buttonText: "Explore Demo",
    },
    {
      image: slider3,
      title: "Portfolio Website",
      description: "Modern and responsive portfolio with stunning animations",
      buttonText: "See Details",
    },
  ];

  // ✅ Auto Play (Same Logic)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // ✅ Next Slide
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  // ✅ Prev Slide
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  return (
    <section className="relative bg-zinc-900 overflow-hidden">
      <div className="relative w-full h-[450px] overflow-hidden">
        {/* Slides */}
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-zinc-900"></div>

            {/* Content Box Left Aligned */}
            <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
              <div className="max-w-xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-orange-600/20 border border-orange-500/30 rounded-full mb-6 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  <span className="text-orange-400 text-sm font-bold uppercase tracking-wide">
                    Featured Project
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
                  {slide.title}
                </h2>

                {/* Description */}
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {slide.description}
                </p>

                {/* Button */}
                <Button name={slide.buttonText} />
              </div>
            </div>
          </div>
        ))}

        {/* Arrows btns */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-5 -translate-y-1/2 
          w-12 h-12 flex items-center justify-center 
          bg-zinc-800/60 border border-orange-500/20 
          rounded-md text-gray-300 hover:text-orange-400 
          hover:border-orange-500/50 hover:scale-110 
          transition-all duration-300"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={handleNext}
          className="absolute top-1/2 right-5 -translate-y-1/2 
          w-12 h-12 flex items-center justify-center 
          bg-zinc-800/60 border border-orange-500/20 
          rounded-md text-gray-300 hover:text-orange-400 
          hover:border-orange-500/50 hover:scale-110 
          transition-all duration-300"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/*Dots*/}
      <div className="flex justify-center gap-2 py-6">
        {sliderData.map((_, index) => (
          <Dot
            key={index}
            size={35}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer transition-colors duration-300 ${
              index === currentIndex
                ? "text-orange-500"
                : "text-gray-500 hover:text-orange-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
