import Style from "./StateGeneralInfo.module.scss";
import GeneralInfoCard from "../utils/GeneralInfoCard";

const StateGeneralInfo = ({ props }) => {
  return (
    <section className={Style.section}>
      <div className={`container ${Style.info_container}`}>
        <div className={Style.ttl_wrap}>
          <h3 className="state-ttl mb-0">{props?.data?.title}</h3>
        </div>
        <div className={Style.text_wrap}>
          <p className="state-des">{props?.data?.description}</p>
        </div>
        <div className={Style.info_wrap}>
          <div className={`d-flex flex-nowrap  ${Style.infocard_wrap}`}>
            {props?.data?.card.slice(0, 3)?.map((item, index) => (
              <>
                <div className={`${Style.card_item} card-item`} key={index}>
                  <GeneralInfoCard props={item} />
                </div>
              </>
            ))}
          </div>
          <div className={`d-flex  flex-nowrap    ${Style.infocard_wrap}`}>
            {props?.data?.card.slice(3, 6)?.map((item, i) => (
              <>
                <div className={`${Style.card_item} card-item`} key={i}>
                  <GeneralInfoCard props={item} />
                </div>
              </>
            ))}
          </div>
          <div className={`d-flex flex-nowrap    ${Style.infocard_wrap}`}>
            {props?.data?.card.slice(6, 9)?.map((item, i) => (
              <>
                <div className={`${Style.card_item} card-item`} key={i}>
                  <GeneralInfoCard props={item} />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default StateGeneralInfo;
