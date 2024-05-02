import React from "react";
import Image from "next/image";
import Assets from "../../Layout/CommonLayout/assets";
import Style from "./StepsCard.module.scss";
import { useWindowSize } from "../../../logic/useDimension";

const StepsCard = ({ props, i }) => {
  const { width } = useWindowSize();
  const parse = require("html-react-parser");

  return (
    <div className={`${Style.stepcard} stepcard`}>
      <div className={Style.stepcard_content}>
        <div className={Style.stepcard_img}>
          {width <= 991 ? (
            <div className={Style.responsive_ttl}>
              <h6 className={`${Style.stepcard_ttl} fw-medium mb-3`}>
                <span className="mb-1">{`Step ${i + 1}`} :</span>
                {props?.title}
              </h6>
            </div>
          ) : (
            ""
          )}
          <figure className="ratio mb-0">
            <Image src={props?.img} fill alt="step-1"></Image>
          </figure>
        </div>
        <div className={Style.stepcard_data}>
          {width >= 992 ? (
            <h6 className={`${Style.stepcard_ttl} fw-medium mb-3`}> {props?.title}</h6>
          ) : (
            ""
          )}

          <p className="mb-0 fw-normal">{parse(`${props?.description}`)}</p>
        </div>
      </div>
    </div>
  );
};

export default StepsCard;
