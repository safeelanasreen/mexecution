import Image from "next/image";
import { useWindowSize } from "../../../logic/useDimension";
import { useState } from "react";
import Assets from "../../Layout/CommonLayout/assets";
import Style from "./StateFactsCard.module.scss";

const StateFactcCard = ({ props, key }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      href="#"
      className={`${Style.facts_card} ${isToggled ? "active" : ""} facts-card`}
      onClick={handleClick}
      key={key}
    >
      <div className={`${Style.icon}  d-flex justify-content-between `}>
        <figure>
          <Image src={props?.icon} priority width={52} height={44} alt="icon" />
        </figure>
        {width <= 992 ? (
          <figure>
            <Image src={Assets.plus_black} priority width={18} height={18} />
          </figure>
        ) : (
          ""
        )}
      </div>
      <div className={Style.facts_card_text_wrap}>
        <h3 className={Style.facts_card_count}>{props?.count}</h3>
        <div className={Style.facts_card_text}>
          <p className="mb-0">{props?.title}</p>
        </div>
      </div>
      <div className={`${Style.hover_content} hover-content`}>
        <div className={Style.hover_content_wrap}>
          <div className={`${Style.icon_wrap} d-flex `}>
            <div className={Style.icon}>
              <figure className="mb-0">
                <Image src={props?.icon} priority width={40} height={40} alt="icon" />
              </figure>
              <div className={Style.hover_content_ttl}>
                <p>
                  {/* <span>141</span> IT companies in the Querataro state. */}
                  <span>{props?.count}</span> {props?.subtitle}
                </p>
              </div>
            </div>

            {width <= 992 ? (
              <div className="minus">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="2"
                    viewBox="0 0 19 2"
                    fill="none"
                  >
                    <path d="M1 1H18" stroke="white" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </span>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className={Style.hover_content_text}>
            <ul>{parse(`${props?.description}`)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StateFactcCard;
