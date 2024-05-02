import { useRef, useState, useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import Nav from "react-bootstrap/Nav";
import Style from "./HomePartners.module.scss";
import Image from "next/image";
import Link from "next/link";
import SwiperCore, { Navigation, FreeMode } from "swiper";
import Pagination from "../utils/Pagination";
import PartnerCard from "../utils/PartnerCard";
import { useHomePartner } from "./useHomePartner";
import CommonSlider from "../utils/CommonSlider";
import { useWindowSize } from "../../logic/useDimension";
import NoData from "../utils/NoData";
import Animate from "../Animate";

// import FaqBanner from "../FaqBanner";
// import FaqAccordion from "../FaqAccordion";
// import LocationListingShimmer from "../LocationListingShimmer";    

const HomePartners = ({ props }) => {
  const { category, active, categoryList, init, setInit, partnersList } = useHomePartner({
    ...props,
  });

  const { width } = useWindowSize();

  const [listingView, setListingView] = useState(false);
  const [swiper, setSwiper] = useState(null);

  const handleClick = () => {
    setListingView(!listingView);
  };

  useEffect(() => {
    partnersList("All");
  }, []);

  useEffect(() => {
    !swiper?.destroyed && width < 992 && swiper.destroy(true, true);
  }, [swiper]);

  const handleScroll = () => {
    if (width <= 992) {
      const element = document.getElementById("scroll_id");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  const sliderTransitionDelay = .1;


  return (
    <>
      <section className={Style.mx_partners_sec}>
        <div className={Style.service_head}>
          <div className="container text-center ">
            <Animate className={`${Style.head_wrap} `}>
              <h2 className="h2 fade-up">{props?.data?.title}</h2>
              <p className="fade-up d1">{props?.data?.description}</p>
            </Animate>

            <Animate className={`${Style.nav_wrap} `}>
              <Nav variant="pills" className="row">
                <div className={`position-relative fade-up ${Style.slider_wrap}`}>
                  <CommonSlider
                    pagination={true}
                    slidesPerView={"auto"}
                    freeMode={true}
                    spaceBetween={13}
                    modules={[FreeMode, Navigation]}
                    className={`${Style.sub_nav_slider}  slider`}
                    onSwiper={setSwiper}
                  >
                    {categoryList?.map((data, i) => {
                      return (
                        <SwiperSlide key={i} className={`w-auto ${Style.nav_slider}`}>
                          <Nav.Item>
                            <Nav.Link
                              className={`${active == data?.name ? "active" : ""}`}
                              onClick={() => {
                                partnersList(data?.name);
                                handleScroll();
                              }}
                            >
                              {data?.name}
                            </Nav.Link>
                          </Nav.Item>
                        </SwiperSlide>
                      );
                    })}
                  </CommonSlider>
                </div>
              </Nav>
            </Animate>
          </div>
        </div>
        <Animate className={`${Style.service_body}`} id="scroll_id">
          <div className="container">
            <div className={`position-relative ${Style.slider_wrap}`}>
              {category?.length !== 0 ? (
                <CommonSlider

                  spaceBetween={20}
                  className={`${Style.board_swiper} slider`}
                  breakpoints={{
                    0: {
                      spaceBetween: 25,
                      slidesPerView: 1.5,
                    },
                    768: {
                      spaceBetween: 30,
                      slidesPerView: 2,
                    },
                    992: {
                      spaceBetween: 22,
                      slidesPerView: 4,
                    },
                    1500: {
                      spaceBetween: 28,
                      slidesPerView: 5,
                    },
                  }}
                >
                  <>
                    {category?.map?.((data, i) => {
                      return (
                        <SwiperSlide key={i}>
                          <div className={`${Style.item} fade-up h-100`}
                            style={{
                              transitionDelay: `calc(${sliderTransitionDelay}s * ${i})`, // Add the additional delay after the initial delay
                            }}>
                            <PartnerCard props={data} />
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </>
                </CommonSlider>
              ) : (
                <NoData />
              )}
            </div>

            <div className="text-center">
              <Link href={`${props?.data?.link?.url}`} className="button button-primary fade-up">
                <span>View All</span>
              </Link>
            </div>
          </div>
        </Animate>
        <div className={Style.mx_partners_sec_bg}>
          <div className={Style.img}>
            <div className="ratio">
              <Image src={"/images/banner/partner_bg_rect.png"} fill />
            </div>
          </div>
        </div>
      </section>
      {/* <FaqBanner />
      <FaqAccordion/> */
        // <LocationListingShimmer/> 
      }
    </>
  );
};

export default HomePartners;
