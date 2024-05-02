import Image from "next/image";
import Link from "next/link";
import Style from "./ServiceDetailCard.module.scss";
const ServiceDetailCard = ({ data, i }) => {
  const parse = require("html-react-parser");

  return (
    <div className={Style.service_card}>
      <div className={Style.service_card_head}>
        <h6>0{i + 1}</h6>
      </div>
      <div className={Style.service_card_body}>
        <div className={Style.content_wrap} data-lenis-prevent>
          <h4>{data?.title}</h4>
          {parse(data?.description)}
        </div>
      </div>
      <div className={Style.service_card_footer}>
        <Link href={`${data?.url}`}>
          <span>+</span>Know More
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetailCard;
