import Style from "./BlogShimmer.module.scss";
import Image from "next/image";
import Icon from "../Layout/Icons";
import { useWindowSize } from "../../logic/useDimension";
import Link from "next/link";

const BlogShimmer = ({ data, type, theme }) => {
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
             
            </div>
          </div>
          <div className={Style.blog_card_info}>
            <h4 className={Style.placeholder}>How will Corporate Tax change the Mexico? .3</h4>
            <time className={Style.placeholder} dateTime="2022-04-12">Apr,25,2023</time>
            <div className={Style.arrow}>
              <span>
                <span>
                  {/* <Icon icon="arrow-top" size={width > 992 ? 18 : 14} /> */}
                </span>
              </span>
            </div>
          </div>
        </article>
      </Link>
    );
  };
export default BlogShimmer;