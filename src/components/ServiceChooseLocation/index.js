import Style from "./ServiceChooseLocation.module.scss";
import Image from "next/image";
import Link from "next/link";

const ServiceChooseLocation = ({ props }) => {
  const parse = require("html-react-parser");

  return (
    <section className={Style.mx_service_choose_loc}>
      <div className="container">
        <div className={Style.content_wrap}>
          <div className={`${Style.row1} row`}>
            <div className={`${Style.col_left}`}>
              <h4 className="h4">{props?.data?.bussinessSection?.title}</h4>
              <div className={Style.img}>
                <div className="ratio">
                  <Image
                    src={props?.data?.bussinessSection?.image}
                    alt={props?.data?.bussinessSection?.title}
                    fill
                    quality={98} />
                </div>
              </div>
            </div>
            <div className={`${Style.col_right}`}>
              <div className={`${Style.right_content}`}>
                <p>{parse(`${props?.data?.bussinessSection?.description}`)}</p>

                <div className={Style.choose_list}>
                  <ul>
                    {props?.data?.bussinessSection?.data?.map((item, i) => {
                      return (
                        <li key={i}>
                          <h5 className="h5">{item?.title}</h5>
                          <p>{parse(`${item?.description}`)}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <Link
                  className="button button-sm button-primary"
                  href={`${props?.data?.bussinessSection?.link?.url}`}
                >
                  <span>{props?.data?.bussinessSection?.link?.title}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceChooseLocation;
