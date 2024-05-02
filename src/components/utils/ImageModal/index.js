import React from "react";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import Style from "./ImageModal.module.scss";

const ImageModal = ({ show, handleClose, modalImage ,props}) => {

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      className={Style.infrastructure_modal}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className={Style.modal_img}>
          <figure className="mb-0 ratio">
            <Image src={modalImage} fill alt="map"></Image>
          </figure>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;