import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import { useWindowSize } from "../../logic/useDimension";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./SkilledLaborAccordion.module.scss";

const SkilledLaborAccordion = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();

  return (
    <div>
      {width <= 767.98 ? (
        <div className={Style.mob_accordion_wrap}>
          <Accordion defaultActiveKey="0">

          {props?.data?.category?.map((item, index) => (
            <Accordion.Item eventKey={index}>
              <Accordion.Header>
                {item?.title}
              </Accordion.Header>
              <Accordion.Body>
                <div className={Style.figure_wrap}>
                  <figure className="ratio">
                    <Image
                      src={item?.image}
                      alt="car-with-man"
                      fill
                    ></Image>
                  </figure>
                </div>
                <div className={Style.text_wrap}>
                  <p className="state-des">
                  {item?.description}
                  </p>
                </div>
                <div className={Style.list_wrap}>
                <ul>{parse(`${item?.sub_description}`)}</ul>
                </div>
               
              </Accordion.Body>
            </Accordion.Item>
          ))}
          </Accordion>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default SkilledLaborAccordion;
