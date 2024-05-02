import Image from "next/image";
import Link from "next/link";
import { useWindowSize } from "../../logic/useDimension";
import Style from "./ServiceBanner.module.scss";
import Animate from "../Animate/Animate";
import Icon from "../Layout/Icons";
import { useRouter } from "next/router";
import FloatingMenu from "../FloatingMenu";
import { useEffect } from "react";

const ServiceBanner = ({ props }) => {
  const { width } = useWindowSize();
  const parse = require("html-react-parser");
  const router = useRouter();

  useEffect(() => {
    router.beforePopState((e) => {
      window.location.reload();
    });
  }, []);


  return (
    <Animate
      as="section"
      className={`${Style.mx_banner_service} ${
        router.asPath === "/blogs" ? Style.blogs_banner : ""
      } d-flex align-items-end `}
    >
      {width >= 992 ? (
        <Image
          src={props?.data?.img || ""}
          priority
          fill
          className={`${Style.cover} ${Style.desk_img}`}
          alt="cover locations"
          quality={97}
        />
      ) : (
        <Image
          src={props?.data?.responsive_img || ""}
          priority
          fill
          alt="cover locations"
          quality={97}
          className={`${Style.cover}  ${Style.resp_img}`}
        />
      )}

      <div className="container">
        {width >= 992 ? (
          <div className={`${Style.breadcrump_wrap} col-lg d-none d-lg-block`}>
            <div className="breadcrumb breadcrumb-light">
              <Link href={"/"} className="breadcrumb-item">
                Home
              </Link>
              <span className="breadcrumb-item active">{props?.data?.title}</span>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="row">
          <div className={`${Style.banner_content} col-lg-7 text-white`}>
            <h1 className={`${Style.title} h3`}>
              <span>{props?.data?.title}</span>
            </h1>
            <div className={`mb-0 ${Style.content}`}> {parse(`${props?.data?.description}`)}</div>
          </div>
        </div>
      </div>

      {/* {width >= 992 ? (
        <a href={`mailto:${props?.data?.email}`} className={Style.mail_us}>
          <Icon icon="mail" size={25} />
        </a>
      ) : (
        ""
      )}
      {width >= 992 ? (
        <a href={`tel:${props?.data?.phone}`} className={Style.call_us}>
          <Icon icon="call" size={25} />
        </a>
      ) : (
        ""
      )} */}
         <FloatingMenu props={props}/>
    </Animate>
  );
};

export default ServiceBanner;
