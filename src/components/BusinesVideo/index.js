import Style from "./BusinesVideo.module.scss";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Icon from "../Layout/Icons";

const BusinesVideo = ({ props }) => {
  const parse = require("html-react-parser");

  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   const videoElement = videoRef.current;

  //   const handleVideoClick = () => {
  //     if (play) {
  //       videoElement.pause();
  //     } else {
  //       videoElement.play();
  //     }
  //     setPlay(!play);
  //     setShow(true)

  //     if (!primaryButtonClicked) { // Check if primary button is not clicked
  //       setPrimaryButtonClicked(true); // Set primaryButtonClicked to true
  //     }

  //     setTimeout(() => {
  //       setShow(false)
  //     }, 400);

  //   };

  //   videoElement.addEventListener("click", handleVideoClick);

  //   return () => {
  //     videoElement.removeEventListener("click", handleVideoClick);
  //   };
  // }, [play, primaryButtonClicked]);

  return (
    <section className={Style.mx_business_video}>
      <div className="container">
        <div className={Style.video_content}>
          <p>{parse(`${props?.data?.title}`)}</p>
          <div className={Style.video_wrap}>
            <div className={Style.video_frame}>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/2544pagWnsY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
            {parse(`${props?.data?.video}`)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BusinesVideo;
