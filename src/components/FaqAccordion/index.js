import Style from "./FaqAccordion.module.scss";
import { useWindowSize } from "../../logic/useDimension";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";

const FaqAccordion = ({ props }) => {
  const { width } = useWindowSize();
  const [isActive, setIsActive] = useState("0");

  return (
    <section className={Style.mx_faq_sec}>
      <div className="container">
        <div className={`${Style.faq_accordion}`}>
          <Accordion
            className={Style.accordion}
            defaultActiveKey="0"
            onSelect={(e) => {
              setIsActive(e);
            }}
          >
            {props?.data?.accordion?.map((item, i) => {
              return (
                <Accordion.Item
                  eventKey={`${i}`}
                  key={i}
                  className={`  ${isActive === `${i}` ? "active" : ""}`}
                >
                  <Accordion.Header>{item?.title}</Accordion.Header>
                  <Accordion.Body>{item?.description}</Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
export default FaqAccordion;
