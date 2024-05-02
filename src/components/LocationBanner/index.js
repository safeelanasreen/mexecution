import Image from "next/image";
import Link from "next/link";
import Icon from "../Layout/Icons";
import { useState } from "react";
import { useWindowSize } from "../../logic/useDimension";
import Assets from "../Layout/CommonLayout/assets";
import FilterBar from "../utils/FilterBar";
import Style from "./LocationBanner.module.scss";
import FloatingMenu from "../FloatingMenu";
const LocationBanner = ({ props }) => {
  const { width } = useWindowSize();
  return (
    <section className={`${Style.mx_banner_locations}`}>
      {width >= 992 ? (
        <Image
          src={props?.data?.banner_data?.img}
          priority
          fill
          className={`${Style.cover} ${Style.desk_img}`}
          alt="cover locations"
          quality={98}
        />
      ) : (
        <Image
          src={props?.data?.banner_data?.responsive_img}
          priority
          fill
          className={`${Style.cover}  ${Style.resp_img}`}
          alt="cover locations"
          quality={99}
        />
      )}
      <div className="container">
        <div className="row">
          <div className="col-xl-auto">
            <div className="breadcrumb breadcrumb-light">
              <Link href={"/"} className="breadcrumb-item">
                Home
              </Link>
              <span className="breadcrumb-item active">{props?.data?.banner_data?.title}</span>
            </div>
            <h1 className="h3 text-white d-none d-xl-block">{props?.data?.banner_data?.title}</h1>
          </div>
          <div className="col-xl d-xl-flex align-items-end justify-content-end">
            <ul className="list-star list-star-secondary text-white d-xl-flex">
              {props?.data?.banner_data?.bannerData?.map((item, index) => (
                <li key={index}>{item?.heading}</li>
              ))}
            </ul>
            {width >= 992 ? (
              ""
            ) : (
              <h1 className="h4 text-white d-xl-none">{props?.data?.banner_data?.title}</h1>
            )}
          </div>
        </div>
      </div>

      <FilterBar props={props} />
{/* 
      {width >= 992 ? (
        <a href={`mailto:${props?.data?.banner_data?.email}`} className={Style.mail_us}>
          <Icon icon="mail" size={25} />
        </a>
      ) : (
        ""
      )}
      {width >= 992 ? (
        <a href={`tel:${props?.data?.banner_data?.phone}`} className={Style.call_us}>
          <Icon icon="call" size={25} />
        </a>
      ) : (
        ""
      )} */}
          {width >= 992 ? (
      <div className={Style.location_floating_btn}>
     

         <FloatingMenu props={props}/>
         </div>
       
       
  ):(
    ""
    )}
    </section>
  );
};

export default LocationBanner;
