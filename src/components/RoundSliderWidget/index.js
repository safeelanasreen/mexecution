import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Style from "./RoundSliderWidget.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import 'swiper/css/effect-fade';

// import "swiper/css/vertical"; 
import SwiperCore, {EffectFade, FreeMode, Navigation, Thumbs } from "swiper";
import Icon from "../Layout/Icons";
import { useRouter } from "next/router";
import Link from "next/link";

const RoundSliderWidget = ({ props }) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const parse = require("html-react-parser");
  SwiperCore.use([Navigation]);
  const swiperRef = useRef(null);

  return (
    <section className={Style.mx_slider_widget} id="scroll_id">
      <div className="container">
        <h2 className={`h3 ${Style.title} d-lg-none text-center`}>{props?.data?.title}</h2>
        <div className="row row-cols-lg-2">
          <div className={`order-2 order-lg-1 ${Style.slider_one}`}>
            <h2 className={`h3 ${Style.title} d-none d-lg-block`}>{props?.data?.title} </h2>
            <div className="position-relative">
              <Swiper
                ref={swiperRef}
                spaceBetween={10}
                loop={true}
                // direction="vertical"
                speed={500}
                effect={'fade'}
                fadeEffect={{
                  crossFade: true,
                }}
                onSlideChange={(e) => {
                  setSlideIndex(e?.realIndex);
                }}
                thumbs={{
                  swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                }}
                modules={[Navigation, Thumbs ,EffectFade]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className={`${Style.content_slider} slider  ${Style.vertical_slider}`}
              >
                {props?.data?.slides?.map((item, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className={`${Style.content_wrapper} text-center text-lg-start`}>
                        <h4 className="d-none d-lg-block">{`0${i + 1}`}</h4>
                        <h3>{item?.title}</h3>
                        <div className={Style.content}>{parse(`${item?.description} `)}</div>
                        <Link href={`${item?.read_more_url}`} className="button">
                          Read More
                        </Link>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className={Style.slider_nav}>
                <button
                  className="nav-arrow nav-arrow-left"
                  aria-label="arrow prev"
                  onClick={() => swiperRef?.current?.slidePrev()}
                >
                  <Icon icon="arrow-left" size={15} />
                </button>
                <button
                  className="nav-arrow nav-arrow-right"
                  aria-label="arrow next"
                  onClick={() => swiperRef?.current?.slideNext()}
                >
                  <Icon icon="arrow-right" size={15} />
                </button>
              </div>
            </div>
          </div>
          <div className={`order-1 order-lg-2 ${Style.slider_two}`}>
            <div className={Style.slider_wrap}>
              <div className={Style.slider_img}>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={true}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className={`${Style.swiper} slider`}
                >
                  {props?.data?.slides?.map((item, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <div className={Style.slide_item}>
                          <div className={`ratio ${Style.slide_item_img}`}>
                            <Image src={item?.image} fill alt={`cover ${item?.title}`}></Image>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
            <div className={`${Style.slider_thumb} slider_thumb`} data-num="8">
              {props?.data?.slides?.map((item, i) => {
                return (
                  <div
                    className={`slider_thumb_item ${Style.slider_thumb_item} ${i === slideIndex ? Style.slider_thumb_item_active : ""
                      }`}
                    key={i}
                  >
                    <div className={`${Style.slider_thumb_item_wrap}`}>
                      <div className={`ratio ${Style.slider_thumb_icon}`}>
                        <Image src={item?.icon} fill alt={`icon ${item?.title}`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RoundSliderWidget;
