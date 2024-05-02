import IconHoverItem from "../utils/IconHoverItem";
import Accordion from "react-bootstrap/Accordion";
import Style from "./HomeEco.module.scss";
import Image from "next/image";
import { useWindowSize } from "../../logic/useDimension";
import Animate from "../Animate";
Animate
const HomeEco = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();
  const accTransitionDelay = .1;

  return (
    <section className={Style.mx_eco_sec}>
      <div className="container">
        <div className="row row-cols-lg-2 ">
          <Animate className={Style.col_left}>
            <div className={Style.content_wrap}>
              <h2 className="h3 fade-up">{props?.data?.title}</h2>
              <p className="fade-up d1">{parse(props?.data?.description)}</p>
            </div>
          </Animate>
          <Animate className={`${Style.col_right}`}>
            <div className={Style.items}>
              {width && <Accordion className={Style.accordion} defaultActiveKey={width >= 992 ? "0" : ""}>
                {props?.data?.services?.map((item, i) => {
                  return (
                    <Accordion.Item eventKey={`${i}`} key={i}
                    className="fade-up"
                    style={{
                      transitionDelay: `calc(${accTransitionDelay}s * ${i})`, // Add the additional delay after the initial delay
                    }} 
                    >
                      <Accordion.Header>
                        <div className={Style.item}>
                          <div className={Style.item_body}>
                            <div className={Style.item_img}>
                              <div className={Style.icon}>
                                <Image src={item?.img} fill alt={item?.title} />
                              </div>
                            </div>
                            <div className={Style.item_info}>
                              <h4 className="mb-0">{item?.title}</h4>
                            </div>
                          </div>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>{item?.description}</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>}

            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default HomeEco;
