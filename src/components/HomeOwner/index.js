import Image from "next/image";
import Link from "next/link";
import Assets from "../Layout/CommonLayout/assets";
import Style from "./HomeOwner.module.scss";
import { useWindowSize } from "../../logic/useDimension";
const HomeOwner = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();

  return (
    <section className={Style.imagecomponent}>
      <div className={`${width <= 992 ? "container" : ""}`}>

        <div className={`${Style.logo_component} d-none d-lg-block`}>
          <figure className=" mb-0 ratio">
            <Image src={Assets.logo_image} fill alt="logo"></Image>
          </figure>
        </div>
        <div className={`${Style.wrap} row`}>
          <div className="col-lg-6 d-flex align-items-center mb-4 mb-lg-0">
            <div className={`${Style.left_content}`}>
              <figure className="mb-0 ratio position-relative">
                <Image
                  src={props?.data?.owner?.img}
                  fill
                  quality={100}
                  alt="hand-shake"
                />
              </figure>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className={Style.right_content}>
              <div className={Style.content}>
                <div className={Style.ttl_wrap}>
                  <h2 className={`${Style.right_content_ttl} text-white h3 mb-0`}>
                    {props?.data?.title}
                  </h2>
                </div>
                <div className={`${Style.list_wrap} list-star`}>
                  <h4 className={`h4 text-white  ${Style.list_ttl} `}>{props?.data?.titleSub}</h4>
                  <div className="text-white list-star">{parse(props?.data?.description)}</div>

                </div>
                <div className={`${Style.btn_wrap} d-flex flex-wrap row-gap-2`}>

                  <a
                    href={`tel:${props?.data?.owner?.meet?.url}`}
                    className="button"
                  >
                    {props?.data?.owner?.meet?.title}
                  </a>

                  <a
                    href={`mailto:${props?.data?.owner?.email?.url}`}
                    className="button"
                  >
                    {props?.data?.owner?.email?.title}
                  </a>


                </div>
                <div className={`${Style.sm_logo_component} d-lg-none`}>
                  <figure className=" mb-0 ratio">
                    <Image src={Assets.logo_image} fill alt="logo"></Image>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOwner;