import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import Style from "./ServicesMobileView.module.scss";
import { useWindowSize } from "../../../logic/useDimension";
import { useState } from "react";

const ServicesMobileView = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();
  const [first, setfirst] = useState("");

  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index, url) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
      setfirst(url);
    }
  };
  return (
    <>
      <div className={`container ${Style.accordion_mobile}`}>
        <div className={`${Style.head_wrap} text-center`}>
          <h2 className="h2">{props?.data?.title}</h2>
          <p>{props?.data?.description}</p>
        </div>

        {width && (
          <Accordion className={Style.accordion} defaultActiveKey={width >= 992 ? "0" : ""}>
            {props?.data?.services?.map((item, i) => {
              return (
                <Accordion.Item eventKey={`${i}`} key={i}>
                  <Accordion.Header onClick={() => handleAccordionClick(i, item?.data[0]?.url)}>
                    {item?.category}
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className={Style.scroll_wrap}>
                      {item?.data?.map((item, i) => {
                        return (
                          <div
                            className={Style.item}
                            data-index={i + 1}
                            key={i}
                            onScroll={() => setfirst(item?.url)}
                          >
                            <h3>{item?.title}</h3>
                            <div className={Style.content_wrap} data-lenis-prevent>
                              {parse(item?.description)}
                            </div>
                          </div>
                        );
                      })}
                      <div className={Style.service_card_footer}>
                        <Link href={first} key={i}>
                          <span>+</span>Know More
                        </Link>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        )}
        {/* <div className="text-center">
          <Link
            href={props?.data?.link?.url || ""}
            className="button button-secondary"
          >
            <span>{props?.data?.link?.title}</span>
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default ServicesMobileView;
