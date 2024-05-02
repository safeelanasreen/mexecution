import Image from "next/image";
import Style from "./ArticleCard.module.scss";
import Icon from "../../Layout/Icons";
import { useWindowSize } from "../../../logic/useDimension";
import Link from "next/link";
const ArticleCard = ({ data, type, theme }) => {
  const { width } = useWindowSize();
  return (
    <Link href={data?.url || ""}>
      <article
        className={`${Style.blog_card} ${
          type === "lg"
            ? Style.blog_card_lg
            : type === "inline"
            ? Style.blog_card_inline
            : type === "listing"
            ? Style.blog_card_list
            : ""
        } ${theme === "blog" ? Style.blog_detail_card : ""}`}
      >
        <div className={Style.blog_card_img}>
          <div className={`ratio ${Style.img}`}>
            <Image
              src={data?.img}
              fill
              alt={data?.title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={90}
            />
          </div>
        </div>
        <div className={Style.blog_card_info}>
          <h4>{data?.title}</h4>
          <time dateTime="2022-04-12">{data?.date}</time>
          <div className={Style.arrow}>
            <span>
              <span>
                <Icon icon="arrow-top" size={width > 992 ? 18 : 14} />
              </span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
