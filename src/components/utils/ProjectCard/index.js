import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Assets from "../../Layout/CommonLayout/assets";
import Style from "./ProjectCard.module.scss";
import Icon from "../../Layout/Icons";
const ProjectCard = (props) => {
  return (
    <Link href={props?.data?.url || ""} className={Style.card_link}>
      <div
        className={`${Style.project_card} ${props?.listView ? Style.project_card__list : ""}`}
        aria-labelledby="project-card"
      >
        <div className={Style.project_card_head}>
          <div
            className={`position-relative ${Style.slider_wrap} ${
              !props?.data?.images?.length > 0 && Style.no_Data
            }`}
          >
            <Swiper
              pagination={true}
              slidesPerView={1}
              modules={[Pagination]}
              className={`${Style.project_card_swiper}  slider`}
            >
              {props?.data?.images?.map((item, key) => (
                <SwiperSlide>
                  <div className={`ratio ${Style.project_card_img}`} key={key}>
                    <Image src={item?.url} fill alt="banner" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className={Style.no_img}>
              <Image alt="logo" src={"/images/logo.svg"} fill />
            </div>
          </div>
        </div>

        <div className={Style.project_card_body}>
          <div className={Style.content}>
            <h3>{props?.data?.title}</h3>
            <p className={Style.location}>
              <span>
                <Icon icon="location" size={16} />
              </span>
              <div>{props?.data?.location}</div>
            </p>
            {props?.listView ? (
              ""
            ) : (
              <div className={Style.project_card_spec}>
                {props?.data?.category && (
                  <div className={Style.project_card_spec_item} data={props?.data?.category}>
                    <span>
                      <Icon icon="distribution" size={16} />
                    </span>
                    <div className={Style.category}>{props?.data?.category}</div>
                  </div>
                )}
                {props?.data?.area && (
                  <div className={Style.project_card_spec_item}>
                    <span>
                      <Icon icon="icon_area" size={16} />
                    </span>
                    <div className={Style.area}>{props?.data?.area} m2</div>
                  </div>
                )}
                {props?.data?.price ? (
                  <div
                    className={Style.project_card_spec_item}
                    data={`${props?.data?.price} price`}
                  >
                    <span>
                      <Icon icon="dollar_icon" size={16} />
                    </span>
                    <div className={Style.office_rooms}>{props?.data?.price} $USD</div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
            <div className={Style.distance_wrap}>
              <p className={Style.distance}>
                Distance to Highway : <strong> {props?.data?.distance_airport}KM</strong>
              </p>
              <p className={Style.distance}>
                Distance from US Border : <strong>{props?.data?.distance_us_border}KM</strong>
              </p>
            </div>
          </div>
          {props?.listView ? (
            <div className={Style.project_card_spec}>
              <div className={Style.project_card_spec_item} data={props?.data?.category}>
                <span>
                  <Icon icon="distribution" size={16} />
                </span>
                <div className={Style.category} data={props?.data?.category}>
                  {props?.data?.category}
                </div>
              </div>
              <div className={Style.project_card_spec_item}>
                <span>
                  <Icon icon="icon_area" size={16} />
                </span>
                <div className={Style.area}>{props?.data?.area} m2</div>
              </div>
              <div
                className={Style.project_card_spec_item}
                data={`${props?.data?.office_rooms} office rooms`}
              >
                <span>
                  <Icon icon="icon_home" size={16} />
                </span>
                <div className={Style.office_rooms}>{props?.data?.office_rooms} office rooms</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {props?.data?.asset_type === "Gold" ? (
          <p className={Style.membership}>
            <span className={Style.gold_plan}>
              <Image src={"/images/icon/gold.svg"} fill />
            </span>
            Gold
          </p>
        ) : props?.data?.asset_type === "Silver" ? (
          <p className={Style.membership}>
            <span className={Style.gold_plan}>
              <Image src={"/images/icon/silver.svg"} fill />
            </span>
            Silver
          </p>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
};

export default ProjectCard;
