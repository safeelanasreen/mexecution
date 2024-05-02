import Image from "next/image";
import useIntersectionObserver from "../../logic/useIntersectionObserver";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./ServiceLocalPartner.module.scss";
import NoData from "../utils/NoData";

const ServiceLocalPartner = ({ props }) => {
  const ref = useIntersectionObserver({ threshold: 0.5 });
  return (
    <>
      <section className={Style.mx_service_local}>
        <div className="container">
          <div className={`row ${Style.row}`}>
            <div className={`col-12 ${Style.col_left}`}>
              <div className={Style.map} ref={ref}>
                {props?.data?.mapData?.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={`${Style.pin}  
                      ${item?.position?.delay}
                        ${(item?.position?.allign) == "pin_bottom" ? Style.pin_bottom : ""}
                        ${(item?.position?.allignLeft) == "pin_left" ? Style.pin_left : ""}
                        `}
                      style={{
                        top: `${item?.position?.top}`,
                        left: `${item?.position?.left}`,
                      }}
                    >
                      <div className={Style.pin_pill}>
                        <span data-title={item?.title}>{item?.title}</span>
                      </div>
                      <div className={Style.pin_dot}></div>
                    </div>
                  );
                })}

                <div className={`ratio`}>
                  <Image src={Assets.shape_map_dot} fill alt="mexico map" />
                </div>
              </div>
            </div>
            <div className={`col-12 ${Style.col_right}`}>
              <div className={`bg-primary text-white ${Style.card}`}>
                <span className="h5">{props?.data?.title}</span>
                <ul>
                  {props?.data?.list?.map((item, i) => {
                    return (
                      <li key={i}>
                        <span>
                          <Image src={item?.img} fill alt="icon" />
                        </span>
                        {item?.title}
                      </li>
                    );
                  })}
                </ul>
                <p>{props?.data?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ServiceLocalPartner;
