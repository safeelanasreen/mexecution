import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import SwiperCore, { Navigation, FreeMode } from "swiper";
import { SwiperSlide } from "swiper/react";
import Style from "./MapDetail.module.scss";
import CommonSlider from "../../utils/CommonSlider";
import { useRouter } from "next/router";

const MapDetail = ({ activeData }) => {
  const router = useRouter();

  const [anim, setAnim] = useState(true);

  useEffect(() => {
    setAnim(false);
    setTimeout(() => {
      setAnim(true);
    }, 200);
  }, [activeData]);
  return (
    <div className={`${Style.detail_wrap} ${anim ? Style.anim : ""} text-start`}>
      <h3 className={Style.title}>{activeData?.city}</h3>
      <p>{activeData?.details?.description}</p>
      <div className={`${Style.stat} row row-cols-2`}>
        {activeData?.stats?.map((stat, i) => {
          return (
            <div className={Style.stat_item} key={i}>
              <h4>{stat?.count}</h4>
              <p>{stat?.title}</p>
            </div>
          );
        })}
      </div>

      <h6>Established Companies : </h6>
      <div className={`row ${Style.companies}`}>
        <div className={`position-relative ${Style.slider_wrap}`}>
          <CommonSlider
            pagination={true}
            slidesPerView={"3"}
            freeMode={true}
            spaceBetween={10}
            modules={[FreeMode, Navigation]}
            className={`${Style.sub_nav_slider}  slider`}
          >
            {activeData?.companies?.map((company, i) => {
              return (
                <SwiperSlide key={i}>
                  <div>
                    <div className={Style.brand_item}>
                      <Image
                        src={company?.img}
                        alt={company?.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </CommonSlider>
        </div>
      </div>
      <button
        onClick={() =>
          router.replace(
            {
              pathname: "/locations",
              query: { ...router.query, location: activeData?.id },
            },
            "",
            { shallow: false }
          )
        }
        className="btn btn-primary w-100"
      >
        Know More
      </button>
    </div>
  );
};

export default MapDetail;