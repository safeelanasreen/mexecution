import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, FreeMode } from "swiper";
import CommonSlider from "../utils/CommonSlider";
import Style from "./LocationBrands.module.scss";
import Image from "next/image";
import "swiper/css";
const LocationBrands = ({ props }) => {

  const parse = require("html-react-parser");

  SwiperCore.use([Navigation, Autoplay, FreeMode]);

  return (
    <section className={Style.mx_location_brands}>
      <div className="container">
        <div className={`text-center ${Style.head_wrap}`}>
          <h2 className="h2">{props?.data?.title}</h2>
          <p>{parse(`${props?.data?.description}`)}</p>
        </div>

        <div className={`  ${Style.location_companies}`} data-anim="fade-in">
          <CommonSlider
            loop={true}
            speed={3000}
            freeMode={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            slidesPerView={5}
            spaceBetween={30}
            className={`${Style.Client_Swiper} slider`}
            breakpoints={{
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
          // modules={[Pagination]}
          >
            {props?.data?.images?.map((item, key) => {
              return (
                <SwiperSlide>
                  <div className="col" key={key}>
                    <div className={`position-relative  ${Style.location_companies_item}`}>
                      <Image src={item?.logo} width={195} height={81} alt="brand" />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </CommonSlider>
        </div>
      </div>
    </section>
  );
};

export default LocationBrands;
