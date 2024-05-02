import { useEffect, useState, useRef } from "react";
import Style from "./HomeBanner.module.scss";
import Icon from "../Layout/Icons";
import { useWindowSize } from "../../logic/useDimension";
import ServiceCard from "../utils/ServiceCard";
import Link from "next/link";
import Image from "next/image";
import FloatingMenu from "../FloatingMenu";
import ContactBanner from "../ContactBanner";
import ThankyouPage from "../ThankyouPage";

const HomeBanner = ({ props }) => {
  const { width } = useWindowSize();
  const parse = require("html-react-parser");
  const parallaxElement = useRef(null);
  const videoRef = useRef(null);
  const [anim, setAnim] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setAnim(true);
  }, []);
  useEffect(() => {
    function handleScroll() {
      const scrollPos = window.scrollY;
      parallaxElement.current.style.setProperty(
        "--scroll-rate",
        scrollPos / 1000
      );
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // const handleVideoLoaded = () => {
  //   setTimeout(() => {
  //     setVideoLoaded(true);
  //   }, 600);
  // };

  const videoStyle = {
    display: videoLoaded ? "block" : "none",
    opacity: videoLoaded ? 1 : 0,
    transition: "opacity 0.2s ease", // Adjust the duration and easing as needed
  };

  const overlayStyle = {
    background: "rgba(0, 0, 0, 0.33)", // You can change the color and opacity here
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  // const imageSources = [
  //   "/images/banner/home_poster1.webp",
  //   "/images/banner/execute_banner.png",
  //   "/images/banner/ind_detail_banner.png",
  //   // Add more image sources as needed
  // ];

  // const randomImageSource =
  //   imageSources[Math.floor(Math.random() * imageSources.length)];


  const handleVideoLoaded = () => {
    // Generate a random starting time (between 0 and video duration)
    const randomTime = Math.floor(Math.random() * videoRef.current.duration);
    videoRef.current.currentTime = randomTime;

    const videoTimeout = setTimeout(() => {
      setVideoLoaded(true);
      clearTimeout(videoTimeout);
    }, 1000);
  };

  return (
    <>
      <section
        className={`${Style.mx_banner_sec} ${anim ? Style.animated : ""}`}
      >
        <div className={Style.parallax} ref={parallaxElement}>
          {!videoLoaded && (
            // <Image src={Assets.banner_poster} alt="Poster Image" fill quality={1} />
            <Image src={"/images/banner/home_poster2.webp"} alt="Poster Image" fill quality={50}  />
            
          )}
{/* 
          {!videoLoaded && (
            <Image
              src={randomImageSource}
              alt="Poster Image"
              fill
              quality={50}
            />
          )} */}

          <video
            controls={false}
            playsinline=""
            autoplay=""
            muted
            loop
            style={videoStyle}
            onLoadedData={handleVideoLoaded}
            ref={videoRef}
          >
            <source src={props?.data?.banner} type="video/mp4" />
          </video>
          <div style={overlayStyle}></div>
        </div>

        <div className="container">
          <div className="row ">
            <div className="col-lg-6">
              <div className={Style.content_wrap}>
                <div className={Style.subttl}>
                  {parse(`${props?.data?.subtitle}`)}
                </div>
                <div className="Style.mainttl">
                  <h1 className="h1 text-white">
                    {parse(`${props?.data?.title}`)}
                  </h1>
                  <Link
                    href={props?.data?.link?.url || ""}
                    className="button "
                  >
                    <span>{props?.data?.link?.title}</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-block">
              <div
                className={`${Style.card_wrap} ${
                  props?.data?.services?.length % 2 == 0
                    ? Style.card_wrap_odd
                    : ""
                }`}
              >
                <h2 className="h5 text-white">
                  {parse(props?.data?.services?.title)}
                </h2>
                <div className={"row"}>
                  {/* {props?.data?.services?.services?.map?.((item, i) => (
                    <div className={`col-lg-6 ${Style.item}`} key={i}>
                      <ServiceCard data={item} />
                    </div>
                  ))} */}
                  {props?.data?.services?.services?.map?.((item, i) => {
                    const transitionDelay = (i * 0.1).toFixed(1) + "s";
                    const cssVariableName = "--service-card-transition-delay";
                    const style = { [cssVariableName]: transitionDelay };

                    return (
                      <div
                        className={`col-lg-6 ${Style.item}`}
                        key={i}
                        style={style}
                      >
                        <ServiceCard data={item} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {width >= 992 ? (
          <a href={`mailto:${props?.data?.email}`} className={Style.mail_us}>
            <Icon icon="mail" size={25} />
          </a>
        ) : (
          ""
        )}
        {width >= 992 ? (
          <a href={`tel:${props?.data?.phone}`} className={Style.call_us}>
            <Icon icon="call" size={25} />
          </a>
        ) : (
          ""
        )} */}
        <FloatingMenu props={props} />
      </section>
      <section className={`d-lg-none ${Style.mx_banner_services}`}>
        <div className="container">
          <div className={Style.slide_wrap}>
            {props?.data?.services?.services?.map?.((item, i) => (
              <div className={`${Style.item_res}`} key={i}>
                <ServiceCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
