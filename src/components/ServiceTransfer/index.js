import Style from "./ServiceTransfer.module.scss";
import Detailcard from "../utils/Detailcard";
import IncoItem from "../utils/IncoItem";
import Image from "next/image";
import Animate from "../Animate";
import { useWindowSize } from "../../logic/useDimension";

const ServiceTransfer = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();

  return (
    <section className={Style.mx_service_transfer}>
      <div className="container">
        <div className={Style.transfer_content}>
          <h2 className="h4"><span>4. </span> {props?.data?.title}</h2>
          <div>{parse(props?.data?.description)}</div>
        </div>
        <div className={Style.transfer_card}>
          <div className="row row-cols-1 row-cols-md-2">
            {props?.data?.cards?.map((item, i) => {
              return (
                <div key={i} className="col">
                  <Detailcard theme="transfer_card" {...item} />
                </div>
              );
            })}
          </div>
        </div>

        <div className={Style.service_enco_wrap}>
          <Animate className={Style.serviceEncoterm}>
            <h3 className="h2 text-center">Incoterms</h3>
            <div className={Style.wrap}>
              <div className={Style.wrap_inner}>
                <div className={`${Style.process_card_wrap} row row-cols-auto`}>
                  <div className={Style.process_card}>
                    <div className={Style.process_card_icon}>
                      <Image alt="icon" src="/images/icon/factory_icon.svg" fill />
                    </div>
                    <p>Factory</p>
                  </div>
                  <div className={Style.process_card}>
                    <div className={Style.process_card_icon}>
                      <Image alt="icon" src="/images/icon/truck_icon.svg" fill />
                    </div>
                    <p>First Carrier</p>
                  </div>
                  <div className={Style.process_card}>
                    <div className={Style.process_card_icon}>
                      <Image alt="icon" src="/images/icon/ship_container.svg" fill />
                    </div>
                    <p>Alongside ship</p>
                  </div>
                  <div className={Style.process_card}>
                    <div className={Style.process_card_icon}>
                      <Image  alt="icon" src="/images/icon/onboard_icon.svg" fill />
                    </div>
                    <p>
                      On
                      <br />
                      Board
                    </p>
                  </div>
                  <div className={`${Style.process_card} ${Style.card_center}`}>
                    <div className={Style.process_card_icon}>
                      <Image alt="icon" src="/images/icon/shipment_icon.svg" fill />
                    </div>
                  </div>
                  <div className={Style.process_card}>
                    <div className={Style.process_card_icon}>
                      <Image alt="icon" src="/images/icon/onArrival.svg" fill />
                    </div>
                    <p>
                      On
                      <br />
                      Arrival
                    </p>
                  </div>
                  <div className={Style.process_card}>
                    <div className={Style.process_card_icon}>
                      <Image alt="icon" src="/images/icon/factory_icon.svg" fill />
                    </div>
                    <p>Alongside Ship</p>
                  </div>
                  <div className={Style.process_card}>
                    <div className={Style.process_card_icon}>
                      <Image  alt="icon" src="/images/icon/Destination_icon.svg" fill />
                    </div>
                    <p>Destination Place</p>
                  </div>
                  <div className={Style.process_card}>
                    <div className={Style.process_card_icon}>
                      <Image alt="icon" src="/images/icon/warehouse_icon.svg" fill />
                    </div>
                    <p>Buyers warehouse</p>
                  </div>
                </div>
                <div className={Style.incoterm_wrap}>
                  <IncoItem
                    label="EXW"
                    transferPos="10%"
                    riskPos="10%"
                    sellerPos="16%"
                    seller="EX WORKS"
                    buyer="AGREED place"
                  />
                  <IncoItem
                    label="FCA"
                    transferPos="17%"
                    riskPos="17%"
                    sellerPos="9%"
                    seller="FREE CARRIER"
                    buyer="AGREED place"
                  />
                  <IncoItem
                    label="FAS"
                    transferPos="26%"
                    riskPos="26%"
                    sellerPos="6%"
                    seller="FREE ALONGSIDE SHIP"
                    buyer="Port of shipment"
                  />
                  <IncoItem
                    label="FOB"
                    transferPos="36%"
                    riskPos="36%"
                    sellerPos="65%"
                    seller="FREE on board"
                    buyer="Port of shipment"
                  />
                  <IncoItem
                    label="CFR"
                    transferPos="48%"
                    riskPos="36%"
                    sellerPos="47%"
                    seller="COST & FREIGHT"
                    buyer="Port of destination"
                  />
                  <IncoItem
                    label="CIF"
                    transferPos="48%"
                    riskPos="36%"
                    sellerPos="31%"
                    seller="COST, INSURANCE & FREIGHT"
                    buyer="Port of destination"
                  />
                  <IncoItem
                    label="CTP"
                    transferPos="73%"
                    riskPos=""
                    sellerPos="85%"
                    seller="Cost paid to"
                    buyer="Port of destination"
                  />
                  <IncoItem
                    label="CIP"
                    transferPos="73%"
                    riskPos=""
                    sellerPos="73%"
                    seller="Carrier &i nsurance paid to"
                    buyer="Port of destination"
                  />
                  <IncoItem
                    label="DAT"
                    transferPos="73%"
                    riskPos="73%"
                    sellerPos="79%"
                    seller="Delivery at terminal"
                    buyer="PLACE of destination"
                  />
                  <IncoItem
                    label="DAP"
                    transferPos="78.5%"
                    riskPos="78.5%"
                    riskPosAlt="73%"
                    sellerPos="76%"
                    seller="Delivery at place"
                    buyer="PLACE of destination"
                  />
                  <IncoItem
                    label="DDP"
                    transferPos="78.5%"
                    riskPos="78.5%"
                    sellerPos="75%"
                    seller="Delivery duty paid"
                    buyer="DESTINATION"
                  />
                  <div
                    className={Style.risk_line}
                    style={{ left: `${width >= 1600 ? "15.3%" : "16.4%"}` }}
                  ></div>
                  <div
                    className={Style.risk_line}
                    style={{ left: `${width >= 1600 ? "22.3%" : "23.4%"}` }}
                  ></div>
                  <div
                    className={Style.risk_line}
                    style={{ left: `${width >= 1600 ? "31.3%" : "32.4%"}` }}
                  ></div>
                  <div
                    className={Style.risk_line}
                    style={{ left: `${width >= 1600 ? "41.4%" : "42.4%"}` }}
                  ></div>
                  <div
                    className={Style.risk_line}
                    style={{ left: `${width >= 1600 ? "53.2%" : "54.4%"}` }}
                  ></div>
                  <div
                    className={Style.risk_line}
                    style={{ left: `${width >= 1600 ? "78.3%" : "79.4%"}` }}
                  ></div>
                  <div
                    className={Style.risk_line}
                    style={{ left: `${width >= 1600 ? "83.85%" : "84.9%"}` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className={Style.item_info}>
              <div className="row row-cols-auto">
                <div className={`${Style.seller_info} col`}>
                  <div className={Style.seller}></div>
                  <h5 className="h5">Seller</h5>
                </div>
                <div className={`${Style.buyer_info} col`}>
                  <div className={Style.buyer}></div>
                  <h5 className="h5">Buyer</h5>
                </div>
                <div className={`${Style.risk_info} col`}>
                  <div className={Style.risk_label}>
                    <span>!</span>
                  </div>
                  <h5 className="h5">Risk Transfer</h5>
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default ServiceTransfer;
