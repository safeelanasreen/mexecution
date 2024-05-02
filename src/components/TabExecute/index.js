import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Style from "./TabExecute.module.scss";
import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";
const TabExecute = ({ props }) => {
  const parse = require("html-react-parser");

  return (
    <section className={Style.section}>
      <div className="container">
        <div className={`${Style.head_wrap} text-center `}>
          <h2 className="title"><span>2. </span>{props?.data?.title}</h2>
          <div>{parse(props?.data?.description)}</div>
        </div>
        <Tabs
          defaultActiveKey="0"
          id="requirement-catalog-tab"
          className={Style.tab}
          variant="pills"
        >
          {props?.data?.tabs?.map((item, index) => {
            return (
              <Tab eventKey={`${index}`} title={item?.category}>
                <div className={`row ${Style.row_main}`}>
                  <div className={`${Style.col_left} col-12`}>
                    <div className={`${Style.img} ratio`}>
                      <Image src={item?.img} fill alt="cover" quality={98}/>
                    </div>
                  </div>
                  <div className={`${Style.col_right} col-12`}>
                    <div className={Style.content_wrap}>
                      <h3 className={Style.title}>{item?.title}</h3>
                      <div className={Style.content}>
                        {parse(`${item?.description}`)}
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            );
          })}

          {/* <Tab eventKey="contact" title="Qualified employees">
            3
          </Tab>
          <Tab eventKey="contact" title="Government Incentives & Regulations">
            4
          </Tab> */}
        </Tabs>
      </div>
      <div className={Style.ring_bg}>
        <div className={Style.im}>
          <div className="ratio">
            <Image src={"/images/banner/ring_bg.png"} fill alt="decor" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default TabExecute;
