import Style from "./FaqBanner.module.scss";
import Image from "next/image";
import Icon from "../Layout/Icons";
import Link from "next/link";
import { useWindowSize } from "../../logic/useDimension";
import Animate from "../Animate";
Animate;
const FaqBanner = ({ props }) => {
  const { width } = useWindowSize();

  return (
    <Animate className={Style.mx_faq_banner}>
      <div className="container">
        <div className={Style.faq_title}>
          <h1 className={`${Style.h1}`}>
            <span>{props?.data?.title}</span>
          </h1>
        </div>

        <div className={Style.bg}>
          <div className={Style.img_circle}>
            {/* <div className="ratio">
              <Image
                src={"/images/banner/industries_bg.png"}
                fill
                alt="decor"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div> */}
          </div>
        </div>
      </div>
      {width >= 992 ? (
        <a href={`mailto:${props?.data?.email}`} className={Style.mail_us}>
          <Icon icon="mail" size={25} />
        </a>
      ) : (
        ""
      )}
      {width >= 992 ? (
        <a href={`tel:${props?.data?.phone}`} className={Style.call_us}>
          <Icon icon="call" size={25} />
        </a>
      ) : (
        ""
      )}
    </Animate>
  );
};
export default FaqBanner;
