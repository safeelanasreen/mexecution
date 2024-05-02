import Style from "./ContactBranch.module.scss";
import Image from "next/image";
import ContactCard from "../utils/ContactCard";
import { useWindowSize } from "../../logic/useDimension";

const ContactBranch = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();

  return (
    <section className={Style.mx_contact_branch}>
      <div className="container">
        <div className={Style.branch_wrapper}>
          <div className={`${Style.branch_row} row`}>
            <div className={Style.col_left}>
              <h2 className="h2">{parse(`${props?.data?.title}`)}</h2>
              <p>{parse(`${props?.data?.description}`)}</p>
            </div>
            <div className={Style.col_right}>
              <h4 className="h4">Our Branches</h4>

              <div className={Style.branch_card}>
                <div className="row row-cols-1 row-cols-md-2 ">
                  {props?.data?.card?.map((data, i) => {
                    return (
                      <div className={`${Style.card_wrap} col`} key={i}>
                        <ContactCard data={data} />
                        {width <= 992 ? (
                          <div className={Style.map_wrap}>
                            <iframe
                              src={data?.mobile_map_link}
                              allowfullscreen=""
                              loading="lazy"
                              referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.bg}>
        <div className={Style.img}>
          <div className="ratio">
            <Image src={"/images/banner/partner_bg_rect.png"} fill alt="decor" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactBranch;
