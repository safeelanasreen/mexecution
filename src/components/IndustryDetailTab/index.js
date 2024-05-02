import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, FreeMode } from "swiper";
import CommonSlider from "../utils/CommonSlider";
import Style from "./IndustryDetailTab.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useWindowSize } from "../../logic/useDimension";

const IndustryDetailTab = ({ props }) => {
  const parse = require("html-react-parser");
  const [activePath, setactivePath] = useState(0);
  const router = useRouter();
  const pathId = router?.query?.value;
  const { width } = useWindowSize();

  const selectedItem = props?.data?.tabs?.find((item) => item.id === Number(pathId));

  useEffect(() => {
    if (selectedItem) {
      setactivePath(selectedItem?.id);
      document.getElementById("scroll_id_industry").scrollIntoView(true);
    }
  }, [pathId]);

  return (
    <section className={Style.mx_industry_tab} id="scroll_id_industry">
      <Tab.Container id="industry-tab" defaultActiveKey={0} activeKey={activePath}>
        <section className={Style.nav_wrap}>
          <div className="container">
            <Nav variant="pills">
              <CommonSlider
                pagination={true}
                slidesPerView={"auto"}
                freeMode={true}
                spaceBetween={48}
                modules={[FreeMode, Navigation]}
                className={`${Style.project_card_swiper} w-100 slider`}
              >
                {props?.data?.tabs?.map((item, i) => {
                  return (
                    <>
                      <SwiperSlide className="w-auto">
                        <Nav.Item className={Style.nav_item} key={selectedItem ? item?.id : i}>
                          <Nav.Link
                            eventKey={`${selectedItem ? item?.id : i}`}
                            onClick={() => setactivePath(selectedItem ? item?.id : i)}
                          >
                            <div className={Style.nav_icon}>
                              <Image src={item?.icon} fill alt={item?.title} quality={90} />
                            </div>
                            <h6 className={`${Style.nav_content} h6`}>{item?.nav_title}</h6>
                          </Nav.Link>
                        </Nav.Item>
                      </SwiperSlide>
                    </>
                  );
                })}
              </CommonSlider>
            </Nav>
          </div>
        </section>

        <Tab.Content>
          {props?.data?.tabs?.map((item, i) => {
            return (
              <Tab.Pane
                key={selectedItem ? item?.id : i}
                eventKey={`${selectedItem ? item?.id : i}`}
                className={Style.tab_item}
              >
                <div className="container">
                  <div className={Style.contenyt_wrap}>
                    <div className={`row ${Style.industry_disc} ${Style.row_content}`}>
                      <div className={`col-12 ${Style.img_wrapper}`}>
                        <div className="ratio">
                          <Image src={item?.img} fill alt={item?.title} quality={90} />
                        </div>
                      </div>
                      <div className={`col-12 ${Style.industry_description}`}>
                        <h2 className={`${Style.tab_head} h3`}>{item?.title}</h2>
                        <div className={`${Style.tab_description} `}>
                          {parse(`${item?.description}`)}
                        </div>
                      </div>
                    </div>
                    <div className={`${Style.industry_detail}`}>
                      <div className={`${Style.tab_description} `}>{parse(`${item?.detail}`)}</div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            );
          })}
        </Tab.Content>
      </Tab.Container>
    </section>
  );
};
export default IndustryDetailTab;
