'use client'
import { useRef } from "react";
import useIsInViewPort from "../../logic/useIsInViewPort";

const useAnimate = ({options}) => {
  const elementRef = useRef(null);
  const optionsProps ={

    threshold: 0.3,
    ...options
  }
  const intersecting = useIsInViewPort(elementRef, {...optionsProps}, false);

  const animationClass = intersecting ? "visible" : "";

  return {
    elementRef,
    animationClass,
  };
};

export default useAnimate;
