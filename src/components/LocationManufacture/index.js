import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Style from "./LocationManufacture.module.scss";
import Icon from "../Layout/Icons";
import Assets from "../Layout/CommonLayout/assets";
import Image from "next/image";
import MonterreyCard from "../utils/MonterreyCard";

const LocationManufacture = ({ props }) => {
  SwiperCore.use([Navigation]);
  return (
    <section className={Style.mx_location_brands}>
      <div className="container">
        <div className={` ${Style.head_wrap}`}>
          <h2 className="h2">{props?.data?.title}</h2>
        </div>

        <div
          className={`row row-cols-md-2 row-cols-lg-4  ${Style.location_companies}`}
          data-anim="fade-in"
        >
          {props?.data?.cards?.map((item, key) => {
            return (
              <div key={key} className={`${Style.card_wrapper}`}>
                <MonterreyCard theme="location" data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LocationManufacture;
