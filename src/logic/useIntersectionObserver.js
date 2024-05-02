import { useRef, useEffect } from 'react';

function useIntersectionObserver(options) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        ref.current.classList.add('is-inview')
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
}

export default useIntersectionObserver;