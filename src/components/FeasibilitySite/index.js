import Style from "./FeasibilitySite.module.scss";
import Link from "next/link";
import Assets from "../Layout/CommonLayout/assets";
import Image from "next/image";
import { useWindowSize } from "../../logic/useDimension";
import feasibilitypage from "../../../pages/api/feasibilitypage";
import SiteCard from "../utils/SiteCard";

const FeasibilitySite = ({ props }) => {
  const parse = require("html-react-parser");

  const { width } = useWindowSize();

  return (
    <section className={Style.site}>
      <div className="container ">
        <div className={`text-center ${Style.site_head}`}>
          <h2>{props?.data?.title}</h2>
          <div>{parse(`${props?.data?.description}`)} </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2  row-cols-xl-4">
          {props?.data?.cards?.map((item, i) => {
            const index = (i + 1).toString().padStart(2, "0");
            return (
              <div className="col" key={i}>
                <SiteCard props={item} index={index} />
              </div>
            );
          })}
        </div>

        {width >= 992 ? (
          <div className={`mt-5 ${Style.btn_wrap}`}>
            <Link href={`${props?.data?.link?.url}`} className="button button-primary">
              <span>{props?.data?.link?.title}</span>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default FeasibilitySite;
