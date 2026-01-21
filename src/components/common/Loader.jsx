import React, { useEffect, useState } from "react";

const Loader = () => {
  const [widthAnimted, setWidthAnimated] = useState(false);
  const [width, setWidth] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setWidthAnimated(true);
    }, 200);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setWidth(true);
    }, 1100);
  }, []);

  return (
    <div
      className={`grid grid-cols-2 min-h-screen fixed top-0 left-0 z-40 overflow-hidden ${width ? "w-0" : "w-full"}`}
    >
      <div
        className={`min-h-screen bg-zinc-800 transition-all duration-1000 ease-in-out overflow-hidden ${widthAnimted ? "-translate-x-full" : "translate-x-0"}`}
      ></div>
      <div
        className={`min-h-screen bg-zinc-800 ${widthAnimted ? "translate-x-full" : "translate-x-0"} transition-all duration-1000 ease-in-out overflow-hidden`}
      ></div>
    </div>
  );
};

export default Loader;
