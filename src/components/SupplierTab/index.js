import Detailcard from "../utils/Detailcard";
import Accordion from "react-bootstrap/Accordion";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import TimelineSlide from "../TimelineSlide";
import Style from "./SupplierTab.module.scss";
import { useState } from "react";
import { useWindowSize } from "../../logic/useDimension";

const SupplierTab = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();
  const [isActive, setIsActive] = useState("");

  return (
    <section className={Style.mx_supplier_tab}>
      <div className="container">
        {width >= 992 ? (
          <Tab.Container id="industry-tab" defaultActiveKey="0">
            <Nav variant="pills" justify>
              {props?.data?.tab?.map((item, i) => {
                return (
                  <Nav.Item key={i} className={Style.nav_item}>
                    <Nav.Link eventKey={`${i}`}>{item?.nav_title}</Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
            <Tab.Content>
              {props?.data?.tab?.map((item, i) => {
                return (
                  <Tab.Pane eventKey={`${i}`} className={Style.tab_item} key={i}>
                    <div className={`row ${Style.row_content}`}>
                      <div className={`col-12 ${Style.col_left}`}>
                        <h5 className={`${Style.tab_head} h5`}>{item?.title}</h5>
                      </div>
                      <div className={`col-12 ${Style.col_right}`}>
                        <div className={`${Style.tab_description} `}>
                          {parse(`${item?.description}`)}
                        </div>
                      </div>
                    </div>
                    <div className={Style.tab_supplier_card}>
                      {item?.is_timeline ? (
                        <TimelineSlide props={item} />
                      ) : (
                        <div className="row row-cols-1 row-cols-sm-2  row-cols-xl-4">
                          {item?.data?.map((item, i) => {
                            return (
                              <div key={i} className="col">
                                <Detailcard theme="supplier_card" {...item} />
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </Tab.Pane>
                );
              })}
            </Tab.Content>
          </Tab.Container>
        ) : (
          // <Accordion defaultActiveKey="0">
          //     <Accordion.Item eventKey="0">
          //         <Accordion.Header>Accordion Item #1</Accordion.Header>
          //         <Accordion.Body>
          //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          //             minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          //             aliquip ex ea commodo consequat. Duis aute irure dolor in
          //             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          //             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          //             culpa qui officia deserunt mollit anim id est laborum.
          //         </Accordion.Body>
          //     </Accordion.Item>
          //     <Accordion.Item eventKey="1">
          //         <Accordion.Header>Accordion Item #2</Accordion.Header>
          //         <Accordion.Body>
          //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          //             minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          //             aliquip ex ea commodo consequat. Duis aute irure dolor in
          //             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          //             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          //             culpa qui officia deserunt mollit anim id est laborum.
          //         </Accordion.Body>
          //     </Accordion.Item>
          // </Accordion>
          <div className={`${Style.supplier_acc} accordion_primary`}>
            <Accordion
              defaultActiveKey={["0"]}
              onSelect={(e) => {
                setIsActive(e);
              }}
            >
              {props?.data?.tab?.map((item, i) => {
                return (
                  <Accordion.Item
                    eventKey={i}
                    key={i}
                    className={` ${isActive === i ? "active" : ""}`}
                  >
                    <Accordion.Header>{item?.title}</Accordion.Header>
                    <Accordion.Body>
                      <div className={Style.content}>
                        <div className={`d-flex align-items-center  ${Style.content_text}`}>
                          <p className="mb-0">
                            Several thousand tier suppliers which are clustered throughout 24 states
                            in Mexico. For example, there are over 30 automotive OEMs in Mexico with
                            around a 100 in Tier 1 and a few thousand Tier 2 and Tier 3. Some hard
                            facts about Mexico’s supplier network
                          </p>
                        </div>
                        <div className={Style.acc_supplier_card}>
                          {item?.is_timeline ? (
                            <TimelineSlide props={item} />
                          ) : (
                            <div className="row row-cols-1 row-cols-md-2">
                              {item?.data?.map((item, i) => {
                                return (
                                  <div key={i} className="col">
                                    <Detailcard theme="supplier_tab" {...item} />
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>
        )}
      </div>
    </section>
  );
};
export default SupplierTab;
