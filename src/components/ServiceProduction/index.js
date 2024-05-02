import Style from "./ServiceProduction.module.scss";
import Image from "next/image";
import Detailcard from "../utils/Detailcard";

const ServiceProduction = ({ props }) => {
  const parse = require("html-react-parser");

  return (
    <section className={Style.mx_service_production}>
      <div className="container">
        <div className={Style.production_content}>
          <div className="row">
            <h2 className="h4 text-white"><span>5. </span>{parse(`${props?.data?.title}`)}</h2>
            <p className="text-white mb-0">{parse(`${props?.data?.description}`)}</p>
          </div>
        </div>
        <div className={Style.production_card}>
          <div className={`row row-cols-md-2 row-cols-xl-4 ${Style.row_cards}`}>
            {props?.data?.cards?.map((item, i) => {
              return (
                <div key={i}>
                  <Detailcard theme="no_shadow" {...item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={Style.bg}>
        <Image
          src={"/images/banner/service_production.png"}
          fill
          alt="banner image of service production"
          quality={100}
        />
      </div>
    </section>
  );
};
export default ServiceProduction;
