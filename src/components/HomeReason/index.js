import Image from "next/image";
import { useState, useEffect } from "react";
import { useWindowSize } from "../../logic/useDimension";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./HomeReason.module.scss";
import Animate from "../Animate";


const HomeReason = ({ props }) => {
  const { width } = useWindowSize();
  const [activeIndex, setActiveIndex] = useState(0);
  const itemTransitionDelay = .1;

  return (
    <section className={Style.mx_reason_sec}>
      <div className="container">
        <Animate>
          <h2 className="h3 text-lg-start fade-up">{props?.data?.title}</h2>
        </Animate>
        <div className={`row ${Style.row}`}>
          <Animate className="col-lg-6 order-lg-1 order-2">
            <div className={Style.reason}>
              {props?.data?.reasons?.map((reason, i) => {
                return (
                  <div
                    className={`${Style.reason_item} ${i == activeIndex ? Style.active : ""
                      } fade-up`}
                    data-index={i}
                    key={i}
                    onMouseOver={() => setActiveIndex(i)}
                    style={{
                      transitionDelay: `calc(${itemTransitionDelay}s * ${i})`, // Add the additional delay after the initial delay
                    }}
                  >
                    <div>
                      <h4
                        data-index={`${(i + 1).toString()}.`}
                      >
                        {" "}
                        {reason?.title}
                      </h4>
                      <p>{reason?.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Animate>

          <Animate className="col-lg-6 order-lg-2 order-1 ">
            <div className={`${Style.img_wrap} position-relative fade-up-img d1`}>
              {props?.data?.reasons?.map((reason, i) => {
                return (
                  <div
                    key={i}
                    className={`${Style.img} ${i == activeIndex ? Style.active : ""
                      } `}
                  >
                    {/* <div className={Style.icon_wrap}>
                      <div className={Style.icon}>
                        <Image
                          src={Assets.shape_graph}
                          fill
                          alt={`decor graph`}
                        />
                      </div>
                    </div> */}
                    <div className={Style.cover}>
                      <Image
                        src={reason?.img}
                        fill
                        alt={`${reason?.title} cover`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default HomeReason;
