"use client";
import { useEffect, useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Style from "./AssetModal.module.scss";
import Assets from "../../Layout/CommonLayout/assets";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const AssetModal = ({ props }) => {
  const parse = require("html-react-parser");
  const [modalShow, setModalShow] = useState(false);
  // const bodyRef = useRef();

  // calendly

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  });
  

  useEffect(() => {
    // bodyRef.current = document.body;
    const timer = setTimeout(() => {
      setModalShow(true);
    }, 90000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setModalShow(false);

    // setTimeout(() => {
    //     bodyRef.current.style.setProperty('overflow', 'unset',);
    //     bodyRef.current.style.setProperty('padding-right', '0px');
    // }, 500);
    setTimeout(() => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }, 200);
  };

  const phoneNumber = props?.data?.modal_data?.whatsapp;
  const cleanedPhoneNumber = parseInt(phoneNumber?.replaceAll(/[-\s]+/g, ""));

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={Style.asset_modal}
      show={modalShow}
      onHide={handleClose}
    >
      <Modal.Header closeButton className="position-absolute"></Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column flex-md-row">
          <div className={` ${Style.asset_modal_img}`}>
            <figure className={`${Style.modal_bg_img} position-absolute mb-0 `}>
              <Image
                src={props?.data?.modal_data?.modal_image}
                fill
                alt="bg-img"
              ></Image>
            </figure>
            <div className={Style.wrap}>
            <div className={Style.asset_modal_logowrap}>
              <figure className={` ratio ${Style.logo} mb-0`}>
                <Image src={Assets.logomodal} fill alt="modal-img" />
              </figure>
              <p className={`${Style.motto} mb-0`}>{props?.data?.modal_data?.modal_motto}</p>
              </div>
              <div className={Style.img_text_wrap}>
                <h2 className={Style.left_ttl}>
                  {props?.data?.modal_data?.modal_title}
                </h2>
                <p>{props?.data?.modal_data?.modal_description}</p>
              </div>
              <div className={Style.contact_sec}>
                <div
                  className={`d-flex justify-content-between ${Style.contact_sec_top}`}
                >
                  <p>{props?.data?.modal_data?.modal_share_text}</p>
                  <p>Follow us:</p>
                </div>
                <ul
                  className={`d-flex  justify-content-between ${Style.icon_wrap}`}
                >
                  <li>
                    <a
                      href={`https://api.whatsapp.com/send?phone=${cleanedPhoneNumber}`}
                      target="_blank"
                    >
                      <Image
                        src={Assets.modalwtsp}
                        priority
                        alt="wtsp-icon"
                        width={26}
                        height={26}
                      />
                      <span>Whatsapp</span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${props?.data?.modal_data?.email}`}>
                      <Image
                        src={Assets.modalgmail}
                        priority
                        alt="wtsp-icon"
                        width={26}
                        height={26}
                      />
                      <span>Gmail</span>
                    </a>
                  </li>
                  <li>
                    <a href={props?.data?.modal_data?.linkedin} target="_blank">
                      <Image
                        src={Assets.modallinkedin}
                        priority
                        alt="wtsp-icon"
                        width={26}
                        height={26}
                      />
                      <span>Linkedin</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`d-flex   align-items-center   ${Style.asset_modal_text}`}
          >
            <div className={Style.text_wrap}>
              {/* <h3 className={Style.text_ttl}>{props?.data?.modal_data?.modal_form_title}</h3>
                            <div className={Style.appointment}>{parse(`${props?.data?.modal_data?.modal_form_description}`)}</div>
                            <div className={Style.btn_wrap}>
                                <Link href={props?.data?.modal_data?.button?.url || ""}>
                                    <button className='button' >
                                        <span>{props?.data?.modal_data?.button?.title}</span>
                                    </button>
                                </Link>

                            </div> */}
                     
               <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/mexecution/mexecution?hide_event_type_details=1&hide_gdpr_banner=1" 
                style={{ minWidth: "320px", height: "500px" }}
              /> 


            </div>
         
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default AssetModal;
