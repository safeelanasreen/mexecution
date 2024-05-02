import Accordion from "react-bootstrap/Accordion";
import Style from "./HomeProblem.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useWindowSize } from "../../logic/useDimension";
import Animate from "../Animate";

const HomeProblem = ({ props }) => {
  const [isActive, setIsActive] = useState("0");
  const { width } = useWindowSize();

  const parse = require("html-react-parser");
  const sliderTransitionDelay = 0.1;

  return (
    <section className={Style.mx_home_problem}>
      <div className="container">
        <div className="row">
          <div className={`${Style.col_left} `}>
            <Animate>
              <h2 className="h2 fade-up">{props?.data?.title}</h2>
            </Animate>

            {width >= 992 ? (
              <Animate className="accordion_primary">
                <Accordion
                  defaultActiveKey="0"
                  onSelect={(e) => {
                    setIsActive(e);
                  }}
                >
                  {props?.data?.data?.map((item, i) => {
                    return (
                      <Accordion.Item
                        eventKey={`${i}`}
                        key={i}
                        className={` ${isActive === `${i}` ? "active" : ""} fade-up`}
                        style={{
                          transitionDelay: `calc(${sliderTransitionDelay}s * ${i})`, // Add the additional delay after the initial delay
                        }}
                      >
                        <Accordion.Header>
                          <div className={Style.acc_icon}>
                            <Image src={item?.problems?.img} fill alt={item?.problems?.title} />
                          </div>
                          <span>{item?.problems?.title}</span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className={Style.content}>
                            <p className="mb-0">{parse(`${item?.problems?.description}`)}</p>
                          </div>
                          {width < 992 ? (
                            <div className={Style.solution}>
                              <div className={Style.img}>
                                <div className="ratio">
                                  <Image
                                    src={item?.solution?.img}
                                    alt={item?.problems?.title}
                                    fill
                                  />
                                </div>
                              </div>
                              <h4 className="h4">{item?.problems?.title}</h4>
                              <p>{parse(`${item?.problems?.description}`)}</p>
                            </div>
                          ) : (
                            ""
                          )}
                        </Accordion.Body>
                      </Accordion.Item>
                    );
                  })}
                </Accordion>
              </Animate>
            ) : (
              ""
            )}

            {width <= 992 ? (
              <div className="accordion_primary">
                <Accordion
                  // defaultActiveKey="0"
                  onSelect={(e) => {
                    setIsActive(e);
                  }}
                >
                  {props?.data?.data?.map((item, i) => {
                    return (
                      <Accordion.Item
                        eventKey={`${i}`}
                        key={i}
                        // className={` ${isActive === `${i}` ? "active" : ""}`}
                      >
                        <Accordion.Header>
                          <div className={Style.acc_icon}>
                            <Image src={item?.problems?.img} fill alt={item?.problems?.title} />
                          </div>
                          <span>{item?.problems?.title}</span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className={Style.content}>
                            <p className="mb-0">{parse(`${item?.problems?.description}`)}</p>
                          </div>
                          {width < 992 ? (
                            <div className={Style.solution}>
                              <div className={Style.img}>
                                <div className="ratio">
                                  <Image
                                    src={item?.solution?.img}
                                    alt={item?.problems?.title}
                                    fill
                                  />
                                </div>
                              </div>
                              <h4 className="h4">{item?.solution?.title}</h4>
                              <p>{parse(`${item?.solution?.description}`)}</p>
                            </div>
                          ) : (
                            ""
                          )}
                        </Accordion.Body>
                      </Accordion.Item>
                    );
                  })}
                </Accordion>
              </div>
            ) : (
              ""
            )}
          </div>

          {width >= 992 ? (
            <Animate className={`${Style.col_right} `}>
              <div className={`${Style.solution_wrap}`}>
                {props?.data?.data?.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={`${Style.solution_item}  ${
                        isActive === `${i}` ? Style.active : ""
                      }`}
                    >
                      <div className={`${Style.img} fade-up-img d1`}>
                        <div className="ratio">
                          <Image src={item?.solution?.img} fill alt="problems" />
                        </div>
                      </div>
                      <h4 className="h4 fade-up d2">
                        <span>{item?.solution?.title}</span>
                      </h4>
                      <p className="fade-up d2">{parse(`${item?.solution?.description}`)}</p>
                    </div>
                  );
                })}
              </div>
            </Animate>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};
export default HomeProblem;
