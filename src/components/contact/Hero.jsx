import React from "react";
import background from "../../assets/Contact-hero.mp4";

const Hero = () => {
  return (
    <section>
      <div className="max-w-full w-full h-96">
        <video src={background} loop autoPlay muted></video>
      </div>
    </section>
  );
};

export default Hero;
