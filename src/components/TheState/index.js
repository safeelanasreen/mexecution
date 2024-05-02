import React, { useState } from "react";
import Icon from "../Layout/Icons";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import { useWindowSize } from "../../logic/useDimension";
import Style from "./TheState.module.scss";
import Link from "next/link";

const TheState = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className={Style.section}>
      <div className="container">
        <div className={`row align-items-center ${Style.wrap}`}>
          <div className="col-lg-6">
            <div className={Style.video_wrap}>
              {width <= 992 ? (
                <h2 className={`${Style.ttl} state-ttl`}>
                  {props?.data?.title}
                </h2>
              ) : (
                ""
              )}
              
              <div className={Style.video_content}>
                <div className={Style.video_wrap}>
                  <div className={Style.video_frame}>
                    {parse(`${props?.data?.video}`)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={Style.content_wrap}>
              {width >= 992 ? (
                <h2 className={`${Style.ttl} state-ttl`}>
                  {props?.data?.title}
                </h2>
              ) : (
                ""
              )}
              <div className={Style.content}>
                <div className="state-des">
                  {parse(`${props?.data?.description}`)}
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
export default TheState;
