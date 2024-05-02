import Image from "next/image";
import Style from "./WorkCard.module.scss";
import Icon from "../../Layout/Icons";
import Link from "next/link";
const WorkCard = ({ data }) => {
  return (
    <Link href={`${data?.url}`}>
      <div className={Style.work_card}>
        <div className={Style.work_card_img}>
          <div className={Style.img}>
            <Image
              src={data?.img}
              fill
              alt={data?.title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className={Style.work_card_info}>
          <h4 className="h6">{data?.title}</h4>
          <p>
            <span>
              <Icon icon="location" size={15} />
            </span>
            {data?.region}
            {data?.region && ","}
            {data?.city}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;
