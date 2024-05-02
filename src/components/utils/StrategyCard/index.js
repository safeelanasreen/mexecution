import Image from "next/image";
import Icon from "../../Layout/Icons";
import Style from "./StrategyCard.module.scss";
import { useState } from "react";


import Assets from "../../Layout/CommonLayout/assets";
import ContentModal from "../ContentModal";

const StrategyCard = ({ props, i }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className={Style.strategy_card} key={i}>
        <div className={Style.strategy_card_img}>
          <figure className="ratio">
            <Image src={props?.image?.url} fill alt="strategy-1" />
          </figure>
        </div>
        <div className={Style.strategy_card_content}>
          <h5 className={Style.strategy_card_content_ttl}>{props?.title}</h5>
          <div className={Style.description}>
            <p className="state-des">{props?.description}</p>
          </div>

          <div
            onClick={handleShow}
            // href={props?.link?.url || ""}
            className={`${Style.strategy_card_link} d-flex align-items-center`}
          >
            <span>
              <Icon icon="plus" size={12} />
            </span>
            <span>{props?.link?.title}</span>
          </div>
        </div>
      </div>
      {/* <Modal
        centered
        size="lg"
        show={show} onHide={handleClose} animation={false} className={Style.strategy_card_modal}>
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>
          <div className={`d-flex flex-column flex-md-row ${Style.modal_wrap}`}>
            <div className={Style.img_area}>
              <figure className="mb-0 ratio">
                <Image src={props?.image?.url}  fill alt="engineer" />
              </figure>
            </div>
            <div className={Style.text_area_wrap}>
              <div className={Style.text_area}>
                <h2 className={Style.text_ttl}>{props?.title}</h2>
                <div className={Style.content_wrap}>
                  <p>{props?.description}</p>
                </div>
              </div>

            </div>


          </div>

        </Modal.Body>

      </Modal> */}
      <ContentModal show={show} handleClose={handleClose} props={props}/>
    </>
  );
};
export default StrategyCard;
