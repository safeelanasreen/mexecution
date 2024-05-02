import Image from "next/image";
import { useState } from "react";
import Icon from "../../Layout/Icons";
import Style from "./ExpandingCard.module.scss";
import { useRouter } from "next/router";


const ExpandingCard = ({ props }) => {
  const parse = require("html-react-parser");
  const [showMore, setShowMore] = useState(false);
  const router = useRouter();

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className={`${Style.expanding_card} ${router.asPath === "/project-management" ? Style.add_on : ""}`}>
      <div className={Style.expanding_card_image}>
        <div className={`${Style.img} ratio`}>
          <Image src={props?.img} fill alt="banner image" />
        </div>
      </div>
      <div className={Style.expanding_card_info}>
        <h4 className="h4">{props?.title}</h4>
        <div
          className={`text ${showMore ? "expand" : ""} ${Style.description}`}
        >
          {parse(
            !isReadMore
              ? `${props?.description?.slice(0, 95)}${props?.description.length > 95 ? "..." : ""}`
              : props?.description
          )}        </div>
      </div>
      <div className={Style.expanding_card_footer}>
        <button onClick={toggleReadMore}>
          {isReadMore ? (
            <>
              {" "}
              <span>-</span>View less
            </>
          ) : (
            <>
              {" "}
              <span>+</span>View more
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ExpandingCard;
