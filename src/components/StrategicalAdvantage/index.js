import StrategyCard from "../utils/StrategyCard";
import Style from "./StrategicalAdvantage.module.scss";

const StrategicalAdvantage = ({ props }) => {
  return (
    <section className={Style.strategy_sec}>
      <div className="container">
        <div className={Style.strategy_sec_top}>
          <h4 className={Style.strategy_sec_ttl}>{props?.data?.title}</h4>
          <div className={Style.strategy_sec_content}>
            <p className="mb-0 state-des">{props?.data?.description}</p>
          </div>
        </div>
        <div className={` ${Style.strategy_sec_bottom} flex-wrap flex-lg-nowrap`}>
          {props?.data?.card?.map((item, index) => {
            return <StrategyCard props={item} i={index} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default StrategicalAdvantage;
