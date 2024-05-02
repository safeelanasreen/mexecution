import Image from "next/image";
import Style from "./ContactCard.module.scss";
import Icon from "../../Layout/Icons";
import { useWindowSize } from "../../../logic/useDimension";
import Link from "next/link";

const ContactCard = (props) => {
  const parse = require("html-react-parser");

  const { width } = useWindowSize();
  return (
    <div className={`${Style.contact_card}`}>
      <div className={Style.contact_card_head}>
        <div className={Style.icon}>
          <Image alt={props?.data?.title} src={props?.data?.img} fill />
        </div>
      </div>
      <div className={Style.contact_card_body}>
        <h4>{props?.data?.title}</h4>
        <address>{parse(`${props?.data?.description}`)}</address>
      </div>
      <div className={Style.contact_card_footer}>
        <a
          href={props?.data?.map_link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${Style.map} stretched-link `}
        >
          Google Map
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
