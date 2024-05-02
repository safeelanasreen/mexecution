import { SwiperSlide } from "swiper/react";
import useIntersectionObserver from "../../../logic/useIntersectionObserver";
import SwiperCore, { Navigation } from "swiper";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import ServiceDetailCard from "../../utils/ServiceDetailCard";
import Style from "./ServicesDesktopView.module.scss";
import CommonSlider from "../../utils/CommonSlider";
import Link from "next/link";
import Animate from "../../Animate";

const ServicesDesktopView = ({ props }) => {
  const ref = useIntersectionObserver({ threshold: 0.1 });
  const navTransitionDelay = .1;

  return (
    <section className={Style.service} ref={ref}>
      <Tab.Container id="services-tab" defaultActiveKey="0">
        <div className={Style.service_head}>
          <div className="container ">
            <Animate className={`row align-items-end ${Style.title_head}`}>
              <div className="col-lg">
                <div className={`${Style.head_wrap}`}>
                  <h2 className="h2 fade-up">{props?.data?.title}</h2>
                  <p className="mb-0 fade-up d1">{props?.data?.description}</p>
                </div>
              </div>
            </Animate>

            <Animate className={`${Style.nav_wrap}`}>
              <Nav variant="pills" className="row" justify>
                {props?.data?.services?.map((item, i) => {
                  return (
                    <Nav.Item key={i}
                      className={`${Style.item} fade-up`}
                      style={{
                        transitionDelay: `calc(${navTransitionDelay}s * ${i})`, // Add the additional delay after the initial delay
                      }}>
                      <Nav.Link eventKey={`${i}`}>{item?.category}</Nav.Link>
                    </Nav.Item>
                  );
                })}
              </Nav>
            </Animate>
          </div>
        </div>
        <Animate
          className={Style.service_body}
        //  style={{ backgroundImage: `url(${Assets.shape_map})` }}
        >
          <div className="container">
            <Tab.Content>
              {props?.data?.services?.map((item, i) => {
                return (
                  <Tab.Pane key={i} eventKey={`${i}`}>
                    <div className={`position-relative ${Style.slider_wrap}`}>
                      <CommonSlider
                        spaceBetween={20}
                        modules={[Navigation]}
                        className={`${Style.board_swiper} slider`}
                        breakpoints={{
                          992: {
                            spaceBetween: 22,
                            slidesPerView: 4,
                          },
                          1500: {
                            spaceBetween: 28,
                            slidesPerView: 4,
                          },
                        }}
                      >
                        {item?.data?.map((item, i) => {
                          return (
                            <SwiperSlide key={i}>
                              <div className="fade-up h-100" style={{
                                transitionDelay: `calc(${navTransitionDelay}s * ${i})`, // Add the additional delay after the initial delay
                              }}>
                                <ServiceDetailCard data={item} i={i} />
                              </div>
                            </SwiperSlide>
                          );
                        })}
                      </CommonSlider>
                    </div>
                  </Tab.Pane>
                );
              })}
            </Tab.Content>
          </div>
        </Animate>
      </Tab.Container>
    </section>
  );
};

export default ServicesDesktopView;
