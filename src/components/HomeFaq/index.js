import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import Style from "./HomeFaq.module.scss";
import { useWindowSize } from "../../logic/useDimension";
import Link from "next/link";
import Animate from "../Animate";
import { useState } from "react";

const HomeFaq = ({ props }) => {
  const { width } = useWindowSize();
  const [isActive, setIsActive] = useState("0");
  const accTransitionDelay = 0.1;

  return (
    <section className={Style.mx_faq_sec}>
      <div className="container">
        {width >= 992 ? "" : <h2 className="h3 text-center text-white">{props?.data?.title}</h2>}
        <div className={`row ${Style.row}`}>
          <Animate className={`${Style.col_left}`}>
            <div className={`${Style.img_wrap} fade-up-img`}>
              <div className={Style.img}>
                <Image src={props?.data?.cover} fill alt="faq cover" quality={90} />
              </div>
            </div>
          </Animate>
          <section className={`text-white ${Style.col_right} `}>
            <Animate>
              {width >= 992 ? <h2 className="h3 fade-up d1">{props?.data?.title}</h2> : ""}
            </Animate>
            <Animate>
              {width && (
                <Accordion
                  className={Style.accordion}
                  defaultActiveKey={width >= 992 && "0"}
                  onSelect={(e) => {
                    setIsActive(e);
                  }}
                >
                  {props?.data?.faqs?.map((faq, i) => {
                    return (
                      <Accordion.Item
                        eventKey={`${i}`}
                        key={i}
                        className={`fade-up ${isActive === `${i}` ? "active" : ""}`}
                        style={{
                          transitionDelay: `calc(${accTransitionDelay}s * ${i} )`, // Add the additional delay after the initial delay
                        }}
                      >
                        <Accordion.Header>{faq?.title}</Accordion.Header>
                        <Accordion.Body>{faq?.description}</Accordion.Body>
                      </Accordion.Item>
                    );
                  })}
                </Accordion>
              )}
            </Animate>
            <Animate>
              <Link className="button fade-up" href="/faq">
                <span>View More</span>
              </Link>
            </Animate>
          </section>
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
