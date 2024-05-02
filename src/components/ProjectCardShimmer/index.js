import Style from "./ProjectCardShimmer.module.scss";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Icon from "../Layout/Icons";
const ProjectCardShimmer = (props) => {
  return (
    <Link href={props?.data?.url || ""} className={Style.card_link}>
      <div
        className={`${Style.project_card} ${props?.listView ? Style.project_card__list : ""}`}
        aria-labelledby="project-card"
      >
        <div className={Style.project_card_head}>
          <div className={`position-relative ${Style.slider_wrap}  ${Style.placeholder_img} `}>
            <div className={`ratio ${Style.project_card_img} `}>
              {/* <Image src={""} fill /> */}
            </div>
          </div>
        </div>
        <div className={Style.project_card_body}>
          <div className={Style.content}>
            <h3 className={Style.placeholder}>test rese</h3>
            <p className={`${Style.location} ${Style.placeholder}`}>
              <span>
                <Icon icon="location" size={16} />
              </span>
              <div> </div>
            </p>
            {props?.listView ? (
              ""
            ) : (
              <div className={`${Style.project_card_spec} ${Style.placeholder}`}>
                <div
                  className={Style.project_card_spec_item}
                  data={`${props?.data?.office_rooms} office rooms`}
                >
                  <span>
                    <Icon icon="distribution" size={16} /> Avail. Space
                  </span>
                  <div className={Style.category}>{props?.data?.category}</div>
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
            )}
            <div className={Style.distance_wrap}>
              <p className={`${Style.distance} ${Style.placeholder}`}>
                Distance to International Airport :{" "}
                <strong> {props?.data?.distance_airport}KM</strong>
              </p>
              <p className={`${Style.distance} ${Style.placeholder}`}>
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
      </div>
    </Link>
  );
};
export default ProjectCardShimmer;
