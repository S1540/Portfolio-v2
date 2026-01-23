import React, { useEffect, useState } from "react";
import { Dot, ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";
import slider1 from "../../assets/projectAssets/Slider-1.jpg";
import slider2 from "../../assets/projectAssets/Slider-2.png";
import slider3 from "../../assets/projectAssets/Slider-3.jpg";
import Button from "../common/Button";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderData = [
    {
      image: slider1,
      title: "E-Commerce ",
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

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      return prev === sliderData.length - 1 ? 0 : prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      return prev === 0 ? sliderData.length - 1 : prev - 1;
    });
  };

  return (
    <section>
      <div className="relative">
        <div className="relative w-full h-96 flex overflow-hidden">
          {sliderData.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0  w-full h-96 transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              {/* Content */}
              <div className="absolute left-0 right-0 top-1/2  flex flex-col items-center justify-center px-4 text-center backdrop-blur-[2px]">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg text-gray-300 mb-6 max-w-2xl">
                  {slide.description}
                </p>
                <Button name={slide.buttonText} />
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center">
          {sliderData.map((_, index) => (
            <Dot
              onClick={() => setCurrentIndex(index)}
              key={index}
              size={35}
              className={`cursor-pointer transition-colors ${
                index === currentIndex ? "text-orange-500" : "text-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Arrow Buttons */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 left-2 text-gray-400 cursor-pointer hover:text-orange-500 active:scale-75 transition-all duration-300"
          onClick={handlePrev}
        >
          <ChevronLeft size={40} />
        </div>
        <div
          className="absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-400 cursor-pointer hover:text-orange-500 active:scale-75 transition-all duration-300"
          onClick={handleNext}
        >
          <ChevronRight size={40} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
