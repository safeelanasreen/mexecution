import Style from "./BlogBlogs.module.scss";
import ArticleCard from "../utils/ArticleCard";
import { SwiperSlide } from "swiper/react";
import LinkBtn from "../utils/Link";
import Icon from "../Layout/Icons";
import { useRouter } from "next/router";
import CommonSlider from "../utils/CommonSlider";
const BlogBlogs = ({ props }) => {
 return (
    <section
    className={`${Style.mx_blog_sec} `}
  >
    <div className="container">
      
      <div className={`  align-items-end  ${Style.head_wrap}`}>
        <div>
          <h2 className="h3">{props?.data?.title}</h2>
        </div>
        {/* <div className={`${Style.ViewAll} col-auto`}>
          <LinkBtn href={`${props?.data?.link?.url}`} className="btn btn-link">
            {props?.data?.link?.title}
          </LinkBtn>
        </div> */}
      </div>

      <div className={`position-relative ${Style.slider_wrap}`}>
        <CommonSlider
          spaceBetween={20}
          className={`${Style.board_swiper} slider`}
          breakpoints={{
            0: {
              spaceBetween: 23,
              slidesPerView: 1.2,
            },
            768: {
              spaceBetween: 30,
              slidesPerView: 2,
            },
            992: {
              spaceBetween: 22,
              slidesPerView: 3,
            },
            1500: {
              spaceBetween: 83,
              slidesPerView: 3,
            },
          }}
        >
          {props?.data?.blogs?.map((blog, i) => {
            return (
              <SwiperSlide key={i}>
                <ArticleCard theme="blog" data={blog} />
              </SwiperSlide>
            );
          })}
        </CommonSlider>
      </div>
    </div>
  </section>
);
 };
export default BlogBlogs;