import Image from "next/image";
import Link from "next/link";
import Style from "./ServiceExecution.module.scss";
import ExpandingCard from "../utils/ExpandingCard";

const ServiceExecution = ({ props }) => {
  const parse = require("html-react-parser");

  return (
    <section className={Style.mx_service_execution}>
      <div className="container">
        <div className={Style.execution_wrap}>
          <h2 className="h4"><span>3. </span>{props?.data?.title}</h2>
          <div>{parse(props?.data?.description)}</div>
        </div>
        <div className={Style.execution_card_wrapper}>
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 ">
            {props?.data?.cards?.map((item, index) => {
              return (
                <div className="col" key={index}>
                  <ExpandingCard props={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceExecution;
