import React, { useEffect, useState, Suspense, lazy } from "react";

// Dynamically import lottie-react
const Lottie = lazy(() => import("lottie-react"));

// Use relative path for the JSON animation
import animationData from "../../../public/Animation - 1747844595787.json"; // adjust path as needed

const GlobeAnimation = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Suspense fallback={<div>Loading animation...</div>}>
      <Lottie
        animationData={animationData}
        loop={true}
        className="w-16 h-16 md:w-20 md:h-20"
      />
    </Suspense>
  );
};

export default GlobeAnimation;
