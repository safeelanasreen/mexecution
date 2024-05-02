import Style from "./AboutValue.module.scss";
import Detailcard from "../utils/Detailcard";
import Image from "next/image";
import { useRouter } from "next/router";

const AboutValue = ({ props }) => {
  const router = useRouter();
  const parse = require("html-react-parser");

  return (
    <section className={`${Style.mx_about_value} `}>
      <div className="container">
        <div className={Style.value_wrap}>
          <h2 className="h4 text-white">{props?.data?.title}</h2>
          <p className="text-white">{parse(`${props?.data?.description}`)}</p>
        </div>
        <div
          className={`${Style.value_card} ${props?.data?.data?.length % 2 == 0 ? "" : Style.value_card_odd
            }`}
        >
          <div className="row ">
            {props?.data?.data?.map((item, i) => {
              return (
                <div key={i} className={`col-12 col-md-6 col-lg-4 ${Style.item}`}>
                  <Detailcard {...item} theme="bg_secondary" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={Style.bg}>
        <Image src={"/images/banner/about_value_banner.png"} fill alt="decor" quality={98} />
      </div>
    </section>
  );
};
export default AboutValue;
