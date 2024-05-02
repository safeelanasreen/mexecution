import Style from "./StateFutureProjects.module.scss";
import Accordion from "react-bootstrap/Accordion";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "next/image";

const StateFutureProjects = ({ props }) => {
  const parse = require("html-react-parser");
  return (
    <section className={Style.mx_future}>
      <div className="container">
        <h5 className={`${Style.future_main_hd} state-ttl-2`}>{props?.data?.title}</h5>
        <div className="d-none d-lg-block">
          <Tab.Container defaultActiveKey={props?.data?.category?.[0]?.items?.[0]?.key}>
            <div className="row">
              <div className={`${Style.col_left} col-2`}>
                <div className={`${Style.future_accordion} accordion_primary`}>
                  <Accordion defaultActiveKey={0}>
                    {props?.data?.category?.map((item, index) => (
                      <Accordion.Item eventKey={index} key={index} className={`${Style.accordion}`}>
                        <Accordion.Header>{item?.heading}</Accordion.Header>
                        <Accordion.Body>
                          <Nav className={`${Style.nav} flex-column`}>
                            {item?.items?.map((data, i) => (
                              <Nav.Item className={`${Style.nav_btn} `} key={i}>
                                <Nav.Link eventKey={data?.key}>{data?.title}</Nav.Link>
                              </Nav.Item>
                            ))}
                          </Nav>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>
              <div className={`${Style.col_right} col-10`}>
                <div className={`${Style.future_accordion_data}`}>
                  {props?.data?.category?.map((data, index) => (
                    <Tab.Content key={index}>
                      {data?.items?.map((data, i) => (
                        <Tab.Pane eventKey={data?.key} key={i}>
                          <div className={`${Style.tab_row} row`}>
                            <div className={`${Style.content_left} col-7 list-star`}>
                              <h5 className={`${Style.title}`}>{data?.title}</h5>
                              <p className={`${Style.disc}`}>{data?.description}</p>
                              <ul>{parse(`${data?.sub_title}`)}</ul>
                            </div>
                            <div className={`${Style.content_right} col`}>
                              <div className={`${Style.img}`}>
                                <div className="ratio">
                                  <Image src={data?.image} fill alt="image"></Image>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  ))}
                </div>
              </div>
            </div>
          </Tab.Container>
        </div>

        <div className={`${Style.mob_tab} d-block d-lg-none`}>
          <Tabs defaultActiveKey={0} className="">
            {props?.data?.category?.map((data, index) => (
              <Tab eventKey={index} title={data?.heading} className={`${Style.inner_tab}`}>
                <Tab.Container defaultActiveKey={props?.data?.category?.[0]?.items?.[0]?.key}>
                  <Nav variant="pills flex-nowrap" className={`${Style.inner_nav}`}>
                    {data?.items?.map((data, i) => (
                      <Nav.Item key={i}>
                        <Nav.Link eventKey={data?.key} className={`${Style.inner_nav_link}`}>
                          {data?.title}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                  {props?.data?.category?.map((data, index) => (
                    <Tab.Content key={index}>
                      {data?.items?.map((data, i) => (
                        <Tab.Pane eventKey={data?.key} key={i}>
                          <div className={`${Style.tab_content} list-star`}>
                            <div className={`${Style.img}`}>
                              <div className="ratio">
                                <Image src={data?.image} fill alt=""></Image>
                              </div>
                            </div>
                            <h5 className={`${Style.tab_content_title}`}>{data?.title}</h5>
                            <p className={`${Style.tab_content_disc}`}>{data?.description}</p>
                            <ul>{parse(`${data?.sub_title}`)}</ul>
                          </div>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  ))}
                </Tab.Container>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};
export default StateFutureProjects;
