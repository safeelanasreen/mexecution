import Style from "./AboutOverview.module.scss";

const AboutOverview = ({ props }) => {
  const parse = require("html-react-parser");

  return (
    <section className={Style.mx_about_overview}>
      <div className="container">
        <div className={Style.overview_wrapper}>
          <h2 className={`${Style.overview_head} h4`}>{props?.data?.title}</h2>
          <p>{parse(props?.data?.description)}</p>
        </div>
        <div className={Style.statics_content}>
          <div className={`${Style.static_row } row row-cols-2 row-cols-md-4`}>
            {props?.data?.stat?.map((item, key) => {
              return (
                <div className={`${Style.statics}`} key={key}>
                  <div className={Style.statics_item}>
                    <span>{parse(`${item?.count}`)}</span>
                    <p>{parse(`${item?.label}`)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutOverview;
