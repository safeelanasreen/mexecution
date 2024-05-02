import CommonSlider from "../utils/CommonSlider";
import Style from "./AboutTeam.module.scss";
import { SwiperSlide } from "swiper/react";
import PartnerCard from "../utils/PartnerCard";
import Link from "next/link";
import { useWindowSize } from "../../logic/useDimension";

const AboutTeam = ({ props }) => {
  const { width } = useWindowSize();

  return (
    <section className={Style.mx_partners_sec}>
      <div className={Style.service_head}>
        <div className="container text-center">
          <div className={Style.head_wrap}>
            <h2 className="h2">{props?.data?.title}</h2>
            <p>{props?.data?.description}</p>
          </div>
        </div>
      </div>
      <div className={Style.service_body}>
        <div className="container">
          <div className={`position-relative ${Style.slider_wrap}`}>
            <CommonSlider
              spaceBetween={20}
              className={`${Style.board_swiper} slider`}
              breakpoints={{
                0: {
                  spaceBetween: 25,
                  slidesPerView: 1.5,
                },
                768: {
                  spaceBetween: 30,
                  slidesPerView: 2,
                },
                992: {
                  spaceBetween: 22,
                  slidesPerView: 3,
                },
                1200: {
                  spaceBetween: 22,
                  slidesPerView: 4,
                },
                1600: {
                  spaceBetween: 60,
                  slidesPerView: 4,
                },
              }}
            >
              {props?.data?.partners?.map((item, key) => {
                return (
                  <SwiperSlide key={key}>
                    <PartnerCard props={item} />
                  </SwiperSlide>
                );
              })}
            </CommonSlider>
          </div>

          {/* {
            width >= 992 ?
              <div className="text-center">
                <Link
                  href={`${props?.data?.link?.url}`}
                  className="button button-primary"
                >
                  <span>View All</span>
                </Link>
              </div> : ""
          } */}
        </div>
      </div>
    </section>
  );
};
export default AboutTeam;
