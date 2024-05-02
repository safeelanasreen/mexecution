import { useRef, useState, useEffect } from "react";
import LocationCard from "../utils/LocationCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Style from "./LocationOther.module.scss";
import Icon from "../Layout/Icons";
import { useRouter } from "next/router";
import { getPageContent } from "../../../lib/pages";
import { parseCookies } from "nookies";

const LocationOther = ({ props }) => {
  const [locationsData, setLocationsData] = useState(props?.data?.locations);
  const [init, setInit] = useState(false);
  const parse = require("html-react-parser");

  const cookies = parseCookies();

  let langCookie = cookies?.lang;

  const handleLocationFilter = (id) => {
    var url = new URL(window.location.href);
    url.searchParams.set("location", id);
    url.searchParams.set("language", langCookie);
    window.history.pushState(
      { ...window.history.state, as: url.href, url: url.href },
      "",
      url.href
    );

    const myEvent = new CustomEvent("routeChange");
    window.dispatchEvent(myEvent);
  };

  useEffect(() => {
    setInit(true);
  }, []);

  const router = useRouter();

  const pathId = router?.query;

  useEffect(() => {
    if (window?.location?.search) {
      getData(window?.location?.search);
    }
    const myFunc = () => {
      getData(window?.location?.search);
    };

    window.addEventListener("routeChange", myFunc);

    return () => {
      window.removeEventListener("routeChange", myFunc);
    };
  }, []);

  const getData = async (param) => {
    if (pathId) {
      await getPageContent(`location/filter${param}`)
        .then((r) => {
          setLocationsData(r?.[1]?.data);
        })
        .catch(() => {
          console.log("error");
        });
    }
  };
  return (
    <>
      {locationsData?.length > 0 && (
        <section className={Style.mx_location_others}>
          <div className="container">
            <div className={`${Style.head_wrap} text-lg-center `}>
              <h2 className={`h4`}>{props?.data?.title}</h2>
              <p className="mb-0">{parse(`${props?.data?.description}`)}</p>
            </div>

            <div className={`position-relative ${Style.slider_wrap}`}>
              {init && (
                <Swiper
                  spaceBetween={15}
                  pagination={true}
                  modules={[Pagination]}
                  className={`${Style.board_swiper} slider`}
                  breakpoints={{
                    0: {
                      spaceBetween: 20,
                      slidesPerView: 1.13,
                    },
                    768: {
                      spaceBetween: 20,
                      slidesPerView: 2,
                    },
                    992: {
                      spaceBetween: 15,
                      slidesPerView: 3,
                    },
                    1500: {
                      spaceBetween: 15,
                      slidesPerView: 4,
                    },
                  }}
                >
                  {locationsData?.map((item, key) => {
                    return (
                      <SwiperSlide key={key}>
                        <LocationCard props={item} handleLocationFilter={handleLocationFilter} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default LocationOther;
