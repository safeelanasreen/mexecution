import Style from "./SupplierDistributorCard.module.scss";
import Icon from "../../Layout/Icons";
import React from "react";
import Image from "next/image";
import Assets from "../../Layout/CommonLayout/assets";

const SupplierDistributorCard = ({ props }) => {
  const parse = require("html-react-parser");

  return (
    <>
      <div className={Style.supplier_distributor_card}>
        <figure className={`${Style.supplier_distributor_card_icon} ratio mb-4 mb-lg-2`}>
          <Image src={props?.img} fill  alt={props?.title}/>
        </figure>
        <div className={Style.supplier_distributor_card_data}>
          <h4 className={`${Style.card_count} mb-1`}>{props?.title}</h4>
          <p className={`${Style.card_ttl} mb-0 fw-medium`}>{parse(props?.description)}</p>
        </div>
      </div>
    </>
  );
};

export default SupplierDistributorCard;
