import React, { useEffect, useState } from "react";
import { Dot, ChevronRight, ChevronLeft } from "lucide-react";
import slider1 from "../../assets/projectAssets/Slider-1.jpg";
import slider2 from "../../assets/projectAssets/Slider-2.png";
import slider3 from "../../assets/projectAssets/Slider-3.jpg";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slider = [slider1, slider2, slider3];

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      return prev === slider.length - 1 ? 0 : prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      return prev === 0 ? slider.length - 1 : prev - 1;
    });
  };

  return (
    <section>
      <div className="relative">
        <div className=" relative w-full h-96 flex overflow-x-hidden">
          {slider.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="slider-image"
              className={` absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${index === currentIndex ? "opacity-80" : "opacity-0"}`}
            />
          ))}
        </div>
        <div className="flex justify-center">
          {slider.map((_, index) => (
            <Dot
              onClick={() => setCurrentIndex(index)}
              key={index}
              size={35}
              className={`text-gray-400 cursor-pointer ${index === currentIndex ? "text-orange-500" : ""}`}
            />
          ))}
        </div>
        {/* Arrow Buttons */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 left-2 text-gray-400 cursor-pointer hover:text-orange-500 active:scale-70 transition-all duration-300"
          onClick={handlePrev}
        >
          <ChevronLeft size={40} />
        </div>
        <div
          className="absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-400 cursor-pointer hover:text-orange-500 active:scale-70 transition-all duration-300"
          onClick={handleNext}
        >
          <ChevronRight size={40} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
