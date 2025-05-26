import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className='w-28 h-28 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-[inset_8px_8px_20px_rgba(255,255,255,0.4),_4px_4px_12px_rgba(0,0,0,0.2)] flex items-center justify-center relative overflow-hidden group transition-transform hover:scale-105'
        >
          {/* Shine effect */}
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-white/30 opacity-0 group-hover:opacity-10 blur-xl animate-pulse"></div>
          
          {/* Bubble inner shine */}
          <div className="absolute top-2 left-2 w-10 h-10 rounded-full bg-white/40 blur-lg opacity-30"></div>

          {/* Icon */}
          <img
            src={technology.icon}
            alt={technology.name}
            className='w-14 h-14 object-contain z-10'
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
