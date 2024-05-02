import Image from "next/image";
import { useWindowSize } from "../../../logic/useDimension";
import Animate from "../../Animate";
import Assets from "../../Layout/CommonLayout/assets";
import Style from "./MapSea.module.scss";
const MapSea = ({ props }) => {
  const { width } = useWindowSize();

  return (
    <div className={Style.map_wrap}>
      <h5 className={`${Style.map_title} h5`}>{props?.mapData?.title}</h5>
      <Animate className={`${Style.map} `}>
        <div className={Style.map_details}></div>

        <div className={Style.map_sea}>
          <div className={Style.map_img}>
            <Image src={props?.mapData?.image} fill alt="sea map" />
          </div>

          {props?.mapData?.title === "Sea freight Europe-Mexico" ?
            <div className={Style.root_card}>
              <h5 className="h5">
                Southbound{" "}
                <span className={Style.root_icon}>
                  <Image src={"/images/icon/south_dir.svg"} fill alt="southbound icon" />
                </span>
              </h5>
              <h5 className="h5">
                Northbound{" "}
                <span className={Style.root_icon}>
                  <Image src={"/images/icon/north_dir.svg"} fill alt="northbound icon" />
                </span>
              </h5>
            </div> :

            <div className={`${Style.root_card} ${Style.root_card_asia}`}>
              <h5 className="h5">
                Southbound{" "}
                <span className={Style.root_icon}>
                  <Image src={"/images/icon/south_dir.svg"} fill alt="southbound icon" />
                </span>
              </h5>
              <h5 className="h5">
                Northbound{" "}
                <span className={Style.root_icon}>
                  <Image src={"/images/icon/north_dir.svg"} fill alt="northbound icon" />
                </span>
              </h5>
            </div>}

          {props?.mapData?.locations?.map((item, i) => {
            return (
              <div
                className={Style.tooltip}
                style={{ top: `${item?.position?.top}%`, left: `${item?.position?.left}%` }}
                key={i}
              >
                <div className={Style.tooltip_pointer}></div>
                <div className={`${Style.tooltip_info} ${item?.align}`}>
                  <div className={Style.tooltip_info_tab}>
                    {width >= 992 ? <h5>{item?.title}</h5> : <h5>{item?.title?.slice(0, 1)}</h5>}
                    <p>{`${item?.description}`}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {props?.mapData?.title === "Sea freight Europe-Mexico" ? (
            <div className={Style.path_europe}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="803.413"
                height="446.373"
                viewBox="0 0 803.413 446.373"
              >
                <g
                  id="Group_88262"
                  data-name="Group 88262"
                  transform="translate(-581.571 -2815.251)"
                >
                  <path
                    id="path_south"
                    className={`${Style.path} ${Style.path_south}`}
                    data-name="Path 117727"
                    d="M2570.975-16366.848s100.112-128.445,286.107-146.76,298.577-38.83,343.954-72.689,89.228-86.828,111.052-101.908c15.28-11.211,28.948-3.033,28.948-3.033"
                    transform="translate(-1988 19542)"
                    fill="none"
                    stroke="#3e3e3e"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke-dasharray="3 4"
                  />
                  <path
                    id="path_north"
                    className={`${Style.path} ${Style.path_north}`}
                    data-name="Path 117728"
                    d="M2580-16368s38.6-42.449,51.2-18.832c26.805-11.367,51.567,33.948,36.294,75.615,10.654-3.26,30.109-24.363,34.327,12.081,5.527-2.448,16.4-16.043,16.154,16.76,7.113-7.855,6.2-38.214,28.485-23.935,58.606-82.236,181.9-207.9,289.508-263.768s202.594-67.922,232.355-89.035c14.168-10.051,27.018-11.572,46.8,3.959-13.814-22.234-17.353-45.326,8.7-62.264s52.554,11.975,53.156,19.32c.1,1.258-9.983-10.846-17.614-10.354s-5.34,10.354-5.34,10.354"
                    transform="translate(-1993 19543)"
                    fill="none"
                    stroke="#fed900"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke-dasharray="3 4"
                  />
                  <path
                    id="Path_117731" className={`${Style.south_nav}`}
                    data-name="Path 117731"
                    d="M14.85,0,7.425,7.425,0,0Z"
                    transform="translate(876.643 3019.998) rotate(82)"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="Path_117730" className={`${Style.south_nav}`}
                    data-name="Path 117730"
                    d="M2835.055-15871.663l-7.425-7.424-7.425,7.424Z"
                    transform="matrix(0.643, 0.766, -0.766, 0.643, -13089.941, 11125.275)"
                    fill="#fed900"
                    stroke="#fed900"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="Path_117734" className={`${Style.south_nav}`}
                    data-name="Path 117734"
                    d="M2835.055-15871.663l-7.425-7.424-7.425,7.424Z"
                    transform="translate(-13410.25 9358.057) rotate(56)"
                    fill="#fed900"
                    stroke="#fed900"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </g>
              </svg>
            </div>
          ) : (
            <div className={Style.path_asia}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="974.869"
                height="260.776"
                viewBox="0 0 974.869 260.776"
              >
                <g
                  id="Group_88263"
                  data-name="Group 88263"
                  transform="translate(-506.538 -2998.183)"
                >
                  <g id="Group_88261" data-name="Group 88261">
                    <path
                      id="Path_117439"
                      className={`${Style.path} ${Style.path_north}`}
                      data-name="Path 117439"
                      d="M2500-15271s8.057,4.2,12.573,2.1,5.492-10.5,5.492-10.5,32.127.648,41.274-10.764-4.687-34.887-4.687-34.887,6.3-6.493,6.3-12.673-6.3-12.045-6.3-12.045,7.392-6.427,8.564-14.3-3.877-17.179-3.877-17.179,8.59,2.324,12.68,8.9-4.292,16.957,1.6,18.6,10.692-12.32,18.625-10.324-1.91,18.373,15.1,17.948,52.954-19.646,52.954-19.646,172.856,75.1,300.746,94.762,376.516,15.929,376.516,15.929,3.836,12.981,11.486,16.6,19.112-2.113,19.112-2.113-15.411,52.021,9.52,81.359,90.2,35.993,90.2,35.993-14.862-27.52-13.059-40.114,18.892-28.794,18.892-28.794"
                      transform="translate(-1993 18381)"
                      fill="none"
                      stroke="#fed800"
                      stroke-width="2"
                      stroke-dasharray="4"
                    />
                    <path
                      id="Path_117440"
                      className={`${Style.path} ${Style.path_north}`}
                      data-name="Path 117440"
                      d="M3469.771-15191.5s-55.718,52.345-103.679,28.159-28.932-88.744-28.932-88.744-259.324,23.951-453.992,0-324.683-95.806-324.683-95.806,8.365,7.323,8.365,12.281-10.771,10.3-10.771,10.3a18.455,18.455,0,0,0,17.856,11.284c13.729-.187,16.643-47.04,16.643-47.04"
                      transform="translate(-1993 18381)"
                      fill="none"
                      stroke="#000"
                      stroke-width="2"
                      stroke-dasharray="4"
                    />
                  </g>
                  <path
                    id="Path_117561" className={`${Style.south_nav}`}
                    data-name="Path 117561"
                    d="M14.849,7.424,7.425,0,0,7.424Z"
                    transform="translate(753.712 3111.086) rotate(-77)"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <path
                    id="Path_117563" className={`${Style.south_nav}`}
                    data-name="Path 117563"
                    d="M14.85,0,7.425,7.424,0,0Z"
                    transform="translate(1152.711 3131.261) rotate(90)"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                  <g id="Group_72014" data-name="Group 72014" transform="translate(0 -10)">
                    <path
                      id="Path_117562" className={`${Style.south_nav}`}
                      data-name="Path 117562"
                      d="M14.85,0,7.425,7.424,0,0Z"
                      transform="translate(768.078 3071.739) rotate(-60)"
                      fill="#fed800"
                      stroke="#fed800"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <path
                      id="Path_117564" className={`${Style.south_nav}`}
                      data-name="Path 117564"
                      d="M14.85,0,7.425,7.424,0,0Z"
                      transform="translate(1065.293 3136.982) rotate(-90)"
                      fill="#fed800"
                      stroke="#fed800"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                </g>
              </svg>
            </div>
          )}
        </div>
      </Animate>
    </div>
  );
};

export default MapSea;
