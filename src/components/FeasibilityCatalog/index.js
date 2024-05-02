import Accordion from "react-bootstrap/Accordion";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Style from "./FeasibilityCatalog.module.scss";
import MapSea from "../utils/MapSea";
import ImageListWidget from "../ImageListWidget";
import Assets from "../Layout/CommonLayout/assets";
import Detailcard from "../utils/Detailcard";
import Image from "next/image";
import MapZone from "../utils/MapZone";
const FeasibilityCatalog = ({ props }) => {
  const parse = require("html-react-parser");

  return (
    <section className={Style.mx_feasibility_catalog}>
      <div className="container">
        <div className={`${Style.head_wrap} text-center text-primary`}>
          <h2 className="title">{props?.data?.title}</h2>
        </div>

        <Tabs
          defaultActiveKey="0"
          id="requirement-catalog-tab"
          className={`${Style.tab}  ${Style.tab_row}`}
          variant="pills"
        >
          <Tab eventKey="0" title="Supply Chain">
            <div className={`row ${Style.content_block}`}>
              <div className={`${Style.col_right} col-12`}>
                <div className={Style.content_wrap}>
                  <h3 className={Style.title}>{props?.data?.supplyTab?.data?.title}</h3>
                  <div className={Style.content}>
                    {parse(`${props?.data?.supplyTab?.data?.description}`)}
                  </div>
                  <div className={`row row-cols-lg-2 ${Style.row}`}>
                    {props?.data?.supplyTab?.data?.data?.map((item, i) => {
                      return (
                        <div key={i} className={Style.list_wrap}>
                          <div className={Style.list_item}>{item?.title}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className={`${Style.col_left} col-12`}>
                <div className={`${Style.img} ratio`}>
                  <Image src={props?.data?.supplyTab?.data?.img} fill alt="cover" />
                </div>
              </div>
            </div>

            <Accordion
              // defaultActiveKey={"0"}
              alwaysOpen={true}
              className={`${Style.accordian_round} accordion-rounded`}
            >
              <Accordion.Item eventKey={`0`}>
                <Accordion.Header>
                  {props?.data?.supplyTab?.domesticTransport?.title}
                </Accordion.Header>
                <Accordion.Body>
                  <div className={`${Style.common_row} row`}>
                    <div className={`${Style.col_left} col-12`}>
                      {props?.data?.supplyTab?.domesticTransport?.durations?.map((item, i) => {
                        return (
                          <div className={Style.card} key={i}>
                            <div className={Style.card_img}>
                              <div className={Style.img}>

                                <Image src={"/images/icon/icon_clock.svg"} fill alt="clock icon" />
                              </div>
                              <h3 className={Style.desk}>{item?.duration}</h3>
                            </div>
                            <h3 className={Style.mob}>{item?.duration}</h3>
                            <p className="mb-0">{item?.title}</p>
                          </div>
                        );
                      })}
                    </div>
                    <div className={`${Style.col_right} col-12`}>
                      <div className="w-100">
                        <MapZone props={props?.data?.supplyTab?.domesticTransport} />
                      </div>
                    </div>
                  </div>
                  <div className={Style.map_deatail_card}>
                    <div className="row row-cols-1 row-cols-md-3">
                      {props?.data?.supplyTab?.domesticTransport?.cards?.map((item, i) => {
                        return (
                          <div key={i} className="col">
                            <Detailcard theme="secondary" {...item} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Accordion.Body>

              </Accordion.Item>

              <Accordion.Item eventKey={`1`}>
                <Accordion.Header>{props?.data?.supplyTab?.seaFright?.title} </Accordion.Header>
                <Accordion.Body>
                  <div className={Style.sea_freight_mexico}>
                    <div className="row">
                      <div className={`${Style.left} col-12`}>
                        <div className={Style.img}>
                          <div className="ratio">
                            <Image
                              src={props?.data?.supplyTab?.seaFright?.img}
                              fill
                              alt={props?.data?.supplyTab?.seaFright?.title}
                            />
                          </div>
                        </div>
                      </div>
                      <div className={`${Style.right} col-12`}>
                        <div className={Style.content}></div>
                        {/* <h5 className="h5">{props?.data?.supplyTab?.seaFright?.title}</h5> */}
                       {parse(`${props?.data?.supplyTab?.seaFright?.description}`)}{" "}
                      </div>
                    </div>
                  </div>
                  {props?.data?.supplyTab?.seaFright?.data?.map((data, i) => {
                    return (
                      <>
                        <MapSea props={data} key={i} />

                        <div className={Style.table_wrap}>
                          <h6 className={`h6 text-center ${Style.title_main}`}>
                            {data?.tableData?.title}
                          </h6>
                          <div className={`${Style.row} row row-cols-xl-2`}>
                            {data?.tableData?.data?.map((item, i) => {
                              return (
                                <div className={Style.map_table} key={i}>
                                  <caption className={`${Style.title_sub}`}>{item?.title}</caption>
                                  <div className={Style.table_parse_warp}>
                                    <div className={Style.table_fix}>
                                      {parse(`${item?.description}`)}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    );
                  })}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Tab>

          {props?.data?.tab?.map((item, index) => {
            return (
              <Tab key={index} eventKey={index + 1} title={item?.category}>
                <ImageListWidget props={item} />
              </Tab>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};
export default FeasibilityCatalog;
