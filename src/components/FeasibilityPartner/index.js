import Style from "./FeasibilityPartner.module.scss";
import Link from "next/link";
import Assets from "../Layout/CommonLayout/assets";
import Image from "next/image";

const FeasibilityPartner = ({ props }) => {
  const parse = require("html-react-parser");

  return (
    <section className={Style.partner}>
      <div className="container position-relative">
        <div className={`row ${Style.partner_row}`}>
          <div className={`${Style.left} col-lg-6`}>
            <div className={Style.partner_content}>
              <h2 className="h2">{props?.data?.title}</h2>
              <p>{parse(`${props?.data?.description}`)} </p>
              <Link href={`${props?.data?.link?.url}`} className="button button-primary">
                <span>{props?.data?.link?.title}</span>
              </Link>
            </div>
          </div>
          <div className={`${Style.right} col-lg-6`}>
            <div className={Style.partner_img}>
              <figure className={`ratio mb-0 ${Style.partner_img_border}`}>
                <Image
                  src={Assets.feasibility_mobile_border}
                  className={Style.border_img}
                  width={344}
                  height={688}
                  alt="mobile"
                  quality={98}
                />
                
                <Image src={props?.data?.img} fill alt="mobile" className={Style.mobile_content} quality={98} />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.bg}>
        <div className={Style.img}>
          <div className="ratio">
            <Image src={"/images/banner/ray_bg.png"} fill alt="decor"  quality={98}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeasibilityPartner;
