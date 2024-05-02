import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
import Style from "./FeasibilityMap.module.scss";
import Assets from "../Layout/CommonLayout/assets";
import Image from "next/image";
import MapLocate from "../utils/MapLocate";
import ServiceChooseLocation from "../ServiceChooseLocation";
const FeasibilityMap = ({ props }) => {
  const [isActive, setIsActive] = useState("");
  const parse = require("html-react-parser");
  return (
    <section className={Style.section}>
      <div className="container">
        <div className="row">
          <div className={`${Style.maplocate_wrap} col-lg-6`}>
            <h5 className="h5 text-white">{props?.data?.title}</h5>
            <MapLocate props={props} />
          </div>
          <div className="col-lg-6 text-white">
            <div className={Style.content}>
              <p>{parse(`${props?.data?.description}`)}</p>
              <div className={Style.btn_wrap}>
                {props?.data?.link?.map((item, i) => {
                  return (
                    <Link
                      href={`${item?.url}`}
                      className={`btn btn-sm btn-outline-secondary`}
                      key={i}
                    >
                      {item?.title}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="accordion_primary theme-light">
              <Accordion
                defaultActiveKey={["0"]}
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
                        <div className={Style.description}>{parse(`${item?.description}`)}</div>
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <ServiceChooseLocation props={props} />
    </section>
  );
};
export default FeasibilityMap;
