import Image from "next/image";
import Link from "next/link";
import Icon from "../Layout/Icons";
import SocialShare from "../utils/SocailShare";
import Style from "./BlogDetail.module.scss";

const BlogDetail = ({ props }) => {
  const parse = require("html-react-parser");

  return (
    <section className={Style.mx_blog_detail}>
      <div className={`${Style.blog_detail_container} container`}>
        <div className={Style.blog_detail_wrap}>
          <time className={Style.blog_date} dateTime="2022-04-12">
            {props?.data?.date}
          </time>
          <h3 className={`${Style.blog_hd} h3`}>{props?.data?.title}</h3>
          <div className={`${Style.blog_img}`}>
            <div className="ratio">
              <Image src={props?.data?.img} fill alt={props?.item?.title} />
            </div>
          </div>
          <div className={`${Style.blog_disc} admin-content-area`}>
            {parse(`${props?.data?.description}`)}
          </div>
        </div>

        <div className={Style.blog_share}>
          <div className={Style.sticky}>
            <h5 className="h5">Share</h5>

            <SocialShare theme="sticky" />

            {/* <ul className={Style.social_wrap}>
              <li>
                <Link href="/" aria-label="facebook">
                  {" "}
                  <Icon icon="facebook" size={25} />{" "}
                </Link>{" "}
              </li>
              <li>
                <Link href="/" aria-label="linkedin">
                  {" "}
                  <Icon icon="linkedin" size={25} />{" "}
                </Link>{" "}
              </li>
              <li>
                <Link href="/" aria-label="twitter">
                  {" "}
                  <Icon icon="twitter" size={25} />{" "}
                </Link>{" "}
              </li>
              <li>
                <Link href="/" aria-label="file">
                  {" "}
                  <Icon icon="file" size={25} />{" "}
                </Link>{" "}
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogDetail;
