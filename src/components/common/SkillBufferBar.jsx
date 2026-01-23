import React, { useState, useEffect } from "react";

const SkillBufferBar = ({ name, target, color }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setProgress(target);
      });
    });
  }, [target]);

  return (
    <div className="w-full my-2">
      {/* Label */}
      <div className="flex justify-between mb-1 text-sm text-white">
        <span>{name}</span>
        <span className="font-bold" style={{ color }}>
          {target}%
        </span>
      </div>

      {/* Track */}
      <div className="w-full h-3 rounded-full bg-gray-700 overflow-hidden">
        {/* Fill */}
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out relative"
          style={{
            width: `${progress}%`,
            background: color,
            boxShadow: `0 0 12px ${color}80`,
          }}
        >
          {/* Shine */}
          <div className="shine"></div>
        </div>
      </div>

      {/* Shine CSS */}
      <style>{`
        .shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.4),
            transparent
          );
          animation: shineMove 2s infinite;
        }

        @keyframes shineMove {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </div>
  );
};

export default SkillBufferBar;
