import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import SkilledLaborAccordion from "../SkilledLaborAccordion";
import Image from "next/image";
import { useWindowSize } from "../../logic/useDimension";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./StateLaborForce.module.scss";

const StateLaborForce = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();
  return (
    <section className={Style.section}>
      <div className="container">
        <div className={Style.section_ttl_wrap}>
          <h4 className={`state-ttl-2 text-lg-center ${Style.section_ttl}`}>
            {props?.data?.title}
          </h4>
          <p className="state-des text-lg-center mb-0">{parse(props?.data?.description)}</p>
        </div>

        <SkilledLaborAccordion props={props} />

        {width >= 768 ? (
          <div className={Style.tab_wrap}>
            <Tab.Container id="state-labor-tab" defaultActiveKey="0">
              <Row className="justify-content-between">
                <Col md={4}>
                  <Nav variant="pills" className="flex-column">
                    {props?.data?.category?.map((item, index) => (
                      <Nav.Item>
                        <Nav.Link eventKey={index}>{item?.title}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Col>

                <Col md={7} xl={8}>
                  {props?.data?.category?.map((item, index) => (
                    <Tab.Content>
                      <Tab.Pane eventKey={index}>
                        <div className={Style.tab_img}>
                          <figure className="ratio">
                            <Image src={item?.image} alt="tab-img" fill />
                          </figure>
                        </div>
                        <div className={Style.tab_content}>
                          <p className={`state-des  ${Style.content_p}`}>{item?.description}</p>
                          <ul>{parse(`${item?.sub_description}`)}</ul>
                        </div>
                        {/* tab data end */}
                      </Tab.Pane>
                    </Tab.Content>
                  ))}
                </Col>
              </Row>
            </Tab.Container>
          </div>
        ) : (
          ""
        )}
        <div className={`${Style.section_bottom} d-flex`}>
          {props?.data?.detail_card.map((item, index) => (
            <div className={Style.universities} key={index}>
              <h5 className={Style.section_bottom_ttl}>{item?.count}</h5>
              <p className="mb-1">{item?.category}</p>
              <p className="mb-0">{item?.subcategory}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StateLaborForce;
