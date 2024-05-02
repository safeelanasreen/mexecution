import Style from "./Detailcard.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Icon from "../../Layout/Icons";

const Detailcard = ({ title, description, img, theme }) => {
  const router = useRouter();
  const parse = require("html-react-parser");
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div
      className={`${Style.detail_card} ${
        theme === "bg_secondary" ? Style.detail_card_secondary : ""
      } ${theme === "transfer_card" ? Style.detail_card_transfer : ""} ${
        theme === "supplier_card" ? Style.detail_card_supplier : ""
      } ${theme === "supplier_tab" ? Style.detail_card_supplier_tab : ""} ${
        theme === "no_shadow" ? Style.detail_card_tertiary : ""
      } ${router.asPath == "/about-us" ? Style.about_theme : ""} ${
        router.asPath == "/feasibility" ? Style.feasibility_theme : ""
      }
        ${router.asPath == "/project-management" ? Style.project_card : ""}`}
    >
      <div className={Style.detail_card_icon}>
        <div className={Style.icon}>
          <Image src={img} fill  alt={title}/>
        </div>
      </div>
      <div className={Style.detail_card_info}>
        <h4>{title}</h4>
        <p>
          {parse(
            !isReadMore
              ? `${description?.slice(0, 120)}${description?.length > 120 ? "..." : ""}`
              : description
          )}

          {description?.length > 120 && (
            <span onClick={toggleReadMore} className="btn btn-link link">
              {`${isReadMore ? " Read Less" : "Read More"}`}
              <span className="link-anim">
                <Icon icon="arrow-right1" size={13} />
              </span>
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Detailcard;
