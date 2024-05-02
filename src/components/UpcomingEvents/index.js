import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Style from "./UpcomingEvents.module.scss";
import TabCard from "../utils/TabCard";

import useUpcomingEvents from "./useUpcomingEvents";
import { Nav } from "react-bootstrap";

const UpcomingEvents = ({ props }) => {
  const {
    count,
    status,
    active,
    contentData,
    upComingEventsLsit,
    setOffSet,
    setContentData,
    handleTabclick,
  } = useUpcomingEvents({
    props,
  });

  return (
    <section className={Style.section}>
      <div className="container">
        <div className={Style.section_content_wrap}>
          <h5 className={`state-ttl-2 text-center ${Style.section_ttl}`}>{props?.data?.title}</h5>
          <p className="state-des text-center mb-0">{props?.data?.description} </p>
        </div>
        <Nav variant="pills" className={Style.nav_item}>
          {upComingEventsLsit?.map((item, key) => {
            return (
              <Nav.Item key={key}>
                <Nav.Link
                  className={`${active == item?.value ? "active" : ""}`}
                  onClick={() => {
                    // setCategory(item?.id);
                    setContentData([]);
                    setOffSet(0);
                    handleTabclick(item?.value, 0);
                  }}
                >
                  {item?.label}
                </Nav.Link>
              </Nav.Item>
            );
          })}
        </Nav>
        <div className={Style.tab_area}>
          {/* <Tabs id="uncontrolled-tab-example" className="" onSelect={(e) => handleTabclick(e, 0)}>
            {upComingEventsLsit?.map((item, index) => (
              <Tab key={index} eventKey={item?.value} title={item?.label}>
                <TabCard props={item} />
              </Tab>
            ))}
          </Tabs> */}

          <div className={Style.service_body}>
            <div className="">
              {contentData?.length !== 0 ? (
                <div className={""}>
                  {status === "pending"
                    ? [...Array(count)]?.map(() => {
                      return (
                        <div className={Style.loader_wrap}>


                          <div className={Style.dual_ring}></div>
                        </div>
                      );
                    })
                    : contentData?.map?.((item, key) => {
                      return (
                        <div className={Style.card_wrap} key={key}>
                          <TabCard props={item} />

                        </div>
                      );
                    })}
                </div>
              ) : (
                status !== "pending" && <h5 className={Style.no_result}>No Result Found</h5>
              )}

              {count > contentData?.length && status !== "pending" && (
                <div className={`${Style.link_wrap} text-center`}>
                  <button
                    as="button"
                    onClick={() => {
                      setOffSet(offSet + 5);
                      getData(category, offSet + 5, location, "loadMore");
                    }}
                    className="btn btn-link"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default UpcomingEvents;
