import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Style from "./HomeProcess.module.scss";
import { useWindowSize } from "../../logic/useDimension";
import Assets from "../Layout/CommonLayout/assets";
import Icon from "../Layout/Icons";
import Link from "next/link";
import { useRouter } from "next/router";
const HomeProcess = ({ props }) => {
  const { width } = useWindowSize();
  const itemRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  let sec;
  let intersectItem;

  let options = {
    rootMargin: "-150px 0px 200px 0px",
    threshold: 1.0,
  };

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    intersectItem = document.querySelectorAll(`.${Style.process_item}`);
    sec = document.querySelectorAll(`.${Style.mx_process_sec}`)[0];
  }
  useEffect(() => {
    intersectItem = document.querySelectorAll(`.${Style.process_item}`);
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
    <section className={Style.mx_process_sec}>
      <div className={Style.head_sticky}>
        <div className="container">
          <div className={`${Style.head_wrap} mx-auto text-center`}>
            <h2 className="h3">{props?.data?.title}</h2>
            {props?.data?.sub_title?.length > 0 && <p className="h4">{props?.data?.sub_title}</p>}
            <p>{props?.data?.description}</p>
          </div>
        </div>
      </div>
      {width >= 992 ? (
        <>
          <div className={Style.shadow_strip_wrap}>
            <div className={Style.shadow_strip}></div>
          </div>
          <div className={Style.scroll_nav}>
            <ul>
              {props?.data?.steps?.map((item, i) => {
                return (
                  <li
                    key={i}
                    tabIndex={i}
                    onClick={() => handleScroll(i)}
                    className={`${activeIndex == i ? Style.active : ""} `}
                  >
                    <span>{(i + 1).toString().padStart(2, "0")}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        ""
      )}
      <div className="container">
        <div className={Style.process_wrap}>
          {props?.data?.steps?.map((item, i) => {
            return (
              <div className={`${Style.process_item} row`} ref={itemRef} key={i}>
                <div className={"col-lg-6"}>
                  <div className={Style.process_item_img}>
                    <Image
                      src={item?.img}
                      fill
                      alt={item?.title}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <div className={"col-lg-6"}>
                  <div className={Style.tick}>
                    <Icon icon="tick" size={11} />
                  </div>
                  <div className={Style.process_item_info}>
                    <span className="text-uppercase h5">Step {(i + 1).toString()}</span>
                    <span className="h4">{item?.title}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {router.asPath == "/" ? (
          <div className={Style.get_in_touch}>
            <Link href={`${props?.data?.button?.url}`} className="btn btn-primary">
              <span>{props?.data?.button?.title}</span>
            </Link>
          </div>
        ) : router.asPath == "/partner-selection" ? (
          <div className={Style.get_in_touch}>
            <Link href="/contact-us" className="btn btn-primary">
              <span>Contact Us</span>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default HomeProcess;
