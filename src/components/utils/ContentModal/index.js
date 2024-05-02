import React from "react";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import Style from "./ContentModal.module.scss";

const ContentModal = ({ show, handleClose, props }) => {
  const parse = require("html-react-parser");
  return (
    <Modal
      centered
      size="lg"
      show={show}
      onHide={handleClose}
      animation={false}
      className={Style.strategy_card_modal}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className={`d-flex flex-column flex-md-row ${Style.modal_wrap}`}>
          <div className={Style.img_area}>
            <figure className="mb-0 ratio">
              <Image src={props?.image?.url || props?.image} fill alt="image" />
            </figure>
          </div>
          <div className={Style.text_area_wrap}>
            <div className={Style.text_area}>
              <h2 className={Style.text_ttl}>{props?.title}</h2>
              <div className={Style.content_wrap}>
                <p>{parse(`${props?.description}`)}</p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContentModal;