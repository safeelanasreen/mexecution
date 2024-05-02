import Image from "next/image";
import Link from "next/link";
import Assets from "../../Layout/CommonLayout/assets";
import Style from "./MonterreyCard.module.scss";
const MonterreyCard = ({ data, theme }) => {
  const parse = require("html-react-parser");

  return (
    <div className={`${Style.monterrey_card} ${theme === "location" ? Style.theme_location : ""}`}>
      <div className={Style.monterrey_card_icon}>
        <div className={Style.icon}>
          <Image src={data?.icon} fill/>
        </div>
      </div>
      <div className={Style.monterrey_card_info}>
        <h4>{data?.title}</h4>
        <p>{parse(`${data?.description}`)}</p>
      </div>
    </div>
  );
};

export default MonterreyCard;
