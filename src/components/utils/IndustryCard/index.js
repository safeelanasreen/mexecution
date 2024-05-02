import Assets from "../../Layout/CommonLayout/assets";
import Icon from "../../Layout/Icons";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Image from "next/image";
import Style from "./IndustryCard.module.scss";
import ContentModal from "../ContentModal";

const IndustryCard = ({ props }) => {
  const parse = require("html-react-parser");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div  className={Style.imagecard} onClick={handleShow}>
      <figure className="ratio mb-0">
        <Image src={props?.image} fill alt="industry-img" />
        <div className={Style.figure_content}>
          <div className={Style.figure_data}>
            <h4 className={Style.figure_data_ttl}>{props?.title}</h4>
            <p className={Style.figure_data_p}>{parse(`${props?.description}`)}</p>
            <div className={`d-flex ${Style.see_more}`}>
              <span>{props?.button?.title}</span>
              <span className={Style.see_more_arrow}>
                <Icon icon="arrow-top" size={12} />
              </span>
            </div>
          </div>
        </div>
      </figure>
    </div>
  <ContentModal  show={show} handleClose={handleClose} props={props}/>
    </>
  );
};
export default IndustryCard;
