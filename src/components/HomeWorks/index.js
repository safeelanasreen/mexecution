import { useRouter } from "next/router";
import Style from "./HomeWorks.module.scss";
import { SwiperSlide } from "swiper/react";
import WorkCard from "../utils/WorkCard";
import CommonSlider from "../utils/CommonSlider";
import Animate from "../Animate";


const HomeWorks = ({ props }) => {
  const router = useRouter();
  const pathname = router.pathname;

  const sliderTransitionDelay = .1;

  return (
    <Animate
      as="section"
      className={`${Style.mx_works_sec} ${pathname == "/" ? Style.is_home : ""}`}
    >
      <div className="container">
        <h2 className="h2 fade-up">{props?.data?.title}</h2>
        <div className={`position-relative ${Style.slider_wrap}`}>
          <CommonSlider
            spaceBetween={20}
            // freeMode={true}
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
                spaceBetween: 22,
                slidesPerView: 4,
              },
              1500: {
                spaceBetween: 28,
                slidesPerView: 5,
              },
            }}
          >
            {props?.data?.works?.map((item, i) => {

              return (
                <SwiperSlide key={i}  >
                  <div className={`${Style.item} fade-up`}
                    style={{
                      transitionDelay: `calc(${sliderTransitionDelay}s * ${i})`, // Add the additional delay after the initial delay
                    }}>
                    <WorkCard data={item} />
                  </div>
                </SwiperSlide>
              );
            })}
          </CommonSlider>
        </div>
      </div>
    </Animate>
  );
};

export default HomeWorks;
