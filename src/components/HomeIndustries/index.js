import { useState, useEffect } from "react";
import Assets from "../Layout/CommonLayout/assets";
import Image from "next/image";
import Style from "./HomeIndustries.module.scss";
import Icon from "../Layout/Icons";
import { useWindowSize } from "../../logic/useDimension";
import Link from "next/link";
import { useRouter } from "next/router";
import Animate from "..//Animate";
Animate
const HomeIndustries = ({ props }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = useWindowSize();
  const router = useRouter();

  useEffect(() => {
    document.querySelectorAll(`.${Style.industry_item}`).forEach(function (item) {
      item.addEventListener("mouseover", function () {
        setActiveIndex(item.getAttribute("data-index"));
      });
    });
    return () => {};
  }, []);

  return (
    <Animate
      className={`${Style.mx_industries_sec} ${
        router.asPath === "/supplier-and-distributor" ? Style.add_on : ""
      }`}
    >
      <div className="container">
        <h2 className="h2 fade-up">{props?.data?.title}</h2>
        <div className={`row ${Style.industries}`}>
          <div className={`${Style.col_left} fade-up d1`}>
            {props?.data?.industries?.map((item, i) => {
              return (
                <Link
                  href={{ pathname: `${item?.url}`, query: { value: item?.id } }}
                  key={i}
                  className={Style.item_link}
                >
                  <div
                    className={`${Style.industry_item} ${i == activeIndex ? Style.active : ""}`}
                    data-index={i}
                  >
                    <span>0{i + 1}</span>
                    <h3>{item.title}</h3>
                    <div className={Style.industry_item_arrow}>
                      <Icon icon="arrow-top" size={width >= 992 ? "21" : "14"} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className={`${Style.col_right} d-none d-xl-block fade-up-img d2`}>
            <div className={Style.cover_wrap}>
              <div className={Style.cover}>
                {props?.data?.industries?.map((item, i) => {
                  return (
                    <div className={`${Style.img} ${i == activeIndex ? Style.active : ""}`} key={i}>
                      <Image
                        src={`${item?.img}`}
                        fill
                        alt={item?.title}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={98}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={`${Style.btn_wrap} fade-up d2`}>
          <Link href={`${props?.data?.link?.url}`} className="button button-primary">
            <span>View All</span>
          </Link>
        </div>
      </div>
      <div className={`${Style.bg} fade d2` }>
        <div className={Style.img_circle}>
          <div className="ratio">
            <Image
              src={"/images/banner/industries_bg.png"}
              fill
              alt="decor"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </Animate>
  );
};

export default HomeIndustries;
