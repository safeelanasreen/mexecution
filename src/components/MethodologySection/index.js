import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import Link from "next/link";
import { useWindowSize } from "../../logic/useDimension";
import Style from "./MethodologySection.module.scss";
import Animate from "../Animate/Animate";

import Assets from "../Layout/CommonLayout/assets";

const MethodologySection = ({ props }) => {
  const { width } = useWindowSize();
  const parse = require("html-react-parser");

  return (
    <Animate className={Style.methodology}>
      {width >= 1200 ? (
        <div className={` ${Style.methodology_shape} shape`}>
          <figure className="mb-0 ratio">
            <Image src={Assets.methodology_shape} fill alt="shape"></Image>
          </figure>
        </div>
      ) : (
        ""
      )}
      <div className="container">
        <div className="row ">
          <div className={` ${Style.methodology_left} col-lg-6 col-xl-7`}>
            <div className={Style.methodology_contentarea}>
              <h3 className="title mb-3">{props?.data?.title}</h3>
              <div className={Style.methodology_content}>
                <div className="mb-0">{parse(props?.data?.description)}</div>
              </div>
              {width <= 991 ? (
                <div className={Style.methodology_img}>
                  <figure className="mb-0 ratio">
                    <Image src={props?.data?.image} fill alt="methodology-img"></Image>
                  </figure>
                </div>
              ) : (
                ""
              )}

              <div className={Style.methodology_accordion}>
                <Accordion defaultActiveKey={"0"}>
                  {props?.data?.accordion?.map((item, i) => {
                    return (
                      <>
                        <Accordion.Item eventKey={i} key={i}>
                          <Accordion.Header>{item?.title}</Accordion.Header>
                          <Accordion.Body>{parse(`${item?.description}`)}</Accordion.Body>
                        </Accordion.Item>
                      </>
                    );
                  })}
                </Accordion>
              </div>
              <div className={Style.btn_wrap}>
              <Link
                    href={props?.data?.button?.url || ""}
                    className="button "
                  >
                    <span>{props?.data?.button?.title}</span>
                  </Link>
                  </div>
            </div>
          </div>
          {width >= 992 ? (
            <div className={`${Style.methodology_right} col-lg-6 col-xl-5`}>
              <div className={Style.img_section}>
                <figure className="ratio mb-0">
                  <Image src={props?.data?.image} fill alt="methodology-img"></Image>
                </figure>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </Animate>
  );
};
export default MethodologySection;
