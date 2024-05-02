import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Style from "./FeatureCard.module.scss";
const FeatureCard = ({ data, id }) => {
  const router = useRouter();
  const handleClick = (url) => {
    router.push({ pathname: url });
  };
  const parse = require("html-react-parser");

  return (
    <div className={Style.feature_card}>
      <div className={Style.feature_card_icon}>
        <div className={Style.icon}>
          <Image src={data?.img} width={50} height={50} alt={data?.title} />
        </div>
      </div>
      <div className={Style.feature_card_info}>
        <h4>{data?.title}</h4>
        <div>{parse(`${data?.description?.split("\n")[0]}`)}</div>
      </div>
      <div className={Style.feature_card_footer}>
        <button onClick={() => handleClick(data?.url)} className="stretched-link">
          <span>+</span>
          Read More
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
