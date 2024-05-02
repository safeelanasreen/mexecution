import Style from "./FeasibilityVisit.module.scss";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
import Assets from "../Layout/CommonLayout/assets";
import Image from "next/image";
import { useState } from "react";

const FeasibilityVisit = ({ props }) => {
  const [isActive, setIsActive] = useState("");

  const parse = require("html-react-parser");

  return (
    <section className={Style.visit}>
      <div className="container ">
        <div className={Style.visit_wrap}>
          <div className={`text-center ${Style.visit_wrap_head}`}>
            <h2 className="h3 text-primary">{props?.data?.title}</h2>
            <div>{parse(`${props?.data?.description}`)} </div>
          </div>
          <div className="accordion_primary">
            <Accordion
              defaultActiveKey="0"
              onSelect={(e) => {
                setIsActive(e);
              }}
            >
              {props?.data?.accordion?.map((item, i) => {
                return (
                  <Accordion.Item
                    eventKey={i}
                    key={i}
                    className={` ${isActive === i ? "active" : ""}`}
                  >
                    <Accordion.Header>{item?.title}</Accordion.Header>
                    <Accordion.Body>
                      <div className={Style.content}>
                        <div className={Style.content_img}>
                          <div className={Style.content_img_wrap}>
                            <figure className="ratio">
                              <Image src={item?.img} fill alt="" />
                            </figure>
                          </div>
                        </div>

                        <div className={`d-flex align-items-center  ${Style.content_text}`}>
                          <p className="mb-0">{parse(`${item?.description}`)}</p>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeasibilityVisit;
