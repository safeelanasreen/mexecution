import LifequalityCard from "../utils/LifeQualityCard";
import Style from "./LifeQuality.module.scss";

const LifeQuality = ({ props }) => {
  return (
    <section className={Style.section}>
      <div className="container">
        <h4 className={`state-ttl ${Style.section_ttl}`}>{props?.data?.title}</h4>
        <div className={`row ${Style.quality_card_wrap}`}>
          {props?.data?.card?.map((item, i) => (
            <div className=" col-md-6 col-lg-4">
              <LifequalityCard props={item} i={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default LifeQuality;
