import Detailcard from "../utils/Detailcard";
import SupplierDistributorCard from "../utils/SupplierDistributorCard";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import Style from "./ContentWidget.module.scss";
import Icon from "../Layout/Icons";
import { useRouter } from "next/router";


const ContentWidget = ({ props }) => {
  const [isActive, setIsActive] = useState(0);
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const router = useRouter();

  const parse = require("html-react-parser");

  return (
    <>
      <section
        className={`${Style.mx_service_local} ${
          props?.data?.theme === "light" ? Style.theme_light : ""
        } ${router.asPath === "/partner-selection" ? Style.bg_light : ""} ${
          router.asPath === "/feasibility" ? Style.add_on : ""
        } ${router.asPath === "/feasibility" ? Style.theme_dark : ""} ${
          router.asPath === "/project-management" ? Style.project_add_on : ""
        } ${router.asPath === "/supplier-distributor" ? Style.supplier_add_on : ""}`}
      >
        <div className="container">
          <div className={`row ${Style.row1} `}>
            <div className={Style.col_left}>
              <h2 className="h4 ">
                <span>1. </span>
                {props?.data?.title}
              </h2>
            </div>
            <div className={Style.col_right}>
              {parse(
                !isReadMore
                  ? `${props?.data?.description?.slice(0, 280)}${
                      props?.data?.description?.length > 280 ? "..." : ""
                    }`
                  : props?.data?.description
              )}

              {props?.data?.description?.length > 280 && (
                <span onClick={toggleReadMore} className="btn btn-link link">
                  {`${isReadMore ? " Read Less" : "Read More"}`}
                  <span className="link-anim">
                    <Icon icon="arrow-right1" size={13} />
                  </span>
                </span>
              )}
            </div>
          </div>

          {props?.data?.cards?.length && props?.data?.cards ? (
            <div className={Style.widget_card}>
              <div className={`${Style.supplier_distributer_card_wrap} row row-cols-md-4 row-cols-lg-3 row-cols-xl-4 h-auto`}>
                {props?.data?.cards?.map((item, i) => {
                  return router.asPath === "/supplier-distributor" ? (
                    <div key={i} className="col">
                      <SupplierDistributorCard theme="bg_secondary" props={item} />
                    </div>
                  ) : (
                    <div key={i} className="col">
                      <Detailcard theme="bg_secondary" {...item} />
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}


          {props?.data?.tab ? (
            <div className={`${Style.widget_accordion} accordion_primary`}>
              <Accordion defaultActiveKey={["0"]}>
                {props?.data?.tab?.map((item, i) => {
                  return (
                    <Accordion.Item
                      eventKey={i}
                      key={i}
                      className={` ${isActive === i ? "active" : ""} ${Style.item}`}
                    >
                      <Accordion.Header className="h6" onClick={() => setIsActive(i)}>
                        {item?.title}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className={Style.content}>
                          <div className={`d-flex align-items-center  ${Style.content_text}`}>
                            <p className="mb-0">{parse(item?.description)}</p>
                          </div>
                        </div>

                        <div className={Style.acordian_widget_card}>
                          <div className="row row-cols-1 row-cols-sm-2  row-cols-xl-4">
                            {item?.cards?.map((item, i) => {
                              return (
                                <div key={i} className="col">
                                  <Detailcard type="widget_2" props={item} />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>

    </>
  );
};
export default ContentWidget;
