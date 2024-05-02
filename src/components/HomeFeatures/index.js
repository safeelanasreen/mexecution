import Style from "./HomeFeatures.module.scss";
import FeatureCard from "../utils/FeatureCard";
import { SwiperSlide } from "swiper/react";
import CommonSlider from "../utils/CommonSlider";
import Animate from "../Animate/Animate";
import { useWindowSize } from "../../logic/useDimension";
// import { log } from "sharp/lib/libvips";

const HomeFeatures = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();
  const isFreeMode = width < 1200;

  return (
    <section className={Style.mx_features_sec}>
      <div className="container">
        <div className={`row justify-content-center ${Style.head_wrap}`}>
          <Animate className="col-lg-9 text-lg-center">
            <h2 className="h2 fade-up">{props?.data?.title}</h2>
            <p className="mb-0 fade-up d1">{parse(`${props?.data?.description}`)}</p>
          </Animate>
        </div>

        <Animate className={`position-relative ${Style.slider_wrap}`}>
          <CommonSlider
            spaceBetween={20}
            freeMode={isFreeMode}
            className={`${Style.board_swiper} slider`}
            breakpoints={{
              0: {
                spaceBetween: 30,
                slidesPerView: 1.35,
              },
              768: {
                spaceBetween: 30,
                slidesPerView: 2,
              },
              992: {
                spaceBetween: 50,
                slidesPerView: 3,
              },
              1200: {
                spaceBetween: 50,
                slidesPerView: 4,
              },
              1600: {
                spaceBetween: 108,
                slidesPerView: 4,
              },
            }}
          >
            {props?.data?.features?.map((item, index) => {
              const transitionDelay = (index * 0.1).toFixed(1) + 's';
              const cssVariableName = '--slide-transition-delay';

              return (
                <SwiperSlide key={index} >
                  <div className={Style.item} >
                    <FeatureCard data={item} id={index} />
                  </div>
                </SwiperSlide>
              );
            })}
          </CommonSlider>
        </Animate>
      </div>
    </section>
  );
};

export default HomeFeatures;
