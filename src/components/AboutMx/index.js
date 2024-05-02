import Style from "./AboutMx.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Icon from "../Layout/Icons";

const AboutMx = ({ props }) => {
  const parse = require("html-react-parser");
  const router = useRouter();
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
    document.getElementById("about_desc").scrollIntoView({ behavior: "smooth", top: 100 });
  };
  return (
    <section
      className={`${Style.mx_about_mx} ${
        router.asPath == "/supplier-and-distributor" ? Style.secondary_theme : ""
      }`}
      id="about_desc"
    >
      <div className="container">
        <div className="row">
          <div className={`col-12 ${Style.col_left}`}>
            <div className={Style.founder}>
              <div className={Style.founder_img}>
                <div className={`${Style.img} ratio`}>
                  <Image src={props?.data?.img || ""} alt={`${props?.data?.title}`} fill />
                </div>
              </div>
              <div className={Style.founder_quote}>
                <p>{parse(`${props?.data?.quote}`)}</p>
              </div>
            </div>

            <Link href={props?.data?.link?.url || ""} className="button button-primary">
              <span>{props?.data?.link?.title}</span>
            </Link>
          </div>

          <div className={`col-12 ${Style.col_right}`}>
            <div className={Style.content_wrap}>
              <h2 className="h4 text-white">{props?.data?.title}</h2>
              {/* <h5 className={`h5 ${Style.sub_title}`}>{props?.data?.sub_title}</h5> */}
              <div className={`text-white ${Style.description}`}>
                {parse(
                  !isReadMore
                    ? `${props?.data?.description?.slice(0, 550)}${
                        props?.data?.description?.length > 550 ? "..." : ""
                      }`
                    : props?.data?.description
                )}

                {props?.data?.description?.length > 600 && (
                  <span onClick={toggleReadMore} className="btn btn-link link">
                    {`${isReadMore ? " Read Less" : "Read More"}`}
                    <span className="link-anim">
                      <Icon icon="arrow-right1" size={13} />
                    </span>
                  </span>
                )}
              </div>

              <Link href={props?.data?.link?.url || ""} className="button button-primary">
                <span>{props?.data?.link?.title}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.bg}>
        <div className={Style.img_circle}>
          <div className="ratio">
            <Image
              src={"/images/banner/about_bg.png"}
              fill
              alt="decor"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={98}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMx;
