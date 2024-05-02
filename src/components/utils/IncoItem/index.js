import Animate from "../../Animate";
import Style from "./IncoItem.module.scss";
const IncoItem = (props) => {
  return (
    <>
      <Animate className={Style.item} style={{ '--label-pos': props?.riskPos }}>
        {props?.riskPos?.length > 0 ? <div className={Style.item_risk_label}><span>!</span></div> : ""}
        {props?.riskPos?.length > 0 ? <div className={Style.item_risk_label_alt} style={{ '--label-pos': props?.riskPosAlt }} ><span>!</span></div> : ""}
        <div className={Style.item_label} ><span>{props?.label}</span></div>
        <div className={Style.item_initial} style={{ width: props?.transferPos }} ><span style={{ left: props?.sellerPos }}>{props?.seller}</span></div>
        <div className={Style.item_last}><span>{props?.buyer}</span></div>
      </Animate>
    </>


  );
};

export default IncoItem;
