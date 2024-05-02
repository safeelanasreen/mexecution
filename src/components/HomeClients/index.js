import { useRouter } from "next/router";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, FreeMode } from "swiper";
import { Container } from "react-bootstrap";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";
import CommonSlider from "../utils/CommonSlider";
import Style from "./HomeClients.module.scss";
import Image from "next/image";
import Animate from "../Animate";

const HomeClients = ({ props }) => {
  useEffect(() => {
    SwiperCore.use([Navigation, FreeMode, Autoplay]);
  }, []);

  const shouldSlide = props?.data?.clients?.length > 5;

  const autoplay = shouldSlide
    ? {
        delay: 0,
        disableOnInteraction: false,
      }
    : false;

  return (
    <section className={`${Style.ev_client_home} `}>
      <Container>
        <Animate className={Style.client_header}>
          <h2 className="h3 text-start text-lg-center fade-up">{props?.data?.title}</h2>
        </Animate>

        <Animate className={Style.client_body}>
          <CommonSlider
            modules={shouldSlide ? [Autoplay] : []}
            autoplay={autoplay}
            freeMode={true}
            slidesPerView={5}
            spaceBetween={30}
            loop={shouldSlide ? true : false}
            centeredSlides={shouldSlide ? true : false}
            speed={4000}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 3.3,
              },

              375: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              // when window width is >= 768px
              992: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            className={`${Style.Client_Swiper} slider`}
          >
            {props?.data?.clients?.map((item, i) => {
              return (
                <SwiperSlide key={i} className={Style.client_swiperslide}>
                  <div className={`${Style.client_slide} slide fade-up`}>
                    <figure>
                      <Image fill src={item?.img} alt={`${item?.title}`} quality={98} />
                    </figure>
                  </div>
                </SwiperSlide>
              );
            })}
          </CommonSlider>
        </Animate>
      </Container>
    </section>
  );
};
export default HomeClients;
