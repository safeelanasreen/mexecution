import Image from "next/image";
import Animate from "../../Animate";
import Assets from "../../Layout/CommonLayout/assets";
import Icon from "../../Layout/Icons";
import Style from "./MapZone.module.scss";
const MapZone = ({ props }) => {
  return (
    <Animate className={`${Style.map} `}>
      {props?.mapData?.map((item, i) => {
        return (
          <>
            <div key={i} className={`${Style.pin}
             ${(item?.position?.allign) == "pin_bottom" ? Style.pin_bottom : ""}
             ${(item?.position?.allign_left) == "pin_left" ? Style.pin_left : ""}
             `}
              style={{ top: `${item?.position?.top}%`, left: `${item?.position?.left}%` }}>
              <div className={Style.pin_pill}>
                <span data-title={item?.title}>{item?.title}</span>
              </div>
              <div className={Style.pin_dot}></div>
            </div>

            {/* <div key={i} className={`${Style.city_pin}`} style={{ top: `${item?.position?.top}%`, left: `${item?.position?.left}%` }}>

              <div className={Style.city_pin_dot}></div>
              <span data-title={item?.title}>{item?.title}</span>
            </div> */}

          </>


        );
      })}
      <div className={`${Style.starting_pin}`}>
        <div className={`${Style.city_pin}`}>

          {/* <div className={Style.city_pin_dot}></div> */}
          <span>Nogales</span>
        </div>
        <div className={Style.red_pin}>
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
        </div>
      </div>


      <div className={`${Style.map_base} ratio`}>
        <Image src={Assets.map_mex_rect} fill alt="mexico outline map" />
        <div className={Style.map_zone}>
          <Image src={Assets.map_mex_rect_zone} quality={90} fill alt="mexico zone map" />
        </div>
      </div>
      <div className={Style.duration_card}>
        <div className={Style.card_head}>
          <h5 className="h5">
            {" "}
            <span className={Style.card_icon}>
              <Icon icon="icon_distributor" />
            </span>
            Time duration{" "}
          </h5>
        </div>
        <div className={Style.card_body}>
          <div className="row row-cols-2">
            <div className={Style.list}>
              <div className={Style.circle}> </div>1 Day
            </div>
            <div className={Style.list}>
              <div className={Style.circle}></div>3 Day
            </div>
            <div className={Style.list}>
              <div className={Style.circle}></div>2 Day
            </div>
            <div className={Style.list}>
              <div className={Style.circle}></div>4 Day
            </div>
          </div>
        </div>
      </div>
    </Animate>
  );
};

export default MapZone;
