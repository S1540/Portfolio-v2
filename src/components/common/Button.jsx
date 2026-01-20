import { ArrowRight } from "lucide-react";
import React from "react";

const Button = ({ name }) => {
  return (
    <>
      <button
        className="px-8 py-3 bg-amber-600 backdrop-blur-sm border border-orange-600/30 hover:bg-orange-600/90 text-white rounded-md font-bold flex items-center justify-center gap-2 transition-all 
                duration-500 hover:scale-101 active:scale-95 cursor-pointer w-full sm:w-auto "
      >
        {name}
        <ArrowRight className="w-5 h-5" />
      </button>
    </>
  );
};

export default Button;
