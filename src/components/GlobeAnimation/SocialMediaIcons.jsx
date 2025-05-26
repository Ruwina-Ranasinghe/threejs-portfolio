"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import GlobeAnimation from "./GlobeAnimation";

export default function SocialMediaIcons() {
  const [isOpen, setIsOpen] = useState(false);

const icons = [
  {
    icon: <FaLinkedinIn />,
    color: "bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900 shadow-lg shadow-blue-500/50",
    link: "https://www.linkedin.com/in/ruwina-ranasinghe-8176a62a4",
  },
  {
    icon: <FaGithub />,
    color: "bg-gradient-to-br from-gray-700 via-gray-900 to-black shadow-lg shadow-gray-800/50",
    link: "https://github.com/Ruwina-Ranasinghe",
  },
  {
    icon: <FaWhatsapp />,
    color: "bg-gradient-to-br from-green-400 via-green-500 to-green-700 shadow-lg shadow-green-500/50",
    link: "https://wa.me/94711518953",
  },
  {
    icon: <FaFacebookF />,
    color: "bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 shadow-lg shadow-blue-600/50",
    link: "https://www.facebook.com/share/1AJimmTzhC/",
  },
];


  // We'll position icons in a left-side arc around the button.
  // Use polar coordinates converted to x, y offsets:
  // Angle starts from 180 degrees (left) spreading upward.
  // Radius controls how far icons spread out.

  const radius = 60; // distance from the button

  return (
    <div className="fixed right-0 top-[85%] transform -translate-y-1/2 flex items-center justify-center z-20">
      <div className="relative flex items-center justify-center">
        {icons.map((item, index) => {
          const angle = 250 - (index * 50); // degrees, spread from 180° to 60°
          const rad = (angle * Math.PI) / 180; // convert to radians
          const x = isOpen ? Math.cos(rad) * radius : 0;
          const y = isOpen ? Math.sin(rad) * radius : 0;

          return (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{ opacity: isOpen ? 1 : 0, x, y }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`absolute p-3 rounded-full shadow-lg text-white ${item.color} hover:shadow-2xl`}
              style={{ top: "40%", left: "40%", translateX: "-40%", translateY: "-40%" }}
            >
              {item.icon}
            </motion.a>
          );
        })}

        {/* Globe Toggle Button */}
        <motion.div
          initial={{ opacity: 1, x: 0, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white text-gray-800 px-2 pr-6 rounded-l-full flex items-center flex-row-reverse cursor-pointer shadow-md hover:shadow-lg border border-gray-300 active:translate-y-0.5 transition-all duration-200 relative z-10"
          onClick={() => setIsOpen(!isOpen)}
          style={{ width: 60, height: 48 }}
        >
          <GlobeAnimation />
        </motion.div>
      </div>
    </div>
  );
}
