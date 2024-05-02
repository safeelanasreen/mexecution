import Image from "next/image";
import Link from "next/link";
import Icon from "../../Layout/Icons";
import Style from "./ServiceCard.module.scss";
const ServiceCard = ({ data }) => {
  const parse = require("html-react-parser");

  return (
    <>
      <Link href={data?.url || ""}>
        <div className={Style.service_card}>
          <div className={Style.arrow}>
            <span>
              <span>
                <Icon icon="arrow-top" size={15} />
              </span>
            </span>
          </div>
          <div className={Style.service_card_icon}>
            <div className={Style.icon}>
              <Image src={data?.img} width={50} height={50} alt={data?.title} priority />
            </div>
          </div>
          <div className={Style.service_card_info}>
            <h4>{data?.title}</h4>
            <p>{parse(`${data?.description}`)}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ServiceCard;
