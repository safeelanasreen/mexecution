import Image from "next/image";
import Link from "next/link";
import Style from "./PartnerCard.module.scss";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/router";
import Assets from "../../Layout/CommonLayout/assets";

const PartnerCard = ({ props }) => {
  const parse = require("html-react-parser");
  const router = useRouter();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div
        className={`${Style.partner_card}  aria-labelledby="partner-card" ${
          router.asPath == "/partner-selection" ? Style.secondary_theme : ""
        }`}
        onClick={handleShow}
      >
        <div className={Style.partner_card_img}>
          <div className={Style.img}>
            {props?.img?.length > 0 ? (
              <Image
                src={props?.img}
                fill
                alt={props?.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <Image
                src={Assets.partnerAvatar}
                fill
                alt={props?.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
          </div>
        </div>
        <div className={Style.partner_card_info}>
          <span className="h4">{props?.name} </span>
          {/* <h6>{props?.category}</h6> */}
          <p>{parse(`${props?.experience}`)}</p>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement={"end"} className={Style.offcanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={Style.canvas_image}>
            <div className="ratio">
              {props?.img?.length > 0 ? (
                <Image src={props?.img} fill alt={props?.name} />
              ) : (
                <Image src={Assets.partnerAvatar} fill alt={props?.name} />
              )}
            </div>
          </div>
          <h2 className="h2">{props?.name}</h2>
          <div className={Style.info}>
            {props?.category && <p> {props?.category}</p>}
            <p>{props?.experience} </p>
          </div>
          <div className={`${Style.field} `}>{parse(`${props?.description}`)}</div>
          <a class="btn btn-primary" href={`mailto:${props?.mail}?subject=${props?.subject}`}>
            <span>Send message</span>
          </a>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default PartnerCard;
