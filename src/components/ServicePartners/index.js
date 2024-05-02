import PartnerCard from "../utils/PartnerCard";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Style from "./ServicePartners.module.scss";
import Link from "next/link";
import LinkBtn from "../utils/Link";
import { useEffect, useState } from "react";
import { getPageContent } from "../../../lib/pages";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";
import axios from "axios";
import SwiperCore, { Navigation, FreeMode } from "swiper";
import { SwiperSlide } from "swiper/react";
import CommonSlider from "../utils/CommonSlider";
import NoData from "../utils/NoData";
import { parseCookies } from "nookies";
import { useWindowSize } from "../../logic/useDimension";
import PartnerCardShimmer from "../PartnerCardShimmer";
import AssetModal from "../utils/AssetModal";

const ServicePartners = ({ props }) => {
  const [count, setCount] = useState(props?.data?.count);
  const [offSet, setOffSet] = useState(0);
  const [category, setCategory] = useState(0);
  const [contentData, setContentData] = useState(props?.data?.partner);
  const [active, setActive] = useState(0);
  const [location, setLocation] = useState("");
  const [selected, setSelected] = useState("All");
  const [status, setStatus] = useState("idle");
  const [swiper, setSwiper] = useState(null);
  // const [counter, setCounter] = useState(1);

  const { width } = useWindowSize();

  const cookies = parseCookies();

  let langCookie = cookies?.lang;

  const categoryPartnerList = [{ id: 0, name: "All" }, ...props?.data?.category];

  const locationList = [{ id: 0, name: "All" }, ...props?.data?.location];

  const getData = async (cat, perPage, loc, type) => {
    setStatus("pending");

    await getPageContent(
      `service/partner-page/filter?location=${
        loc === "" ? 0 : loc
      }&category=${cat}&offset=${perPage}&limit=${cat === 0 ? 5 : 50}&language=${langCookie}`
    )
      .then((r) => {
        setContentData((state) => (r?.data?.length > 0 ? [...state, ...r?.data] : [...state]));
        setTimeout(() => {
          setStatus("success");
        }, 100);
        setCount(r?.count);
        setActive(cat);
        if (type == "click") {
          handleScrollSection();
        }
      })
      .catch(() => {
        setStatus("error");
      });
  };

  useEffect(() => {
    const controller = new AbortController();
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const getLocationData = async () => {
      if (location || location === 0) {
        const dataLoc = await getPageContent(
          `service/partner-page/filter?location=${location}&category=${category}&offset=${offSet}&limit=${
            category === 0 ? 5 : 50
          }&language=${langCookie}`,
          { cancelToken: source.token, signal: controller.signal }
        );
        setContentData(dataLoc?.data);
        setCount(dataLoc?.count);
        setActive(category);
      }
    };
    getLocationData();
    return () => {
      source.cancel();
    };
  }, [location]);

  useEffect(() => {
    !swiper?.destroyed && width < 992 && swiper.destroy(true, true);
  }, [swiper]);

  const handleScrollSection = () => {
    if (width < 992) {
      document.getElementById("scroll_id_partner").scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
    <section className={Style.mx_partners_sec}>
      <div className={Style.service_head}>
        <div className="container text-center">
          <div className={Style.head_wrap}>
            <h2 className="h2">{props?.data?.title}</h2>
            <p>{props?.data?.description}</p>
          </div>

          <div className={Style.nav_wrap}>
            <Nav variant="pills" className="row">
              <div className={`position-relative ${Style.slider_wrap}`}>
                <CommonSlider
                  //
                  pagination={true}
                  slidesPerView={"auto"}
                  freeMode={true}
                  spaceBetween={13}
                  modules={[FreeMode, Navigation]}
                  className={`${Style.sub_nav_slider}  slider`}
                  onSwiper={setSwiper}
                >
                  {categoryPartnerList?.map((item, key) => {
                    return (
                      <SwiperSlide className={`w-auto ${Style.nav_slider}`}>
                        <Nav.Item key={key}>
                          <Nav.Link
                            className={`${active === item?.id ? "active" : ""}`}
                            onClick={() => {
                              setCategory(item?.id);
                              setContentData([]);
                              setOffSet(0);
                              getData(item?.id, 0, location, "click");
                            }}
                            disabled={category === item?.id ? true : false}
                          >
                            {item?.name}
                          </Nav.Link>
                        </Nav.Item>
                      </SwiperSlide>
                    );
                  })}
                </CommonSlider>
              </div>
            </Nav>
            {width < 992 && <div id="scroll_id_partner"></div>}
            <div className={`${Style.location_wrap} ${width <= 992 ? "d-none" : ""}`}>
              <span>Location:</span>
              <Dropdown align="end">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {selected}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <div className={`${Style.menu_scroll}`}>
                    {locationList?.map((data, index) => {
                      return (
                        <Dropdown.Item
                          key={index}
                          className={`${location === data?.id ? "active" : ""}`}
                          onClick={() => {
                            setLocation(data?.id);
                            setSelected(data?.name);
                          }}
                          eventKey={data?.id}
                        >
                          {data?.name}
                        </Dropdown.Item>
                      );
                    })}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className={`${Style.location_wrap} ${width >= 992 ? "d-none" : ""}`}>
            <span>Location:</span>
            <Dropdown align="end">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selected}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div className={`${Style.menu_scroll}`}>
                  {locationList?.map((data, index) => {
                    return (
                      <Dropdown.Item
                        key={index}
                        className={`${location === data?.id ? "active" : ""}`}
                        onClick={() => {
                          setLocation(data?.id);
                          setSelected(data?.name);
                        }}
                        eventKey={data?.id}
                      >
                        {data?.name}
                      </Dropdown.Item>
                    );
                  })}
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className={Style.service_body}>
        <div className="container">
          {contentData?.length !== 0 ? (
            <div
              className={`row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 ${Style.row}`}
            >
              {status === "pending"
                ? [...Array(count)]?.map(() => {
                    return <PartnerCardShimmer />;
                  })
                : contentData?.map?.((item, key) => {
                    return (
                      <div className={Style.card_wrap} key={key}>
                        <PartnerCard props={item} />
                      </div>
                    );
                  })}
            </div>
          ) : (
            status !== "pending" && <NoData />
          )}

          {count > contentData?.length && status !== "pending" && (
            <div className={`${Style.link_wrap} text-center`}>
              <button
                as="button"
                onClick={() => {
                  setOffSet(offSet + 5);
                  getData(category, offSet + 5, location, "loadMore");
                }}
                className="btn btn-link"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
    <AssetModal props={props}/>
    </>
  );
};
export default ServicePartners;
