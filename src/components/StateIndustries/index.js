import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useWindowSize } from "../../logic/useDimension";
import ImageCircle from "../utils/ImageCircle";
import IndustryCard from "../utils/IndustryCard";
import StateIndustryTab from "../StateIndustryTab";
import Style from "./StateIndustries.module.scss";

const StateIndustries = ({ props }) => {
  const { width } = useWindowSize();

  return (
    <section className={Style.industries}>
      <div className="container">
        <h4 className="state-ttl-2 text-center mb-3">{props?.data?.title}</h4>
        <div className={Style.industries_desc}>
          <p className="state-des mb-0">{props?.data?.description}</p>
        </div>
        {width >= 768 ? (
          <Tabs defaultActiveKey={0} id="state-tab" className="flex-nowrap">
            {props?.data?.industry?.map((data, index) => (
              <Tab eventKey={index} title={<ImageCircle props={data} />}>
                <StateIndustryTab props={data} />
              </Tab>
            ))}
          </Tabs>
        ) : (
          <Tabs defaultActiveKey={0} id="state-tab" className="flex-nowrap">
            {props?.data?.industry?.map((data, index) => (
              <Tab eventKey={index} title={data?.title}>
                <StateIndustryTab props={data} />
              </Tab>
            ))}
          </Tabs>
        )}
        {/* 
        {width >= 768 ? (
          <Tabs defaultActiveKey={0} id="state-tab" className="flex-nowrap">
            {props?.data?.industry?.map((data, index) => (
              <Tab eventKey={index} title={<ImageCircle props={data} />}>
                <StateIndustryTab props={data} />
              </Tab>
            ))}
          </Tabs>
        ) : (
          ""
        )} */}

        <div className={Style.other_industries}>
          <div className={Style.other_industries_ttl}>
            <h4 className={Style.ttl}>{props?.data?.other_industries_title}</h4>
          </div>
          <div className={`${Style.industrycard_wrap} row flex-nowrap`}>
            {props?.data?.industry_popup_cards?.map((item, i) => (
              <div className={`${Style.industry_card_item} col-md-3`} key={i}>
                <IndustryCard props={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default StateIndustries;
