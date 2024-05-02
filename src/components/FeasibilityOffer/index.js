import Style from "./FeasibilityOffer.module.scss";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
import Assets from "../Layout/CommonLayout/assets";
import Image from "next/image";
import { useWindowSize } from "../../logic/useDimension";
import { useState } from "react";
import feasibilitypage from "../../../pages/api/feasibilitypage";
import ImportCard from "../utils/ImportCard";

const FeasibilityOffer = ({ props }) => {
  const { width } = useWindowSize();
  const parse = require("html-react-parser");
  const [isActive, setIsActive] = useState("");

  return (
    <section className={Style.offer}>
      <div className="container position-relative">
        <div className="row">
          <div className={`${Style.col_left} col-lg-5`}>
            <div className={Style.offer_img}>
              {width < 992 ? <h2 className="h3">{props?.data?.title}</h2> : ""}
              <figure className="ratio">
                <Image src={props?.data?.image} fill alt="offer" quality={98} />
              </figure>
            </div>
          </div>
          <div className={`${Style.col_right} col-lg-7`}>
            <div className={` ${Style.offer_head}`}>
              {width >= 992 ? <h2 className="h3">{props?.data?.title}</h2> : ""}

              {width >= 992 ? <div className="mb-4">{parse(`${props?.data?.description}`)}</div> : ""}

              <div className="accordion_primary">
                <Accordion
                  defaultActiveKey={"0"}
                  onSelect={(e) => {
                    setIsActive(e);
                  }}
                >
                  {props?.data?.accordion.map((item, i) => {
                    return (
                      <Accordion.Item
                        eventKey={i}
                        key={i}
                        className={` ${isActive === i ? "active" : ""}`}
                      >
                        <Accordion.Header>{item?.title}</Accordion.Header>
                        <Accordion.Body>
                          <div className={Style.content}>{parse(`${item?.description}`)}</div>
                        </Accordion.Body>
                      </Accordion.Item>
                    );
                  })}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
        {/* <ImportCard/> */}
      </div>
    </section>
  );
};

export default FeasibilityOffer;
