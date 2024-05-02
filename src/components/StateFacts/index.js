import Image from "next/image";
import { useState, useEffect } from "react";
import Assets from "../Layout/CommonLayout/assets";
import StateFactcCard from "../utils/StateFactsCard";
import Style from "./StateFacts.module.scss";
import { useWindowSize } from "../../logic/useDimension";
import Icon from "../Layout/Icons";

const StateFacts = ({ props }) => {
  const { width } = useWindowSize();
  const parse = require("html-react-parser");
  const [showAllCards, setShowAllCards] = useState(false);

  const toggleShowAllCards = () => {
    setShowAllCards(!showAllCards);
    document.getElementById("toggle").scrollIntoView({ behavior: "smooth", top: 100 });
  };

  const visibleCards = width<= 767.98 ? (showAllCards ? props?.data?.card : props?.data?.card.slice(0, 2)) : null;
  
  return (
    <section className={`${Style.facts_section} position-relative`}>
      <div className={`${Style.map_img} position-absolute`}>
        <figure className="mb-0 ratio">
          <Image src={Assets.state_map} alt="map" fill />
        </figure>
      </div>
      <div className="container">
        <div className={`row ${Style.wrapper}`}>
          <div className="  col-lg-5 col-xl-6">
            <div className={Style.content_wrap}>
              <h2 className={`${Style.facts_section_ttl} state-ttl`}>{props?.data?.title}</h2>
              <div className={Style.des_wrap}>
                <p className="state-des mb-0">{props?.data?.description} </p>
              </div>
              <ul className={Style.content_wrap_list}>{parse(`${props?.data?.subdescription}`)}</ul>
            </div>
          </div>
          <div
            className={`col-lg-7 col-xl-6 ${Style.responsive_wrap} ${
              showAllCards ? Style.blur : ""
            }`}
          >
            <div className={Style.wrap_outer}>
              <div className={`${Style.cards_wrap} d-flex`} id="toggle">
                {visibleCards?.map((item, index) => {
                  return <StateFactcCard props={item} key={index} />;
                })}

                {width >= 768 &&
                  props?.data?.card?.map((item, index) => {
                    return <StateFactcCard props={item} key={index} />;
                  })}
              </div>
              <div className={Style.cards_wrap_bottom}>
                <button onClick={toggleShowAllCards} className="mb-3">
                  {showAllCards ? (
                    <span className={Style.showless}>
                      <Icon icon="arrow-right1" size={20} />
                    </span>
                  ) : (
                    <span className={Style.showmore}>
                      <Icon icon="arrow-right1" size={20} />
                    </span>
                  )}
                </button>

                <p className="mb-0">{props?.data?.source_text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StateFacts;