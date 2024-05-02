import Image from "next/image";
import Icon from "../../Layout/Icons";
import { useWindowSize } from "../../../logic/useDimension";
import Assets from "../../Layout/CommonLayout/assets";
import Style from "./TabCard.module.scss";

const TabCard = ({ props }) => {
  const { width } = useWindowSize();
  return (
    <>
      {width <= 767.98 ? (
        <div className={`${Style.tabcard_date_wrap} ${Style.mobile_date_wrap}`}>
          <span className={Style.date}>{props?.date}</span>
          <span className={Style.month}>{props?.month}</span>
        </div>
      ) : (
        ""
      )}
      <div className={`${Style.tabcard} d-flex`}>
        {width >= 768 ? (
          <div className={Style.tabcard_date_wrap}>
            <div className={Style.month}>{props?.month}</div>
            <div className={Style.date}>{props?.date}</div>
          </div>
        ) : (
          ""
        )}

        {props?.year && (
          <div className={Style.tabcard_img_wrap}>
            <figure className="ratio mb-0">
              <Image src={props?.year ? Assets.tab_img_1 : ""} alt="tab-img" fill />
            </figure>
          </div>
        )}

        <div className={Style.tabcard_venue_wrap}>
          <h5 className={Style.name}>{props?.event_name}</h5>
          <p className={Style.venue}>
            <span>
              <Icon icon="location" size={14} />
            </span>
            {props?.location}
          </p>
          <p className={Style.year}>{props?.year}</p>
        </div>
      </div>
    </>
  );
};
export default TabCard;
