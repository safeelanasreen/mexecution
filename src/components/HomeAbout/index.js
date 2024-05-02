import Image from "next/image";
import Icon from "../Layout/Icons";
import Style from "./HomeAbout.module.scss";
import Assets from "../Layout/CommonLayout/assets";
import { useWindowSize } from "../../logic/useDimension";
import Link from "next/link";
import Animate from "../Animate/Animate";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const HomeAbout = ({ props }) => {
  const { width } = useWindowSize();
  const parse = require("html-react-parser");
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <Animate as="section" className={Style.mx_about_sec}>
      <div className="container">
        {width >= 992 ? (
          ""
        ) : (
          <h2 className="h2 mb-3 text-primary text-center">{props?.data?.title}</h2>
        )}
        <div className={`row ${Style.row}`}>
          <div className={`col-12 ${Style.col_left}`}>
            <Swiper
              className="custom-cursor"
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Pagination]}
              pagination={{
                clickable: true,
              }}
              // freeMode={true}
              speed={500}
              loop={true}
              breakpoints={{
                0: {
                  spaceBetween: 20,
                  slidesPerView: 1,
                },
              
                992: {
                  spaceBetween: 90,
                  centeredSlides: "true",
                },
                1200: {
                  spaceBetween: 162,
                  centeredSlides: "true",
                },
              }}
            >
              {props?.data?.founder?.map((item, i) => {
                return (
                  <SwiperSlide>
                    <div className={`${Style.founder} fade-up-img`} key={i}>
                      <div className={Style.founder_img}>
                        <div className={Style.flag}>
                          <Image
                            src={item?.flag}
                            width={34}
                            height={24}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            alt="Founder"
                          />
                        </div>
                        <div className={`ratio ${Style.img}`}>
                          <Image
                            src={item?.image}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            alt="Founder"
                          />
                        </div>
                      </div>
                      <div className={Style.founder_info}>
                        <div className="d-flex align-items-center">
                          <div>
                            <h3 className={Style.founder_name}>{item?.name}</h3>
                            <p className={Style.founder_designation}>{item?.designation}</p>
                          </div>
                          <div className={Style.social_wrap}>
                            <Link
                              href={item?.social?.[0]?.url || ""}
                              aria-label="linkedin"
                              target="_blank"
                            >
                              <Icon icon="linkedin" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className={`col-12 ${Style.col_right} text-center text-lg-start`}>
            <div className={`${Style.content_wrap} fade-up d1`}>
              {width >= 992 ? <h2 className="h2">{props?.data?.title}</h2> : ""}
              <div className={Style.right_content}>
                <h5 className="h5">"{props?.data?.titleSub}"</h5>
                {isReadMore && <p>{props?.data?.description}</p>}{" "}
                <button className={Style.content_btn} onClick={() => setIsReadMore(!isReadMore)}>{`${
                  isReadMore ? " Read Less" : "Read More"
                }`}</button>
              </div>
              <div className={Style.statics}>
                {props?.data?.stats?.map((data, key) => {
                  return (
                    <div className={Style.statics_item} key={key}>
                      <h3 className="text-primary">{data?.count}</h3>
                      {parse(`${data?.title}`)}
                    </div>
                  );
                })}
              </div>
              <Link href={`${props?.data?.link?.url}`} className="button button-primary">
                <span>{props?.data?.link?.title}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Animate>
  );
};

export default HomeAbout;
