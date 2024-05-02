import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import Style from "./LifequalityCard.module.scss";

const LifequalityCard = ({ props }) => {
  return (
    <div className={Style.accordioncard}>
      <div>
      <div className={Style.figure_wrap}>
        <figure className="ratio">
          <Image src={props?.image} alt="card-img" fill />
        </figure>
      </div>
      <div className={Style.text_wrap}>
        <h5 className={Style.ttl}>{props?.title}</h5>
        <div className={Style.desc}>
          <p className="state-des mb-0">{props?.description}</p>
        </div>
      </div>
      </div>
      <div className={Style.accordion_wrap}>
        <Accordion>
          {props?.card?.map((item, index) => (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>{item?.title}</Accordion.Header>
              <Accordion.Body className="state-des">{item?.description}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
export default LifequalityCard;
