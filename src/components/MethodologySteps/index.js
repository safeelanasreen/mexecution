import { useEffect, useRef, useState } from "react";
import Assets from "../Layout/CommonLayout/assets";
import StepsCard from "../utils/StepsCard";
import Style from "./MethodologySteps.module.scss";
import { useWindowSize } from "../../logic/useDimension";
import Icon from "../Layout/Icons";
import Image from "next/image";
import Link from "next/link";

const MethodologySteps = ({ props }) => {
  const { width } = useWindowSize();
  const parse = require("html-react-parser");

  const itemRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  let sec;
  let intersectItem;

  let options = {
    rootMargin: "-150px 0px 200px 0px",
    threshold: 1.0,
  };
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    intersectItem = document.querySelectorAll(`.${Style.steps_item}`);
    sec = document.querySelectorAll(`.${Style.section_steps}`)[0];
  }
  useEffect(() => {
    intersectItem = document.querySelectorAll(`.${Style.steps_item}`);
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const iObserver = new IntersectionObserver((items) => {
        items.forEach((item) => {
          let index = item.target.elems_index;
          if (item.isIntersecting) {
            item.target.classList.add("active");
            item.target.classList.add("in-view");
            setActiveIndex(index);
          } else {
            item.target.classList.remove("in-view");
          }
        });
      }, options);
      intersectItem.forEach(function (item, index) {
        iObserver.observe(item);
        item.elems_index = index;
      });
    }
  }, []);
  const handleScroll = (i) => {
    let scrollHeight = sec.offsetTop + intersectItem[i].offsetTop;
    window.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <section className={Style.section_steps}>
      <div className="container">
        <div className={Style.section_steps_ttl}>
          <h4 className="title mb-3 ">{props?.data?.title}</h4>
          <p className="text-center">{parse(props?.data?.description)}</p>
        </div>
        <div className={Style.methodology_shadow}>
          <div className={Style.methodology_shadow_strip}></div>
        </div>
        <div className={Style.steps}>
          {props?.data?.steps?.map((item, i) => {
            return (
              <div class={`${Style.steps_item} row align-items-center step-item`} key={i}>
                <div className="col-lg-6">
                  <StepsCard props={item} i={i} />
                </div>
                {width >= 992 ? (
                  <div className="col-lg-6 position-relative">
                    <div
                      className={`${Style.check_box} d-flex justify-content-center align-items-center check-box`}
                    >
                      <Icon icon="tick" size={14} />
                    </div>
                    <div className={`${Style.steps_count} steps-count `}>
                      <p>{`Step ${i + 1}`}</p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}

          {/* <div class={`${Style.steps_item} row align-items-center step-item`}>
            <div className="col-lg-6">
              <StepsCard />
            </div>
            {width >= 992 ? (
              <div className="col-lg-6 position-relative">
                <div
                  className={`${Style.check_box} d-flex justify-content-center align-items-center check-box`}
                >
                  <Icon icon="tick" size={14} />
                </div>
                <div className={`${Style.steps_count} steps-count `}>
                  <p>step 1</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div class={` ${Style.steps_item} row align-items-center step-item`}>
            <div className="col-lg-6">
              <StepsCard />
            </div>
            {width >= 992 ? (
              <div className="col-lg-6 position-relative">
                <div
                  className={`${Style.check_box} d-flex justify-content-center align-items-center check-box`}
                >
                  <Icon icon="tick" size={14} />
                </div>
                <div className={`${Style.steps_count} steps-count `}>
                  <p>step 1</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div class={`${Style.steps_item} row align-items-center step-item`}>
            <div className="col-lg-6">
              <StepsCard />
            </div>
            {width >= 992 ? (
              <div className="col-lg-6 position-relative">
                <div
                  className={`${Style.check_box} d-flex justify-content-center align-items-center check-box`}
                >
                  <Icon icon="tick" size={14} />
                </div>
                <div className={`${Style.steps_count} steps-count `}>
                  <p>step 1</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div> */}
        </div>
      </div>
      <Link href={`/contact-us`} className="btn btn-primary">
        <span>Get in touch with us!</span>
      </Link>
    </section>
  );
};
export default MethodologySteps;
