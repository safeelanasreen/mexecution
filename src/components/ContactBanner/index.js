import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./ContactBanner.module.scss";
import Link from "next/link";
import { useEffect } from "react";
import Animate from "../Animate/Animate";

import { useWindowSize } from "../../logic/useDimension";


const ContactBanner = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();
  //calendly
   
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  });
  

  const height = width >= 1600 ? 700 : 600;

  return (
    <Animate  as="section" className={Style.contactbanner}>
      <figure>
        <Image
          src={props?.data?.image}
          fill
          priority
          objectFit="cover"
          alt="banner"
        />
      </figure>
      <div className="container">
        <div className={`${Style.banner_contents} row`}>
            <div className={`${Style.banner_text} col-lg-5`}>
        <h1 className={`${Style.contactbanner_ttl} h3`}>{props?.data?.title}</h1>
        <p className="mb-0">{parse(`${props?.data?.description}`)}</p>
        <a
                    href={`tel:${props?.data?.button?.url}` || ""}
                    className="button "
                  >
                    <span>{props?.data?.button?.title}</span>
                  </a>

        </div>
        <div className="col-lg-7 col-xl-6" >
        <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/mexecution/mexecution?hide_event_type_details=1&hide_gdpr_banner=1" 
                style={{ minWidth: "320px", height: `${height}px` }}              /> 

        </div>
        </div>
      </div>
    </Animate>
  );
};
export default ContactBanner;
