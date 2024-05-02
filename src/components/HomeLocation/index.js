import { useState, useRef, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "next/image";
import Style from "./HomeLocation.module.scss";
import Assets from "../Layout/CommonLayout/assets";
import MapMexico from "./MapMexico";
import LocatePin from "../utils/LocatePin";
import { useWindowSize } from "../../logic/useDimension";
import MapDetail from "./MapDetail";
import Animate from "../Animate";

const HomeLocation = ({ props }) => {
  const itemWithMexico = props?.data?.mapData.find((item) => item.city === "Mexico");
  const filteredData = props?.data?.mapData.filter((item) => item.city !== "Mexico");
  
   
  filteredData.sort((a, b) => {
    // Use toLocaleLowerCase to ensure case-insensitive sorting
    const cityA = a.city.toLocaleLowerCase();
    const cityB = b.city.toLocaleLowerCase();
    
    if (cityA < cityB) {
      return -1;
    }
    if (cityA > cityB) {
      return 1;
    }
    return 0;
  });
  
  const modifiedData = [itemWithMexico, ...filteredData];

  const { width } = useWindowSize();
  const [activeData, setActiveData] = useState(modifiedData?.[0]);
  const [activeClass, setActiveClass] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showDropdown, setShowDropdown] = useState(false);
  const setDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleShowDetail = (i, category) => {
    if (width < 1200) {
      setShow(true);
    }
    if (category == "assets") {
      setActiveData(modifiedData[i]);
    } else if (category == "ports") {
      setActiveData(props?.data?.ports[i]);
    } else if (category == "all") {
      setActiveData(modifiedData[i]);
    }
  };

  const assetTransitionDelay = 1.5; // The initial delay specified in seconds
  const portTransitionDelay = 0.1; // The additional delay of 1 second
  const additionalTransitionDelay = 0.45;

  return (
    <Animate className={Style.mx_location_sec}>
      <div className="container">
        <div className={`${Style.loc_row} row`}>
          <div className={`${Style.col_left} col-lg-6`}>
            <h2 className="h3 text-white fade-up">{props?.data?.title}</h2>
          </div>
          <div className={`${Style.col_right} col-lg-6 text-lg-end position-relative fade-up d1`}>
            <div className={`${Style.filter_wrap} position-relative`}>
              <Dropdown show={showDropdown} onToggle={setDropdown}>
                <Dropdown.Toggle variant="outline-white" id="dropdown-basic">
                  {activeData?.city}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div className={Style.location_list_scroll}>
                    {modifiedData?.map((item, i) => {
                      return (
                        <button
                          className={`dropdown-item  ${activeClass === i && "active-item"}`}
                          onClick={() => {
                            handleShowDetail(i, item?.category);
                            setDropdown();
                            setActiveClass(i);
                          }}
                          key={i}
                        >
                          {item.city}
                        </button>
                      );
                    })}
                  </div>
                </Dropdown.Menu>
              </Dropdown>

              {width >= 1200 ? <MapDetail activeData={activeData} /> : ""}
            </div>
          </div>
        </div>

        <div
          className={`${Style.map_wrap} ${Style.inview}`}
          style={{
            "--theme-port": "#03A9F4",
            "--theme-distribution": "#E8BE4D",
            "--theme-manufacture": "#AF1D2D",
          }}
        >
          <Animate className={`${Style.map_base}`}>
            <MapMexico />

            {/* {modifiedData?.map((item, i) => {
              return (
                <LocatePin
                  onClick={() => handleShowDetail(i, item?.category)}
                  key={i}
                  category={item?.category}
                  city={item?.city}
                  style={{
                    top: `${item?.position?.top}%`,
                    left: `${item?.position?.left}%`,
                  }}
                  className={`${Style.pin} ${
                    i == modifiedData?.findIndex((item) => item.id === activeData.id)
                      ? "active"
                      : ""
                  }`}
                  item={item}
                />
              );
              
            })} */}

            {modifiedData?.map((item, i) => {
              return (
                <LocatePin
                  onClick={() => handleShowDetail(i, item?.category)}
                  key={i}
                  category={item?.category}
                  city={item?.city}
                  style={{
                    top: `${item?.position?.top}%`,
                    left: `${item?.position?.left}%`,
                    transitionDelay: `calc(${portTransitionDelay}s * ${i})`, // Add the additional delay after the initial delay
                  }}
                  className={`${Style.pin} ${
                    i === modifiedData?.findIndex((item) => item.id === activeData.id)
                      ? "active"
                      : ""
                  }`}
                  item={item}
                />
              );
            })}

            {props?.data?.ports?.map((item, i) => {
              return (
                <LocatePin
                  onClick={() => handleShowDetail(i, item?.category)}
                  key={i}
                  category={item?.category}
                  city={item?.city}
                  style={{
                    top: `${item?.position?.top}%`,
                    left: `${item?.position?.left}%`,
                    transitionDelay: `calc(${assetTransitionDelay}s + ${additionalTransitionDelay}s * ${i})`, // Add the additional delay after the initial delay
                  }}
                  className={`ports ${Style.port_pin} ${
                    i == props?.data?.ports?.findIndex((item) => item.id === activeData?.id)
                      ? "active"
                      : ""
                  }`}
                  item={item}
                />
              );
            })}

            <Image
              // src={Assets.map_base}
              src={"/images/map_base_usa.svg"}
              fill
              alt={"map base"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={Style.map_base_img}
            />
            <div className={Style.map_mexico}>
              <Image
                // src={Assets.map_mexico}
                src={"/images/map_mexico_alt.svg"}
                fill
                alt={"map decor"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Animate>

          <div className={Style.map_details}>
            <ul>
              <li className="">
                <span style={{ backgroundColor: `var(--theme-distribution)` }}></span>
                Assets Available
              </li>
              <li className="">
                <span style={{ backgroundColor: `var(--theme-port)` }}></span>
                Ports to Europe, Asia & South America
              </li>
            </ul>

            {width >= 1200 ? (
              ""
            ) : (
              <Modal className={Style.modal} centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <MapDetail activeData={activeData} />
                </Modal.Body>
              </Modal>
            )}

            <div className={Style.detail_row}>
              {props?.data?.count?.map((data, i) => {
                return (
                  <div
                    className={`text-white ${Style.detail_item} fade-up`}
                    key={i}
                    style={{
                      transitionDelay: `calc(${portTransitionDelay}s * ${i})`, // Add the additional delay after the initial delay
                    }}
                  >
                    <h4>{data?.count}</h4>
                    <p>{data?.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Animate>
  );
};

export default HomeLocation;
