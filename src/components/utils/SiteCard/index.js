import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Assets from "../../Layout/CommonLayout/assets";
import Icon from "../../Layout/Icons";
import Style from "./SiteCard.module.scss";
const SiteCard = ({ props, index }) => {
  const parse = require("html-react-parser");
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className={Style.site_card}>
      <div className={Style.site_card_head}>
        <h6>{index}</h6>
      </div>
      <div className={`position-relative ${Style.site_card_body}`}>
        <div className={Style.content_wrap}>
          <div className={Style.content_wrap_icon}>
            <figure className="mb-3 ratio">
              <Image src={props?.img} fill alt={`icon of ${props?.title}`} />
            </figure>
          </div>
          <h4>{props?.title}</h4>
          <div className="mb-0">
            {parse(
              !isReadMore
                ? `${props?.description?.slice(0, 170)}${
                    props?.description?.length > 170 ? "..." : ""
                  }`
                : props?.description
            )}

            {props?.description?.length > 170 && (
              <span onClick={toggleReadMore} className="btn btn-link link">
                {`${isReadMore ? " Read Less" : "Read More"}`}
                <span className="link-anim">
                  <Icon icon="arrow-right1" size={13} />
                </span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteCard;
