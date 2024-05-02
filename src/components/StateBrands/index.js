import Image from "next/image";
import Style from "./StateBrands.module.scss";

const StateBrands = ({ props }) => {
  return (
    <section className={Style.brands}>
      <div className="container">
        <div className={Style.brands_ttl_wrap}>
          <h4 className={`${Style.brands_mainttl} state-ttl text-center`}>{props?.data?.title}</h4>
          <p className="state-des text-center mb-0">{props?.data?.subtitle}</p>
        </div>
        <div className={`${Style.logo_wrap} d-flex  flex-wrap`}>
          {props?.data?.brands?.map((item, index) => (
            <div className={Style.figure_wrap} key={index}>
              <figure className="mb-0">
                <Image src={item?.image} width={85} height={85} alt="volvo-logo" priority />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StateBrands;
