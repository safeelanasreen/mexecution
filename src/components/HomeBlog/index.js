import ArticleCard from "../utils/ArticleCard";
import { SwiperSlide } from "swiper/react";
import LinkBtn from "../utils/Link";
import Style from "./HomeBlog.module.scss";
import Icon from "../Layout/Icons";
import { useRouter } from "next/router";
import CommonSlider from "../utils/CommonSlider";
import Animate from "../Animate";
Animate
const HomeBlog = ({ props }) => {
  const router = useRouter();

  return (
    <Animate
      className={`${Style.mx_blog_sec} ${router.pathname === "/" ? Style.bg_light : ""} `}
    >
      <div className="container">
        <div className={`  align-items-end  ${Style.head_wrap}`}>
          <div>
            <h2 className="h3 fade-up">{props?.data?.title}</h2>
          </div>
          <div className={`${Style.ViewAll} col-auto fade-up d1`}>
            <LinkBtn href={`${props?.data?.link?.url}`} className="btn btn-link">
              {props?.data?.link?.title}
            </LinkBtn>
          </div>
        </div>

        <div className={`position-relative fade-up d1 ${Style.slider_wrap}`}>
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
    </Animate>
  );
};

export default HomeBlog;
