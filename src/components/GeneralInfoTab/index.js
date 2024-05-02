import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import GeneralinfoSwiper from "../GeneralinfoSwiper";
import Style from "./GeneralInfoTab.module.scss";

const GeneralInfoTab = ({ props }) => {
  return (
    <section className={Style.tab_section}>
      <div className="container">
        <div className={Style.tab_wrap}>
          <Tabs defaultActiveKey="0" transition={false} id="noanim-tab-example">
            {props?.data?.card?.map((item, i) => (
              <Tab eventKey={i} title={item?.title}>
                <GeneralinfoSwiper props={item?.card_data} i={i} />
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};
export default GeneralInfoTab;
