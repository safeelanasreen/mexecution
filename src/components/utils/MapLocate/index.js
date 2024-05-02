import Image from "next/image";
import Animate from "../../Animate";
import MapMexico from "../../HomeLocation/MapMexico";
import Assets from "../../Layout/CommonLayout/assets";
import LocatePin from "../LocatePin";
import Style from "./MapLocate.module.scss";
const MapLocate = ({ props }) => {
  return (
    <Animate
      className={`${Style.map_wrap} `}
      style={{
        "--theme-port": "#03A9F4",
        "--theme-distribution": "#E8BE4D",
        "--theme-manufacture": "#AF1D2D",
      }}
    >
      <div className={Style.map_base}>
        <MapMexico />
        {props?.data?.map?.map((item, i) => {
          return (
            <LocatePin
              key={i}
              className={Style.pin}
              category={item?.category}
              city={item?.city}
              style={{ top: `${item?.position?.top}%`, left: `${item?.position?.left}%` }}
            />
          );
        })}
        <Image
          // src={Assets.map_base}
          src={"/images/map_base_usa.svg"}
          fill
          alt={"map base"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
      </div>

      <div className={Style.map_details}>
        <ul>
          <li>
            <span style={{ backgroundColor: `var(--theme-distribution)` }}></span>Ports
          </li>
          <li>
            <span style={{ backgroundColor: `var(--theme-port)` }}></span>Distribution Center
          </li>
          <li>
            <span style={{ backgroundColor: `var(--theme-manufacture)` }}></span>Manufacturing &
            Warehouses
          </li>
        </ul>

        <div className={Style.detail_row}>
          {props?.data?.count?.map((data, i) => {
            return (
              <div className={`text-white ${Style.detail_item}`}>
                <h4>{data?.count}</h4>
                <p>{data?.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Animate>
  );
};

export default MapLocate;
