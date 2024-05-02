import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import Assets from "../Layout/CommonLayout/assets";
import Detailcard from "../utils/Detailcard";
import Style from "./ImageListWidget.module.scss";

const ImageListWidget = ({ props }) => {
  const parse = require("html-react-parser");

  const middleIndex = Math?.floor(props?.data?.cards?.length / 2);
  const firstHalf = props?.data?.cards?.slice(0, middleIndex);
  const secondHalf = props?.data?.cards?.slice(middleIndex);

  return (
    <section className={`${Style.section}`}>
      <div className="">
        <div className={`row ${Style.row_main}`}>
          <div className={`${Style.col_left} col-12`}>
            <div className={`${Style.img} ratio`}>
              <Image src={props?.data?.img} fill alt="cover" />
            </div>
          </div>
          <div className={`${Style.col_right} col-12`}>
            <div className={Style.content_wrap}>
              <h3 className={Style.title}>{props?.data?.title}</h3>
              <div className={Style.content}>{parse(`${props?.data?.description}`)}</div>
            </div>
          </div>
        </div>

        {props?.data?.accordion === true ? (
          <Accordion
            defaultActiveKey={"0"}
            className={`accordion-rounded row row-cols-lg-${props?.data?.columns}`}
          >
            <div className="col-lg-6">
              {firstHalf?.map((item, i) => {
                return (
                  <Accordion.Item eventKey={`${i}`} key={i}>
                    <Accordion.Header>{item?.title}</Accordion.Header>
                    <Accordion.Body>{parse(`${item?.description}`)}</Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </div>
            <div className="col-lg-6">
              {secondHalf?.map((item, i) => {
                return (
                  <Accordion.Item eventKey={`${i}-tab`} key={i}>
                    <Accordion.Header>{item?.title}</Accordion.Header>
                    <Accordion.Body>{parse(`${item?.description}`)}</Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </div>
          </Accordion>
        ) : (
          <div className={`${Style.row}  row row-cols-sm-2 row-cols-lg-3 row-cols-xl-${props?.data?.columns}`}>
            
            {props?.data?.cards?.map((item, i) => {
              return (
                <div key={i}>
                  <Detailcard theme={"secondary"} {...item} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageListWidget;
