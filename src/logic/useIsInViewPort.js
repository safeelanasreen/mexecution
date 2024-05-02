
import { useState, useEffect } from "react";

const useIsInView = (ref, options = {}, runOnlYOnce) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  let observer = null;

  if (typeof window !== "undefined") {
    observer = new IntersectionObserver(
      ([entry], entryobserver) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !runOnlYOnce)
          entryobserver.unobserve(entry.target);
      },
      { ...options }
    );
  }


  useEffect(() => {
    observer && observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
};

export default useIsInView;