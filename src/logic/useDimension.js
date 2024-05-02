import React, { useState, useEffect } from "react";

// Custom hook to get window size
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      // Call the handler immediately to set the initial size
      handleResize();

      // Cleanup function to remove the event listener
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty dependency array ensures this effect runs only on mount

  return windowSize;
};
