import { useEffect, useRef } from "react";

const VideoWrapper = ({
  src,
  play,
  setPlay,
  primaryButtonClicked,
  setPrimaryButtonClicked,
  setShowPlay,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef?.current;

    const handleVideoClick = () => {
      if (play) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setPlay(!play);
      setShowPlay(true);

      if (!primaryButtonClicked) {
        setPrimaryButtonClicked(true);
      }

      setTimeout(() => {
        setShowPlay(false);
      }, 400);
    };

    videoElement?.addEventListener("click", handleVideoClick);

    return () => {
      videoElement?.removeEventListener("click", handleVideoClick);
    };
  }, [play, primaryButtonClicked]);

  return (
    <div>
      <video ref={videoRef} controls={false} loop>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoWrapper;
