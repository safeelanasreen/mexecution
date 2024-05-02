import Image from "next/image";
import Style from "./StateIndustryTab.module.scss";
import { useWindowSize } from "../../logic/useDimension";

const StateIndustryTab = ({ props }) => {
  const parse = require("html-react-parser");

  const { width } = useWindowSize();
  return (
    <div className={`${Style.automotive} d-flex flex-wrap flex-lg-nowrap `}>
      {width >= 992 ? (
        <div className={Style.automotive_img}>
          <figure className="mb-0 ratio">
            <Image src={props?.image} fill alt="car" />
          </figure>
        </div>
      ) : (
        ""
      )}
      <div className={Style.automotive_content}>
        <h4 className={Style.ttl}>{props?.title}</h4>
        <div className={Style.content_p}>
          <p className="state-des">{parse(`${props?.description}`)}</p>
        </div>
        {width <= 991.98 ? (
          <div className={Style.automotive_img}>
            <figure className="mb-0 ratio">
              <Image src={props?.image} fill alt="car" />
            </figure>
          </div>
        ) : (
          ""
        )}

        <div className={`${Style.automotive_details} d-flex  `}>
          {props?.count_cards?.map((item, i) => (
            <div className={Style.automotive_details_item}>
              <div className={Style.count}>
                <h4 className={`${Style.num} text-md-center`}>{item?.count}</h4>
              </div>
              <div className={Style.name}>
                <p className="state-des mb-0 text-md-center">{item?.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={Style.automotive_logo}>
          <div
            className={`${Style.automotive_logo_wrap} d-flex align-items-baseline justify-content-center`}
          >
            {props?.brands?.map((item, i) => (
              <figure className="mb-0" key={i}>
                <Image src={item?.image} alt="logo" width={77} height={45} priority></Image>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default StateIndustryTab;
