import Style from "./GeneralinfoCard.module.scss";
const GeneralinfoCard = ({ props }) => {
  return (
    <div className={`${Style.infocard} infocardeven`}>
      <div className={Style.infocard_content}>
        <h3 className={Style.infocard_ttl}>{props?.count}</h3>
        <p className="mb-0">{props?.title}</p>
      </div>
    </div>
  );
};
export default GeneralinfoCard;
