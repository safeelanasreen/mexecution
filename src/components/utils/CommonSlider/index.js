import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Navigation, Autoplay, FreeMode } from "swiper";
import Style from "./CommonSlider.module.scss";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import Icon from "../../Layout/Icons";
import { useWindowSize } from "../../../logic/useDimension";

const CommonSlider = (props) => {
  const { children, noScrollbar, onNoNav, ...params } = props;
  const CommonSliderRef = useRef(null);
  const { width } = useWindowSize();
  // const prevRef = useRef(null);
  // const nextRef = useRef(null);
  const [navClass, setNavClass] = useState("is_begin");

  // useEffect(() => {
  //   if (navClass === "no_nav") {
  //     onNoNav(true); // Call onNoNav prop with true when navClass is "no_nav"
  //   } else {
  //     onNoNav(false); // Call onNoNav prop with false when navClass changes from "no_nav"
  //   }
  // }, [navClass, onNoNav])

  return (
    <>
      <Swiper
        // touch={false}
        {...params}
        ref={CommonSliderRef}
        modules={[Navigation]}
        pagination={true}
        onBeforeInit={(swiper) => {
          CommonSliderRef.current = swiper;
        }}
        // navigation={{
        //   nextEl: nextRef.current,
        //   prevEl: prevRef.current
        // }}
        onInit={(swiper) => {
          if (swiper.allowSlideNext === false && swiper.allowSlidePrev === false) {
            setNavClass("no_nav");
          } else {
            setNavClass("is_begin");
          }
        }}
        onSlideChange={(swiper) => {
          setNavClass(swiper?.isBeginning ? "is_begin" : swiper?.isEnd ? "is_end" : "");
        }}
      >
        {children}
      </Swiper>
      <div className={`${Style.slider_nav}  ${navClass}`}>
        <button
          className="nav-arrow nav-arrow-left"
          aria-label="arrow prev"
          onClick={() => CommonSliderRef?.current?.slidePrev()}
          // ref={prevRef}
        >
          <Icon icon="arrow-left" size={15} />
        </button>
        <button
          className="nav-arrow nav-arrow-right"
          aria-label="arrow next"
          onClick={() => CommonSliderRef?.current?.slideNext()}
          // ref={nextRef}
        >
          <Icon icon="arrow-right" size={15} />
        </button>
      </div>
    </>
  );
};

export default CommonSlider;
