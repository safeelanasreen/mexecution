import Style from "./AboutVision.module.scss";
import Image from "next/image";
import Detailcard from "../utils/Detailcard";
import { useWindowSize } from "../../logic/useDimension";


const AboutVision = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();

  return (
    <section className={Style.mx_about_vision}>
      <div className="container">
        <div className={`${Style.vision_row} row`}>
          <div className={Style.col_left}>
            <div className={Style.mision}>
              {width <= 992 ? <h2 className="h4">{props?.data?.mission?.title}</h2>
                : ""}
              <div className={`${Style.mision_img} ratio`}>
                <Image src={"/images/banner/mision.png"} fill alt="mission cover image" quality={90} />
              </div>
              {width >= 992 ? <h2 className="h4">{props?.data?.mission?.title}</h2>
                : ""}            
                  <p>{parse(`${props?.data?.mission?.description}`)}</p>
            </div>
          </div>
          <div className={Style.col_right}>
            <div className={Style.vision}>
              <h2 className="h2">{props?.data?.vision?.title}</h2>
              <p>{parse(`${props?.data?.vision?.description}`)}</p>
            </div>
            <div className={Style.vision_card}>
              <div className="row row-cols-1 row-cols-md-2  ">
                {props?.data?.vision?.data?.map((item, i) => {
                  return (
                    <div key={i} className="col">
                      <Detailcard {...item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.bg}>
        <Image src={"/images/banner/About_vision_bg.png"} fill alt="decor" />
      </div>
    </section>
  );
};
export default AboutVision;
