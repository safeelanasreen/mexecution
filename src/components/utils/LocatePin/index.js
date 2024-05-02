import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Style from "./LocatePin.module.scss";
import { useWindowSize } from "../../../logic/useDimension";

const LocatePin = ({ style, category, city, onClick, className, item }) => {
  const { width } = useWindowSize();
  return (
    <>
      {width >= 992 ? (
        <OverlayTrigger
          placement={"top"}
          overlay={
            <Tooltip id={`tooltip-top`}>
              {city}
              <br />
              {item?.count} 
            </Tooltip>
          }
        >
          <div
            onClick={onClick}
            className={`${Style.pin} ${className} ${category
              ?.replace(/[$@%&]/g, "")
              .replace(/ /g, "")
              .toLowerCase()}`}
            style={{ ...style }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22.662"
              height="32.283"
              viewBox="0 0 22.662 32.283"
            >
              <path
                id="Icon_material-location-on"
                data-name="Icon material-location-on"
                d="M18.581,3A11.073,11.073,0,0,0,7.5,14.081c0,8.311,11.081,20.579,11.081,20.579S29.662,22.392,29.662,14.081A11.073,11.073,0,0,0,18.581,3Zm0,15.039a3.958,3.958,0,1,1,3.958-3.958A3.959,3.959,0,0,1,18.581,18.039Z"
                transform="translate(-7.25 -2.75)"
                fill="#af1d2d"
                stroke="#fff"
                strokeWidth="0.5"
              />
            </svg>
            <div className={Style.box_shadow_ripples}></div>
            <div
              className={`${Style.ripple} ${className} ${category
                ?.replace(/[$@%&]/g, "")
                .replace(/ /g, "")
                .toLowerCase()}`}
              style={{ ...style }}
            >
              <span className={Style.circles}>
                <div className={Style.circle}></div>
                <div className={Style.circle}></div>
                <div className={Style.circle}></div>
                <div className={Style.circle}></div>
              </span>
            </div>
          </div>
        </OverlayTrigger>
      ) : (
        <div
          onClick={onClick}
          className={`${Style.pin} ${className} ${category
            ?.replace(/[$@%&]/g, "")
            .replace(/ /g, "")
            .toLowerCase()}`}
          style={{ ...style }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.662"
            height="32.283"
            viewBox="0 0 22.662 32.283"
          >
            <path
              id="Icon_material-location-on"
              data-name="Icon material-location-on"
              d="M18.581,3A11.073,11.073,0,0,0,7.5,14.081c0,8.311,11.081,20.579,11.081,20.579S29.662,22.392,29.662,14.081A11.073,11.073,0,0,0,18.581,3Zm0,15.039a3.958,3.958,0,1,1,3.958-3.958A3.959,3.959,0,0,1,18.581,18.039Z"
              transform="translate(-7.25 -2.75)"
              fill="#af1d2d"
              stroke="#fff"
              strokeWidth="0.5"
            />
          </svg>
          <div className={Style.box_shadow_ripples}></div>
          <div
            className={`${Style.ripple} ${className} ${category
              ?.replace(/[$@%&]/g, "")
              .replace(/ /g, "")
              .toLowerCase()}`}
            style={{ ...style }}
          >
            <span className={Style.circles}>
              <div className={Style.circle}></div>
              <div className={Style.circle}></div>
              <div className={Style.circle}></div>
              <div className={Style.circle}></div>
            </span>
          </div>
          {item?.category === "assets" && (
            <div className={`${Style.tooltip_wrap} ${item?.position?.allign}`}>
              {/* <Tooltip placement="top" show>
                {city}
              </Tooltip> */}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default LocatePin;
