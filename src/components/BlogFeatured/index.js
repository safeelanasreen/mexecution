import Style from "./BlogFeatured.module.scss";
import ArticleCard from "../utils/ArticleCard";
const BlogFeatured = ({ props }) => {
  return (
    <section className={Style.mx_blog_featured}>
      <div className="container">
        <div className={Style.blog_featured}>
          <h4 className={`${Style.blog_m_hd} h4`}>{props?.title}</h4>
          <div className={`${Style.blog_feature_row} row`}>
            <div className={`col-lg-6 ${Style.blog_left}`}>
              <ArticleCard type="lg" data={props?.data?.[0]} />
            </div>
            <div className={`${Style.blogs_right} col-lg-6`}>
              {props?.data?.slice(1, 3).map((item, i) => {
                return (
                  <div key={i} className={Style.blog_wrap}>
                    <ArticleCard type="inline" data={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogFeatured;
